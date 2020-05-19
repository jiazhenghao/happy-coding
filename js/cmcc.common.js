$(function() {

    // tabs切换JS
    if($('.tabs').length>0){
        $('.tabs').tabslet();
    }
    //左侧菜单
    $("#navlist li").mouseenter(function() {
        var num = $(this).nextAll().length;
        var max = $("#navlist li").length;
        /*if (num == max - 1) {
            $(this).css({
                'border-left': '1px #25b2fe solid',
                'border-bottom': '1px #25b2fe solid',
                'background-color': '#fbfbfb'
            });
            $(".wt-left-meun-ul").css({
                'border-top': '1px #25b2fe solid'
            });
        } else {
            $(this).css({
                'border-left': '1px #25b2fe solid',
                'border-bottom': '1px #25b2fe solid',
                'background-color': '#fbfbfb'
            }).prev().css({
                'border-bottom': '1px #25b2fe solid'
            });
        }*/
        $(this).children(".wt-navcon").show();
        $(this).append("<i></i>")
        $(this).children("p").children("a").css("color", "#51c0ff");
        $(this).children("p").children("a.color-f00").css("color", "#f00");
    }).mouseleave(function() {
        var num = $(this).nextAll().length;
        var max = $("#navlist li").length;
        /*if (num == max - 1) {
            $(this).css({
                'border-left': '1px #d6d6d6 solid',
                'border-bottom': '1px #d6d6d6 solid',
                'background-color': '#fff'
            });
            $(".wt-left-meun-ul").css({
                'border-top': '1px #d6d6d6 solid'
            });
        } else {
            $(this).css({
                'border-left': '1px #d6d6d6 solid',
                'border-bottom': '1px #d6d6d6 solid',
                'background-color': '#fff'
            }).prev().css({
                'border-bottom': '1px #d6d6d6 solid'
            });
        }*/
        $(this).children(".wt-navcon").hide();
        $(this).children("i").remove();
        $(this).children("p").children("a").css("color", "#8c8b8b");
        $(this).children("p").children("a.color-f00").css("color", "#f00");
        $(this).children("p").children("a.tlt").css("color", "#434242");
    });
    $("#wt-nav").mouseleave(function() {
        $("#wt-nav .wt-navcon").hide();
    });

    //左右小箭头点击处理
    $(document).on('click','.wt-right-meun-ul-prev',function () {
        //$(".wt-right-meun-ul-prev").click(function() {
        $(".wt-right-meun-ul").animate({
            "left": "0"
        }, 100);
        $(".wt-right-meun-ul-prev").css("display", "none");
        $(".wt-right-meun-ul-next").css("display", "block");
        return false;
    });
    $(document).on('click','.wt-right-meun-ul-next',function () {
        //$(".wt-right-meun-ul-next").click(function() {
        i = $(".wt-right-meun-ul-box").width();
        if (i == 246) {
            $(".wt-right-meun-ul").animate({
                "left": "-246px"
            }, 100);
        } else if (i == 210) {
            $(".wt-right-meun-ul").animate({
                "left": "-210px"
            }, 100);
        }
        $(".wt-right-meun-ul-next").css("display", "none");
        $(".wt-right-meun-ul-prev").css("display", "block");
        return false;
    });

    //首页右侧浮层
    $(".wt-right-tip li").mouseenter(function() {
        $(this).children("i").fadeIn(300);
    }).mouseleave(function() {
        $(this).children("i").fadeOut(300);
    });

    //底部广告条操作开始
    $('#btmClose').bind('click', function() {
        $('#btmCode').hide();
    });

    $('#btnClosebom').bind('click', function() {
        $('#btmBlue').hide();
        $('#btmOpen').show();
    });

    $('#btnOpenbom').bind('click', function() {
        $('#btmBlue').show();
        $('#btmOpen').hide();
    });

    $('#ztCode').hover(function() {
        $('#btmCode').show();
    }, function() {
        $('#btmCode').hide();
    });
    //底部广告条操作结束

    //隐藏电子发票弹窗
    $('#ElecClose').on('click', function() {
        $(this).parent().hide();
        $('#bgBlackWintrans').hide();
    });

    /*轮播图箭头*/
    $('.banner a.slidesjs-next,.banner a.slidesjs-previous').removeAttr("title");
    $(".banner .slidesjs-next,.banner .slidesjs-previous").hide();
    $(".banner").mouseenter(function() {
        $(".banner .slidesjs-next,.banner .slidesjs-previous").fadeIn();

    }).mouseleave(function() {
        $(".banner .slidesjs-previous,.banner .slidesjs-next").fadeOut();
    });
    $('.slidesjs-container,.slidesjs-control').css('height', '421px');
    $('.slidesjs-container').removeAttr("style");

    /*首页 楼层图片 鼠标滑过效果*/
    $("body").delegate(".ad-list a", "mouseenter", function() {
        $(this).children("img").animate({
            left: '-20px'
        }, 500);
    });
    $("body").delegate(".ad-list a", "mouseleave", function() {
        $(this).children("img").animate({
            left: '0'
        }, 300);
    });

    // 4G套餐选择JS
    $('.check_list li').on('click', function() {
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
    });
    // 4G套餐显示加入对比事件
    $('.check_list li').hover(function() {
        $(this).find('.btn_comp').show();
        $(this).find('p').show();
        $(this).siblings('li').children('.btn_comp').hide();
    }, function() {
        $(this).find('.btn_comp').hide();
        $(this).find('p').hide();
    });
    //加入对比弹窗宽度控制
    var litotal = $('.taocan_ul>li').length;
    if (litotal == 2) {
        $('.taocan_ul>li').css('width', '50%');
        $('.taocan_ul>li').parents('.db-modal-style').css('width', '50%');
    }

    //加入对比效果
    $('.btn_comp').bind('click', function() {
        $('.floatdiv').show();
        $(this).attr('disabled', true);
        var nowhtml = $(this).siblings('span').html();
        $("#selectedplan").append("<li><span>x</span><p>4G飞享套餐</p><p>" + nowhtml + "</p></li>");
        var li_length = $("#selectedplan li").length;
        $('.floatdiv ul').find('span').bind('click', function() {
            $(this).parent('li').remove();
        });
        if (li_length >= 3) {
            $('.btn_comp').unbind('click');
        }
    });
    //点击隐藏展开
    $(".collapse").click(function() {
        $(this).toggleClass("item");
        $(this).next(".collapse-item").slideToggle(500);
    });
    //鼠标经过事件
    $('.popboxp').hover(function() {
        $(this).find(".popbox").show();
    }, function() {
        $(this).find(".popbox").hide();
    });
    //下拉框
    $(".bill-select-value").each(function(e) {
        var dropdown_menu = $(this).siblings('.bill-select-menu');
        $(this).click(function() {
            dropdown_menu.show();
        });

        $(document).mouseup(function(e) {
            dropdown_menu.hide();

        });
    });
    //下拉框Li点击
    $('.bill-select-menu li').bind('click', function() {
        var htmlStr = $(this).text();
        $(this).parent('ul').siblings('.bill-select-value').text(htmlStr);
    });
    //发送到139邮箱显示
    $('.cs-mail-to span').click(function() {
        $(this).siblings('ul').toggle();
    });

    template.helper("dateFormat" ,dateFormat)

});



