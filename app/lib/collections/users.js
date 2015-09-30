/**
 * Created by gilbertor on 9/21/15.
 */
Meteor.users.after.insert(function (userId, doc) {
    var adminlist = Admins.find().fetch();
    if (doc.emails) {
        for (var email in doc.emails) {
            for (var admin in adminlist) {
                if (doc.emails[email].address === adminlist[admin].email) {
                    Meteor.users.update({_id: doc._id}, {$set: {roles: ['admin']}});
                    break;
                }
            }
            var str = doc.emails[email].address;
            var name = str.match(/^([^@]*)@/)[1];
            if (name) {
                Meteor.users.update({_id: doc._id}, {$set: {profile: {name: name}}});
            }
        }
    }
    /*Accounts.sendVerificationEmail(userId);*/

});
