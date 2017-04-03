import gulp from 'gulp';
import mocha from 'gulp-mocha';
import cp from 'child_process';
import exit from 'gulp-exit';

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

function handleError(err) {
    this.emit('end');
}

gulp.task('runtests', ['mongorestore'], function() {
    return gulp.src('./test/**/*.js', { read: false })
        .pipe(mocha({}).on("error", handleError));
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

gulp.on('stop', () => { process.exit(0); });
gulp.on('err', () => { process.exit(1); });

process.on('exit', function() {
    if (node) node.kill()
})