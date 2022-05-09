# BACK-END ASSESSMENT - BLOG POSTS

A simple backend JSON API

## Installation

* Use node version v16.14.2 or later
* Use yarn 1.22.18 or later
* To install packages use command ```yarn install``` or ```npm install```

## Server
* PORT 3000

If you installed with yarn than use: 
* To run the server use command ```yarn start``` or ```npm start```
* To stop the server use command ```yarn stop``` or ```npm stop```
* To kill server use command ```yarn kill``` or ```npm kill```

If you install with npm than use: 
* To run the server use command ```npm start```
* To stop the server use command ```npm stop```
* To kill server use command ```npm kill```
## dependencies

* "express": "^4.18.1"
* "dotenv": "^16.0.0"
* "node-fetch": "^3.2.4"
* "pm2": "^5.2.0"

### devDependencies
* "jest": "^28.0.3",
* "supertest": "^6.2.3"

What app does:

* An /api/posts route handles the following query parameters:
* tags (mandatory) : any number of comma-separated strings
* sortBy (optional) : one of “id”, “reads”, “likes”, “popularity”
* direction (optional) : one of “asc”, “desc”, defaults to “asc”
* Error handling: Return an error message if:
* tags parameter is missing
* sortBy or direction has an invalid value
* Testing without using our solution API route
* Caching (bonus)