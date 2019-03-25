<?php
/**
 * Created by PhpStorm.
 * User: 94724
 * Date: 2019/3/25
 * Time: 21:40
 */
include_once './common.php';

$arr = [];

for ($i = 0; $i < 4; $i++) {
    array_push($arr,
        [
            'id' => $i,
            'headline' => '标题' . $i,
            'primeTime' => '2019-0' . ($i + 1) . '-0' . ($i + 1),
            'particulars' => '内容' . $i
        ]);
}

exit(json_encode($arr, JSON_UNESCAPED_UNICODE));