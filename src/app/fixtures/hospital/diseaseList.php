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
            'PhotographStore' => ['sUrl' => 'https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/2'.$i.'0.jpg'],
            'diseaseNameImage' => ['sUrl' => 'https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/2'.$i.'0.jpg']
            ]);
}

exit(json_encode($arr, JSON_UNESCAPED_UNICODE));