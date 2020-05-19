var alertBoxCookieKey = "alertBoxCookieKey";
var isLogin="-1"
var phone_id="";

$(function () {

    sso_client.callback = getUserQuickInfo;

    //点击手机充值
    $(document).on("click", "#wtindex_sjcz", function () {
        $("#wtindex_sjtab").show();
        $("#wtindex_lltab").hide();
        $("#wtindex_sjcz").addClass("active");
        $("#wtindex_llcz").removeClass("active");
    });

    //点击流量充值
    $(document).on("click", "#wtindex_llcz", function () {
        $("#wtindex_lltab").show();
        $("#wtindex_sjtab").hide();
        $("#wtindex_llcz").addClass("active");
        $("#wtindex_sjcz").removeClass("active");
    });

    //充值模块 start
    $(".wt-cz-text").click(function () {
        $(".wt-cz-text").val("");
        $(".wt-cz-text").css('color', '#666');
        $(".wt-cz-tip").fadeOut(100);
    })
    $(".wt-cz-text").blur(function () {
        var text = $(".wt-cz-text").val();
        if (text == "") {
            $(".wt-cz-text").val("请输入手机号码");
            $(".wt-cz-text").css('color', '#ccc');
        }
    });
    // 充值按钮
    $(document).on("click", ".wt-cz-confirm-btn", function () {
        var telno = $(".wt-cz-text").val();
        if (!checkNum(telno)) {
            $(".wt-cz-tip").html("请输入正确的手机号码").fadeIn(500);
            return;
        } else {
            $(".wt-cz-tip").fadeOut(100);
        }
        var money = $(".wt-right-cz-ul li.active").attr("value");
        $.ajaxSubmit({
            url:'index/phoneNativeCheck',
            param:'telNum=' + telno,
            loadingType:'0',
            afterFn: function (data) {
                if(data.X_RESULTCODE != 0){
                    $("#mycz-errorMsg").html(data.X_RESULTINFO).show();
                    return;
                }
                var form = document.getElementById("submitform");
                form.amount.value= money;
                form.submit();
            }
        });
    });
    //点击其它金额
    $(document).on("click", ".wt-right-cz-ul-other", function () {
        window.location.href="http://shop.10086.cn/i/?f=rechargecredit&e=210";
        return false;
    });

    //充值点击切换
    $(".wdyd-tjyw-ul li,.wdyd-gxdz-ul li,.wt-right-cz-ul li").click(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    //充值模块 end


    // 是否展示电子发票部分
    var value = getCookie(alertBoxCookieKey);
    if(valIsNotEmpty(value)){
    }else{
        showBox();
        setCookie(alertBoxCookieKey,"1","-1","/");
    }


    // banner轮播效果
    addBannerEffect();


    /*// 初始化轮播
    $.ajaxSubmit({
        url: 'index/initBanner',
        afterFn: function (data) {
            if(data.X_RESULTCODE != undefined && data.X_RESULTCODE == '0'){
                /!*!// 维护信息 1-有  0-没有
                var hasAlert = data.hasAlert;
                if(hasAlert == 1){
                    var alertHtml = template("alertInfoArt",data);
                    $(".banner").prepend(alertHtml);
                }*!/
                // 是否实时推荐， 1-有 0-没有
                var hasRecommend = data.hasRecommend;
                if(valIsNotEmpty(hasRecommend)&&hasRecommend == 1){

                }
            }
        }
    });*/
    initMarketAds();


    // 初始化商城手机区域
    $.ajaxSubmit({
        url: 'index/initPhoneShop',
        param:'',
        contentId:'shopPhoneContent',
        artId:'shopPhoneArt',
        afterFn: function (data) {
        }
    });

    // $.ajaxSubmit({
    //     url: 'index/getFootAdvInfo',
    //     contentId:'btmBlue',
    //     artId:'footArt',
    //     loadingType:'0'
    // });


    //插码
    $("body").delegate("a,button","click",function(){
        var sdcCode = $(this).attr("sdcCode");
        if (sdcCode){
            if(typeof(_tag)!="undefined"){_tag.dcsMultiTrack('DCS.dcsuri','/nopv.gif','WT.znxc',sdcCode);}
        }
    });

    /**
     * 首页-底部-服务链接
     */
    $.ajaxSubmit({
        url:'allBusiness/initAdvJPTJ',
        param:"catENAME=SERVICE_LINKS",
        afterFn:function (data) {
            var linksHtml = template('linksArt', data);
            $("#linksContent").html(linksHtml);
        }
    });
    iptest();
});

function xjdy(){
    if(isLogin=="-1"){
        window.location.href="https://sh.ac.10086.cn/login";
    }else{
        window.open("http://survey.sh.chinamobile.com/cps/channel/2/203/280?telno="+phone_id);
    }

}

/**
 * 添加banner轮播效果
 */
function addBannerEffect() {
    $('#slides').slidesjs({
        width: 716,
        height: 421,
        play: {
            active: true,
            effect: "fade",
            interval: 3000,
            auto: true,
            swap: false,
            pauseOnHover: true,
            restartDelay: 2500
        },
        pagination: {
            active: true,
            effect: "fade"
        },
        navigation: {
            active: true,
            effect: "fade"
        },
        callback: {
            loaded: function(number) {
                $("#wtindex_wrap").css("background-color", $("#slides a").eq(0).find("img").attr("bannercolor"));
            },
            start: function (number) {

            },
            complete:function (number) {
                $("#wtindex_wrap").css("background-color", $("#slides a").eq(number-1).find("img").attr("bannercolor"));
            }
        }

    });
}


/**
 * 获取用户信息
 */
function getUserQuickInfo() {
    // 初始化右侧快捷菜单区域
    $.ajaxSubmit({
        url: 'index/initQuick',
        param:'',
        contentId: 'rightQuickContent',
        artId:'rightQuickArt',
        afterFn: function (data) {
            if(data.X_RESULTCODE != undefined && data.X_RESULTCODE == 0){
                isLogin=data.isLogin;
                phone_id=data.phone_id;
            }
        }
    });
}

function showBox(){
    $("#bgBlackWintrans").show();
    $("#ElecInvoice").show();
}


// js简单校验手机号
function checkNum() {
    var number = $(".wt-cz-text").val();
    var numExp = /^1[\d]{10}/;
    if (!numExp.test(number)) {
        $(".wt-cz-tip").html("请输入正确的手机号码").fadeIn(500);
        return false;
    } else {
        $(".wt-cz-tip").fadeOut(100);
        return true;
    }
}

function initMarketAds(){
    // 初始化首页广告
    $.ajaxSubmit({
        url: 'index/initMarketAds',
        afterFn: function (data) {
            if(data.X_RESULTCODE != undefined && data.X_RESULTCODE == '0'){
                if(!data.login){
                    return;
                }
                if(data.bannerList!=undefined){//轮播图广告
                    var count=0;
                    for(var i=0;i<data.bannerList.length;i++){
                        var adinfo = data.bannerList[i];
                        var title = adinfo.title;
                        var linkurl = adinfo.url;
                        var linkimg = adinfo.imgUrl;
                        var imgIndex = adinfo.imgIndex;
                        if(imgIndex!=null&&imgIndex!=undefined&&imgIndex!="undefined"&&imgIndex!=""){
                            var index = parseInt(imgIndex)-1;
                            if ($(".slidesjs-control a").length>=index){
                                $(".slidesjs-control a")[index].href=linkurl;
                                $(".slidesjs-control a").eq(index).attr("WTznxc",title);
                                $(".slidesjs-control img")[index].src=linkimg;
                                $(".slidesjs-control img")[index].title=title;
                                $(".slidesjs-control img")[index].alt=title;

                            }

                        }else if ($(".slidesjs-control a").length>count){
                            $(".slidesjs-control a")[count].href=linkurl;
                            $(".slidesjs-control a").eq(count).attr("WTznxc",title);
                            $(".slidesjs-control img")[count].src=linkimg;
                            $(".slidesjs-control img")[count].title=title;
                            $(".slidesjs-control img")[count].alt=title;

                            count++;
                        }else{
                            break;
                        }
                    }
                }
                if(data.rightAdList!=undefined){//右下角弹框广告
                    var m="",t="",count=0,index_count=0;
                    var size=data.rightAdList.length;
                    for(var i=0;i<size;i++){
                        var adinfo = data.rightAdList[i];
                        var title = adinfo.title;
                        var linkurl = adinfo.url;
                        var linkimg = adinfo.imgUrl;
                        var mode = adinfo.mode;
                        var text = adinfo.text;
                        var btntext = adinfo.btntext;
                        var telno = data.telno;

                        var id = adinfo.ordId;
                        if(mode=="1"){//显示模式 1:纯文字 2:纯图片 3:图文结合
                            m+= '<div class="wt-bottom-tc-win">'+
                                '<div class="wt-bottom-tc-tlt">'+
                                '	<span class="float-l">尊敬的'+telno+'客户</span>'+
                                '	<a href="#" class="float-r wt-bottom-tc-close"></a>'+
                                '</div>'+
                                '<div class="wt-bottom-tc-txt">'+
                                '<p>'+ text+'</p>';
                        }else if(mode=="2"){//显示模式 1:纯文字 2:纯图片 3:图文结合 //
                            m+= '<div class="wt-bottom-tc-win">'+
                                '<div class="wt-bottom-tc-tlt">'+
                                '	<span class="float-l">尊敬的'+telno+'客户</span>'+
                                '	<a href="#" class="float-r wt-bottom-tc-close"></a>'+
                                '</div>'+
                                '<div class="wt-bottom-tc-txt">'+
                                '<p><img src="'+ linkimg+'" width="225px" height="120px"/></p>';
                        }else{
                            m+= '<div class="wt-bottom-tc-win">'+
                                '<div class="wt-bottom-tc-tlt">'+
                                '	<span class="float-l">尊敬的'+telno+'客户</span>'+
                                '	<a href="#" class="float-r wt-bottom-tc-close"></a>'+
                                '</div>'+
                                '<div class="wt-bottom-tc-txt">'+
                                '<p><img src="'+ linkimg+'" width="225px" height="120px"/></p>'+
                                '<p>'+ text+'</p>';
                        }
                        if (linkurl){
                            var WTznxc = ' WTznxc="' + adinfo.id +'" ';

                            m+=	'<p class="text-align-c padding-top-10">'+
                                '   <a href="'+linkurl+'" target="_blank" class="wt-bottom-tc-btn" ' + WTznxc +' >'+btntext+'</a>'+
                                '</p>';
                        }
                        m+= '</div></div>';

                        if (size==1){
                            t=''+t;
                        }else{
                            t='<span class="wt-bottom-tc-page" value="'+(count)+'">'+(count+1)+'</span>'+t;
                        }
                        count++;

                    }
                    if (count>0){
                        t='<div class="wt-bottom-tc">'+m+'<div class="wt-bottom-tc-bottom">'+t+'</div></div>';
                        $("body").append(t);
                        $(".wt-bottom-tc-win").hide().eq(0).show();
                        if(size==1){
                            $(".wt-bottom-tc-bottom").css("height","0");
                        }
                        $("body").delegate(".wt-bottom-tc-page","click",function(e){
                            $(".wt-bottom-tc-page-active").removeClass("wt-bottom-tc-page-active").addClass("wt-bottom-tc-page");
                            $(this).removeClass("wt-bottom-tc-page").addClass("wt-bottom-tc-page-active");
                            $(".wt-bottom-tc-win").hide().eq(parseInt($(this).attr("value"))).show();
                            return false;
                        });
                        $("body").delegate(".wt-bottom-tc-close","click",function(e){
                            $(".wt-bottom-tc").hide();
                            return false;
                        });
                    }
                }
                if(data.bottomAdList!=undefined){//底部浮层广告
                    var h=[];
                    h.push('<ul class="bottom-contain bottom-contain2" style="max-width: 1350px;">');

                    for(var i=0;i<data.bottomAdList.length;i++){
                        var adinfo = data.bottomAdList[i];
                        var title = adinfo.title;
                        var linkurl = adinfo.webUrl;
                        var linkimg = adinfo.imgUrl;
                        var imgPoint = adinfo.imgPoint;
                        h.push('<li class="zt-code2">');
                        h.push('<a href="'+linkurl+'" class="zt-code2-img-list" target="_blank"><img  class="zt-code2-img" src="'+linkimg+'"  alt="'+title+'"/></a>');
                        h.push('</li>');
                    }
                h.push('<div class="clear"></div><span class="btn-close" id="btnClosebom" style="cursor:pointer">收起</span>');
                h.push('</ul>');
                $("#btmBlue").html(h.join(''));
                $("#btnClosebom").unbind("click").click(function(){
                    $("#btmBlue").hide();
                    $("#btmOpen").show();
                });
                }

            }
        }
    });
}

function openbtmImg(obj) {
    $(obj).find(".zt-erweima").show();
}

function closebtmImg(obj) {
    $(obj).find(".zt-erweima").hide();
}
function btmClose(obj) {
    $(obj).parents(".zt-erweima").hide();
}
