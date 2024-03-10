Answer-1 :- in this relationship each product in the "Product" table can have a single product category, and each product category in the "Product_Category" table can have multiple products with it. This is a example of a one-to-many relationship where one product category can have many products but each product can only have one product category.

Answer-2 :-
1.  One way to ensure this constraint is to use a foreign key constraint in the "Product" table that references the "Product_Category" table's "id" column. This would ensure that each product in the "Product" table has a valid category_id that exists in the "Product_Category" table
2.  While submitting the form or adding a new product to the database, we will check in the backend if the selected category_id exists in the database. If it does not exist, we can throw an error, "Please select a valid category."
