import Product from '../models/product.model.js';
 
export const getAllProducts = async (req,res) => {

    try {
        const products = await Product.find({});
        res.status(200).json({ sucess: true, data: products });
    } catch (error) {
        console.error("Erro ao buscar produto:", error.message)
        res.status(500).json({ sucess: false, message: "Erro de servidor"})

    }

}

export const getProduct = async (req,res) => {
    const {id} = req.params;

    try {
        const product = await Product.findById(id);
        res.status(200).json({ sucess: true, data: product });
    } catch (error) {
        console.error(`Erro ao buscar produto ${id} :`, error.message)
        res.status(500).json({ sucess: false, message: "Erro de servidor"})

    }

}

export const createProduct = async (req,res) => {
    const product = req.body; // user envia o dado
    
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ sucess: false, message: "Por favor, preencha todos os campos" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({sucess: true, data: newProduct});
    } catch (error) {
        console.error("Erro ao criar produto:", error.message)
        res.status(500).json({ sucess: false, message: "Erro de servidor"})
    }

}

export const updateProduct = async (req,res) => {
    const {id} = req.params;

    const product = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ sucess: false, message: `Produto ${id} não encontrado`})
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({sucess: true, message: `dados do produto ${id} atualizado: ${updatedProduct}` });
    } catch (error) {
        console.error("Erro ao atualizar dados do produto:", error.message)
        res.status(500).json({ sucess: false, message: "Erro de servidor"})
    }

}

export const deleteProduct = async (req,res) => {
    const {id} = req.params; // pegar id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ sucess: false, message: `Produto ${id} não encontrado`})
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({sucess: true, message: `Produto de id ${id} deletado` });
    } catch (error) {
        console.error("Erro ao deletar produto:", error.message)
        res.status(500).json({ sucess: false, message: "Erro de servidor"})
    }

} 