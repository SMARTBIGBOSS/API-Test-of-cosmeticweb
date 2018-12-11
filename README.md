<a href='https://coveralls.io/github/SMARTBIGBOSS/API-Test-of-cosmeticweb'><img src='https://coveralls.io/repos/github/SMARTBIGBOSS/API-Test-of-cosmeticweb/badge.svg' alt='Coverage Status' /></a>

# Assignment 2 - Web API - Automated development process.

Name: Anqi Li 

## Overview.

 In this program, it allows testers to run the test scripts without test each functions manually. It includes five test scripts implemented the main functions. This project is bundling with Webpack and it can be built in all platforms by NPM scripts which you can see the details in package.json file. Besides, it already linked to Travis so that it can run the API tests, generate coverage reports and publish them on a related service site automatically.

## API endpoints.

 + GET /cosmetics - Get all cosmetics.
 + GET /cosmetics - Get all cosmetics by fuzzy search.
 + GET /cosmetics/:name - Get all cosmetics by name.
 + GET /cosmetics/:name/:brand - Get all cosmetics by name and brand.
 + GET /cosmetics/sortByLowPrice - Sort all cosmetics by low price.
 + GET /cosmetics/sortByHighPrice - Sort all cosmetics by high price.
 + PUT /cosmetics/:publisher/:id/edit - Edit cosmetic's information.
 + POST /cosmetics/:publisher/add - Add a new cosmetic.
 + DELETE /cosmetics/:publisher/:cosmeticId/delete - Delete a cosmetic.
 + GET /customer/:customerId - Get a spacial customer by Id.
 + PUT /customer/:id/edit - Edit customer's information.
 + POST /customer/signUp - Add a new customer.
 + POST /customer/login - Customer login.
 + GET /sellers - Get all sellers.
 + GET /seller/:sellerId - Get a special seller by Id.
 + POST /seller/login - Seller login.
 + POST /seller/signUp - Add a new seller.
 + POST /seller/:sellerId/edit - Edit seller's information.
 + PUT /transaction/:id/order - Change status to paid.
 + PUT /transaction/:id/delivery - Change status to delivering.
 + PUT /transaction/:id/confirmReceipt - Change status to finished.
 + GET /transactions/countSales - Count all cosmetic's sales.
 + POST /customer/:id/uploadLogo - Upload customer's logo to local folder.
 + POST /seller/:id/uploadLogo - Upload seller's logo to local folder.

## Continuous Integration and Test results.

 URL of the Travis build page for web API,

https://travis-ci.org/SMARTBIGBOSS/API-Test-of-cosmeticweb


 URL of published test coverage results on Coveralls, e.g.  

https://coveralls.io/github/SMARTBIGBOSS/API-Test-of-cosmeticweb


## Extra features.
 I try to deploy this app to heroku, but it does not completely successful. It shows that this app already builds successfully in heroku website but it cannot use.
