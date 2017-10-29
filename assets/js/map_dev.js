$(function() {
    // Handler for .ready() called.
    console.log('ok');
});

function goleft() {
    $('#left').hide("slide", { direction: "left" }, 500, function () {
        $('#right').show("slide", { direction: "right" }, 500);
    });


}

function goleftinmap(callback) {
    $('#left').hide("slide", { direction: "left" }, 500, function () {
        $('#right').show("slide", { direction: "right" }, 500);
    });
    callback();
}
function goright() {
    $('#right').hide("slide", { direction: "right" }, 500, function () {
        $('#left').show("slide", { direction: "left" }, 500);
    })
}

// function positionmap() {
//    $(this).data('target');
//     console.log('pos map '+ console.dir($(this)));
// }



var map;
var markers;
var  index_centr_pos_onclick=null; // индекс остенего маркера для смены на старый.

var curent_el;  // для калбека.

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
         center: center_point
    });

    // подгрузка из сервера окна справа
    google.maps.event.addListenerOnce(map, 'idle', loadmap);



    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
     markers = locations.map(function(location, i) {
         return   new google.maps.Marker({
            position: location,
            // label: labels[i % labels.length],
            icon: locations_atachment[i]['img'],
        });
    });
       // click on marker

    markers.map(function (marker, number) {
        google.maps.event.addListener(marker, 'click', function() {
            // infowindow.open(map);
            //Change the marker icon
            markers.map(function (t,num) {
               var own_img= locations_atachment[num]['img'];
                t.setIcon(own_img);
            });
            var own_img_active= locations_atachment[number]['img_active'];
            marker.setIcon(own_img_active);

            //центрирование
            map.setCenter(marker.position);



            // в правой части добавление актива
            $('.td_in_elements_map .numberCircle').removeClass('active');

              $('.numberCircle').each(function (i,el) {
                  if(i==number){ $(el).addClass('active');

                      curent_el=el;


                      // $(el).scrollTo('tr[data-uid="' + basketID + '"]');
                      // $('#right').scrollTop($(el));

                      //goleftinmap(clikonpointer)

                      var contactTopPosition = $(el).position().top;
                      var container = $("#right");
                        var  scrollTo = $(el);

                      container.animate({
                          scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
                      },800,function () {

                          console.log('ssssssssss');
                          // goleft();
                      });

                  }

              });

            // goleftinmap(clikonpointer)
        })
    });



    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}



function clikonpointer(el,) {

    console.log('clikonpointer');
}

function loadmap(e) {
    console.log('Map loaded!');
    $('.gm-style').append('<div class="inmap_block red" id="contentinmap">' + '</div>');
    // загрузки из сервера и добавление событий
    $('#contentinmap').load('/assets/files/formap.php',function () {
        $(  ".td_in_elements_map" ).on( "click", function() {
            $('.td_in_elements_map .numberCircle').removeClass('active');
            $(this).find('.numberCircle').addClass('active');

            // центрирование карты ко кликнутому объэкту
console.log(index_centr_pos_onclick);

// if (index_centr_pos_onclick!=null){
//     markers[index_centr_pos_onclick].setIcon( locations_atachment[index_centr_pos_onclick]['img']);
// }
              // проход по всем маркерам и установка дефолта картинки
            markers.map(function (t,num) {
                var own_img= locations_atachment[num]['img'];
                t.setIcon(own_img);
            });


             index_centr_pos_onclick=$( this ).data('target');
            var cp_lat=locations[index_centr_pos_onclick]['lat'];
            var cp_lng=locations[index_centr_pos_onclick]['lng'];
          //  map.setCenter(new google.maps.LatLng(25.2048493,55.2707828)); // dubai
            map.setCenter(new google.maps.LatLng(cp_lat,cp_lng));
            //смена иконки  и last index
            markers[index_centr_pos_onclick].setIcon(locations_atachment[index_centr_pos_onclick]['img_active']);
            map.setZoom(18);
            // if (lastindex==null){ lastindex=in}
            // newLocation(25.2048493,55.2707828);
            console.log( $( this ).data('target') );
        });

    });

}




// var center_point={lat: 50.4501, lng: 30.5234};
// var locations = [
//     {lat: -31.563910, lng: 147.154312},
//     {lat: -33.718234, lng: 150.363181},
//     {lat: -33.727111, lng: 150.371124},
//     {lat: -33.848588, lng: 151.209834},
//     {lat: -33.851702, lng: 151.216968},
//     {lat: -34.671264, lng: 150.863657},
//     {lat: -35.304724, lng: 148.662905},
//     {lat: -36.817685, lng: 175.699196},
//     {lat: -36.828611, lng: 175.790222},
//     {lat: -37.750000, lng: 145.116667},
//     {lat: -37.759859, lng: 145.128708},
//     {lat: -37.765015, lng: 145.133858},
//     {lat: -37.770104, lng: 145.143299},
//     {lat: -37.773700, lng: 145.145187},
//     {lat: -37.774785, lng: 145.137978},
//     {lat: -37.819616, lng: 144.968119},
//     {lat: -38.330766, lng: 144.695692},
//     {lat: -39.927193, lng: 175.053218},
//     {lat: -41.330162, lng: 174.865694},
//     {lat: -42.734358, lng: 147.439506},
//     {lat: -42.734358, lng: 147.501315},
//     {lat: -42.735258, lng: 147.438000},
//     {lat: -43.999792, lng: 170.463352}
// ]






