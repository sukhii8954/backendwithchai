## notes 

main work we do in src directory 
 --> src
   -> package.json (libraries package)
   -> .env(databse url , pasword , api key secure rakhne ke liye use krte h)
   -> Readme , git , lint , prettier etc

directory stucture for backend:-

files:- 
-->index (application entry point) (DB connects)
-->APP  (configurations ) , (cookies, urlencode )**
-->Constants (enums , DB-name) (ex:- we use this for restriction to choose from options aviable in this file)



Directory structure :-
->DB  (Database)
->Models (schema for Data ) 
->Controllers (functions or methods)
->Routes (example : /login /signup etc)
->Middlewares

->Utils(ex:-The thing we would use repeatedly would keep in utility
FOr example:- mail bhejna hai utility mai rakhi h , 
file upload krni h usko yha rakh kr use krte h and will discuss later on)
->More(depends)


Types of request we do to server:-
--> get request (whatever we write in url is most of the time is GET request)


--> server will made by using express which do the work of listen between browser and server
--> express.js(listen can be at /home , /login etc)


--> making empty node application
npm init --> this utility will walk you through creating a package.json file
It covers only ther most common items , and tries to guess sensible defaults.

index.js code:
require('dotenv').config()
const express = require("express");  // it is a commonJS module syntax (for server side env) 
//     OR ES module syntax (it is more modern js module)
// import express from "express"

// NOTE:- here const express is an object we created 

const app = express();

// NOTE: here app is a powerful variable which consist of many things now like
//  app.get , app.listen just like MATH comes with many things like : pow , pi , sum etc

const port =  4000;  // virtual port where we want express to listen just like we have physical port type C port


  // req --> request  , res--> response we send when getting request 
app.get("/", (req, res) => {  // making a get request with "/"--> home route
  res.send("Hello World!");  // when getting request at home route sending response as string "hello world"
});

// handling multiple request

app.get('/twitter', (req , res)=> {
      res.send('sukhiidotcom')
});

app.get('/login', (req, res)=> {
        res.send('<h1> Please login at chai aur code </h1>');
})


app.get('/youtube', (req,res)=> {
  res.send("<h2>Chai aur code</h2>")
})

app.get('/github', (req,res)=> {
  res.json(githubData)
})


//  using listening method from express and enabling app to listen at port
// on successful listening displaying message in console log
// listen method is only a variable which is in port 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
 