require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// Replaces the background of an image with an AI-generated background.
// If no prompt is specified, the background is based on the contents of the image.
// Otherwise, the background is based on the natural language prompt specified.
// For images with transparency, the generated background replaces the transparent area.
// For images without transparency, the effect first determines the foreground elements
// and leaves those areas intact, while replacing the background.

// Reference: https://cloudinary.com/documentation/transformation_reference#e_gen_background_replace

console.log(
    cloudinary.image("model", {
      effect: "gen_background_replace:prompt_a_field_of_flowers",
    })
  );