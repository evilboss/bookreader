Template.library.rendered = function() {

};
Template.library.helpers({
'LibraryList':function(){
    if(Router.current().params.category){
        return Books.find({category:Router.current().params.category}).fetch();
    }
    return Books.find().fetch();
}
});
