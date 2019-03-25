<?php
/**
 * Created by PhpStorm.
 * User: 94724
 * Date: 2019/3/25
 * Time: 21:41
 */
include_once './common.php';

$id = $_GET['id'];

$arr =
    [
        'id' => $id,
        'dName' => '疾病' . $id,
        'recordTime' => '2019-0' . ($id + 1) . '-0' . ($id + 1),
        'dContents' => '疾病内容'.$id
    ];

exit(json_encode($arr, JSON_UNESCAPED_UNICODE));