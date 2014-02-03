#!/usr/bin/env node

'use strict';

var path = require( 'path' ),
    fs = require( 'fs' ),
    shell = require( 'shelljs' ),
    rootdir = process.argv[ 2 ],
    xml2js = require('xml2js'),
    parser = new xml2js.Parser(),
    projectname,
    config = rootdir + '/config.xml',
    iconroot = rootdir + '/assets/icon/ios',
    screenroot = rootdir + '/assets/screen/ios',
    iosroot = rootdir + '/platforms/ios';

try {
    fs.lstatSync( iosroot ).isDirectory();
}
catch( e ) {
    console.log( 'ios platform does not exist. nothing to do here.' );
    process.exit(0);
}

fs.readFile(config, function(err, data) {
    if (err) {
        console.log( 'could not read config.xml' );
        process.exit(0);
    }
    parser.parseString(data);
});

parser.addListener('end', function(result) {
    projectname = result.widget.name[0].replace(' ', '\\ ');

    // for some reason, using shell.cp() would throw this error:
    // 'cp: copy File Sync: could not write to dest file (code=ENOENT)'
    shell.exec( 'cp -Rf ' + iconroot + '/*' + ' ' + iosroot + '/' + projectname + '/Resources/icons/' );
    shell.exec( 'cp -Rf ' + screenroot + '/*' + ' ' + iosroot + '/' + projectname + '/Resources/splash/' );

    console.log( 'Copied all ios assets.' );

    process.exit(0);
});

