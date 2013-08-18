// Jamal Moubarak
// AVF1308

// Device APIs are available
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
	// Social Page pageinit function.
	$('#social').on('pageinit', function() {

	});	
	// Instagram Page pageinit function.
	$('#instagramp').on('pageinit', function() {

	});
	// Facebook Page pageinit function.
	$('#facebookp').on('pageinit', function() {

	});	
	// Twitter Page pageinit function.
	$('#twitterp').on('pageinit', function() {
	
		function externalLinks() {
			if (!document.getElementsByTagName) return;
			var anchors = document.getElementsByTagName("a");
			for (var i=0; i<anchors.length; i++) {
				var anchor = anchors[i];
				if (anchor.getAttribute("href") &&
					anchor.getAttribute("rel") == "external")
				anchor.target = "_blank";
			}
		}
		window.onload = function() {
			externalLinks();
		};

	});
}
// All functions go below here.
	
	var camera = function() {
			
	};
	var storage = function() {
			
	};
	var geolocation = function() {
		
	};
	var notifications = function() {
		
	};
	var capture = function() {
		
	};
	

	$('#instagram').on('click', function() {
		$.mobile.changePage("#instagramp", {});
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
		$.mobile.changePage("#facebookp", {});
		$('#faceboo').empty();
		$.ajax({
			url: "https://graph.facebook.com/100001057172688?fields=devices,feed,photos,posts&access_token=CAACEdEose0cBAMrhubmElYhlNfEQAIrh12J7Bs0sOWR1a5ZB72gMUCFV4mOj1REcOAvjZAJ0o28R3uvL9y4MoVonPcOZCYh4F6ErJlpJou4FfXPCbqO6WktSoZC53A7yvxQ7dqOnyPbH6A5Eufn5wFJXWCwMwidR58Qt6ZAdLgnDnIuqjZC5M4UsbmZAL1AGTsZD",
			type: "GET",
			dataType: "JSONP",
			success: function(stream) {
				alert("Follow Me!!!");
				console.log(stream);
				$.each(stream.feed.data, function(i, data) {
					console.log(data.story);
						var makeSubLi = $("<div id='posts'><h3 id='textStory'>" + data.story + "</h3><li id='pictureStory'><img src='" + data.picture + "' id='fbPic'/></li></div>");
						makeSubLi.appendTo('#faceboo');					   	                
				});
			}
		});
	});
	
	$('#twitter').on('click', function() {
		alert("Follow my Tweets!!!");
/*		setTimeout(function() {
        	window.location.reload(#);
        }, 2000); 
		window.location.reload();
		return false;*/
	});
	

	$('#facebook').on('click', function() {
    	var ref = window.open('https://www.facebook.com/night1ife', '_blank', 'location=yes');
    	var myCallback = function(){
        	alert(event.url); 
        };
        ref.addEventListener('loadstart', myCallback);
        ref.removeEventListener('loadstart', myCallback);
        ref.addEventListener('exit', function() { 
        	alert(event.type); 
        });
        setTimeout(function() {
        	ref.close();
        }, 10000);   
    });


// Wait for device API libraries to load.
document.addEventListener("deviceready", onDeviceReady, false);
$("#nav-camera").on("click", camera);
$("#nav-storage").on("click", storage);
$("#nav-geolocation").on("click", geolocation);
$("#nav-notifications").on("click", notifications);
$("#nav-capture").on("click", capture);







