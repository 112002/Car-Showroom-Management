var express= require("express");
var app=express();
var bodyParser= require("body-parser");
var mongoose=require("mongoose");

//connect to database
mongoose.connect("mongodb://localhost/dbms_project");

//user and car schema
var userSchema= new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        address: String
    }
);

var carSchema= new mongoose.Schema(
    {
        model: String,
        make: String,
        description: String,
        cost: Number,
    }
)


//models
var user = mongoose.model("user", userSchema);
var car = mongoose.model("car", carSchema);

//App configurations
app.use(express.static("public"));//serve custom style sheet
app.use(bodyParser.urlencoded({extended: true}));

//index route
app.get("/",function(req,res)
{
    res.render("home.ejs");
});

//cars page
app.get("/cars",function(req,res)
{
    res.render("all_cars.ejs");
});

//sign-up page
app.get("/signup",function(req,res)
{
    res.render("sign_up.ejs");
});

//login page
app.get("/login",function(req,res)
{
    res.render("login.ejs");
});

var port=process.env.PORT;
app.listen(port||3000,function()
{
console.log("Server is Listening!!");
});

