#!/usr/bin/env node
var path = require( 'path' ),
    fs = require( 'fs' ),
    shell = require( 'shelljs' ),
    rootdir = process.argv[ 2 ],
    iosroot = rootdir + '/platforms/ios',
    iconroot = rootdir + '/assets/icon/ios',
    screenroot = rootdir + '/assets/screen/ios';

try {
    fs.lstatSync( iosroot ).isDirectory();
    console.log( 'ios platform already exists. skipping.');
}
catch( e ) {
    shell.exec( 'mkdir -p ' + iconroot, {silent:true} );
}

process.exit(0);
