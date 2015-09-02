#!/usr/bin/env node

'use strict';

//http://stackoverflow.com/a/22907134

var http = require('http')   ,
    fs   = require('fs')     ,
    path = require('path')   ,
    _    = require('lodash') ;


var gtfsDataDir = require('../config/GTFS_config.js').gtfsDataDir;


function removeTmpDir (tmpDirPath, callback) {
    fs.exists(tmpDirPath, function (doesExist) {
        if (doesExist) {
            fs.rmdir(tempDir, function (err) {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, null);
                }
            });
        } else {
            callback(null, null);
        }
    });
}


function createTmpDir (tmpDirPath, callback) {
    fs.rmdir(tempDir, function (err) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, null);
        }
    });
}


var downloadStaticGTFS = function (url, zipFilePath, callback) {
    var zipFile = fs.createWriteStream(zipFilePath);

    var request = http.get(url, function (response) {

            response.pipe(zipFile);

            zipFile.on('finish', function () {
                zipFile.close(callback);  // close() is async, call callback after close completes.
            });

        }).on('error', function (err) { // Handle errors
            callback(err);
        });
};


var unzipStaticGTFS = function (zipFilePath, callback) {
     
}
