"use strict";

import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import jshint from 'gulp-jshint';
import mocha from 'gulp-mocha';

var nodemonStream = null;

function handleError(err) {
    console.log('err = ' + err);

    if (nodemonRunning) {
        nodemonStream.emit('end');
    } else {
        process.exit(1);
    }
}

gulp.task('run-tests', function() {
    var stream = gulp.src('./test/**/*.js', { read: false })
        .pipe(mocha({
            compilers: [
                'js:babel-core/register',
            ]
        }));

    return stream;
});

gulp.task('lint', function() {
    gulp.src('./**/*.js')
        .pipe(jshint());
});


gulp.task('start-dev', ['lint', 'run-tests'], function() {
    nodemonStream = nodemon({
        script: './bin/www',
    });

    nodemonStream
        .on('error', function() {
            console.error('nodemon errored');
        })
        .on('crash', function() {
            console.error('Application has crashed!\n')
            nodemonStream.emit('restart', 10); // restart the server in 10 seconds 
        })
        .on('restart', ['lint', 'run-tests'], function() {
            console.log('node server restarted!');
        })
        .once('quit', function() {
            console.log('nodemon quit!');
            process.exit(0);
        });

    return nodemonStream;

});
/*
gulp.task('stop', function() {
    process.exit();
});


gulp.task('default', ['start-dev'], function() {});


gulp.on('err', () => {
    console.log('process error');
    process.exit(1);
});

gulp.doneCallback = function(err) {
    process.exit(err ? 1 : 0);
};
*/

/*
process.on('exit', function() {
    process.exit(0);
});
*/
/*
process.on('SIGTERM', function() {
    console.log('Goodbye!');
});*/