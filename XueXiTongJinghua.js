// ==UserScript==
// @ScriptName        学习通净化
// @Author            酷安@AmigoYao
// @MainFunction      学习通首页净化，去除广告和顶部轮播信息流，需要Quantumult X版本1.5.2 844+
// @UpdateTime        2026-03-02
// @Attention         如需引用请注明出处，谢谢！

##############################################
# 重写以下域名
hostname = apps.chaoxing.com, home-yd.chaoxing.com, appswh.chaoxing.com

https://apps.chaoxing.com/apis/recent/getRecord.jspx\?puid\= url response-body \{"cataName":"网页".*?"resTitle":"学生大礼包".*?"key":"common_xueshengquanyi".*?\},\{ response-body \{

https://home\-yd.chaoxing.com/apis/data/getAdsRecommend\?token\= url response-body ("bannerListV2"\s*:\s*)\[[\s\S]*\] response-body $1[]

https://appswh.chaoxing.com/apis/activity/getNoteTopicList\?puid\= url response-body ("list"\s*:\s*)\[([\s\S]*)\] response-body $1[]
