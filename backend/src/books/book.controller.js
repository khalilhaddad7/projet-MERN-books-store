const book = require("./book.model")

const postedbook = async (req,res)=>{
    try{
        const newbook = await book({...req.body})
        await newbook.save();
        res.status(200).send({message: "book posted successfuly",book:newbook})
    }catch(error){
       console.log("error posted book",error)
       res.status(500).send({message: "Failed to created book"})

    }

}

const getallbooks = async (req,res)=>{
    try{
       const books = await book.find().sort({createdAt:-1});
       res.status(200).send({message:"get all books successfuly",books})
    }catch(error){
        console.log("error fetching book",error)
        res.status(500).send({message: "Failed to fetch books"})

    }
}

const deletebook = async(req,res)=>{
    try{
        const { id } = req.params; // Récupérer l'ID depuis l'URL
        const deletebook = await book.findByIdAndDelete(id)
        if (!deletebook) {
            return res.status(404).send({ message: "Book not found" });
        }
           res.status(200).send({message:"book deleted successfuly",deletebook}) 
    }catch(error){
        console.log("error delete book",error)
        res.status(500).send({message: "Failed to delete books"})
    }
}

const getSingleBook = async (req,res)=>{
    try{
        const { id } = req.params; // Récupérer l'ID depuis l'URL
        const getAbook = await book.findById(id)
        if(!getAbook){
            res.status(404).send({message:"book not found"})
        }
        res.status(200).send({message:"get a single book with success",getAbook})
    }catch(error){
        console.log("error get single book",error)
        res.status(500).send({message: "Failed to get single books"})
    }
}

const updateBook = async (req,res)=>{
    try{
        const {id} = req.params;
        const updBook = await book.findByIdAndUpdate(id, req.body, {new: true})
        if(!updBook){
            res.status(404).send({message:"book not found"})
        }
        res.status(200).send({message:"update a book with success",updBook})
    }catch(error){
        console.log("error update a book",error)
        res.status(500).send({message: "Failed to update a books"})
    }
}
module.exports = {postedbook,getallbooks,deletebook,getSingleBook,updateBook};