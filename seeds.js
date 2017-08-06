var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Clouds Rest", 
        image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
     {
        name: "Desert Mesa", 
        image: "https://farm3.staticflickr.com/2655/3738566424_180036be3f.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
     {
        name: "Canyon Floor", 
        image: "https://farm9.staticflickr.com/8358/8444469474_8f4b935818.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    ]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
       if(err){
           console.log(err);
       } 
       console.log("removed campgrounds!"); 
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
               if(err){
                   console.log(err);
               } else {
                   console.log("added campgrounds");
                   //create a comment
                   Comment.create(
                       {
                           text:"This place is great, but I wish there was internet.",
                           author: "Homer"
                       }, function(err, comment){
                           if(err){
                               console.log(err);
                           } else {
                               campground.comments.push(comment);
                               campground.save();
                               console.log("Created new comment");
                           }
                           
                       });
               }
            });
        });
    });
   
    
    //add a few comments
}

module.exports = seedDB;