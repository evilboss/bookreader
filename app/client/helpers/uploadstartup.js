/**
 * Created by aarondrup on 9/21/15.
 */
Meteor.startup(function() {
    Meteor.absoluteUrl.defaultOptions.rootUrl = "http://45.55.159.163";

    Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
    Uploader.finished = function(index, fileInfo, templateContext) {
        Uploads.insert(fileInfo);
    }
});