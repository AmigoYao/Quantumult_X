// ==UserScript==
// @ScriptName        学习通净化
// @Author            酷安@AmigoYao
// @MainFunction      学习通首页净化，去除广告和顶部轮播信息流，需要Quantumult X版本1.5.2 844+
// @UpdateTime        2026-02-06
// @Attention         如需引用请注明出处，谢谢！

##############################################
# 重写以下域名
hostname = apps.chaoxing.com, home-yd.chaoxing.com, appswh.chaoxing.com

https://apps.chaoxing.com/apis/recent/getRecord.jspx\?puid\= url response-body \{\"cataName\":\".*?\",\"cataid\":\d{9},\"cfid\":-?\d{1},\"content\":\{\"resTitle\":\"学生大礼包\",\"resUrl\":\".*?\",\"resLogo\":\".*?\",\"resUid\":\".*?\",\"toolbarType\":\d{1},\"allowUpdate2\":true|false\},\"id\":\d{2},\"key\":\".*?\",\"norder\":\d{1},\"rid\":\d{8},\"showInHp\":\d{1},\"speTop\":\d{1},\"topsign\":\d{1},\"updateTime2\":\d{13}\} response-body AmigoYao

https://home\-yd.chaoxing.com/apis/data/getAdsRecommend\?token\= url reject

https://appswh.chaoxing.com/apis/activity/getNoteTopicList\?puid\= url reject
