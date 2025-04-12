#!name=驾校一点通答题页精简
#!desc=作者自用，请勿传播
#!openUrl=https://apps.apple.com/app/id620262310
#!author=AmigoYao[http://www.coolapk.com/u/1269214]
#!tag=去广告
#!system=
#!system_version=
#!Quantumult X_version=3.2.0(787)
#!homepage=http://www.coolapk.com/u/1269214
#!icon=https://raw.githubusercontent.com/luestr/IconResource/main/App_icon/120px/JiaXiaoDrive.png
#!date=2025-04-13 00:00:00

[MitM]
hostname=kaoshiapi.ksedt.com,pic*.*cdn.com.cn

[Rewrite]
https://kaoshiapi.ksedt.com/sns/exam/getQuestionInfo url script-response-body https://raw.githubusercontent.com/AmigoYao/Quantumult_X/refs/heads/main/JXYDTDaTiYeJingJian.js


if (-1 !== $request.url.indexOf("https://kaoshiapi.ksedt.com/sns/exam/getQuestionInfo")) {
    var responseBody = JSON.parse($response.body);

    // 删除指定的键

    if (responseBody.result) {
        delete responseBody.result.specialInfo;
        delete responseBody.result.AIEntrance;
    }

    // 返回修改后的响应体

    $done({body: JSON.stringify(responseBody)});
} else {
    // 如果不匹配，直接返回原响应

    $done({});
}
