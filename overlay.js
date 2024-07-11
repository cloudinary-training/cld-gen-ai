require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({ secure: "true" });

// image and text overlay on a video asset

const url = cloudinary.url('model', {
    effect: "gen_restore",
  transformation: [
    { width: 500, crop: 'scale' },
    {
      overlay: 'logo',
      width: 100,
      x: 15,
      y: 15,
      gravity: 'north_east',
      opacity: 50,
      effect: 'brightness:100'
    },
    {
      overlay: {
        font_family: 'Montserrat',
        font_size: 30,
        text: 'SALE    ',
      },
      gravity: 'center',
      color: '#FFFFFF'
    }
  ]
})

console.log(url)