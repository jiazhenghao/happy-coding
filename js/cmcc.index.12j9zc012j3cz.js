var alertBoxCookieKey="alertBoxCookieKey";var isLogin="-1";var phone_id="";$(function(){sso_client.callback=getUserQuickInfo;$(document).on("click","#wtindex_sjcz",function(){$("#wtindex_sjtab").show();$("#wtindex_lltab").hide();$("#wtindex_sjcz").addClass("active");$("#wtindex_llcz").removeClass("active")});$(document).on("click","#wtindex_llcz",function(){$("#wtindex_lltab").show();$("#wtindex_sjtab").hide();$("#wtindex_llcz").addClass("active");$("#wtindex_sjcz").removeClass("active")});$(".wt-cz-text").click(function(){$(".wt-cz-text").val("");$(".wt-cz-text").css("color","#666");$(".wt-cz-tip").fadeOut(100)});$(".wt-cz-text").blur(function(){var t=$(".wt-cz-text").val();if(t==""){$(".wt-cz-text").val("请输入手机号码");$(".wt-cz-text").css("color","#ccc")}});$(document).on("click",".wt-cz-confirm-btn",function(){var t=$(".wt-cz-text").val();if(!checkNum(t)){$(".wt-cz-tip").html("请输入正确的手机号码").fadeIn(500);return}else{$(".wt-cz-tip").fadeOut(100)}var i=$(".wt-right-cz-ul li.active").attr("value");$.ajaxSubmit({url:"index/phoneNativeCheck",param:"telNum="+t,loadingType:"0",afterFn:function(t){if(t.X_RESULTCODE!=0){$("#mycz-errorMsg").html(t.X_RESULTINFO).show();return}var e=document.getElementById("submitform");e.amount.value=i;e.submit()}})});$(document).on("click",".wt-right-cz-ul-other",function(){window.location.href="http://shop.10086.cn/i/?f=rechargecredit&e=210";return false});$(".wdyd-tjyw-ul li,.wdyd-gxdz-ul li,.wt-right-cz-ul li").click(function(){$(this).addClass("active").siblings("li").removeClass("active")});var t=getCookie(alertBoxCookieKey);if(valIsNotEmpty(t)){}else{showBox();setCookie(alertBoxCookieKey,"1","-1","/")}addBannerEffect();initMarketAds();$.ajaxSubmit({url:"index/initPhoneShop",param:"",contentId:"shopPhoneContent",artId:"shopPhoneArt",afterFn:function(t){}});$("body").delegate("a,button","click",function(){var t=$(this).attr("sdcCode");if(t){if(typeof _tag!="undefined"){_tag.dcsMultiTrack("DCS.dcsuri","/nopv.gif","WT.znxc",t)}}});$.ajaxSubmit({url:"allBusiness/initAdvJPTJ",param:"catENAME=SERVICE_LINKS",afterFn:function(t){var e=template("linksArt",t);$("#linksContent").html(e)}});iptest()});function xjdy(){if(isLogin=="-1"){window.location.href="https://sh.ac.10086.cn/login"}else{window.open("http://survey.sh.chinamobile.com/cps/channel/2/203/280?telno="+phone_id)}}function addBannerEffect(){$("#slides").slidesjs({width:716,height:421,play:{active:true,effect:"fade",interval:3e3,auto:true,swap:false,pauseOnHover:true,restartDelay:2500},pagination:{active:true,effect:"fade"},navigation:{active:true,effect:"fade"},callback:{loaded:function(t){$("#wtindex_wrap").css("background-color",$("#slides a").eq(0).find("img").attr("bannercolor"))},start:function(t){},complete:function(t){$("#wtindex_wrap").css("background-color",$("#slides a").eq(t-1).find("img").attr("bannercolor"))}}})}function getUserQuickInfo(){$.ajaxSubmit({url:"index/initQuick",param:"",contentId:"rightQuickContent",artId:"rightQuickArt",afterFn:function(t){if(t.X_RESULTCODE!=undefined&&t.X_RESULTCODE==0){isLogin=t.isLogin;phone_id=t.phone_id}}})}function showBox(){$("#bgBlackWintrans").show();$("#ElecInvoice").show()}function checkNum(){var t=$(".wt-cz-text").val();var e=/^1[\d]{10}/;if(!e.test(t)){$(".wt-cz-tip").html("请输入正确的手机号码").fadeIn(500);return false}else{$(".wt-cz-tip").fadeOut(100);return true}}function initMarketAds(){$.ajaxSubmit({url:"index/initMarketAds",afterFn:function(t){if(t.X_RESULTCODE!=undefined&&t.X_RESULTCODE=="0"){if(!t.login){return}if(t.bannerList!=undefined){var e=0;for(var i=0;i<t.bannerList.length;i++){var a=t.bannerList[i];var o=a.title;var n=a.url;var s=a.imgUrl;var c=a.imgIndex;if(c!=null&&c!=undefined&&c!="undefined"&&c!=""){var l=parseInt(c)-1;if($(".slidesjs-control a").length>=l){$(".slidesjs-control a")[l].href=n;$(".slidesjs-control a").eq(l).attr("WTznxc",o);$(".slidesjs-control img")[l].src=s;$(".slidesjs-control img")[l].title=o;$(".slidesjs-control img")[l].alt=o}}else if($(".slidesjs-control a").length>e){$(".slidesjs-control a")[e].href=n;$(".slidesjs-control a").eq(e).attr("WTznxc",o);$(".slidesjs-control img")[e].src=s;$(".slidesjs-control img")[e].title=o;$(".slidesjs-control img")[e].alt=o;e++}else{break}}}if(t.rightAdList!=undefined){var r="",d="",e=0,f=0;var u=t.rightAdList.length;for(var i=0;i<u;i++){var a=t.rightAdList[i];var o=a.title;var n=a.url;var s=a.imgUrl;var m=a.mode;var v=a.text;var w=a.btntext;var h=t.telno;var p=a.ordId;if(m=="1"){r+='<div class="wt-bottom-tc-win">'+'<div class="wt-bottom-tc-tlt">'+'\t<span class="float-l">尊敬的'+h+"客户</span>"+'\t<a href="#" class="float-r wt-bottom-tc-close"></a>'+"</div>"+'<div class="wt-bottom-tc-txt">'+"<p>"+v+"</p>"}else if(m=="2"){r+='<div class="wt-bottom-tc-win">'+'<div class="wt-bottom-tc-tlt">'+'\t<span class="float-l">尊敬的'+h+"客户</span>"+'\t<a href="#" class="float-r wt-bottom-tc-close"></a>'+"</div>"+'<div class="wt-bottom-tc-txt">'+'<p><img src="'+s+'" width="225px" height="120px"/></p>'}else{r+='<div class="wt-bottom-tc-win">'+'<div class="wt-bottom-tc-tlt">'+'\t<span class="float-l">尊敬的'+h+"客户</span>"+'\t<a href="#" class="float-r wt-bottom-tc-close"></a>'+"</div>"+'<div class="wt-bottom-tc-txt">'+'<p><img src="'+s+'" width="225px" height="120px"/></p>'+"<p>"+v+"</p>"}if(n){var b=' WTznxc="'+a.id+'" ';r+='<p class="text-align-c padding-top-10">'+'   <a href="'+n+'" target="_blank" class="wt-bottom-tc-btn" '+b+" >"+w+"</a>"+"</p>"}r+="</div></div>";if(u==1){d=""+d}else{d='<span class="wt-bottom-tc-page" value="'+e+'">'+(e+1)+"</span>"+d}e++}if(e>0){d='<div class="wt-bottom-tc">'+r+'<div class="wt-bottom-tc-bottom">'+d+"</div></div>";$("body").append(d);$(".wt-bottom-tc-win").hide().eq(0).show();if(u==1){$(".wt-bottom-tc-bottom").css("height","0")}$("body").delegate(".wt-bottom-tc-page","click",function(t){$(".wt-bottom-tc-page-active").removeClass("wt-bottom-tc-page-active").addClass("wt-bottom-tc-page");$(this).removeClass("wt-bottom-tc-page").addClass("wt-bottom-tc-page-active");$(".wt-bottom-tc-win").hide().eq(parseInt($(this).attr("value"))).show();return false});$("body").delegate(".wt-bottom-tc-close","click",function(t){$(".wt-bottom-tc").hide();return false})}}if(t.bottomAdList!=undefined){var g=[];g.push('<ul class="bottom-contain bottom-contain2" style="max-width: 1350px;">');for(var i=0;i<t.bottomAdList.length;i++){var a=t.bottomAdList[i];var o=a.title;var n=a.webUrl;var s=a.imgUrl;var x=a.imgPoint;g.push('<li class="zt-code2">');g.push('<a href="'+n+'" class="zt-code2-img-list" target="_blank"><img  class="zt-code2-img" src="'+s+'"  alt="'+o+'"/></a>');g.push("</li>")}g.push('<div class="clear"></div><span class="btn-close" id="btnClosebom" style="cursor:pointer">收起</span>');g.push("</ul>");$("#btmBlue").html(g.join(""));$("#btnClosebom").unbind("click").click(function(){$("#btmBlue").hide();$("#btmOpen").show()})}}}})}function openbtmImg(t){$(t).find(".zt-erweima").show()}function closebtmImg(t){$(t).find(".zt-erweima").hide()}function btmClose(t){$(t).parents(".zt-erweima").hide()}