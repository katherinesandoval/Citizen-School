<script>
  var map;
      function initialize() {
        map = new google.maps.Map(document.getElementById('map_canvas'), {
          zoom: 16,
          center: new google.maps.LatLng(40.727096,-73.823809),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                { color: '#8181F7' },
                { weight: 1.2 }
              ]
            }, {
              featureType: 'road',
              elementType: 'labels',
              stylers: [
                { saturation: 200 },
                { invert_lightness: true }
              ]
            }, {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [
                { hue: '#ffff00' },
                { gamma: 1.2 },
                { saturation: 82 },
                { lightness: 96 }
              ]
            }, {
              featureType: 'poi.school',
              elementType: 'geometry',
              stylers: [
                { hue: '#fff700' },
                { lightness: -15 },
                { saturation: 99 }
              ]
            }, {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [
                { visibility: 'off' }
              ]
            }, {
              featureType: 'poi.school',
              elementType: 'geometry',
              stylers: [
                { visibility: 'on' },
                { hue: '#fff700' },
                { lightness: -15 },
                { saturation: 99 }
              ]
            }
          ]
        });

      //  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var image = 'ima.jpg';
        var icons = {
          
          home: {
            name: 'home',
            icon: image
          }
          
        };

        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        }

        var features = [
          {
           
            position: new google.maps.LatLng(40.727096,-73.823809),
            type: 'home'
          }
        ];

        for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
        }

        var legend = document.getElementById('legend');
        for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + icon + '"> ' + name;
          legend.appendChild(div);
        }

        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
      }

      google.maps.event.addDomListener(window, 'load', initialize);
  
    </script>
