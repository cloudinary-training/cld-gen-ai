# cld-gen-ai

## Environment Setup

### Install Node.js and NPM:
You will need to install Node.js on your machine, version 10 or higher.
 Important - Installing Node.js will also install npm, the package manager for Node.js.

#### Mac Users
Using Homebrew:

```bash
brew install node
```

#### Windows
[Download for windows](https://nodejs.org/en/download/)

#### Verify Node/NPM install:

```console
$ node --version
v18.18.1

$ npm --version
9.8.1
```

### Choose an IDE or Use Text Editor:

- [Visual Studio Code](https://code.visualstudio.com/download) - VSCode is our preferred IDE
- [WebStorm](https://www.jetbrains.com/webstorm/) 
- [Sublime](https://www.sublimetext.com/) 
- [iTerm](https://iterm2.com/) 

### Download Repository:

[Introduction to Video Transformations and Optimizations with Cloudinary](https://github.com/cloudinary-training/cld-gen-ai)

- Run code from root directory, like so:
```bash
node <file_name.js>
```

### Account Setup and Credentials:

1. If you don't have one already, create a free Cloudinary account at: https://www.cloudinary.com/signup.

2. Navigate to your Product Environment Settings. Then click API Keys. Copy the `CLOUDINARY_URL` into your clipboard (see yellow arrow pointing to a clipboard).

![Dashboard](./assets/cld_credentials.png)

3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.

4. After you've copy and pasted the provided format, substitute your actual values for the placeholders.

- Example of a copied CLOUDINARY_URL:
```CLOUDINARY_URL=cloudinary://<your_api_key>:<your_api_secret>@jen-brissman```

- Your own cloud name will be automatically copied for you, so just replace <your_api_key> with your API Key and <your_api_secret> with your API Secret.

- There should be one line of code in your .env file, which should look like this:

```console
CLOUDINARY_URL=cloudinary://YOUR_API_KEY:YOUR_API_SECRET@YOUR_CLOUD_NAME
```

- Doing this step properly is essential, as it will let Cloudinary know who you are and provide access to your cloud.

- Note: Keep your API Secret private. Treat it like a password. You can always regenerate a new API Key if you'd like. 


### Run Code: Install Node Libraries


```console
npm i
```
(You will be using the `cloudinary` and the `dotenv` libraries.)

### Run Code: Test Credentials



```console
node testCredentials.js
```

The output should look like this:
```console
your Cloud Name
your API Key
```

- Your API_SECRET is part of your CLOUDINARY_URL
- Remember to always keep your API_SECRET a secret!
  - This is why we programmed testCredentials.js to only output your cloud name and API Key (no need to keep these two credentials private)


### Run Code:

In order to upload all of the assets associated with these code examples and assign the correct Public ID to each, run this file:
```bash
node upload.js
```

Now you're ready to get started! 
