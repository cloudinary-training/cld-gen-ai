require('dotenv').config()
const cloudinary = require('cloudinary').v2

//upload image to be worked with in this course, assign public ID for referencing
cloudinary.uploader.upload("assets/model.jpg", {public_id: "model"})

cloudinary.uploader.upload("assets/quickstart_butterfly.jpg", {public_id: "quickstart_butterfly"})
