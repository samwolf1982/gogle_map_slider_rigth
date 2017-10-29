<?php

// координаты описание к ним и начальная точка
include_once 'map_coordinate_js.php';

$resp= <<<EOT
<script>
var center_point={lat: {$center_point[0]}, lng: {$center_point[1]}};
var locations = [
EOT;
foreach ($point_coords as $point_coord) {
$resp.= <<<EOT
    {lat: {$point_coord[0]}, lng: {$point_coord[1]}},
EOT;
}

$resp.= <<<EOT
]
var locations_atachment = [
EOT;
foreach ($point_coords as $point_coord) {
$img=$point_coord['img'];
$img_active=$point_coord['img_active'];

$resp.= <<<EOT
    {img: '{$img}', img_active: '{$img_active}'},
EOT;
}



$resp.= <<<EOT
];
</script>
EOT;
echo $resp;
?>




