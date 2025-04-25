
# ─────────────────────────────
# 【简单域名规则】
mon.zijieapi.com url reject
lf-ad-ies.bytecdn.cn url reject
i.snssdk.com url reject
is.snssdk.com url reject
bds.snssdk.com url reject
dm.bytedance.com url reject
dm.pstatp.com url reject
dm.toutiao.com url reject
log.snssdk.com url reject
s3a.pstatp.com url reject
sdfp.snssdk.com url reject
tosv.boe.byted.org url reject
tosv.byted.org url reject
extlog.snssdk.com url reject
mssdk-bu.bytedance.com url reject
toblog.ctobsnssdk.com url reject
mssdk.volces.com url reject
pangolin.snssdk.com url reject
gromore.pangolin-sdk-toutiao.com url reject
ether-pack.pangolin-sdk-toutiao.com url reject
-ad-sign.byteimg.com url reject
api-access.pangolin-sdk-toutiao url reject
log-api.pangolin-sdk-toutiao url reject
-ad.byteoversea.com url reject
video-cn.snssdk.com url reject
asiad.byteactivity url reject
gdfp.gifshow.com url reject
open.e.kuaishou.com url reject
adukwai.com url reject
sdk.beizi.biz url reject
mobads.baidu.com url reject
mobads-logs.baidu.com url reject
wn.pos.baidu.com url reject
bgg.baidu.com url reject
als.baidu.com url reject
feed-image.baidu.com url reject
union.baidu.cn url reject
union.baidu.com url reject
ios.bugly.qq.com url reject
sdk.e.qq.com url reject
ugdtimg.com url reject
gdtimg.com url reject
gdt.qq.com url reject
openinstall.io url reject
zxid-m.mobileservice.cn url reject
cnlogs.umeng.com url reject
errlog.umeng.com url reject
errnewlog.umeng.com url reject
ucc.umeng.com url reject
ulogs.umeng.com url reject
utoken.umeng.com url reject

# ─────────────────────────────
# 【原 [Rewrite] 里的请求屏蔽规则】
^https:\/\/richmanrules\.ksedt\.com\/serverConfig\/3\/adConfig\.json url reject
^https:\/\/gouche\.ksedt\.com\/config\/popup\/info$ url reject
^https:\/\/richmanrules\.ksedt\.com\/intellectWaterfallBidding\/find$ url reject
^https:\/\/op\.ksedt\.com\/jxedtLive\/liveIntroduceResource url reject
^https:\/\/richmanrules\.ksedt\.com\/intellectWaterfall\/find$ url reject

# ─────────────────────────────
# 【HTTP 响应体处理】（删除指定 JSON 字段，须借助脚本）
# 请将下列 js 脚本保存为 removeAdKeys.js：
#
# -----------------------------------------------------------
# let obj = JSON.parse($response.body);
# delete obj.result.homead;
# delete obj.result.h5_promotion_page;
# delete obj.result.advert_interval;
# delete obj.result.abtest_h5url;
# delete obj.result.launchApp;
# delete obj.result.goucheConfig;
# delete obj.result.gouche;
# delete obj.result.mainLiveConfig;
# delete obj.result.discover;
# delete obj.result.adSdkSwitch4testPointVideo;
# delete obj.result.adSdkSwitch4simulationExam;
# delete obj.result.examPageLoadADSwitch;
# $done({body: JSON.stringify(obj)});
# -----------------------------------------------------------
^https:\/\/api\.ksedt\.com\/api\/config\/ url script-response-body=https://raw.githubusercontent.com/AmigoYao/Quantumult_X/refs/heads/main/JXYDTJingJian.js, requires-body=true

[mitm]
hostname = richmanrules.ksedt.com, gouche.ksedt.com, muses.ksedt.com, op.ksedt.com, api.ksedt.com
