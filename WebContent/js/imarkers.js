/**
 * Icon in markers
 */
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

google.maps.event.addDomListener(window, 'load', 
		/**function(){
	var map=new google.maps.Map(document.getElementById('div_map'),{
		zoom:6,
		center: new google.maps.LatLng(19.430, -99.100),
		mapTypeId:google.maps.MapTypeId.ROADMAP
	});**/
	function initMap() {
		  var usRoadMapType = new google.maps.StyledMapType([
		      {featureType: 'road.highway', elementType: 'geometry',stylers: [{hue: '#77009C'},{saturation: 60},{lightness: -20}]}, 
		      {featureType: 'road.arterial',elementType: 'all',stylers: [{hue: '#2200ff'},{lightness: -40},{visibility: 'simplified'},{saturation: 30}]}, 
		      {featureType: 'road.local',elementType: 'all',stylers: [{hue: '#f6ff00'},{saturation: 50},{gamma: 0.7},{visibility: 'simplified'}]},
		      {featureType: 'water', elementType: 'geometry',stylers: [{saturation: 40},{lightness: 40}]}, 
		      {featureType: 'road.highway', elementType: 'labels',stylers: [{visibility: 'on'},{saturation: 98}]}, 
		      {featureType: 'administrative.locality',elementType: 'labels',stylers: [{hue: '#0022ff'},{saturation: 50},{lightness: -10},{gamma: 0.90}]},
		      {featureType: 'transit.line',elementType: 'geometry',stylers: [{hue: '#ff0000'},{visibility: 'on'},{lightness: -70} ]}
		    ], {name: 'US Road Atlas'});
		  
		  var directionsRerenderOptions = {
					markerOptions:{
						icon: new google.maps.MarkerImage("../img/Oil-Barrel-icon.png") 
					}};

		  directionsDisplay = new google.maps.DirectionsRenderer();
			directionsDisplay.setOptions(directionsRerenderOptions);
		   map = new google.maps.Map(document.getElementById('div_map'), {
			  zoom:5,
			 center: new google.maps.LatLng(21.824729, -101.156169),
		    mapTypeControlOptions: {
		      mapTypeId: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
		    }
		  });
		   
		   directionsDisplay.setMap(map);

		  map.mapTypes.set('usroadatlas', usRoadMapType);
		  map.setMapTypeId('usroadatlas');
		
		  var info2=new google.maps.InfoWindow;
		  var clickMarker2= function(){
		  	var marker= this;
		  	var latLng= marker.getPosition();
		  	info2.setContent('<h3>Veracruz</h3>'
		  			+"latitude and longitude "+latLng+"<br /><br />"+"type site: "
		  			+'<img src="img/OilWell1.png"/>'
		  			+'<img src="img/gas1.PNG"/>'+"<br /><br />"+
		  			"<a href='http://veracruz.gob.mx/'>Link of site Veracruz</a>");
		  	info2.open(map, marker);
		  };

		  google.maps.event.addListener(map, 'mouseout',function(){
		  		info2.close();
		  });

		  var marker2=new google.maps.Marker({
		  	map:map,
		  	position:new google.maps.LatLng(19.1788445, -96.2113358),
		  });
		  google.maps.event.addListener(marker2,'mouseover',clickMarker2);

		  var info4=new google.maps.InfoWindow;
		  var clickMarker4= function(){
		  	var marker= this;
		  	var latLng= marker.getPosition();
		  	info4.setContent('<h3>TAMAULIPAS </h3>'
		  			+"type site: "+'<img src="img/OilWell2.png"/>'
		  			+'<img src="img/gas2.PNG"/>'+"<br /><br />"
		  			+"latitude and longitude "+latLng+"<br /><br />"+
		  			"<a href='http://tamaulipas.gob.mx//'>Link of site TAMAULIAS</a>");
		  	info4.open(map, marker);
		  };

		  google.maps.event.addListener(map, 'mouseout',function(){
		  		info4.close();
		  });
		  	
		  var marker4=new google.maps.Marker({
		  	map:map,
		  	position:new google.maps.LatLng(23.5249482, -99.6089),
		  });
		  google.maps.event.addListener(marker4,'mouseover',clickMarker4);

		  var info5=new google.maps.InfoWindow;
		  var clickMarker5= function(){
		  	var marker= this;
		  	var latLng= marker.getPosition();
		  	info5.setContent('<h3>CAMPECHE </h3>'+"<br /><br />"
		  			+"type site: "+'<img src="img/OilWell3.png"/>'
		  			+'<img src="img/gas3.PNG"/>'+"<br /><br />"
		  			+"latitude and longitude "+latLng+"<br /><br />"+
		  			"<a href='http://campeche.gob.mx//'>Link of site Campeche</a>");
		  	info5.open(map, marker);
		  };

		  google.maps.event.addListener(map, 'mouseout',function(){
		  		info5.close();
		  });

		  var marker5=new google.maps.Marker({
		  	map:map,
		  	position:new google.maps.LatLng(18.5353532,-92.2066762),
		  	
		  });
		  google.maps.event.addListener(marker5,'mouseover',clickMarker5);
		  
		  var info3=new google.maps.InfoWindow;
		  var clickMarker3= function(){
		  	var marker= this;
		  	var latLng= marker.getPosition();
		  	info3.setContent('<h3>TAMPICO </h3>'+"<br /><br />"
		  			+"type site: "+'<img src="img/OilWell2.png"/>'
		  			+'<img src="img/gas1.PNG"/>'+"<br /><br />"
		  			+"latitude and longitude "+latLng+"<br /><br />"+
		  			"<a href='http://tampico.gob.mx/'>Link of site Tampico</a>");
		  	info3.open(map, marker);
		  };

		  google.maps.event.addListener(map, 'mouseout',function(){
		  		info3.close();
		  });

		  var marker3=new google.maps.Marker({
		  	map:map,
		  	position:new google.maps.LatLng(22.2701501,-97.9883931),
		  });
		  google.maps.event.addListener(marker3,'mouseover',clickMarker3);
		  
		  var info7=new google.maps.InfoWindow;
		  var clickMarker7= function(){
		  	var marker= this;
		  	var latLng= marker.getPosition();
		  	info7.setContent('<h3>AGUASCALIENTES</h3>'+"<br /><br />"
		  			+"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
		  			+"latitude and longitude "+latLng+"<br /><br />"+
		  			"<a href='http://aguascalientes.gob.mx//'>Link of site Aguascalientes</a>");
		  	info7.open(map, marker);
		  };

		  google.maps.event.addListener(map, 'mouseout',function(){
		  		info7.close();
		  });

		  var marker7=new google.maps.Marker({
		  	map:map,
		  	position:new google.maps.LatLng(21.8858792,-102.3613403),
		  	
		  });
		  google.maps.event.addListener(marker7,'mouseover',clickMarker7);

		  var info8=new google.maps.InfoWindow;
		  var clickMarker8= function(){
		  	var marker= this;
		  	var latLng= marker.getPosition();
		  	info8.setContent('<h3>DURANGO</h3>'+"<br /><br />"
		  			+"type site: "+'<img src="img/Oil-Barrel-icon.png"/>'+"<br /><br />"
		  			+"latitude and longitude "+latLng+"<br /><br />"+
		  			"<a href='http://durango.gob.mx//'>Link of site Durango</a>");
		  	info8.open(map, marker);
		  };

		  google.maps.event.addListener(map, 'mouseout',function(){
		  		info8.close();
		  });

		  var marker8=new google.maps.Marker({
		  	map:map,
		  	position:new google.maps.LatLng(24.0228392,-104.7177655),
		  	
		  });
		  google.maps.event.addListener(marker8,'mouseover',clickMarker8);
		 
		  var info6=new google.maps.InfoWindow;
		  var clickMarker6= function(){
		  	var marker= this;
		  	var latLng= marker.getPosition();
		  	info6.setContent('<h3>GUADALAJARA </h3>'+"<br /><br />"
		  			+"type site: "+'<img src="img/OilWell3.png"/>'+"<br /><br />"
		  			+"latitude and longitude "+latLng+"<br /><br />"+
		  			"<a href='http://guadalajara.gob.mx//'>Link of site Guadalajara</a>");
		  	info6.open(map, marker);
		  };

		  google.maps.event.addListener(map, 'mouseout',function(){
		  		info6.close();
		  });

		  var marker6=new google.maps.Marker({
		  	map:map,
		  	position:new google.maps.LatLng(20.6739383,-103.4054539),
		  	
		  });
		  google.maps.event.addListener(marker6,'mouseover',clickMarker6);	  
});
//es la primerra
var robots;

