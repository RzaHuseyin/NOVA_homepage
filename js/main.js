$(document).ready(function(){

	$("#navbar .list-inline li").eq(3).hover(function() {

		$("#navbar .list-inline li i").removeClass(' fa-angle-down').addClass(' fa-angle-up')
		$("#navbar .drop_down").fadeIn("slow");
	}, function() {
		$("#navbar .list-inline li i").removeClass(' fa-angle-up').addClass(' fa-angle-down')
		$("#navbar .drop_down").fadeOut("slow");
	});
	$("#navbar .hoverList").hover(function() {
		$("#navbar .drop_down").fadeOut("slow");
	}, function() {
		$("#navbar .drop_down").fadeIn("slow");
	});

	$("#navbar #navIcon").click(function(event) {
		$("#navbar  ul" ).slideToggle("slow");
				/* Act on the event */
	});
	
	a= true;
	c= true;
	$("#header .clickIcon").click(function(event) {
		if(a==true){
			$("#header .clickForm").css('visibility', 'visible');
			a=false;
		}
		else{
			$("#header .clickForm").css('visibility', 'hidden');
			a=true;
		}
		/* Act on the event */
	});
	$("#header .clickSpan ,.clickSpandisplay").hover(function() {
			$("#header .clickSpandisplay").css('display', 'block');
			$("#header .clickSpan").children().eq(0).css('color', '#6b338d');

		/* Stuff to do when the mouse enters the element */
	}, function() {
			$("#header .clickSpandisplay").css('display', 'none');
			$("#header .clickSpan").children().eq(0).css('color', 'black');

		/* Stuff to do when the mouse leaves the element */
	});
	

	$("#services .padding50 button").click(function(event) {
		if(c==true){
			$("#services .padding50.js-display").show("slow");
			$("#services .padding50 button i").removeClass(' fa-angle-down').addClass(' fa-angle-up')
			c=false;
		}
		else{
			$("#services .padding50.js-display").hide("slow");
			$("#services .padding50 button i").removeClass(' fa-angle-up').addClass(' fa-angle-down')
			c=true;
		}
		/* Act on the event */
	});
	$("#products #owl-demo").owlCarousel({
		navigation:true,
		items:3,
		sideSpeed:300,
		singleItems:true,
		paginationSpeed:400,
		margin:20,
		nav:true,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:false
			},
			1240:{
				items:3,
				nav:true
			}
		}
	})
	$("#partners #owl-demo").owlCarousel({
		navigation:true,
		items:3,
		sideSpeed:300,
		singleItems:true,
		paginationSpeed:400,
		nav:true,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			390:{
				items:3,
				nav:false
			},
			1078:{
				items:3,
				nav:false
			},
			1180:{
				nav:true
			}
		}

	})
	nocolorImg = ["img/partners_icons/icon01color.png","img/partners_icons/icon02color.png","img/partners_icons/icon03color.png","img/partners_icons/icon04color.png","img/partners_icons/icon05color.png","img/partners_icons/icon06color.png"]
	colorImg = ["img/partners_icons/icon01.png","img/partners_icons/icon02.png","img/partners_icons/icon03.png","img/partners_icons/icon04.png","img/partners_icons/icon05.png","img/partners_icons/icon06.png"]

	$("#partners #owl-demo img").hover(function() {
		$(this).attr('src', colorImg[nocolorImg.indexOf($(this).attr('src'))]);
		/* Stuff to do when the mouse enters the element */
	}, function() {
		$(this).attr('src', nocolorImg[colorImg.indexOf($(this).attr('src'))]);
		/* Stuff to do when the mouse leaves the element */
	});
});