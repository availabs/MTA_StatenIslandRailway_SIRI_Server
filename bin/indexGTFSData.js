#!/usr/bin/env node

'use strict';

var MTA_Subway_GTFS_Toolkit = require('MTA_Subway_GTFS-Realtime_to_SIRI_Converter').MTA_Subway_GTFS_Toolkit,
    scheduleIndexer = MTA_Subway_GTFS_Toolkit.scheduleDataIndexer,
    spatialIndexer  = MTA_Subway_GTFS_Toolkit.spatialDataIndexer,

    gtfsDataDir = require('../config/GTFS_config.js').gtfsDataDir,

    config = {
        gtfsDataDir : gtfsDataDir ,
    };


scheduleIndexer.run(config);
spatialIndexer.run(config);

