require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });


// Generative remove effortlessly eliminates unwanted objects, text, or user-defined regions from images,
// providing a valuable capability across various industries. The feature is accessible via Cloudinary's APIs,
// enabling scalable object removal tasks which traditionally would require significant time and effort.


// Reference: https://cloudinary.com/documentation/ai_in_action#generative_remove

console.log(
    cloudinary.image("model", {
      effect: "gen_remove:prompt_logo"
    })
  );