/*****************************************************************************/
/* UploadBook: Event Handlers */
/*****************************************************************************/
Template.UploadBook.events({
});

/*****************************************************************************/
/* UploadBook: Helpers */
/*****************************************************************************/
Template.UploadBook.helpers({
});

/*****************************************************************************/
/* UploadBook: Lifecycle Hooks */
/*****************************************************************************/
Template.UploadBook.created = function () {
};

Template.UploadBook.rendered = function () {
    $('i').replaceWith(function(){
        return $(this).append('<span class="someClass">some text</span>');
    });
};

Template.UploadBook.destroyed = function () {
};
Uploads.after.insert(function (userId, doc) {
    Books.update({_id:Router.current().params.id},{$set:{file:doc.url}});
    var users = Meteor.users.find().fetch();
    for(var user in users){
        if(!Roles.userIsInRole(users[user]._id, 'admin')){
            var book = Books.findOne({_id:Router.current().params.id});
            Notifications.new({ title: book.title+' has been added to the library', owner:users[user]._id,link:'/book/'+Router.current().params.id});
        }
    }
    alert('Book Successfully Added');
    Router.go('library');
});
