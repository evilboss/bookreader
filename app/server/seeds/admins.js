/**
 * Created by gilbertor on 9/21/15.
 */

if (Admins.find({}).count() === 0) {
    var defaultAdmins = ['jr@internetsoftwaresystems.com','ar@internetsoftwaresystems.com']
    for(var admins in defaultAdmins){
        var admin = {email:defaultAdmins[admins]};
        Admins.insert(admin);
    }
}