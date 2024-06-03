require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// Generative replace uses AI to replace objects within images with alternative objects or images,
// while maintaining a natural look. This feature allows for creative or functional alterations in images,
// enhancing the versatility and usage of your media assets.

// Reference: https://cloudinary.com/documentation/ai_in_action#generative_replace

console.log(
    cloudinary.image("model", {
      effect: "gen_replace:from_pants;to_flannel_pajamas",
    })
  );