function handleDirectionsResponse(start,half, directionsResult){
	directionsDisplay.setDirections(directionsResult);
	var routes = directionsResult.routes;
	for(var i=0; i<routes.length; i++){
		var totalDistance = 0;
		var legs = routes[i].legs;
		for(j=0; j<legs.length; j++){
			totalDistance += legs[j].distance.value;
		}
		document.getElementById("distance").innerHTML= Math.round(totalDistance/1000);
	var month = ((totalDistance/1000) /730)/0.1;
	if ((totalDistance/1000) <=403.2 ){
		robots = 1;
	}if ((totalDistance/1000) >403.2 && (totalDistance/1000)<=806.4){
		robots = 2; 
	}if ((totalDistance/1000) >806.4 && (totalDistance/1000)<=1209.6){
		robots = 3;
	}if ((totalDistance/1000) >1209.6 && (totalDistance/1000)<=1612.8){
		robots = 4;
	}if ((totalDistance/1000) >1612.8 && (totalDistance/1000)<=2016){
		robots = 5;
	}
	
	document.getElementById("robot").innerHTML= robots;
	document.getElementById("distance").innerHTML=Math.round(totalDistance/1000);
	document.getElementById("meses").innerHTML= month.toFixed(2)/robots;
	
}
  }
function calcRoute(){
	var start = document.getElementById("start").value;
	var half= document.getElementById("half").value;
	var request = { origin: start, destination: half,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult, status){
		if(status==google.maps.DirectionsStatus.OK){
			handleDirectionsResponse(
					start, half, directionsResult);
		}
	});
	
  }




