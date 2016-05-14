/**
 * Created by Affixus_Shashikant on 5/14/2016.
 */
var express = require("express");

var app = express();

app.get("/",function (req,res) {
    res.send("Hello World");
});

app.get("/a",function (req,res) {
    res.send("new URl A")

});

app.post("/a",function (req,res) {
    res.send("new URL A for Post");

});

app.get("/b",function (req,res) {
    res.send("URL B");

});
app.post("/b",function (req,res) {
    res.send("URl B For Post");

});

app.get("/c",function (req,res) {
    res.send("URL C")


});
app.get("/a/c",function (req,res) {
    res.send("url shashikant")

});
app.get("/a/path",function (req,res) {

    res.send("shashikant")

});
app.get("/a/b/c",function (req,res) {
    res.send("abcjkl");

});
app.post("/",function (req,res) {
    res.send("url post")

});

app.listen(3000,function () {
    console.log("server started");

});