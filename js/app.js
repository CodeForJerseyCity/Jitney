	var map = L.map('map').setView([40.7675 , -74.0323], 11);

		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-20v6611k'
		}).addTo(map);

		

		function onEachFeature(feature, layer) {
			var popupContent = "";

			if (feature.properties && feature.properties.Name) {
				popupContent += feature.properties.Name;
			}

			layer.bindPopup(popupContent);
		}

		
var kennedyblvd = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line == "kennedy_blvd") {
                return {color: "#8dd3c7"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "kennedy_blvd") {
        return feature.properties.bus_line;
    }
},
    onEachFeature: onEachFeature
});

var bayonne_journal = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line== "bayonne_journal") {
                return {color: "#ffffb3"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "bayonne_journal") {
        return feature.properties.bus_line;
    }
    },
    onEachFeature: onEachFeature
});

var ny_42_street = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line== "ny_42_street") {
                return {color: "#bebada"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "ny_42_street") {
        return feature.properties.bus_line;
    }
    },
    onEachFeature: onEachFeature
});

var bergenline = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line== "bergenline") {
                return {color: "#8dd3c7"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "bergenline") {
        return feature.properties.bus_line;
    }
    },
    onEachFeature: onEachFeature
});

var blvd_east = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line== "blvd_east") {
                return {color: "#80b1d3"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "blvd_east") {
        return feature.properties.bus_line;
    }
    },
    onEachFeature: onEachFeature
});

var fairview = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line== "fairview") {
                return {color: "#fdb462"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "fairview") {
        return feature.properties.bus_line;
    }
    },
    onEachFeature: onEachFeature
});

var kennedy_pa = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line== "kennedy_pa") {
                return {color: "#b3de69"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "kennedy_pa") {
        return feature.properties.bus_line;
    }
    },
    onEachFeature: onEachFeature
});

var ny_paterson_gwb = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line== "ny_paterson_gwb") {
                return {color: "#fccde5"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "ny_paterson_gwb") {
        return feature.properties.bus_line;
    }
    },
    onEachFeature: onEachFeature
});

var paterson_pa = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line== "paterson_pa") {
                return {color: "#ADADAD"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "paterson_pa") {
        return feature.properties.bus_line;
    }
    },
    onEachFeature: onEachFeature
});

var river_road = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line== "river_road") {
                return {color: "#bc80bd"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "river_road") {
        return feature.properties.bus_line;
    }
    },
    onEachFeature: onEachFeature
});

var sixty_street = L.geoJson(jitneyBus, {
    style: function(feature) {
        if (feature.properties && feature.properties.bus_line== "60_street") {
                return {color: "#ccebc5"};
            }
    },
    filter: function(feature, layer) {
    	if (feature.properties && feature.properties.bus_line == "60_street") {
        return feature.properties.bus_line;
    }
    },
    onEachFeature: onEachFeature
});
		

		var alllayers = L.geoJson(jitneyBus, {
    style: function(feature) {
        switch (feature.properties.bus_line) {
            case 'kennedy_blvd': return {color: "#8dd3c7"};
            case 'bayonne_journal':   return {color: "#ffffb3"};
            case 'ny_42_street': return {color: "#bebada"};
            case 'bergenline':   return {color: "#fb8072"};
            case 'blvd_east': return {color: "#80b1d3"};
            case 'fairview':   return {color: "#fdb462"};
            case 'kennedy_pa': return {color: "#b3de69"};
            case 'ny_paterson_gwb':   return {color: "#fccde5"};
            case 'paterson_pa': return {color: "#ADADAD"};
            case 'river_road':   return {color: "#bc80bd"};
            case '60_street': return {color: "#ccebc5"};
        }
    },
    onEachFeature: onEachFeature
});

map.addLayer(alllayers);


		function changeSituation() { var situation =document.getElementById("mySelect").value

		if (situation ==1) {
             map.addLayer(alllayers);
             map.removeLayer(kennedyblvd);
        	map.removeLayer(bayonne_journal);
        	map.removeLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.removeLayer(sixty_street);
        }

        if (situation ==2) {
        	map.removeLayer(alllayers);
        	map.removeLayer(bayonne_journal);
             map.addLayer(kennedyblvd);
             map.removeLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.removeLayer(sixty_street);

        }

		if (situation ==3) {
			map.removeLayer(alllayers);
        	map.removeLayer(kennedyblvd);
             map.addLayer(bayonne_journal);
             map.removeLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.removeLayer(sixty_street);
        }
        if (situation ==4) {
			map.removeLayer(alllayers);
        	map.removeLayer(kennedyblvd);
             map.removeLayer(bayonne_journal);
             map.addLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.removeLayer(sixty_street);
        }
        if (situation ==5) {
			map.removeLayer(alllayers);
        	map.removeLayer(kennedyblvd);
             map.removeLayer(bayonne_journal);
             map.removeLayer(ny_42_street);
        	map.addLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.removeLayer(sixty_street);
        }
        if (situation ==6) {
			map.removeLayer(alllayers);
        	map.removeLayer(kennedyblvd);
              map.removeLayer(bayonne_journal);
             map.removeLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.addLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.removeLayer(sixty_street);
        }
        if (situation ==7) {
			map.removeLayer(alllayers);
        	map.removeLayer(kennedyblvd);
              map.removeLayer(bayonne_journal);
             map.removeLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.addLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.removeLayer(sixty_street);
        }
        if (situation ==8) {
			map.removeLayer(alllayers);
        	map.removeLayer(kennedyblvd);
              map.removeLayer(bayonne_journal);
             map.removeLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.addLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.removeLayer(sixty_street);
        }
        if (situation ==9) {
			map.removeLayer(alllayers);
        	map.removeLayer(kennedyblvd);
              map.removeLayer(bayonne_journal);
             map.removeLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.addLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.removeLayer(sixty_street);
        }
        if (situation ==10) {
			map.removeLayer(alllayers);
        	map.removeLayer(kennedyblvd);
              map.removeLayer(bayonne_journal);
             map.removeLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.addLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.removeLayer(sixty_street);
        }
        if (situation ==11) {
			map.removeLayer(alllayers);
        	map.removeLayer(kennedyblvd);
              map.removeLayer(bayonne_journal);
             map.removeLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.addLayer(river_road);
        	map.removeLayer(sixty_street);
        }
        if (situation ==12) {
			map.removeLayer(alllayers);
        	map.removeLayer(kennedyblvd);
              map.removeLayer(bayonne_journal);
             map.removeLayer(ny_42_street);
        	map.removeLayer(bergenline);
        	map.removeLayer(blvd_east);
        	map.removeLayer(fairview);
        	map.removeLayer(kennedy_pa);
        	map.removeLayer(ny_paterson_gwb);
        	map.removeLayer(paterson_pa);
        	map.removeLayer(river_road);
        	map.addLayer(sixty_street);
        }
    }
		
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
    

$.each($('.panel-heading'), function(i, val){
	var bgcolor = routeSwitch($('.panel-title a', $(this)).data('route'));
	if (bgcolor){
		$(this).css('background-color',bgcolor.color);
	}
});



