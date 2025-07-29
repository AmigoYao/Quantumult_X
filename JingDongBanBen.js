// ==UserScript==
// @ScriptName        屏蔽京东开屏要求更新
// @Author            酷安@AmigoYao
// @UpdateTime        2025-07-30
// @Attention         如需引用请注明出处，谢谢！

##############################################

# 重写以下域名
hostname = api.m.jd.com
  
https://api.m.jd.com/api/appPublishUpgrade url request-body clientVersion=(\d+\.\d+\.\d+)&osVersion request-body clientVersion=99.9.9&osVersion
