$(document).ready(function(){
	var h = $( window ).height();
	var w = $( window ).width();
	var classes = [];
	$('[class]').each(function(){
	    $($(this).attr('class').split(' ')).each(function() { 
	        if (this.length>0 && $.inArray(this.valueOf(), classes) === -1) {
	            classes.push(this.valueOf());
	        }    
	    });
	});
	for (i in classes) {	    
	    
	    if(classes[i].search("h-") == 0){
	    	var x = classes[i].split("-"); 
	    	var height = (x[1]/x[2])*h;

	    	$("."+classes[i]).css("height",height);
	    }

	    if(classes[i].search("w-") == 0){
	    	var y = classes[i].split("-"); 
	    	var width = (y[1]/y[2])*w;
	    	$("."+classes[i]).css("width",width);
	    }
	}
});