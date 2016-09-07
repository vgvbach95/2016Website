$(document).ready(function(){
  $('.block.content').AniView();
  var options = {
    animateThreshold: 100,
    scrollPollInterval: 50
  }
  $('.block.content').AniView(options);
});
