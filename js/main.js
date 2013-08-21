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
							 a = $("<a/>", {"href": val.link, "target": "_blank" }).appendTo(makeLi),
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
	
	// Camera Page
	var pictureSource;   
    var destinationType; 
    document.addEventListener("deviceready",onDeviceReady,false);
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
    function onPhotoDataSuccess(imageData) {
      console.log(imageData);
      var smallImage = document.getElementById('smallImage');
      smallImage.style.display = 'block';
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }
    function onPhotoURISuccess(imageURI) {
      console.log(imageURI);
      var largeImage = document.getElementById('largeImage');
      largeImage.style.display = 'block';
      largeImage.src = imageURI;
    }
    // Take Photo.
    function capturePhoto() {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL, saveToPhotoAlbum: true });
    }
    // Take Photo and minor edit.
    function capturePhotoEdit() {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, allowEdit: true,
        destinationType: destinationType.DATA_URL, saveToPhotoAlbum: true });
    }
    // Retrieve photo from specific source.
    function getPhoto(source) {
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URI,
        sourceType: source });
    }
    function onFail(message) {
      alert('There is ' + message);
    }








