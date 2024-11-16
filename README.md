# EGInterviewAPI
EG Interview API  with Web Frontend
======================================

# Product API with Web Frontend

This project is a simple implementation of a Product API built with ASP.NET Core and a web front end using HTML, CSS, and JavaScript. 
It allows users to list (GET), add (POST), and delete and edit (PUT) products, i.e. all the CRUD functions needed for any API project.
The API demonstrates clean architecture principles, and the front end showcases dynamic UI rendering with basic styling.
 
I have set the site background to the EG Group's green colour, hope you like it 😃

### !!! Note : I have included a demonstration video as well to showcase my work.
#
Firstly, to show it works, and second, in the case where you are unable to run the project.
There is a .zip folder in the root of this repo called 'Video Demonstration.zip' . There is an mp4 file in it which is the video demo of this API application's frontend.

---

## Features
- **API Endpoints**:
  - `GET /api/productitems`: Retrieve a list of all products/drinks.
  - `GET /api/productitems/{id}`: Retrieve a single product/drink.
  - `POST /api/productitems`: Add a new product/drink`.
  - `DELETE /api/productitems/{id}`: Remove a product/drink by its ID.
  - `PUT /api/productitems/{}`: Edit a product/drink.
- **Frontend**:
  - Display the product list dynamically.
  - Add new products via a form.
  - Delete products with a simple button click.
  - Edit products using the ID of the product.
  
---

# Setup Instructions
1. Clone the repository.
2. Start the API.
3. Run the https solution on:
    https://localhost:7010
4. Can also be tested using Postman alternatively if you do not want to call the endpoints using the front-end.

Thanks,
Tayyab
