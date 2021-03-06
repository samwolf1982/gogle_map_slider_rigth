<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
  <meta charset="utf-8">
  <title>Marker Clustering</title>
  <style>
    /* Always set the map height explicitly to define the size of the div
     * element that contains the map. */
    #map {
      height: 100%;
    }
    /* Optional: Makes the sample page fill the window. */
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
  </style>

  <link rel="stylesheet" href="/vendor/components/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/vendor/components/bootstrap/css/bootstrap-theme.css">
  <link rel="stylesheet" href="/assets/css/map_dev.css">
</head>
<body>

<div class="container">

  <div class="starter-template">
    <h1 class="text-center">Map</h1>
    <div id="map"></div>
  </div>
</div>











<script src="/assets/js/markerclusterer.js">
</script>
<script src="assets/js/map_dev.js"></script>
<script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAT0vZuLVJWrcSUdY0j-iga0aB85wmNWgM&callback=initMap">
</script>
<script src="/vendor/components/jquery/jquery.js"></script>

<script src="/vendor/components/jqueryui/jquery-ui.js"></script>



</body>
</html>