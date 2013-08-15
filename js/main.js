// Jamal Moubarak
// AVF1308

//DOM Ready function.
function onDeviceReady() {
	
	// Home Page pageinit function.
	$('#home').on('pageinit', function() {
	
	});
	
	// Week One Page pageinit function.
	$('#weekOne').on('pageinit', function() {

	});
	
	// Week Two Page pageinit function.
	$('#weekTwo').on('pageinit', function() {

	});
	
	// Week Three Page pageinit function.
	$('#weekThree').on('pageinit', function() {

	});
	

}
// All functions go below here.

$('#instagram').on('click', function() {
	$.mobile.changePage("#social", {});
	$('#insta').empty();
	$.ajax({
		url: "https://api.instagram.com/v1/users/237665722/media/recent/?access_token=237665722.674061d.6b8bd4ecc4964082827e1b8b9a739e34",
		type: "GET",
		dataType: "JSONP",
		success: function(photos, status) {
			alert("Enjoy My Photos!!!");
			console.log(photos.data);
			$.each(photos.data, function(i, val) {
				var makeLi = $("<li></li>").appendTo('#insta'),
						 a = $("<a/>", {"href": val.link, "target": "_blank"}).appendTo(makeLi),
					   img = $("<img/>", {"src": val.images.thumbnail.url}).appendTo(a);
					   
				if (val.caption){
                        a.attr("title", val.caption.text);
                }
			});
		}
	});
});

$('#fbook').on('click', function() {
	$.mobile.changePage("#social", {});
	$('#faceboo').empty();
	$.ajax({
		url: "https://graph.facebook.com/100001057172688?fields=id,name,albums.fields(can_upload,cover_photo,comments,sharedposts),feed.fields(comments),photos,picture,posts,statuses,videos_token=618228588208865|ULb0s2EwnML7ByFoQiF-coTZ4R0",
		type: "GET",
		dataType: "JSONP",
		success: function(status) {
			alert("Follow Me!!!");
			console.log(status);
			$.each(status.feed.data, function(i, data) {
				console.log(data.story);
					var makeSubLi = $("<li>" + data.story + "</li>" + "<li>" + "<img src='" + data.picture + "'/></li>" + "<hr />");
					makeSubLi.appendTo('#faceboo');					   
				if (data.caption){
                        a.attr("title", data.caption.text);
                }
			});
		}
	});
});


	$('#facebook').on('click', function() {
    	var ref = window.open('https://www.facebook.com/night1ife', '_blank', 'location=yes');
    	var myCallback = function(){
        	alert(event.url); 
        }
        ref.addEventListener('loadstart', myCallback);
        ref.removeEventListener('loadstart', myCallback);
        ref.addEventListener('exit', function() { 
        	alert(event.type); 
        });
        setTimeout(function() {
        	ref.close();
        }, 10000);   
    });







