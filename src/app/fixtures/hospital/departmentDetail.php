<?php
/**
 * Created by PhpStorm.
 * User: 94724
 * Date: 2019/3/25
 * Time: 21:42
 */
include_once './common.php';

$id = $_GET['id'];

$arr =
    [
        'id' => $id,
        'sName' => $id . '科室',
        'sContent' => '科室' . $id . '内容'
    ];

exit(json_encode($arr, JSON_UNESCAPED_UNICODE));