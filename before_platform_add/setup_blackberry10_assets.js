#!/usr/bin/env node
var path = require( 'path' ),
    fs = require( 'fs' ),
    shell = require( 'shelljs' ),
    rootdir = process.argv[ 2 ],
    blackberry10root = rootdir + '/platforms/blackberry10',
    iconroot = rootdir + '/assets/icon/blackberry10',
    screenroot = rootdir + '/assets/screen/blackberry10';


try {
    fs.lstatSync( blackberry10root ).isDirectory();
    console.log( 'blackberry10 platform already exists. skipping.' );
}
catch( e ) {
    //icon renaming to phonegap Blackberry10 directories and filenames
    shell.mkdir( '-p', iconroot );
}

process.exit(0);
