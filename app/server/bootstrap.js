Meteor.startup(function () {
    var connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation
    Meteor.startup(function () {
        connectHandler.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*'); // Set Http Headers to allow all origin
            res.setHeader('Access-Control-Allow-Headers', 'range');
            res.setHeader('Access-Control-Expose-Headers', 'content-range, content-length, accept-ranges');
            res.setHeader('Access-Control-Allow-Methods', 'GET');
            return next();
        })
    })
    UploadServer.init({
        tmpDir: process.env.PWD + '/.uploads/tmp',
        uploadDir: process.env.PWD + '/.uploads/',
        checkCreateDirectories: true //create the directories for you
    })
});