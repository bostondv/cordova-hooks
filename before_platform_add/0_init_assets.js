#!/usr/bin/env node
var path = require( 'path' ),
    fs = require( 'fs' ),
    shell = require( 'shelljs' ),
    rootdir = process.argv[ 2 ];

console.log( process.argv );

try {
    fs.lstatSync( rootdir + '/.done' );
    console.log( 'Initial setup already done.' );
}
catch( e ) {
    shell.exec( 'mkdir -p ' + rootdir + '/assets', {silent:true} );
    shell.exec( 'touch ' + rootdir + '/.done', {silent:true} );
}

process.exit(0);
