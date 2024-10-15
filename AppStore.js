// ==UserScript==
// @ScriptName        重定向插件AppStore++中的Lancely网页
// @Author            酷安@AmigoYao
// @UpdateTime        2024-07-18
// @Attention         如需引用请注明出处，谢谢！

##############################################

# 重定向以下域名
hostname = tools.lancely.tech
  
^https://tools.lancely.tech/apple/app-version/US/ url 302 https://apis.bilin.eu.org/history/
