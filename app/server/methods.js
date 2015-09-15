/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
    myServerMethod: function (doc) {
        try {
            check(doc, mySchema);
            mySchema.clean(doc);
        } catch (e) {
            throw new Meteor.Error(e);
        }
    }
})
