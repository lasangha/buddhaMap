var vector = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'placesWithData.kml',
		format: new ol.format.KML({
			extractStyles: false
		})
	}),
});
var map = new ol.Map({
  layers: [new ol.layer.Tile({source: new ol.source.MapQuest({layer: 'sat'})}), vector],
  target: 'map',
  view: new ol.View({
		center: ol.proj.fromLonLat([84.991275,24.695102]),
    zoom: 5
  })
});

