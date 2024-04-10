Endpoints
Products
Get all products
GET /products

Returns a list of all .

Get a single item
GET /products/:id

Returns the user with the specified ID.

Create a product
POST /product

Creates a new product. Requires a JSON object in the request body with name, quantity, and price.

Update a product
PUT /product/:id

Updates the user with the specified ID. Requires a JSON object in the request body with name, quantity, and price.

Delete a product
DELETE /product/:id

Deletes the product with the specified ID.
