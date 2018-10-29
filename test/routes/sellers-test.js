let datastore = require('../../models/sellers');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../bin/www');
let expect = chai.expect;
let mongoose = require('mongoose');
let bcrypt = require('bcrypt-nodejs');
let jwt = require("jsonwebtoken");

let mongodbUri = 'mongodb://tester:tester100@ds143593.mlab.com:43593/testcosmeticweb';

chai.use(chaiHttp);
let _ = require('lodash' );
let password = bcrypt.hashSync(123456);
let token = jwt.sign({_id: datastore._id}, 'sellerJwtKey');

let seller = [
    {
        "sellerId": "2000",
        "name": "Test Seller_1",
        "email": "TestSeller_1@gmail.com",
        "password": password,
        "description": "Testing seller One"
    },
    {
        "sellerId": "2001",
        "name": "Test Seller_2",
        "email": "TestSeller_2@gmail.com",
        "password": password,
        "description": "Testing seller two"
    }
];

let db = mongoose.connection;

describe('Sellers', function (){
    before(function (done) {
        mongoose.connect(mongodbUri,{useNewUrlParser:true},function(err){
            if(err)
                console.log('Connection Error:' + err);
            else
                console.log('Connection success!');
        });
        try{
            db.collection("sellers").insertMany(seller);
            console.log('Seller insert many success.');
        }catch (e) {
            print (e);
        }
        done();
    });

    describe('GET /sellers', () => {
        it('should return all the sellers in an array', function (done) {
            chai.request(server).get('/sellers').end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res.body.length).to.equal(2);
                let result = _.map(res.body, (seller) => {
                    return { sellerId: seller.sellerId}
                });
                // console.log(result);
                expect(res.body).to.have.property('[0].sellerId', '2000' );
                // expect(result).to.include({ sellerId: '2001' });
                done();
            });
        });
    });

});