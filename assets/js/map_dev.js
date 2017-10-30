



var center_point={lat: 50.400769, lng: 30.53162};
var locations = [    {lat: 50.400769, lng: 30.53162},    {lat: 50.4051102, lng: 30.517419},    {lat: 50.4133524, lng: 30.5242655},    {lat: 50.3976431, lng: 30.50967},    {lat: 50.400737, lng: 30.529211},    {lat: 50.401457, lng: 30.528621},    {lat: 50.411503, lng: 30.522605},    {lat: 50.397216, lng: 30.530641},    {lat: 50.397163, lng: 30.530652},    {lat: 50.39621, lng: 30.533303},    {lat: 50.401573, lng: 30.530595},    {lat: 50.401572, lng: 30.539938},    {lat: 50.401724, lng: 30.51386},    {lat: 50.392752, lng: 30.509188},    {lat: 50.392246, lng: 30.546889},    {lat: 50.400363, lng: 30.528003},    {lat: 50.401609, lng: 30.528689},    {lat: 50.403683, lng: 30.532598},    {lat: 50.401642, lng: 30.544288},]
var locations_atachment = [    {img: '/assets/css/caskade_min.png', img_active: '/assets/css/caskade_simple.png'},    {img: '/assets/css/metro.png', img_active: '/assets/css/metroactive.png'},    {img: '/assets/css/metro.png', img_active: '/assets/css/metroactive.png'},    {img: '/assets/css/metro.png', img_active: '/assets/css/metroactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/dozvilla.png', img_active: '/assets/css/dozvillayactive.png'},    {img: '/assets/css/bank.png', img_active: '/assets/css/bankactive.png'},    {img: '/assets/css/bank.png', img_active: '/assets/css/bankactive.png'},    {img: '/assets/css/azs.png', img_active: '/assets/css/azsactive.png'},    {img: '/assets/css/azs.png', img_active: '/assets/css/azsactive.png'},];













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
        $('#right').show("slide", { direction: "right" }, 500,function () {
            callback();
        });
    });

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
var rigth_index=0.0012;// смещение центра +0,0012
var after_rigth_index=0.0006; //смещение при клике по правой части

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    rigth_index=0;
    after_rigth_index=0;

    // console.log(center_point);
    console.log('is mobi');
}else{
    center_point.lng=center_point.lng+rigth_index;
}



function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
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
        if (number==0){return;} // пропуск для первого елемента
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
            // map.setCenter(marker.position);

            map.setCenter(new google.maps.LatLng(marker.position.lat(), marker.position.lng()+rigth_index));



            // в правой части добавление актива
            $('.td_in_elements_map .numberCircle').removeClass('active');

              $('.numberCircle').each(function (i,el) {

                  if(i==number-1){ $(el).addClass('active');

                      curent_el=el;



                      goleftinmap(clikonpointer)
                      // uncoment

                      // var contactTopPosition = $(el).position().top;
                      // var container = $("#right");
                      //   var  scrollTo = $(el);
                      //
                      // container.animate({
                      //     scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
                      // },800,function () {
                      //
                      //     console.log('ssssssssss');
                      //     // goleft();
                      // });

                  }

              });

            // goleftinmap(clikonpointer)
        })
    });



    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}



function clikonpointer() {

    var el=curent_el;
    var contactTopPosition = $(el).position().top;
    var container = $("#right");
    var  scrollTo = $(el);

    container.animate({
        scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    },800,function () {

        // console.log('ssssssssss');
        // goleft();
    });
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
            map.setCenter(new google.maps.LatLng(cp_lat,cp_lng+after_rigth_index ));
            //смена иконки  и last index
            markers[index_centr_pos_onclick].setIcon(locations_atachment[index_centr_pos_onclick]['img_active']);
            map.setZoom(18);
            // if (lastindex==null){ lastindex=in}
            // newLocation(25.2048493,55.2707828);
            console.log( $( this ).data('target') );
        });

    });

}








