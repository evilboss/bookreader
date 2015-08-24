/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish(null, function (){
    return Meteor.roles.find({})
})