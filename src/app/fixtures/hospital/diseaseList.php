<?php
/**
 * Created by PhpStorm.
 * User: 94724
 * Date: 2019/3/25
 * Time: 21:41
 */
include_once './common.php';

$arr = [];

for ($i = 0; $i < 30; $i++) {
    array_push($arr,
        [
            'id' => $i,
            'dName' => '疾病' . $i,
            'recordTime' => '2019-0' . ($i + 1) . '-0' . ($i + 1),
            'PhotographStore' => ['sUrl' => null]
        ]);
}

exit(json_encode($arr, JSON_UNESCAPED_UNICODE));