# DocuScraper
<img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1764727017/docscraper_landing_vugjxf.jpg' width='800px'/>

This is a document scraper modeled after the `grep` command-line utlility used in Linux operating systems. It compares text content from uploaded user files to regex patterns, declared as either RegExp objects

```
regEmail = new RegExp(`${text['0']}[a-zA-Z0-9_.]+@${text['1']}[a-zA-Z0-9_.]+.[${text['2']}]`, 'g');
```

or regex literals

```
regEmail = /\b[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+.[a-zA-Z0-9_.]+\b/g;
```
and returns all text matching the pattern.

### User guide

Upload a file by cliking the

## configure Regex params (i.e., apply your filter)
<img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681253492/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.50.42_ufefwh.jpg' width='800px'/>



 ### email addresses
 <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681253496/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.51.03_vpxmd3.jpg' width='800px'/>

 ### ip addresses
  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681253498/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.51.20_zcw7w5.jpg' width='800px'/>

 ### phone numbers
  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1681253598/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.53.12_q1l9er.jpg' width='800px'/>

## Installation

* Fork and clone repo to your local machine
* install dependencies via npm i
* Read the following scripts to understand their functionality

## Scripts

* creates a development bundle that's served to the browser

```
npm start
```

* creates a production bundle that compresses file content to maximize perfomance

```
npm run build
```

* create a development bundle that runs in the webpack-dev-server, a private server that allows automatic rerendering browser when updating code without the need to refresh the page manually

```
npm run dev
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




