let Customer = require('../models/customers');
let bcrypt = require('bcrypt-nodejs');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let mongodbUri = 'mongodb://cosmeticdb:cosmeticdb100@ds157538.mlab.com:57538/cosmeticdb';

mongoose.connect(mongodbUri);

let db = mongoose.connection;

db.on('error', function (err) {
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function () {
    console.log('Successfully Connected to [ ' + db.name + ' ]');
});

router.login = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    Customer.findOne({email: req.body.email},function (err, customer) {
        console.log(customer);
        console.log(customer.password);
        console.log(req.body.password);
        if(!customer)
            res.json({ message: 'Customer NOT Login!', errmsg : err });
        else{
            if(bcrypt.compareSync(req.body.password,customer.password))
                res.json({ message: 'Cosmetic Successfully Login', data: customer });
            else
                res.json({ message: 'Email Address or Password Incorrect!', errmsg : err });
        }
    });
}

router.signUp = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    let customer = new Customer();
    customer.name = req.body.name;
    customer.email = req.body.email;
    customer.phoneNum = req.body.phoneNum;
    customer.address = req.body.address;
    customer.register_date = Date.now();
    customer.password = bcrypt.hashSync(req.body.password);

    customer.save(function (err){
        if(err)
            res.json({ message: 'Cosmetic NOT Sign Up!', errmsg : err });
        else
            res.json({ message: 'Cosmetic Successfully Sign Up', data: customer });
    });
}

router.editByID = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    Customer.update({"_id": req.params.id},
        {   name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phoneNum: req.body.phoneNum,
            address: req.body.address
            //img_url:
        },
        function(err,customer) {
        if(err)
            res.json({ message: 'Cosmetic NOT Edited!', errmsg : err });
        else
            res.json({ message: 'Cosmetic Successfully Edited!', data: customer });
    });
}

router.findOne = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    Customer.findById(req.params.id,function(err, customer) {
        if (err)
            res.json({ message: 'Customer NOT Found!', errmsg : err } );
        else
            res.send(JSON.stringify(customer,null,5));
    });
}

module.exports = router;