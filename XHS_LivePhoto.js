// ==UserScript==
// @ScriptName        小红书实况图无水印(丐版)
// @Author            酷安@AmigoYao
// @UpdateTime        2024-10-16
// @Attention         如需引用请注明出处，谢谢！

##############################################

# 主机名
hostname = sns-video-bd.xhscdn.com

# response-body
https://edith.xiaohongshu.com/api/sns/v1/note/live_photo/save url response-body http://sns-video-.{2}.xhscdn.com/stream/\d+/\d+/[a-zA-Z0-9]+_\d+.mp4(?:\?sign=[a-zA-Z0-9]+&t=.{8})? response-body AmigoYao
