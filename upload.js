require('dotenv').config()
const cloudinary = require('cloudinary').v2

//upload two images to be worked with in this course, and assign public ID for referencing

cloudinary.uploader.upload("assets/model.jpg", {public_id: "model"})

cloudinary.uploader.upload("assets/butterfly.jpg", {public_id: "butterfly"})
