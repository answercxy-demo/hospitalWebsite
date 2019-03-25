<?php
/**
 * Created by PhpStorm.
 * User: 94724
 * Date: 2019/3/25
 * Time: 21:42
 */
include_once './common.php';

$arr = [];

for ($i = 0; $i < 32; $i++) {
    array_push($arr,
        [
            'id' => $i,
            'sName' => '科室' . $i,
        ]);
}

exit(json_encode($arr, JSON_UNESCAPED_UNICODE));