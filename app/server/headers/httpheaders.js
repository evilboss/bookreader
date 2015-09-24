/**
 * Created by gilbertor on 9/24/15.
 */
var connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation
Meteor.startup(function () {
    connectHandler.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Headers', 'Range');
        res.setHeader('Access-Control-Expose-Headers', 'Accept-Ranges, Content-Encoding, Content-Length, Content-Range');
        return next();
    })
});