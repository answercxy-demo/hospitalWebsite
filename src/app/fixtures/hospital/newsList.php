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
            'particulars' => '内容' . $i,
            'pictrueDetails' => [['sUrl' => 'https://107.cdn-vod.huaweicloud.com/shield/asset/2b8ab25bcb75eaebdae188a1013f90a1/snapshot/sample/2'.$i.'30.jpg']]
        ]);
}

exit(json_encode($arr, JSON_UNESCAPED_UNICODE));