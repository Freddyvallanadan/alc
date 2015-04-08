$(document).ready(function(){
	var owl = $(".owl");
	var owl2=$(".owl_banner");
	owl.owlCarousel({
items:true,
autoplay:true,
loop:true,
autoplaySpeed:300
});
	owl2.owlCarousel({
		items:true,
		loop:true
	});
owl.on('changed.owl.carousel', function(event) {
 owl2.trigger('next.owl.carousel');
})
	
});
