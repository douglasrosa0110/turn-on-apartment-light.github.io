$(document).ready(function() {
	$("map > span > img").each(function(){
		var $this = $(this)
		var id = $this.attr('id')
		var $img = $("img[id=" + id + "]")
		if(!$img.hasClass("sold")) $img.hide()
		$("area[title=" + id + "]").on('click', function(){
			if(!$img.hasClass('sold')){
				$img.show();
				$img.addClass('sold')
			} else {
				$img.hide();
				$img.removeClass('sold')
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


var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.elements = [
  	/* first block */
  	{code: "3002", x: "724", y: "192", class: "right", coords_on_click: "820,240,936,274"},
  	{code: "2902", x: "724", y: "234", class: "right", coords_on_click: "820,286,936,317"},
  	{code: "2802", x: "724", y: "282", class: "right", coords_on_click: "820,328,936,357"},
  	{code: "2702", x: "724", y: "326", class: "right", coords_on_click: "820,370,936,400"},
  	{code: "2602", x: "724", y: "370", class: "right", coords_on_click: "820,417,936,445"},
  	{code: "2502", x: "724", y: "415", class: "right", coords_on_click: "820,461,936,489"},
  	{code: "2402", x: "724", y: "460", class: "right", coords_on_click: "820,506,936,534"},
  	{code: "2302", x: "724", y: "506", class: "right", coords_on_click: "820,548,936,579"},
  	{code: "2202", x: "724", y: "552", class: "right", coords_on_click: "820,590,936,620"},
  	{code: "2102", x: "724", y: "596", class: "right", coords_on_click: "820,634,936,664"},
  	{code: "2002", x: "724", y: "640", class: "right", coords_on_click: "820,678,936,708"},
  	{code: "1902", x: "724", y: "687", class: "right", coords_on_click: "820,722,936,752"},
  	{code: "1802", x: "724", y: "731", class: "right", coords_on_click: "820,766,936,794"},

  	{code: "1702", x: "724", y: "778", class: "right ", coords_on_click: "820,808,936,840"},
  	{code: "1602", x: "724", y: "823", class: "right ", coords_on_click: "820,848,936,882"},
  	{code: "1502", x: "724", y: "875", class: "right sold", coords_on_click: "820,892,936,926"},
  	{code: "1402", x: "724", y: "920", class: "right ", coords_on_click: "820,935,936,968"},
  	{code: "1302", x: "724", y: "965", class: "right ", coords_on_click: "820,980,936,1013"},
  	{code: "1202", x: "724", y: "1009", class: "right ", coords_on_click: "820,1024,936,1057"},
  	{code: "1102", x: "724", y: "1054", class: "right ", coords_on_click: "820,1068,936,1101"},
  	{code: "1002", x: "724", y: "1104", class: "right ", coords_on_click: "820,1110,936,1145"},
  	{code: "902", x: "724", y: "1148", class: "right sold", coords_on_click: "820,1158,936,1186"},
  	/*
  	{code: "1602", x: "724", y: "282", class: "right ", coords_on_click: "820,326,936,356"},
  	{code: "1502", x: "724", y: "282", class: "right sold", coords_on_click: "820,326,936,356"},
  	{code: "1402", x: "724", y: "282", class: "right ", coords_on_click: "820,326,936,356"},
  	{code: "1302", x: "724", y: "282", class: "right ", coords_on_click: "820,326,936,356"},
  	{code: "1202", x: "724", y: "282", class: "right ", coords_on_click: "820,326,936,356"},
  	{code: "1102", x: "724", y: "282", class: "right ", coords_on_click: "820,326,936,356"},
  	{code: "1002", x: "724", y: "282", class: "right ", coords_on_click: "820,326,936,356"},
  	{code: "902", x: "724", y: "282", class: "right ", coords_on_click: "820,326,936,356"},
  	{code: "802", x: "724", y: "282", class: "right ", coords_on_click: "820,326,936,356"},
  	{code: "702", x: "724", y: "282", class: "right ", coords_on_click: "820,326,936,356"},
  	*/
  	
  	/* secound block */
  	{code: "3001", x: "420", y: "124", class: "left", coords_on_click: "285,240,405,270"},
  	/*
  	{code: "2901", x: "209", y: "234", class: "", coords_on_click: "324,286,936,317"},
  	{code: "2801", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	
  	{code: "2701", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "2601", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "2501", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "2401", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "2301", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "2201", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "2101", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "2001", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "1901", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "1801", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "1701", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "1601", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "1501", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "1401", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "1301", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "1201", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "1101", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "1001", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "901", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "801", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	{code: "701", x: "209", y: "282", class: "", coords_on_click: "324,326,936,356"},
  	*/
  ];
});

;(function($) {
	$.fn.rwdImageMaps = function() {
		var $img = this;

		var rwdImageMap = function() {
			$img.each(function() {
				if (typeof($(this).attr('usemap')) == 'undefined')
					return;

				var that = this,
					$that = $(that);

				// Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
				$('<img />').on('load', function() {
					var attrW = 'width',
						attrH = 'height',
						w = $that.attr(attrW),
						h = $that.attr(attrH);

					if (!w || !h) {
						var temp = new Image();
						temp.src = $that.attr('src');
						if (!w)
							w = temp.width;
						if (!h)
							h = temp.height;
					}

					var wPercent = $that.width()/100,
						hPercent = $that.height()/100,
						map = $that.attr('usemap').replace('#', ''),
						c = 'coords';

					$('map[name="' + map + '"]').find('area').each(function() {
						var $this = $(this);
						if (!$this.data(c))
							$this.data(c, $this.attr(c));

						var coords = $this.data(c).split(','),
							coordsPercent = new Array(coords.length);

						for (var i = 0; i < coordsPercent.length; ++i) {
							if (i % 2 === 0){
								//console.log(wPercent)
								coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent*2.77);
							} else {
								//console.log(hPercent)
								coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent*2.77);
							}
						}
						$this.attr(c, coordsPercent.toString());
						
						/* lights resize */
						var id = $this.attr('title') 
						//$img = $("img[id=" + id + "]")
						$("img[id=" + id + "]").css({left: coordsPercent[0].toString() + 'px'})
						$("img[id=" + id + "]").css({top: coordsPercent[1].toString() + 'px'})

						if($("img[id=" + id + "]").hasClass("right")){
							$("img[id=" + id + "]").css({width: (4.8*wPercent).toString() + 'px'})
						} else {
							$("img[id=" + id + "]").css({width: (23.5*wPercent).toString() + 'px'})
						}

					});

				}).attr('src', $that.attr('src'));
			});
		};
		$(window).resize(rwdImageMap).trigger('resize');

		return this;
	};
})(jQuery);


