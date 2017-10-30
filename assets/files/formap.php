
<?php
//загрузка координат
include_once 'map_coordinate_js.php';
?>

<div  class="max  panel panel-default "  id="left" >

        <div class="panel-body inmapmaintext"><h4>Велика Китаївська, 71</h4>
            <div>
                <p>Через Набережне шосе и Бульвар Дружби Народів
                по вул. Хрещатик і Володимирській узвіз направлятеся в сторону Набержного шосе.</p> <p> За 5 хвилин сверніть в сторону проспекта Науки. </p>

               <p> Продовжуйте рух та направляйтеся в сторону вул. Велика Китаївська.</p>

             <p>  Черз Вулицю Антоновича і проспект Науки
                 Через Бессарабську площу направляйтеся по вулиці Велика Васильківська, Антоновича і проспект Науки в сторону Страегічнго шосе. </p> <p> Впродовж 15 хвили продовжуйте рух по стратегічному шосе, направлясь, в сторону Великої Китаївської.</p>

            </div>

        </div>
        <div class="panel-footer panel-footer-map clickedobj" onclick="goleft();">
            <span class="footerpanellabemap"  >Ключеві об'єкти</span>
        </div>




</div>
<div class="max  " style="display: none"   id="right" >
    <div class="panel-body">
        <h4 class="clickedobj"  onclick="goright();" >Ключеві об'єкти</h4>


        <table class="table table-striped" id="elements_in_map_table">

            <tbody>

<?php
$category_map=[];
foreach ($point_coords as $point_coord) {
       $tmp_name_category=$point_coord['category'];
//       if (!array_key_exists($tmp_name_category,$category_map)){$category_map[$tmp_name_category][]=$point_coord;}
      $category_map[$tmp_name_category][]=$point_coord;
}

//var_dump($category_map); die();


     ?>


            <?php
$index=0;
foreach ($category_map as $k=> $categories) {
    if ($index==0){
        $index++;
        continue;
    }
    echo  "<tr><td class='infocategory' > <div ><span>{$k} </span></div></td></tr>";



                foreach ($categories as $i=> $item) {
                    $dist=sprintf('%.2F КМ', random_float(1,25));
                    $visual_nubet_info=$index;
                    echo  "<tr><td data-target='{$index}' class='td_in_elements_map' > <div class='numberCircle text-center'>{$visual_nubet_info}</div>
               <span class='element_in_map'>{$item['title']}</span><br/>
               <span class='element_in_map in_map distance'>{$item['info']['length']} </span></td></tr>";
                    $index++;
                          }


            } ?>



            </tbody>
        </table>
            
    </div>

</div>

<?php
function random_float($min, $max) {
    return rand($min, $max - 1) + (rand(0, PHP_INT_MAX - 1) / PHP_INT_MAX );
}