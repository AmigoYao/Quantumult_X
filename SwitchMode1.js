/*
[rewrite_local]
# 拦截所有指定的控制命令 URL
^http://q\.x/(direct|proxy|filter|reload) url script-echo-response https://raw.githubusercontent.com/AmigoYao/Quantumult_X/refs/heads/main/SwitchMode.js

[mitm]
hostname = q.x
*/

const url = $request.url;

// 构造通用的成功响应
const okResponse = {
    status: "HTTP/1.1 200 OK",
    headers: { 
        "Connection": "Close", 
        "Content-Type": "text/plain; charset=utf-8" 
    },
    body: "ok"
};

// 切换运行模式的封装函数
function switchMode(modeName, notifyTitle, notifyMsg) {
    return $configuration.sendMessage({
        action: "set_running_mode",
        content: { running_mode: modeName }
    }).then(() => {
        console.log(`[INFO] 切换到${notifyTitle}模式`);
        if (notifyMsg) {
            $notify(notifyTitle, "", notifyMsg);
        }
    });
}

// 路由判断
if (url.includes("/direct")) {
    // 切换到直连模式
    switchMode("all_direct", "模式切换", "已切换为【全部直连】模式")
        .finally(() => $done(okResponse));

} else if (url.includes("/proxy")) {
    // 切换到代理模式
    switchMode("all_proxy", "模式切换", "已切换为【全部代理】模式")
        .finally(() => $done(okResponse));

} else if (url.includes("/filter")) {
    // 切换到规则分流模式
    switchMode("filter", "模式切换", "已切换为【规则分流】模式")
        .finally(() => $done(okResponse));

} else if (url.includes("/reload") || url.includes("/kill")) {
    // 保留原有脚本的功能：先直连，再规则
    $configuration.sendMessage({
        action: "set_running_mode",
        content: { running_mode: "all_direct" }
    })
    .then(() => {
        console.log("[INFO] 切换到直连模式");
        return $configuration.sendMessage({
            action: "set_running_mode",
            content: { running_mode: "filter" }
        });
    })
    .then(() => {
        console.log("[INFO] 切换到规则模式");
        $notify("网络变化", "打断请求", "🅰 你已重新连入网络");
    })
    .finally(() => {
        $done(okResponse);
    });
    
} else {
    // 未知路径
    $done({ status: "HTTP/1.1 404 Not Found" });
}
