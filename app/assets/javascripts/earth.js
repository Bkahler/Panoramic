
  var ge;
  google.load("earth", "1", {"other_params":"sensor=false"});

  function init() {
    google.earth.createInstance('map3d', initCB, failureCB);
  }

  function initCB(instance) {
    ge = instance;
    ge.getWindow().setVisibility(true);
    ge.getLayerRoot().enableLayerById(ge.LAYER_BUILDINGS, true);
    add3dLine();

  }

  function failureCB(errorCode) {
    alert('failed')
  }

  google.setOnLoadCallback(init)

    function add3dLine() {
      alert('addfeatures')
          // Create the placemark
        var lineStringPlacemark = ge.createPlacemark('');

        // Create the LineString
        var lineString = ge.createLineString('');
        lineStringPlacemark.setGeometry(lineString);
        lineString.setExtrude(true);
        lineString.setAltitudeMode(ge.ALTITUDE_RELATIVE_TO_GROUND)

        // Add LineString points
        lineString.getCoordinates().pushLatLngAlt(48.754, -121.835, 700);
        lineString.getCoordinates().pushLatLngAlt(48.764, -121.828, 700);
        lineString.getCoordinates().pushLatLngAlt(48.776, -121.818, 700);
        lineString.getCoordinates().pushLatLngAlt(48.787, -121.794, 700);
        lineString.getCoordinates().pushLatLngAlt(48.781, -121.778, 700);
        lineString.getCoordinates().pushLatLngAlt(48.771, -121.766, 700);
        lineString.getCoordinates().pushLatLngAlt(48.757, -121.768, 700);
        lineString.getCoordinates().pushLatLngAlt(48.747, -121.773, 700);

        // Add the feature to Earth
        ge.getFeatures().appendChild(lineStringPlacemark);
        add3dploygon()
    }


    function add3dploygon() {
      alert('being added')

        // Create the placemark.
        var polygonPlacemark = ge.createPlacemark('');

        // Create the polygon.
        var polygon = ge.createPolygon('');
        polygon.setAltitudeMode(ge.ALTITUDE_RELATIVE_TO_GROUND);
        polygon.setExtrude(true);
        polygonPlacemark.setGeometry(polygon);

        // Add points for the outer shape.
        var outer = ge.createLinearRing('');
        outer.setAltitudeMode(ge.ALTITUDE_RELATIVE_TO_GROUND);
        outer.getCoordinates().pushLatLngAlt(48.80, -121.80, 700);
        outer.getCoordinates().pushLatLngAlt(48.80, -121.90, 700);
        outer.getCoordinates().pushLatLngAlt(48.70, -121.90, 700);
        outer.getCoordinates().pushLatLngAlt(48.70, -121.80, 700);
        polygon.setOuterBoundary(outer);

        // Add inner points.
        var inner = ge.createLinearRing('');
        inner.setAltitudeMode(ge.ALTITUDE_RELATIVE_TO_GROUND);
        inner.getCoordinates().pushLatLngAlt(48.77, -121.83, 700);
        inner.getCoordinates().pushLatLngAlt(48.77, -121.87, 700);
        inner.getCoordinates().pushLatLngAlt(48.73, -121.87, 700);
        inner.getCoordinates().pushLatLngAlt(48.73, -121.83, 700);
        polygon.getInnerBoundaries().appendChild(inner);

        //Create a style and set width and color of line
        polygonPlacemark.setStyleSelector(ge.createStyle(''));
        var lineStyle = polygonPlacemark.getStyleSelector().getLineStyle();
        lineStyle.setWidth(5);
        lineStyle.getColor().set('9900ffff');

        // Add the placemark to Earth.
        ge.getFeatures().appendChild(polygonPlacemark);

    }