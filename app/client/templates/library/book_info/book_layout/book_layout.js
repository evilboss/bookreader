/*****************************************************************************/
/* BookLayout: Event Handlers */
/*****************************************************************************/
Template.BookLayout.events({});

/*****************************************************************************/
/* BookLayout: Helpers */
/*****************************************************************************/
Template.BookLayout.helpers({});

/*****************************************************************************/
/* BookLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.BookLayout.created = function () {
};

Template.BookLayout.rendered = function () {
    var currentBook = Template.instance().data.file;
    var ref = window.open('http://mozilla.github.io/pdf.js/web/viewer.html?file='+currentBook, '_blank','location=no');
    ref.addEventListener('exit',function(event){
        Router.go('library');
    })

};

Template.BookLayout.destroyed = function () {
};
