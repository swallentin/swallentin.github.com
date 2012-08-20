$(function() {

  $('#gallery').gallery({
    url: 'http://api.flickr.com/services/feeds/photoset.gne?set=72157625970180048&nsid=50536211@N00&lang=en-us&jsoncallback=?',
    viewerTemplate: Handlebars.compile($("#viewer-template").html()),
    thumbnailTemplate: Handlebars.compile($("#thumbnail-template").html()),
    effects: function(element) {
      // apply effects
      element
        .mouseover(function() {
          $('.btn-navigate').stop().fadeTo(500, 1);
        })
        .mouseout(function() {
          $('.btn-navigate').stop().fadeTo(500, 0);
        });

      element.find('.thumbnail')
        .mouseover(function() {
          !$(this).hasClass('active') && $(this).stop().fadeTo(500, 1);
        })
        .mouseout(function() {
          !$(this).hasClass('active') && $(this).stop().fadeTo(500, 0.5);
        });
    },

  });
})