//在线充值js
$(function() {

    //请选择账单月下拉效果
    $('.select-value').click(function() {

        if ($(this).hasClass('select-show')) {
            $(this).removeClass('select-show');
        } else {
            $(this).addClass('select-show');
        }

        $(this).siblings('.select-menu').toggle();
    });
    //打开常用号码管理弹窗
    $('.manageNumber').bind('click', function() {
        $('.phonemanage').show();
    });
    //关闭常用号码管理弹框
    $('.phonemanage').find('.this-close').bind('click', function() {
        $(this).parents('.phonemanage').hide();
    });

    //一人充值与多人充值tab切换添加效果事件
    $('.recharge-tabs').children('li').bind('click', function() {

        if ($(this).hasClass('one')) {
            $(this).addClass('oneCurrent');
            $(this).siblings().removeClass('moreCurrent');
        }
        if ($(this).hasClass('more')) {
            $(this).addClass('moreCurrent');
            $(this).siblings().removeClass('oneCurrent');
        }

    });
    //多人充值.multi-item列表显示效果
    $('.multi-item').bind('click', function() {
        $(this).addClass('multi-item-cur').siblings('.multi-item').removeClass('multi-item-cur');
    });
    //删除当前多人充值.multi-item列表
    $('.ico-close').bind('click', function() {
        $(this).parent('.multi-item').remove();
    });
    //充值金额下拉效果
    $('.amount-cur').bind('click', function() {
        $(this).siblings('.amount-list').toggle();
    });

    //充值优惠选择
    $('.select-list').bind('click', function() {
        if ($(this).hasClass('item')) {
            $(this).addClass('select');
            $(this).parent('dl').siblings().find('.select').addClass('item');
            $(this).parent('dl').siblings().find('.select').removeClass('select');
        }
        if ($(this).hasClass('select')) {
            $(this).addClass('item');
        }
    });
    //显示未登录前提示
    $('.phone-ipt').hover(function() {
        $(this).siblings('.phoneList').show();
    }, function() {
        $(this).siblings('.phoneList').hide();
    });
});

