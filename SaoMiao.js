/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/api-cs-cn\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

[mitm]
hostname = api-cs-cn.intsig.net
**************************/
let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"2013017600"}}};
$done({body: JSON.stringify(obj)});
