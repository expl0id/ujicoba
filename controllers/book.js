const Book = require('../models/book');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

//create
module.exports.createBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
        if (error){
          res.sendStatus(403);
        } else {
          if(authData['level'] == "staff"){
          
            let values ={
                title : req.body.title,
                genre : req.body.genre,
                author : req.body.author,
                price : req.body.price,
                descriptions : req.body.descriptions,
                condition : req.body.condition,
            }
            Book
            .create(values)
            .then((book) => {
                res.json(book);
            })
            .catch((error) => {
                console.log("error");
            })  
        }
        }
    })
}

//update
module.exports.updateBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
        if (error){
          res.sendStatus(403);
        } else {
          if(authData['level'] == "staff"){
          
    let values ={
        title : req.body.title,
        genre : req.body.genre,
        author : req.body.author,
        price : req.body.price,
        descriptions : req.body.descriptions,
        condition : req.body.condition,
    }
    let condition ={
        where : {
            id : req.params.id
        }
    }
    Book
    .update(values, condition)
    .then((book) => {
        res.json(book);
    })
    .catch((error) => {
        console.log("error");
    })
}  

}
})
}

//delete
module.exports.deleteBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
        if (error){
          res.sendStatus(403);
        } else {
          if(authData['level'] == "staff"){
          

    let condition ={
        where : {
            id : req.params.id
        }
    }
    Book
    .destroy(condition)
    .then((book) => {
        res.json(book);
    })
    .catch((error) => {
        console.log("error");
    })  
}
}
})
}
//callAll
module.exports.seeAllBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
        if (error){
          res.sendStatus(403);
        } else {
          if(authData['level'] == "costumer"){

          
    Book
        .findAll({
            attributes : ['title', 'genre', 'author', 'descriptions', 'price', 'condition']
        })
        .then((book) => {
            res.json(book);
        })
        .catch((error) => {
            console.log("error");
        })  
    
    }
}
    })
    }
    

//see by id
module.exports.seeBookById = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
        if (error){
          res.sendStatus(403);
        } else {
          if(authData['level'] == "costumer"){
    Book
        .findOne({
            where : {
                id : req.params.id
            }
        })
        .then((book) => {
            res.json(book);
        })
        .catch((error) => {
            console.log("error");
        })  
    
    }
}
    })
    }

module.exports.seeBookByName = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
        if (error){
          res.sendStatus(403);
        } else {
          if(authData['level'] == "costumer"){
    Book
    .findAll({
        where: {
            title : req.body.title
        }
    }) 
    .then((book) => {
        res.json(book);
    })
    .catch((error) => {
        console.log("error");
    })  
    
    }
}
})
}
