require('dotenv').config()
const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: "true" });

// combining multiple generative AI transformations together.
// this set includes the following five: recolor, remove, replace, restore, and auto crop

console.log(
    cloudinary.image("model", {transformation: [
        {effect: "gen_recolor:prompt_tee-shirt;to-color_FF00FF"},
        {effect: "gen_remove:prompt_logo"},
        {effect: "gen_replace:from_pants;to_flannel_pajama_pants"},
        {effect: "gen_restore"},
        {aspect_ratio: "1:1",
        gravity: "auto",
        crop: "auto"}
    ]}
    )
  );

