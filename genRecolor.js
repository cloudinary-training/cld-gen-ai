require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// Generative recolor enables color alterations in images using natural language, through AI and NLP.
// This feature simplifies creating color variants, especially beneficial for e-commerce products, by allowing color changes at scale via API​.

// Reference: https://cloudinary.com/documentation/ai_in_action#generative_recolor
console.log(
    cloudinary.image("sample", {
      effect: "gen_recolor:prompt_flowers;to-color_EEEEEE",
    })
  );