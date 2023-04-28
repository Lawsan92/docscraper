# DocuScraper
<img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681252199/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.29.48_fsogak.jpg'/>

## About
<p>This is a document scraper modeled after the `grep` command used in the linux os cli. It compares the file content from upload user files to regex patterns, declared as either RegExp objects 

```
let regEmail = new RegExp(`${text['0']}[a-zA-Z0-9_.]+@${text['1']}[a-zA-Z0-9_.]+.[${text['2']}]`, 'g');

```

or regex literals</p>

```
let regEmail = /\b[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+.[a-zA-Z0-9_.]+\b/g;
```

## configure Regex params
<img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681253492/Screen_Shot_2023-04-11_at_17.50.42_ufefwh.jpg'/>

 ### email addresses
 <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681253496/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.51.03_vpxmd3.jpg'/>
 
 ### ip addresses
  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681253498/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.51.20_zcw7w5.jpg'/>
  
 ### phone numbers
  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681253598/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.53.12_q1l9er.jpg'/>

## Installation

* Fork and clone repo to your local machine 
* install dependencies via npm i
* Read the following scripts to understand their functionality

## Scripts

* creates a development bundle that's served to the browser

```
$ npm start
```

* creates a production bundle that compresses file content to maximize perfomance

```
$ npm run build
```

* create a development bundle that runs in the webpack-dev-server, a private server that allows automatic rerendering browser when updating code without the need to refresh the page manually

```
$ npm run dev
```

* runs all jest tests

```
$ npm test
```

* resets project repo by removing all bundle files and node_modules ! use in case there are dependency conflicts in webpack 

```
$ npm run reset
```

* prints a tree of the file structure of the repo if you need to find a file

```
$ npm run printDir
```

```
./
├── AWS.config.json
├── README.md
├── __tests__
│   ├── __snapshots__
│   │   └── snapshot.test.js.snap
│   ├── api.test.js
│   ├── data
│   │   ├── sorted.txt
│   │   ├── test.txt
│   │   └── test2.txt
│   ├── fileToArray.test.js
│   ├── snapshot.test.js
│   └── sort.test.js
├── babel.config.json
├── client
│   ├── dist
│   │   ├── bundle.js
│   │   ├── bundle.js.LICENSE.txt
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── styles.scss
│   └── src
│       ├── App.js
│       ├── Landing.js
│       ├── OptionModal.js
│       ├── Options.js
│       ├── components.js
│       └── index.js
├── component.js
├── jest.config.js
├── package-lock.json
├── package.json
├── server
│   ├── controllers
│   │   ├── AWS.js
│   │   ├── grep.js
│   │   └── sort.js
│   ├── routes
│   │   ├── getFiles.js
│   │   ├── grepFiles.js
│   │   └── test.js
│   └── server.js
└── webpack.config.js

```




