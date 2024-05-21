require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// Generative fill, utilized with various cropping methods, uses AI to expand original images, aiding in orientation changes.
// It seamlessly integrates AI-generated backgrounds with existing content, facilitating creative solutions and reducing workflow time,
// while allowing programmatic control over transformations, enhancing content creativity and velocity.

// Reference: https://cloudinary.com/documentation/ai_in_action#generative_fill

console.log(
  cloudinary.image("model", {
    aspect_ratio: "1:1",
    background: "gen_fill",
    width: 600,
    crop: "pad",
  })
);