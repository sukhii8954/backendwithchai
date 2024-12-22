require('dotenv').config()
const express = require("express");  // it is a commonJS module syntax (for server side env) 
//     OR ES module syntax (it is more modern js module)
// import express from "express"

// NOTE:- here const express is an object we created 

const app = express();

// NOTE: here app is a powerful variable which consist of many things now like
//  app.get , app.listen just like MATH comes with many things like : pow , pi , sum etc

const port =  4000;  // virtual port where we want express to listen just like we have physical port type C port

const githubData = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 100,
  "public_gists": 5,
  "followers": 35794,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2024-12-19T21:34:16Z"
}

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
 