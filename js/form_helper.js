jQuery(function($) {

  var newUrlInput = $('#edit-add-new-url');
  var newPathInput = $('#edit-add-new-path');
  newPathInput.focus(function() {
    console.log('focus fired');
    // Auto fill the path for a new url
    if(newUrlInput.val().length && newPathInput.val() == "" ){

      // URL parser https://gist.github.com/jlong/2428561
      // a clever way of parsing urls without a function
      var parser = document.createElement('a');
      parser.href = newUrlInput.val();

      $('#edit-add-new-path').val('cef'+parser.pathname);
    }
  });

});
