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
            'src'=> 'https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/2'.mt_rand(3000,4000).'.jpg'
        ]);
}

exit(json_encode($arr, JSON_UNESCAPED_UNICODE));