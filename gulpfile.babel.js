import gulp from 'gulp';
import mocha from 'gulp-mocha';
import cp from 'child_process';

var spawn = cp.spawn;

var node;

// mongorestore - restore 'testdb' database to localhost
gulp.task('mongorestore', function() {
    /*
    mongobackup.restore({
        host : 'localhost',
        drop : true,
        path : './dumps/mongo/testdb'
    });
    */
});

gulp.task('runtests', ['mongorestore'], function() {
    return gulp.src('./test/**/*.js', { read: false })
        .pipe(mocha({}));
});

gulp.task('start-dev', ['runtests'], function() {
    if (node) node.kill();
    node = spawn('node', ['./bin/www'], { stdio: 'inherit' })
    node.on('close', function(code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
});

gulp.task('default', ['start-dev'], function() {
    "use strict";

});

process.on('exit', function() {
    if (node) node.kill()
})