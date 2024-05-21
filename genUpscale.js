require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// Uses AI-based prediction to add fine detail while upscaling small images.

// Reference: https://cloudinary.com/documentation/effects_and_artistic_enhancements#upscale

console.log(
    cloudinary.image("quickstart_butterfly", {
      effect: "upscale",
    })
  );