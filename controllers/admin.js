const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const Admins = require('../models/admin');

module.exports.postRegister = (req,res) =>{
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    Admins.findOrCreate({
      where:{
          username: req.body.username,
      },
      defaults: {
          name : req.body.name,
          username: req.body.username,
          password : hash,
          level: req.body.level
      }
    }).then((admins) => {
      res.json(admins);
    }).catch((error)=>{
      console.log(error);
    });
}

//login
module.exports.postLogin = (req, res) =>{
    Admins.findOne({
      where: {
        username : req.body.username
      }
    }).then((admins) => {
      if(!admins) {
        res.status(400).send('username not found');
      }

      bcrypt.compare(req.body.password, admins.get('password'),function (err, isMatch){
        if(err) {
          res.status(400).send('Password Error');
        };

        if(isMatch) {
          jwt.sign({ id: admins.get('id'), level: admins.get('level') }, process.env.SECRETKEY, (error,token) =>{
            res.json({token: token});
          })
        } else {
          res.status(400).send('wrong password');
        }
      })
    });
}
