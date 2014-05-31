var map = L.map('map').setView([40.7675 , -74.0323], 11);

var routeSwitch = function(feature) {
	var bus_line = '';
	try {
		bus_line = feature.properties.bus_line;
	} catch (err) {
		bus_line = feature;
	}
	switch (bus_line) {
		case 'kennedy_blvd': return {color: "#8dd3c7"};
		case 'bayonne_journal':   return {color: "#ffffb3"};
		case 'ny_42_street': return {color: "#bebada"};
		case 'bergenline':   return {color: "#fb8072"};
		case 'blvd_east': return {color: "#80b1d3"};
		case 'fairview':   return {color: "#fdb462"};
		case 'kennedy_pa': return {color: "#b3de69"};
		case 'ny_paterson_gwb':   return {color: "#fccde5"};
		case 'paterson_pa': return {color: "#d9d9d9"};
		case 'river_road':   return {color: "#bc80bd"};
		case '60_street': return {color: "#ccebc5"};
	}
};
    
markerMap = {}; //a global variable unless you extend L.GeoJSON

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'examples.map-20v6611k'
}).addTo(map);

L.geoJson(jitneyBus, {
    style: routeSwitch,
    onEachFeature: onEachFeature,
	pointToLayer: function (feature, latlng) {
	  var marker = new L.CircleMarker( latlng, geojsonMarkerOptions );
	  markerMap[feature.bus_line] = marker;
	  return marker;
    }
}).addTo(map);

$('.panel-title a').click(function (e) {
	//Get the id of the element clicked
	var artId = $(this).data( 'route' );
	var marker = markerMap[artId];


	//since you're using CircleMarkers the OpenPopup method requires
	//a latlng so I'll just use the center of the circle
	e.preventDefault()
});

function onEachFeature(feature, layer) {
	var popupContent = "";

	if (feature.properties && feature.properties.Name) {
		popupContent += feature.properties.Name;
	}

	layer.bindPopup(popupContent);
}

$.each($('.panel-heading'), function(i, val){
	var bgcolor = routeSwitch($('.panel-title a', $(this)).data('route'));
	if (bgcolor){
		$(this).css('background-color',bgcolor.color);
	}
});



