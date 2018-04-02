var
    gulp = require("gulp"),
    del = require("del"),
    sync = require("browser-sync").create(),
    plugins = require("gulp-load-plugins")({
        scope: ["devDependencies"]
    });

var IS_DEV = true;                       //show status develop !!!NEED change to false!!!

/**task create html pages**/
gulp.task("html", function () {
   return gulp.src("src/views/*.html")
       .pipe(plugins.htmlExtend())              // extend html pages
       .pipe(gulp.dest("dist"))
});

/**task convert less to css**/
gulp.task("styles:app", function () {
    return gulp.src("src/styles/app.less")
        .pipe(plugins.if(IS_DEV, plugins.sourcemaps.init()))
        .pipe(plugins.plumber())                // catch errors
        .pipe(plugins.less())                   //converting to css
        .pipe(plugins.rename("app.min.css"))    //rename file
        .pipe(plugins.if(IS_DEV, plugins.sourcemaps.write(".")))
        .pipe(gulp.dest("dist/css"))
        .pipe(sync.stream())                    //implementation changes
});

/**tasks concat vendor css and fonts(bootstrap)**/
gulp.task("styles:vendor", function () {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ])
        .pipe(plugins.concat("vendor.min.css"))  // concat and rename bootstrap css file
        .pipe(gulp.dest("dist/css"))
});
/*bootstrap fonts*/

gulp.task("fonts:vendor", function () {
    return gulp.src(["node_modules/bootstrap/dist/fonts/*"])
        .pipe(gulp.dest("dist/fonts"))
});

/*
gulp.task("fonts:app", function () {
    return gulp.src(["src/fonts/*"])
        .pipe(gulp.dest("dist/fonts"))
});
*/

gulp.task("js:app", function () {
    return gulp.src("src/scripts/**/*.js")
        .pipe(plugins.concat("app.min.js"))
        .pipe(plugins.uglify(""))
        .pipe(gulp.dest("dist/js"))
});

gulp.task("js:vendor", function () {
    return gulp.src(["node_modules/jquery/dist/jquery.min.js"])
        .pipe(plugins.concat("vendor.min.js"))
        .pipe(plugins.uglify(""))
        .pipe(gulp.dest("dist/js"))
});

/*CAROUSEL*/
/*
gulp.task("styles:carousel", function () {
    return gulp.src([
        "src/plugins/carousel/css/owl.carousel.min.css"
    ])
        .pipe(plugins.concat("carousel.min.css"))  // concat and rename bootstrap css file
        .pipe(gulp.dest("dist/css"))
});
gulp.task("js:carousel", function () {
    return gulp.src(["src/plugins/carousel/js/owl.carousel.min.js"])
        .pipe(plugins.concat("carousel.min.js"))
        .pipe(plugins.uglify(""))
        .pipe(gulp.dest("dist/js"))
});
*/
/*Slick CAROUSEL*/
gulp.task("styles:carousel", function () {
    return gulp.src([
        "node_modules/slick-carousel/slick/*.css"
    ])
        .pipe(plugins.concat("slick-carousel.min.css"))  // concat and rename bootstrap css file
        .pipe(gulp.dest("dist/css"))
});
gulp.task("js:carousel", function () {
    return gulp.src(["node_modules/slick-carousel/slick/slick.min.js"])
        .pipe(plugins.concat("slick-carousel.min.js"))
        .pipe(plugins.uglify(""))
        .pipe(gulp.dest("dist/js"))
});
gulp.task("fonts:carousel", function () {
    return gulp.src(["node_modules/slick-carousel/slick/fonts/*"])
        .pipe(gulp.dest("dist/css/fonts"))
});


/**VALIDATOR**/
gulp.task("js:validator", function () {
    return gulp.src(["node_modules/jquery-validation/dist/jquery.validate.min.js"])
        .pipe(plugins.concat("validator.min.js"))
        .pipe(plugins.uglify(""))
        .pipe(gulp.dest("dist/js"))
});

/*DATATABLE*/
/*
gulp.task("styles:datatable", function () {
    return gulp.src([
        "node_modules//*.css"
    ])
        .pipe(plugins.concat(".css"))  // concat and rename bootstrap css file
        .pipe(gulp.dest("dist/css"))
});
gulp.task("js:datatable", function () {
    return gulp.src([".js"])
        .pipe(plugins.concat(".js"))
        .pipe(plugins.uglify(""))
        .pipe(gulp.dest("dist/js"))
});
*/


//**task for clean dist**//
gulp.task("del", function (callback) {
    del.sync("dist");
    callback();
});

gulp.task("img", function () {
    return gulp.src("src/img/*")
        .pipe(gulp.dest("dist/img"))
});

//**task for run all tasks**//
gulp.task("build", ["del"],  function () {
    gulp.start(["html",
        "styles:app",
        "styles:vendor",
        "img",
        "fonts:vendor",
        "js:app",
        "js:vendor",
        "styles:carousel",
        "js:carousel",
        "fonts:carousel",
        "js:validator"]);
});

//**task watch - for automatic implementation**//
gulp.task("watch", ["build"], function () {
    sync.init({
        server: "dist"
    });

    gulp.watch("src/styles/**/*.less", ["styles:app"]);

    gulp.watch("src/views/**/*.html", ["html"]);
    gulp.watch("dist/*.html").on("change", sync.reload);
});

/*task default*/
gulp.task("default", ["watch"]);