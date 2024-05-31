require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// Automatically determines the best crop based on the gravity and specified dimensions.

//If the requested dimensions are smaller than the best crop, the result is downscaled.
//If the requested dimensions are larger than the original image, the result is upscaled.
//Use this mode in conjunction with the g (gravity) parameter.

// Reference: https://cloudinary.com/documentation/transformation_reference#c_auto

console.log(
    cloudinary.image("model", {
      aspect_ratio: "1:1",
      gravity: "auto",
      crop: "auto"
    })
  );