//易充值js,充值卡js
$(function() {
    //请填写绑定信息切换
    $('#bindbankinforadio').bind('click', function() {
        $('.bindbankinfocontent').show();
        $('.bindaliinfocontent').hide();
        $(this).siblings('.bindbankinfotag').show();
        $(this).parent('div').siblings().children('.bindbankinfotag').hide();
    });
    $('#bindaliinforadio').bind('click', function() {
        $('.bindaliinfocontent').show();
        $('.bindbankinfocontent').hide();
        $(this).siblings('.bindbankinfotag').show();
        $(this).parent('div').siblings().children('.bindbankinfotag').hide();
    });
    //显示键盘
    $('.card-pwd-ipt').bind('click', function() {
        $(this).siblings('.keyboard').fadeToggle('fast');
    });
    //显示键盘
    $('.card-pwd-ipt').bind('click', function() {
        $(this).siblings('.keyboard').fadeToggle('fast');
    });
    //显示键盘
    $('.card-pwd-ipt').bind('click', function() {
        $(this).siblings('.keyboard').fadeToggle('fast');
    });
    $('.ico-keyboard').bind('click', function() {
        $(this).siblings('.keyboard').fadeToggle('fast');
    });

});

$("#clicklogin").click(function(){
    loginBoxShow();
});

