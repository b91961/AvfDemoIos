// Jamal Moubarak
// AVF1308

// Device APIs are available
function onDeviceReady() {

	navigator.splashscreen.show();
	pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;

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

	});
}
// All functions go below here.

	setTimeout(function() {
        navigator.splashscreen.hide();
    }, 5000);
	
	$('#instagram').on('click', function() {
		$.mobile.changePage("#instagramp", {});
		$.ajax({
			url: "https://api.instagram.com/v1/users/237665722/media/recent/?access_token=237665722.674061d.6b8bd4ecc4964082827e1b8b9a739e34",
			type: "GET",
			dataType: "JSONP",
			success: function(photos, status) {
				$('#insta').empty();
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
		$.ajax({
			url: "https://graph.facebook.com/100001057172688?fields=devices,feed,photos,posts,statuses&access_token=CAACEdEose0cBAGogMcADVOLpQ9HdJdlSOZBUvhC6Fjj6XTQVH4pgOhp1ltct66LuxMLLrdbXz3koj0IrUVVUjrkyt8bfeQtnLkA7SbFQulzZBlfcQAO3qs5VLEExrd0gI93moj4Ny44ZA3xF6us9q0Iy21JpNii2rN8aWPi2RVJ1nh9VrQWIQZAcxuRSDJYZD",
			type: "GET",
			dataType: "JSONP",
			success: function(stream) {
				$('#faceboo').empty();
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
	});
	
	// Camera Functions
	var pictureSource;   
    var destinationType; 
    document.addEventListener("deviceready",onDeviceReady,false);
    function onPhotoDataSuccess(imageData) {
      console.log(imageData);
      var smallImage = $('#smallImage');
      smallImage.style.display = 'block';
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }
    function onPhotoURISuccess(imageURI) {
      console.log(imageURI);
      var largeImage = $('#largeImage');
      largeImage.style.display = 'block';
      largeImage.src = imageURI;
    }
    function onFail(message) {
      alert('There is ' + message);
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
    
    // Geolocation Function
	var geo = function(position){
		var latitude = position.coords.latitude;
		var	longitude = position.coords.longitude;
		$('#geolocation').html('<img class="googApi" src= "http://maps.googleapis.com/maps/api/staticmap?&zoom=14&size=800x600&maptype=roadmap&markers=color:blue%7Clabel:%7C' + latitude + ', '+ longitude + '&sensor=true" />' + '<p>' + 'Latitude = ' + latitude + ',<br> Longitude ='+ longitude + '</p>');
	 	alert("Here is your location.");  
	};
	var onErr = function(error) {
	    alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
	};
	$('#geo').on('click', function() { 
		$.mobile.changePage("#geoPage", {});
		 navigator.geolocation.getCurrentPosition(geo, onErr, {enableHighAccuracy:true});
	});
    
/*    var devCord = device.cordova;
		var devPlat = device.platform;
		var devUuid = device.uuid;
		var devMod = device.model;
		var devVer = device.version;
		$('#devInfo').html( 'Device Cordova: '  + devCord + '<br>' + 
							'Device Platform: ' + devPlat + '<br>' + 
							'Device UUID: '     + devUuid + '<br>' + 
							'Device Model: '    + devMod + '<br>' + 
							'Device Version: '  + devVer + '<br>' + 
							'<p><img class = icon src = "img/' + devPlat + '.png"/></p>');
	});*/
	
	
    

   







