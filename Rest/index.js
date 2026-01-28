const express=require("express");
const app=express();
const path=require("path");
const { v4: uuid } = require('uuid');//this function will give id to every blog so each blog have its unique id to distinguish to each other even having same author name.
const methodOverride=require("method-override");
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
// app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
const port=8080;
app.listen(port, (req, res)=>{
    console.log("Server is connected to port: 8080");
});

//Here I am initializing an array containing some custom blogs.

let blogs=[
    {
        id:uuid(),
        title: "Balancing College and Skill Development",
        author: "Alice",
        content:"Managing college studies along with skill development can be challenging, but it is possible with proper planning. Creating a daily routine, setting realistic goals, and staying consistent can make a big difference. Learning skills like programming, communication, and problem-solving helps students prepare better for future careers."
    },
    {
        id:uuid(),
        title: "My Journey into Programming",
        author: "Sanskar Puri",
        content:"I started learning programming with curiosity and a little fear. At first, concepts like loops and conditions felt confusing, but with daily practice, things slowly became clear. Building small projects like calculators and mini games helped me gain confidence. Programming has taught me patience, logical thinking, and problem-solving skills that are useful beyond coding."

    },
    {
        id:uuid(),
        title:"Why Learning Data Structures Is Important",
        author: "Bob",
        content:"Data Structures help us organize data efficiently and solve complex problems faster. Whether it is arrays, stacks, or queues, each structure has a specific use case. Understanding DSA improves coding skills and is essential for cracking technical interviews. Consistent practice is the key to mastering this topic."
    }
];

app.get("/blogs", (req, res)=>{
    res.render("index",{blogs});
});
//Here I added a new form to create a new blog so when a user will open to read he/she can also make its own blog.
app.get("/blogs/new", (req,res)=>{
    res.render("new");
});

app.post("/blogs/new",(req,res)=>{
    let {author, title, content}=req.body;
    let id =uuid();
    res.redirect("/blogs");
    blogs.push({id,title,author,content});
});
//To see individual blog
app.get("/blogs/:id",(req,res)=>{
    let {id}=req.params;
    let blog=blogs.find(b=> b.id===id);
    res.render("show",{blog});
});
//to update existing blogs content
app.patch("/blogs/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let blog=blogs.find(b=> b.id===id);
    blog.content=newContent;
    res.redirect("/blogs");
});
//To edit changes in particualr blog content.
app.get("/blogs/:id/edit",(req,res)=>{
    let {id}=req.params;
    let blog=blogs.find(b=> b.id===id);
    res.render("edit",{blog});
});

app.delete("/blogs/:id",(req,res)=>{
    let {id}=req.params;
    blogs=blogs.filter((b)=> id!==b.id);
    res.redirect("/blogs");
});