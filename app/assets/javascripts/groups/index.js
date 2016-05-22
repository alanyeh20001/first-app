$(function() {
  var floating = $("#floating-section"),
      footer = $("#footer"),
      content = $("#content"),
      floatingHeight = floating.outerHeight(),
      floatingTop = floating.offset().top,
      fixedCSS = {"top": "10px", "position": "fixed"},
      staticCSS = {"position": "static"};
      
  window.floatingSectionMove = function() {
    var scrollTop = $(document).scrollTop();
    
    if (scrollTop > floatingTop) {
      footerTop = footer.offset().top;
      contentTop = content.offset().top;
      contentHeight = content.outerHeight();

      if ((scrollTop + floatingHeight) < footerTop) {
        floating.css(fixedCSS);
      } else {
        newTop = footerTop - (scrollTop + floatingHeight);
        floating.css({"top": newTop + "px", "position": "fixed"});
      }
    } else {
      floatingTop = floating.offset().top;
      floating.css(staticCSS);
    }
  };
  
  $(window).scroll(function(){
    floatingSectionMove();
  });
  
});