//esta si sirve
var robot2;
function handleDirectionsResponse1(half,end, directionsResults){
	directionsDisplay.setDirections(directionsResults);
	var route = directionsResults.routes;
	for(var ii=0; ii<route.length; ii++){
		var distanceTraveled = 0;
		var legs = route[ii].legs;
		for(jj=0; jj<legs.length; jj++){
			distanceTraveled += legs[jj].distance.value;
		}
		document.getElementById("distancee").innerHTML= Math.round(distanceTraveled/1000);
		
		var months = ((distanceTraveled/1000) /730)/0.1;
		if ((distanceTraveled /1000) <=403.2 ){
			robot2 = 1;
		}if ((distanceTraveled /1000) >403.2 && (distanceTraveled /1000)<=806.4){
			robot2 = 2; 
		}if ((distanceTraveled /1000) >806.4 && (distanceTraveled /1000)<=1209.6){
			robot2 = 3;
		}if ((distanceTraveled /1000) >1209.6 && (distanceTraveled /1000)<=1612.8){
			robot2 = 4;
		}if ((distanceTraveled /1000) >1612.8 && (distanceTraveled /1000)<=2016){
			robot2 = 5;	
		}
		

		
		document.getElementById("robot2").innerHTML= robot2;
		document.getElementById("distancee").innerHTML=Math.round(distanceTraveled /1000);
		document.getElementById("meses1").innerHTML= months.toFixed(2)/robot2;
		
	 }
}		
function calcRoutee(){
		var half= document.getElementById("half").value;
		var end = document.getElementById("end").value;
		var request = { origin: half, destination: end,
			travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(directionsResults, status){
			if(status==google.maps.DirectionsStatus.OK){
				handleDirectionsResponse1(
						 half,end, directionsResults);
			}
		});
		
	  }



