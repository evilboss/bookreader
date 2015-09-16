Template.library.rendered = function() {

};
Template.library.helpers({
    'bookList':function(){
        return Books.find({}).fetch();
    }
});
