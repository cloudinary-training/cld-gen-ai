require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// Uses AI-based prediction to add fine detail while upscaling small images.

// Note: Images must not be larger than 0.25 megapixels to work with e_upscale

// Reference: https://cloudinary.com/documentation/effects_and_artistic_enhancements#upscale

console.log(
    cloudinary.image("butterfly", {
      effect: "upscale",
    })
  );

