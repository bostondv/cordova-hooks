cordova-hooks
---
Warning:  These are the first iterations of the scripts.  They can definitely be optimized and enhanced.

Since you are using **cordova-cli**, this means you already have `node` and `npm` installed.

Requires cordova@3.3.1-0.3.1 or higher.

These scripts take advantage of shell commands, so in order to run these, you must install [`shelljs`](https://github.com/arturadib/shelljs):

`npm install -g shelljs`

They also read information from your config.xml file and thus require [`xml2js`](https://github.com/Leonidas-from-XIV/node-xml2js) to run.

`npm install -g xml2js`

Installation
---
Copy the files in their corresponding directories found under `hooks` in your project root directory.

Usage
---
Whenever you execute a specific `cordova` command, the appropriate hook script will be executed at the proper time.

License
---
cordova-hooks is provided under the terms of the [Unlicense](http://unlicense.org) license.

