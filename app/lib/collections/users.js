/**
 * Created by gilbertor on 9/21/15.
 */
Meteor.users.after.insert(function (userId, doc) {
    var adminlist = Admins.find().fetch();
    for (var admin in adminlist) {
        if (doc.services.google.email === adminlist[admin].email) {
            Meteor.users.update({_id:doc._id},{$set:{roles:['admin']}});
            break;
        }
    }
});
