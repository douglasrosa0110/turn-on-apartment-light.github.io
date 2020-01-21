$(document).ready(function() {
	$("img[class=apto]").each(function(){
		var $this = $(this)
		var id = $this.attr('id')
		var $img = $("img[id=" + id + "]")
		$img.hide()
		$("area[title=" + id + "]").on('click', function(){
			if(!$img.hasClass('on')){
				$img.show();
				$img.addClass('on')
			} else {
				$img.hide();
				$img.removeClass('on')
			}
		})
	})

	$('img[usemap]').rwdImageMaps();
    
    $("img").on("click", function(event) {
    	var w = window.innerWidth;
		var h = window.innerHeight;
	    var x = event.pageX - this.offsetLeft;
	    var y = event.pageY - this.offsetTop;
	    var percent_x = (x/w)*100
	    var percent_y = (y/w)*100
	    alert_txt = "X: " + x + "; " 
	    alert_txt += "Y: " + y + "; " 
	    alert_txt += "X%: " + (x/w)*100 + "; " 
	    alert_txt += "Y%: " + (y/w)*100 + "; " 
	    alert_txt += "window.width: " + (w) + "; " 
	    alert_txt += "window.height: " + (h) + "; " 
        alert(alert_txt);
    });
});