//宽带预约
$(function() {
    $("#sh_main").delegate("#kdxz_choose_dtl span", "click", function () {
        $(this).css({"background": "#15abff", "color": "#fff"});
        $(this).siblings().attr("class", "kdxz-number").css({"background": "", "color": ""});
    });
    $("#kdxz_select_div").toggle(function () {
        $(".kdxz-bubble").show();
        $(".kdxz-bubble p").each(function (i) {
            $(this).click(function () {
                $("#kdxz_select_div").html($(this).html());
                if ($(this).html() == '按套餐分类') {
                    $("#Ez-second").hide();
                    $("#kdxz_choose_dtl").show();
                } else {
                    $("#Ez-second").show();
                    $("#kdxz_choose_dtl").hide();
                }
                $(".kdxz-bubble").hide();
                return;
            });
        });
    }, function () {
        if ($(".kdxz-bubble").css("display") == "none") {
            $(".kdxz-bubble").show();
        } else {
            $(".kdxz-bubble").hide();
        }
    });
    $(".Ez-own-btn").click(function(){
        $(".Ez-own").show().siblings(".Ez-fam").hide();
        $(".Ez-own").show().siblings(".Ez-pure").hide();
        $(".Ez-own").show().siblings(".Ez-famzz").hide();
        $("#Ez-ngr4").removeClass("margin-r-6");
    });
    $(".Ez-fam-btn").click(function(){
        $(".Ez-fam").show().siblings(".Ez-own").hide();
        $(".Ez-fam").show().siblings(".Ez-pure").hide();
        $(".Ez-fam").show().siblings(".Ez-famzz").hide();
        $("#Ez-njt2").addClass("margin-r-6");
        $("#Ez-njt4").removeClass("margin-r-6");
    });
    $(".Ez-famzz-btn").click(function(){
        $(".Ez-famzz").show().siblings(".Ez-fam").hide();
        $(".Ez-famzz").show().siblings(".Ez-pure").hide();
        $(".Ez-famzz").show().siblings(".Ez-own").hide();
    });
    $(".Ez-pure-btn").click(function(){
        $(".Ez-pure").show().siblings(".Ez-fam").hide();
        $(".Ez-pure").show().siblings(".Ez-own").hide();
        $(".Ez-pure").show().siblings(".Ez-famzz").hide();
        $("#Ez-ndyw1").addClass("margin-r-6");
        $("#Ez-ndyw5").addClass("margin-r-6");
        $("#Ez-ndyw6").addClass("margin-r-6");
        $("#Ez-ndyw7").addClass("margin-r-6");
        $("#Ez-ndyw4").removeClass("margin-r-6");
        $("#Ez-ndyw8").removeClass("margin-r-6");
    });
    $(".kdxz-all").click(function(){
        $(".kdxz-lay01").show();
        $("#Ez-njt4").addClass("margin-r-6");
        $("#Ez-ndyw4").addClass("margin-r-6");
        $("#Ez-ndyw6").addClass("margin-r-6");
        $("#Ez-ndyw7").addClass("margin-r-6");
        $("#Ez-ngr4").removeClass("margin-r-6");
        $("#Ez-njt2").removeClass("margin-r-6");
        $("#Ez-ndyw1").removeClass("margin-r-6");
        $("#Ez-ndyw5").removeClass("margin-r-6");
        $(this).css({"background": "#15abff", "color": "#fff"});
        $(this).siblings().attr("class", "kdxz-number").css({"background": "", "color": ""});
    });
    $(".Ez-twenty-btn").click(function(){
        $(".Ez-twenty").show().siblings(".Ez-fifty").hide();
        $(".Ez-twenty").show().siblings(".Ez-hundred").hide();
        $(".Ez-twenty").show().siblings(".Ez-hundredt").hide();
        $(".Ez-twenty").show().siblings(".Ez-famzz").hide();
        $("#Ez-ndyw1").addClass("margin-r-6");
        $("#Ez-njt2").removeClass("margin-r-6");
        $(this).css({"background": "#15abff", "color": "#fff"});
        $(this).siblings().attr("class", "kdxz-number").css({"background": "", "color": ""});
    });
    $(".Ez-fifty-btn").click(function(){
        $(".Ez-fifty").show().siblings(".Ez-twenty").hide();
        $(".Ez-fifty").show().siblings(".Ez-hundred").hide();
        $(".Ez-fifty").show().siblings(".Ez-hundredt").hide();
        $(".Ez-fifty").show().siblings(".Ez-famzz").hide();
        $("#Ez-none5").addClass("margin-r-6");
        $("#Ez-ndyw4").removeClass("margin-r-6");
        $(this).css({"background": "#15abff", "color": "#fff"});
        $(this).siblings().attr("class", "kdxz-number").css({"background": "", "color": ""});
    });
    $(".Ez-hundred-btn").click(function(){
        $(".Ez-hundred").show().siblings(".Ez-twenty").hide();
        $(".Ez-hundred").show().siblings(".Ez-fifty").hide();
        $(".Ez-hundred").show().siblings(".Ez-hundredt").hide();
        $(".Ez-hundred").show().siblings(".Ez-famzz").hide();
        $("#Ez-ngr4").addClass("margin-r-6");
        $("#Ez-njt4").addClass("margin-r-6");
        $("#Ez-ndyw5").addClass("margin-r-6");
        $("#Ez-ndyw6").removeClass("margin-r-6");
        $("#Ez-ndyw7").removeClass("margin-r-6");
        $(this).css({"background": "#15abff", "color": "#fff"});
        $(this).siblings().attr("class", "kdxz-number").css({"background": "", "color": ""});
    });
    $(".Ez-hundredt-btn").click(function(){
        $(".Ez-hundredt").show().siblings(".Ez-twenty").hide();
        $(".Ez-hundredt").show().siblings(".Ez-fifty").hide();
        $(".Ez-hundredt").show().siblings(".Ez-hundred").hide();
        $("#Ez-ndyw7").removeClass("margin-r-6");
        $(this).css({"background": "#15abff", "color": "#fff"});
        $(this).siblings().attr("class", "kdxz-number").css({"background": "", "color": ""});
    });
})
//宽带新装协议弹窗
$(function() {
    $('.see-xieyi').click(function() {
        $('#kdzxsl_mask').show();
        $('.kdzxsl-tcc03_new').show();
    });
    $('.kdzxsl-close').click(function() {
        $('#kdzxsl_mask').hide();
        $('.kdzxsl-tcc03_new').hide();
    });

    $('#dis-agree-btn').click(function() {
        $('#kdzxsl_mask').hide();
        $('.kdzxsl-tcc03_new').hide();
    });
});
//宽带预约详情
$(function() {
    $(".Ez-open").click(function() {
        $(this).hide();
        $(".Ez-unfold").show();
    });
    $(".Ez-close").click(function() {
        $(".Ez-unfold").hide();
        $(".Ez-open").show();
    });
    $(".Ez-btn").click(function() {
        $(".hdgz").show();
        $("#back2").show();
    });
    $(".close2").click(function() {
        $(".hdgz").hide();
        $("#back2").hide();
    });
    $(".btn").click(function() {
        $(".hdgz1").show();
        $("#back2").show();
    });
    $(".close2").click(function() {
        $(".hdgz1").hide();
        $("#back2").hide();
    });
    $(".Ez-btn").click(function() {
        $(".hdgz").show();
        $("#back2").show();
    });
    $(".close2").click(function() {
        $(".hdgz").hide();
        $("#back2").hide();
    });
    $(".btn").click(function() {
        $(".hdgz1").show();
        $("#back2").show();
    });
    $(".close2").click(function() {
        $(".hdgz1").hide();
        $("#back2").hide();
    });
    $(".Ez-btn").click(function() {
        $(".hdgz").show();
        $("#back2").show();
    });
    $(".close2").click(function() {
        $(".hdgz").hide();
        $("#back2").hide();
    });
    $(".btn").click(function() {
        $(".hdgz1").show();
        $("#back2").show();
    })
    $(".close2").click(function() {
        $(".hdgz1").hide();
        $("#back2").hide();
    });
    //在线预约
    $("#kdyh_old").click(function() {
        $(this).addClass("active").siblings(".kddd-checkbox").removeClass("active");
    });
    $("#kdyh_new").click(function() {
        $(this).addClass("active").siblings(".kddd-checkbox").removeClass("active");
    });
    $("body").delegate("#kd_type", "click", function(e) {
        $(this).siblings(".kddd-select-ul").slideDown();
    });
    $("body").delegate("#kd_type_select li", "click", function() {
        $(this).parent(".kddd-select-ul").siblings(".kddd-option").html($(this).html());
        $(this).parent(".kddd-select-ul").slideUp();
    });
    $("body").delegate("#kd_dtl", "click", function(e) {
        $(this).siblings(".kddd-select-ul").slideDown();
    });
    $("body").delegate("#kd_dtl_select li", "click", function() {
        var value = $(this).attr("value");
        $(this).parent(".kddd-select-ul").siblings(".kddd-option").html($(this).html()).attr("value", value);
        $(this).parent(".kddd-select-ul").slideUp();
    });
    $("#kdyy_mbh_checkbox").click(function() {
        if ($(this).attr("class").indexOf('active') != -1) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $("#kdyy_gh_checkbox").click(function() {
        if ($(this).attr("class").indexOf('active') != -1) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $("body").delegate("#optionaddress_div", "click", function(e) {
        $(this).siblings(".kddd-select-ul").slideDown();
    });

    $("body").delegate("#optionaddress_select li", "click", function() {
        var value = $(this).attr("value");
        $(this).parent(".kddd-select-ul").siblings(".kddd-option").html($(this).html()).attr("value", value);
        $(this).parent(".kddd-select-ul").slideUp();
    });
    $("#agreementradio1").click(function() {
        $(this).addClass("active").siblings(".kddd-radio").removeClass("active");
        $("#commitbutton").removeClass("kddd-btn02");
        $("#commitbutton").addClass("kddd-btn03");
    });
    $("#agreementradio2").click(function() {
        $(this).addClass("active").siblings(".kddd-radio").removeClass("active");
        $("#commitbutton").removeClass("kddd-btn03");
        $("#commitbutton").addClass("kddd-btn02");
        $("#commitbutton").unbind("click");
    });

    //显示分享
    $(".toshare").click(function() {
        $(".sh_main_sharepop").toggle();
    });

});

// 和多号选择
$(function() {
    $('.icheckbox_flat-blue').click(function() {
        $(this).toggleClass('checked').parent().parent().siblings().find('.icheckbox_flat-blue').removeClass('checked');
    });
})

// 滚动至顶部
function scrollToTop(){
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;

    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,0-sTop);
}
//滚动到底部
function scrollToBottom(){
    var height = document.body.scrollHeight;
    window.scrollBy(0,height);
}

// 展示遮罩层
function showShade() {
    $("#shadeBox").show();
}
function hideShade() {
    $("#shadeBox").hide();
}

/**
 * 校验-手机号
 */
function checkTel(tel) {
    var reg=new RegExp("^021[2-8][0-9]{7}$");
    var al=tel.match(reg);
    if(al!=null){
        return true;
    }else{
        return checkNativeNumber(tel);
    }

}
var isNativePhoneMsg="";
function checkNativeNumber(tel) {
    var isNativePhone=false;
    isNativePhoneMsg="";
    $.ajaxDirect({
        url: 'baseCommon/checkNativeNumber',
        param: "billId=" + tel,
        async:false,
        loadingType: '0',
        afterFn: function(data){
            if(data.X_RESULTCODE!="0"){
                isNativePhone=false;
                isNativePhoneMsg=data.X_RESULTINFO;
            }else{
                isNativePhone=data.isNative;
                isNativePhoneMsg="请输入正确的上海移动手机号码";
            }
        }
    });
    return isNativePhone;

}
/**
 * 对日期进行格式化，
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 * @return String
 */
function dateFormat(date, format){
    var date = new Date(date);
    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };

    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        }
        else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
}


function getTime(str) {
    if(!str){
        return  new Date();
    }
    var temp2 = str.substring(0,4)+"/"+str.substring(4,6)+"/"+str.substring(6,8)+" "+str.substring(8,10)+":"+str.substring(10,12)+":"+str.substring(12,14);
    return new Date(temp2);
}
