require('dotenv').config()

module.exports = {
  "packagerConfig": {
    "icon": "src/icons/assistant.ico",
    "name": "electron-react-express-ts-mobx-firebase",
    "authors": "Blake Wiley",
    "description": "Material Changing Apps",
    "asar": true,
    "extraResource": [
      "vbs",
      "adodb.js"
    ]
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "electron-react-express-ts-mobx-firebase",
        "authors": "Blake Wiley",
        "icon": "src/pages/assistant.ico",
        "description": "Material Changing Apps"
      }
    }
  ],
  "publishers": [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "GITHUB USERNAME",
          name: "GITHUB REPO NAME"
        },
        authToken: process.env.GITHUB_TOKEN,
      }
    }
  ]
}