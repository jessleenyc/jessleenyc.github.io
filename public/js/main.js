$( document ).ready(function() {
  // Initialize collapse button
  $(".button-collapse").sideNav();

  fluidvids.init({
    selector: ['iframe', 'object'], // runs querySelectorAll()
    players: ['player.vimeo.com'] // players to support
  });

  fluidvids.render();

  //change text
  var text = [
    { name: "FILMS.",
      link: "#film",
    },{
      name: "FRIENDS.",
      link: "#contact"}, 
     {
      name: "WEBSITES.",
      link: "#web"
    }];
    
  i = 0
    
  var timer = setInterval( function(){
      $('#text').attr("href", text[i % text.length].link)
      $('#text').text(text[i++ % text.length].name);
    }, 1000);

  $('#text').hover(function(cb) {
    clearInterval(timer);
  }, function(cb) {
    timer = setInterval (function() {
      $('#text').attr("href", text[i % text.length].link)
      $('#text').text(text[i++ % text.length].name);
    }, 1000);
  })

  //navigation modal
  $('.modal-trigger').leanModal();

  //scrolls to element

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });

  var $popOver = $('#pop-over');

  $popOver.css({position: 'fixed', bottom: '0', right: '300px'});
  

  var popOutFunc = function() {
      $popOver.toggle( function() {
        $('body').on('click', function() {
        console.log('clicked body');
        $popOver.toggle();
        $('body').off();
      })

    });

  };

  $('#snapmenu').on('click', popOutFunc);

  $(function() {
    FastClick.attach(document.body);
});


});