# REST-API for CURD Operations using NodeJS

Areas Touched:
GET, POST, PUT and DELETE

# Prerequisites:
	1. NodeJS
	2. Express
	3. MySql
	4. Postman for REST Calls

# Implement: Pull the project to your local repo and change:
	1. db connections to suit your local DB.
	2. A table that is created in the DB which is referenced/used for CURD operations in myapp/routes/users.js
	3. Change the table and query details in myapp/routes/users.js to suit your requirement

# Run
	1. In the myapp/ dir run: “npm install”
	2. node app.js

# Perform CURD operations (Examples)
For GET: 
In Postman under Import paste the following as raw text
curl -X GET \
  http://localhost:3000/api/v2/users/results \
  -H 'cache-control: no-cache’

For POST:
In Postman under Import paste the following as raw text
curl -X POST \
  http://localhost:3000/api/v2/users/insert \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"name1":"Akash",
	"address1":"Old Address"
}'

For PUT: 
In Postman under Import paste the following as raw text
curl -X PUT \
  http://localhost:3000/api/v2/users/update \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"name1":"Akash",
	"address_old":"Old Address",
	"address_new":"New Address"
}'

For DELETE:
curl -X DELETE \
  http://localhost:3000/api/v2/users/delete \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"name1":"Akash",
	"address1":"New Address"
}'
