require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// The Cloudinary AI Background Removal add-on combines a variety of deep-learning algorithms to recognize
// the primary foreground object(s) in an image and accurately remove the background in a matter of seconds.
// Reference: https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon

console.log(
    cloudinary.image("model", {
      effect: "background_removal"
    })
  );