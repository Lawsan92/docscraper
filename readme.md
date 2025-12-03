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

## User guide

Upload a file:

<img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1764734691/docscraper/Screenshot_2025-12-02_at_22.04.10_rc0atp.jpg' width='800px'/>

Click on the 'Options' button to open the sidebar menu. The menu lists all available filters. There are also sorting and formatting options.

<img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1764734846/docscraper/Screenshot_2025-12-02_at_22.07.20_a00yfk.jpg' width='800px'/>


## Use-cases

### (filter) extracting email addresses
 <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1764735006/docscraper/Screenshot_2025-12-02_at_22.10.02_xjelev.jpg' width='800px'/>

### (filter) extracting ip addresses
  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1764735192/docscraper/Screenshot_2025-12-02_at_22.13.07_ms2r3p.jpg' width='800px'/>

 ### (filter, sort) extracting email addresses and list them alphabetically
  <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1764735415/docscraper/Screenshot_2025-12-02_at_22.16.25_n28ylz.jpg' width='800px'/>

You can also refine searches by typing in string filters

### (refined filter) extract email addresses that have a 'yahoo' domain
<img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1764735608/docscraper/Screenshot_2025-12-02_at_22.20.04_ylvp1o.jpg' width='800px'/>

### Limitations of the current app version (1.0)

* Only .txt files are supported uploads
* Downloading the filtered output isn't supported

## Installation

* Fork and clone repo to your local machine
* install dependencies via npm i
* Read the following scripts to understand their functionality

## Running environment

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




