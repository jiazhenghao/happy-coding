/*
http://www.sh.10086.cn/service/static/js/common/loginbox.js
*/

var isLogining = false;
$(function () {
	$(document).on('click',".wt-login-btn",doLogin);

    $(document).on('click',"#closebtn",function () {
    	hideShade();
        $("#loginBox").hide();
    });
});

// 校验手机号
function checkTelno() {
	var telno = $("#w_telno").val();
	if (telno.length != 11) {
		$("#w_error").text('请输入11位手机号码').show();
		return false;
	}
	if (isNaN(telno)) {
		$("#w_error").text('手机号码必须是11位数字').show();
		return false;
	}
	var mol = "134,135,182,136,137,138,139,150,151,152,157,158,159,183,187,188,147,184,178";
	var mo2 = telno.substring(0, 3);
	if (mol.indexOf(mo2) == -1) {
		$("#w_error").text("请输入正确的手机号码");
		return false;
	} else {
		$("#w_error").hide();
		return true;
	}
}

// 校验服务密码
function checkFwmm(){
	var servicepw = $('#w_fwmm').val();
	if (servicepw.length != 6) {
		$("#w_error").text('请输入6位服务密码！').show();
		return false;
	} else if (isNaN(servicepw)) {
		$("#w_error").text('您输入的服务密码不正确！').show();
		return false;
	}
	$("#w_error").hide();
	return true;
}

// 校验服务密码|动态码
function checkDtmm(){
	var servicepw = $('#w_dtm').val();
	if (servicepw.length != 6) {
		$("#w_error").text('请输入6位动态密码！').show();
		return false;
	} else if (isNaN(servicepw)) {
		$("#w_error").text('您输入的动态密码不正确！').show();
		return false;
	}
	$("#w_error").hide();
	return true;
}

// 开始登录
function doLogin(){
	if(isLogining){
		return false;
	}
	if(!checkTelno()){
		return false;
	}

    isLogining = true;
	$.ajaxSubmit({
		url:'login/ssoLogin',
		param:'username=' + $("#w_telno").val(),
		loadType: '0',
		afterFn: afterLogin
	});

	//  $.ajax({
	// 	type: "POST",
	// 	url: "/service/static/server/login/ssoLogin",
	// 	data:'username=' + $("#w_telno").val(),
	// 	// dataType: 'jsonp',
	// 	xhrFields: {
	// 		withCredentials: true
	// 	},
	// 	crossDomain: true,
	// 	success:afterLogin,
	// 	error:function(){
     //        isLogining = false;
	// 	}
	// });
}

// 登录后回调
function afterLogin(data) {
    isLogining = false;
	if(data.X_RESULTCODE != undefined && data.X_RESULTCODE == '0'){//成功
		window.location.reload();
	}else {
        $("#w_error").text(data.X_RESULTINFO);
	}

}

