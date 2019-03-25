<?php
/**
 * Created by PhpStorm.
 * User: 94724
 * Date: 2019/3/25
 * Time: 21:42
 */
// 设置utf-8编码
header('Content-Type:application/json; charset=utf-8');
// 设置允许其他域名访问
header('Access-Control-Allow-Origin:*');
// 设置允许的响应类型
header('Access-Control-Allow-Methods:GET,POST,PUT,DELETE,OPTIONS');
// 设置允许的响应头
header('Access-Control-Allow-Headers:*');