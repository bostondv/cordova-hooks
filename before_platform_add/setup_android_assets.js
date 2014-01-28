#!/usr/bin/env node
var path = require( 'path' ),
    fs = require( 'fs' ),
    shell = require( 'shelljs' ),
    rootdir = process.argv[ 2 ],
    androidroot = rootdir + '/platforms/android',
    iconroot = rootdir + '/assets/icon/android',
    screenroot = rootdir + '/assets/screen/android';


try {
    fs.lstatSync( androidroot ).isDirectory();
    console.log( 'android platform already exists. skipping.' );
}
catch( e ) {
    [ '', '-hdpi', '-ldpi', '-mdpi', '-xhdpi', '-xxhdpi', '-xxxhdpi' ].forEach( function( item ) {
        shell.mkdir( '-p', iconroot + '/drawable' + item );
    });
}

process.exit(0);
