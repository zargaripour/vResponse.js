/*!
* Item: vResponsive 1.0 (https://github.com/zargaripour/vResponse)
* Author: Hamed Zargaripour (http://zargaripour.ir)
* Licensed under MIT
*/
+function ($)
  {
    function vResponse(speed)
      {
        if(!speed) {speed = 500}
        return this.each
          (
            function ()
              {
                var w = $(window).height();
                var m = $(this).height();
                if(w>m)
                  $(this).stop(true).animate({marginTop: ((w-m)/2)}, speed);
                else
                  $(this).stop(true).animate({marginTop: 0}, speed);
              }
          )
      }
    $.fn.vResponse = vResponse;
  }(jQuery);