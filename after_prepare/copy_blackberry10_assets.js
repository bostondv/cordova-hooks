#!/usr/bin/env node
var path = require( 'path' ),
    fs = require( 'fs' ),
    shell = require( 'shelljs' ),
    rootdir = process.argv[ 2 ],
    iconroot = rootdir + '/assets/icon/blackberry10',
    blackberry10 = rootdir + '/platforms/blackberry10';

try {
    fs.lstatSync( blackberry10 ).isDirectory();
}
catch( e ) {
    console.log( 'blackberry10 platform does not exist. nothing to do here.' );
    process.exit(0);
}

// for some reason, using shell.cp() would throw this error:
// 'cp: copy File Sync: could not write to dest file (code=ENOENT)'
shell.exec( 'cp -Rf ' + iconroot + '/* ' + blackberry10 + '/www', {silent:true} );

console.log( 'Copied all blackberry10 assets.' );

process.exit(0);