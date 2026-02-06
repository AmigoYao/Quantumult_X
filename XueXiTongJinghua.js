// ==UserScript==
// @ScriptName        学习通净化
// @Author            酷安@AmigoYao
// @MainFunction      学习通首页净化，去除广告和顶部轮播信息流，需要Quantumult X版本1.5.2 844+
// @UpdateTime        2026-02-06
// @Attention         如需引用请注明出处，谢谢！

##############################################
# 重写以下域名
hostname = apps.chaoxing.com, home-yd.chaoxing.com, appswh.chaoxing.com

https://apps.chaoxing.com/apis/recent/getRecord.jspx\?puid\= url response-body \{\\"cataName\\":\".*?\\",\\"cataid\\":-?\\d+,\\"cfid\\":-?\\d+,\\"content\\":\{\\"resTitle\\":\\"学生大礼包\\",\\"resUrl\\":\".*?\\",\\"resLogo\\":\".*?\\",\\"resUid\\":\\"common_xueshengquanyi\\",\\"toolbarType\\":-?\\d+,\\"allowUpdate2\\":(true|false)\},\\"id\\":-?\\d+,\\"key\\":\\"common_xueshengquanyi\\",\\"norder\\":-?\\d+,\\"rid\\":-?\\d+,\\"showInHp\\":-?\\d+,\\"speTop\\":-?\\d+,\\"topsign\\":-?\\d+,\\"updateTime2\\":\\d+\},\{ response-body \{

https://home\-yd.chaoxing.com/apis/data/getAdsRecommend\?token\= url reject

https://appswh.chaoxing.com/apis/activity/getNoteTopicList\?puid\= url reject
