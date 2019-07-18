const Orders = require('../models/orders');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports.createOrders = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
        if (error){
          res.sendStatus(403);
        } else {
          if(authData['level'] == "costumer"){
          
            let values ={
                bookTitle:req.body.bookTitle,
                orderDate: req.body.orderDate,
                quantity: req.body.quantity,
                total: req.body.total
            }
            Orders
            .create(values)
            .then((orders) => {
                res.json(orders);
            })
            .catch((error) => {
                console.log("error");
            })  
        }
        }
    })
}
