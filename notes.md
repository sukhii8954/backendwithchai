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
