// add your CLOUDINARY_URL (API Environment variable) to a .env file
// read .env into process.env
require('dotenv').config()

// load Cloudinary node.js library
const cloudinary = require('cloudinary').v2

// execute Cloudinary config to extract your credentials from your CLOUDINARY_URL
const credentials = cloudinary.config({'secure':'true'})
console.log(credentials.cloud_name)
console.log(credentials.api_key)

// Remember to always keep your secret private! No need to run the following code below,
// as you'll know your environment variable/credentials are properly configured if your Cloud Name and API Key are outputted.
// console.log(credentials.api_secret)