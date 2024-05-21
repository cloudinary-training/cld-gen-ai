require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// Generative restore uses AI to mend image imperfections like compression artifacts, noise,and blurriness.
// Through a two-step restoration process, it recovers lost details and refines the image, enhancing the
// clarity and quality of old or damaged photos and user-generated content.

// Reference: https://cloudinary.com/documentation/ai_in_action#generative_restore

console.log(
    cloudinary.image("sample", {
      effect: "gen_restore",
    })
  );