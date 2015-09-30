/**
 * Created by aarondrup on 9/21/15.
 */
Meteor.startup(function() {
    Meteor.absoluteUrl.defaultOptions.rootUrl = "http://104.131.121.40";

    Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
    Uploader.finished = function(index, fileInfo, templateContext) {
        Uploads.insert(fileInfo);
        console.log(fileInfo);
        GlobalNotification.info({
            title: 'Admin has added new book',
            content: fileInfo.name,
            duration: 10 // duration the notification should stay in seconds
        });
    }
});