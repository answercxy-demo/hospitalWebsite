<?php
/**
 * Created by PhpStorm.
 * User: 94724
 * Date: 2019/3/25
 * Time: 21:40
 */
include_once './common.php';

$id = $_GET['id'];

$arr =
    [
        'id' => $id,
        'headline' => '标题' . $id,
        'primeTime' => '2019-0' . ($id + 1) . '-0' . ($id + 1),
        'particulars' => '内容' . $id
    ];

exit(json_encode($arr, JSON_UNESCAPED_UNICODE));