<?php
/**
 * Created by PhpStorm.
 * User: sam
 * Date: 10/28/17
 * Time: 11:31 PM
 */


/** @var TYPE_NAME $point_coords
 *lat
 * lng
 * img-default - картинка по умолнчаню
 * img_active- активный елемент при клиек
 * title - тайтл
 * length
 * info - масив абс...      доп даные для информации в модельном окне при клике
 *
 */
$center_point=[50.4005585,30.5315719];
$point_coords=[
    [
        50.4051102,  30.517419,'img'=>'/assets/css/metro.png',
                                  'img_active'=>'/assets/css/metroactive.png',
                                   'title'=>'метро Деміївська ',
                                    'category'=>'Mетро',
                                   'info'=>['length'=>'15 хв (пішки)','a'=>'','b'=>'','c'=>'']
    ],


    [50.4133524,  30.5242655,'img'=>'/assets/css/metro.png',
                               'img_active'=>'/assets/css/metroactive.png',
                                'title'=>'метро Либідська ',
                                'category'=>'Mетро',
                                'info'=>['length'=>'10 хв (автобус)', 'a'=>'','b'=>'','c'=>'']],


    [50.3976431,  30.50967,'img'=>'/assets/css/metro.png',
        'img_active'=>'/assets/css/metroactive.png',
        'title'=>'метро Голосіївська ',
        'category'=>'Mетро',
        'info'=>['length'=>'15 хв (автобус)', 'a'=>'','b'=>'','c'=>'']],





    [ 50.400737, 30.529211
        ,'img'=>'/assets/css/dozvilla.png',
                                'img_active'=>'/assets/css/dozvillayactive.png',
                                'title'=>'Кафе ',
                                'category'=>'Дозвілля',
                                'info'=>['length'=>'3 хв (пішки)','a'=>'','b'=>'','c'=>'']],
    [50.401457, 30.528621,'img'=>'/assets/css/dozvilla.png',
                                      'img_active'=>'/assets/css/dozvillayactive.png',
                                'title'=>'Супермаркет ',
                                 'category'=>'Дозвілля',
                                'info'=>['length'=>'3 хв (пішки)','a'=>'','b'=>'','c'=>'']],


    [50.411503, 30.522605,'img'=>'/assets/css/dozvilla.png',
        'img_active'=>'/assets/css/dozvillayactive.png',
        'title'=>'Ocean Plaza ',
        'category'=>'Дозвілля',
        'info'=>['length'=>'5 хв (машина)','a'=>'','b'=>'','c'=>'']],

    [50.397216, 30.530641,'img'=>'/assets/css/dozvilla.png',
        'img_active'=>'/assets/css/dozvillayactive.png',
        'title'=>'Сіті Клініка ',
        'category'=>'Дозвілля',
        'info'=>['length'=>'6 хв (пішки)','a'=>'','b'=>'','c'=>'']],



    [50.397163, 30.530652
        ,'img'=>'/assets/css/dozvilla.png',
        'img_active'=>'/assets/css/dozvillayactive.png',
        'title'=>'ALEKSA Studio ',
        'category'=>'Дозвілля',
        'info'=>['length'=>'6 хв (пішки)','a'=>'','b'=>'','c'=>'']],


    [50.396210, 30.533303
        ,'img'=>'/assets/css/dozvilla.png',
        'img_active'=>'/assets/css/dozvillayactive.png',
        'title'=>'Спортивний комплекс НУХТ ',
        'category'=>'Дозвілля',
        'info'=>['length'=>'7 хв (пішки)','a'=>'','b'=>'','c'=>'']],



    [50.401573, 30.530595,'img'=>'/assets/css/dozvilla.png',
        'img_active'=>'/assets/css/dozvillayactive.png',
        'title'=>'Укрпошта ',
        'category'=>'Дозвілля',
        'info'=>['length'=>'3 хв (пішки)','a'=>'','b'=>'','c'=>'']],



    [50.401572, 30.539938
        ,'img'=>'/assets/css/dozvilla.png',
        'img_active'=>'/assets/css/dozvillayactive.png',
        'title'=>'Леруа Мерлен ',
        'category'=>'Дозвілля',
        'info'=>['length'=>'12 хв (пішки)','a'=>'','b'=>'','c'=>'']],



    [50.401724, 30.513860,'img'=>'/assets/css/dozvilla.png',
        'img_active'=>'/assets/css/dozvillayactive.png',
        'title'=>'Свято-Вознесенский храм ',
        'category'=>'Дозвілля',
        'info'=>['length'=>'21 хв (пішки)','a'=>'','b'=>'','c'=>'']],



    [50.392752, 30.509188
        ,'img'=>'/assets/css/dozvilla.png',
        'img_active'=>'/assets/css/dozvillayactive.png',
        'title'=>'Голосіївський парк ',
        'category'=>'Дозвілля',
        'info'=>['length'=>'20 хв (пішки)','a'=>'','b'=>'','c'=>'']],



    [50.392246, 30.546889,'img'=>'/assets/css/dozvilla.png',
        'img_active'=>'/assets/css/dozvillayactive.png',
        'title'=>'парк Лиса гора ',
        'category'=>'Дозвілля',
        'info'=>['length'=>'13 хв (машина)','a'=>'','b'=>'','c'=>'']],


    [50.400363, 30.528003,'img'=>'/assets/css/bank.png',
        'img_active'=>'/assets/css/bankactive.png',
        'title'=>'УкрСиббанк ',
        'category'=>'Банк',
        'info'=>['length'=>'5 хв (пішки)','a'=>'','b'=>'','c'=>'']],

    [50.401609, 30.528689,'img'=>'/assets/css/bank.png',
        'img_active'=>'/assets/css/bankactive.png',
        'title'=>'ПриватБанк',
        'category'=>'Банк',
        'info'=>['length'=>'8 хв (пішки)','a'=>'','b'=>'','c'=>'']],

    [50.403683, 30.532598,'img'=>'/assets/css/azs.png',
        'img_active'=>'/assets/css/azsactive.png',
        'title'=>'АЗС Укрнафта ',
        'category'=>'АЗС',
        'info'=>['length'=>'5 хв (машина)','a'=>'','b'=>'','c'=>'']],


    [50.401642, 30.544288,'img'=>'/assets/css/azs.png',
        'img_active'=>'/assets/css/azsactive.png',
        'title'=>'АЗС WOG ',
        'category'=>'АЗС',
        'info'=>['length'=>'6 хв (машина)','a'=>'','b'=>'','c'=>'']],


































//    [-34.671264,  150.863657,'img'=>'','img_active'=>'','title'=>'','info'=>['a'=>'','b'=>'','c'=>'']],
//    [-35.304724,  148.662905,'img'=>'','img_active'=>'','title'=>'','info'=>['a'=>'','b'=>'','c'=>'']],
//    [-36.817685,  175.699196,'img'=>'','img_active'=>'','title'=>'','info'=>['a'=>'','b'=>'','c'=>'']],
//    [-36.828611,  175.790222,'img'=>'','img_active'=>'','title'=>'','info'=>['a'=>'','b'=>'','c'=>'']],
];



