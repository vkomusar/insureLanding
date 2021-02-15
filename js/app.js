document.addEventListener('DOMContentLoaded', init, false);
function init(){
  var button = document.getElementById('toggleBtn');
  button.addEventListener('click', function() {

    //check if checkbox is checked if NOT add class
    var noScroll = document.body;
    noScroll.classList = 'noScroll';
    //if checkbox is checked REMOVE class

  });
};

