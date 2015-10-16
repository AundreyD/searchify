(function($) {
	//Don't worry, this easter egg is NOT in another castle
    'use strict';

    console.log('PRESS START TO PLAY');

    var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function() {
        $('#konami').show()
        window.setTimeout(function() {
        	$('#konami').css('display', 'none'); 
        }, 5000);
    }).listen();
})(jQuery);