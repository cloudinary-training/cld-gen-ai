require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// AI based image captioning can be used to analyze an image and suggest a caption based on the image's contents.

// Reference: https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning

// cloudinary.uploader.upload("assets/model.jpg", { detection: "captioning" })
//   .then(result=>console.log(result));

cloudinary.api
  .update("butterfly", { detection: "captioning" })
  .then((result) => console.log(result.info.detection.captioning));
