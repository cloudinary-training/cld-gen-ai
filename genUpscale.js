require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// Uses AI-based prediction to add fine detail while upscaling small images.

// Note: To use the upscale effect, the input image must be
// smaller than 4.2 megapixels (the equivalent of 2048 x 2048 pixels).
// There is no direct way to correlate pixel size and file size.

// Reference: https://cloudinary.com/documentation/effects_and_artistic_enhancements#upscale

console.log(
    cloudinary.image("butterfly", {
      effect: "upscale",
    })
  );

