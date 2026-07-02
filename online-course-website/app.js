const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Course = require("./models/init");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


mongoose
    .connect("mongodb://127.0.0.1:27017/course")
    .then(() => console.log("DataBase connected"))
    .catch((err) => console.log(err));

app.get("/courses", async (req, res) => {
    let courses = await Course.find({});
    res.render("./courses/index", { courses });
});

app.get("/courses/new", (req, res) => {
    res.render("./courses/new");
});

app.post("/courses", async (req, res) => {
    let newCourse = new Course(req.body.Course);
    await newCourse.save();
    res.redirect("/courses");

});

app.get("/courses/:id/edit", async (req, res) => {
    let { id } = req.params;
    let editCourse = await Course.findById(id);
    res.render("./courses/edit", { editCourse });
});

app.put("/courses/:id", async (req, res) => {
    let { id } = req.params;
    await Course.findByIdAndUpdate(id, { ...req.body.Course });
    res.redirect(`/courses/${id}`);
});

app.delete("/courses/:id", async (req, res) => {
    let { id } = req.params;
    let deleteCourse = await Course.findByIdAndDelete(id);
    res.redirect("/courses");

});
app.get("/courses/:id", async (req, res) => {
    let { id } = req.params;
    const course = await Course.findById(id);
    res.render("./courses/show", { course });
});