var pageOne = {
    imgs: ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"],
    title: ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png"],
    slide: ""
};
pageOne.init = function () {
    this.slide = new slideshow({
        height: handelPage.height * 0.4,
        indicators: false,
        id: "slider1",
        append: "#one-slide-box",
        img: this.imgs,
        title: this.title,
        titleBar: false
    });
    pageOne.createLogo();
    pageOne.validForm();

};

pageOne.createLogo = function () {
    this.des = 0.4;
    this.iconW = handelPage.width * this.des;
    if (this.iconW > 200) {
        this.iconW = 200;
    }
    this.iconL = (handelPage.width * 0.5) - (this.iconW / 2) + "px";
    this.top = (handelPage.height * 0.45) - (this.iconW / 2) + "px";
    $("#one-icon").css({"width": this.iconW + "px", height: this.iconW + "px", "top": this.top, "left": this.iconL});
};

pageOne.calc = function (w, h, t, l, mh, mw) {

    this.w = handelPage.width;
    this.h = handelPage.h;
    if (w != "") {
        this.w = handelPage.width * w;
    }
    if (h != "") {
        this.h = handelPage.h * h;
    }
    if (t != "") {
        this.t = handelPage.h * t;
    }
    if (l != "") {
        this.l = handelPage.h * l;
    }

};
pageOne.validForm = function () {

    var v = $("#one-form").validate({
        debug: true,
        errorElement: "span",
        rules: {
            one_tel: {
                required: true,
                minlength: 10,
                maxlength: 11,
                number: true
            }, one_num: {
                required: true,
                number: true
            }, one_check: {
                required: true,
            }
        },
        messages: {
            one_tel: {
                required: "شماره موبایل وارد نشده",
                minlength: "تعداد ارقام وارد شده صحیح نمی باشد",
                maxlength: "تعداد ارقام وارد شده صحیح نمی باشد"
            },
            one_num: {
                required: "کد ملی وارد نشده",
            }, one_check: {
                required: "لطفا باقوانین موافقت فرمایید.",
            }
        },
        submitHandler: function () {
            // console.log("22222222" + managementRel.notificationToken)
            var data = {
                password: $("#one_num").val(),
                phoneNum: $("#one_tel").val(),
                mac: managementRel.macAddress(),
                model: managementRel.model(),
                ver: managementRel.versionBuild(),
                imei: managementRel.imei(),
                firebase_token: managementRel.notificationToken
            }
            // alert(JSON.stringify(data));
            // console.log(JSON.stringify(data))
            ajax("POST", dir, pageOne.resultSubmit, "act=login&type=insert" + setParamsAjax(data));
        },
    });
};

pageOne.resultSubmit = function (data) {
    var data1 = '{"code":14,"status":"ok","description":"user information","description2":"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0627\u0631\u0628\u0631","user":[{"id":169512,"name":"nader","family":"eshder","avatar":"ef23487983742@","key":"7a78083e0441418d8212717dcdd13450","mobile_num":"9350656664","username":null,"score":"0","national_code":"80362222","page_status":"0","city_name":"\u06cc\u0632\u062f","store_name":"Omidi"}]}'
    mylog.log(data);
    // alert(data)
    var obj = jQuery.parseJSON(data);


    if (obj['status'] == "ok") {
        var user = obj["user"][0];
        managementRel.setCookie("id", user['id']);
        //alert('id e set shode too cookie bade login->'+managementRel.getCookie("id"));
        // alert('name->'+user['name']);
        managementRel.setCookie("name", user['name']);
        // alert('name->'+managementRel.getCookie("name"));
        // alert('name 2->'+decodeURIComponent(escape(managementRel.getCookie("name"))));
        managementRel.setCookie("family", user['family']);
        managementRel.setCookie("avatar", user['avatar']);
        managementRel.setCookie("key", user['key']);
        managementRel.setCookie("mobile", user['mobile_num']);
        managementRel.setCookie("username", user['username']);
        managementRel.setCookie("score", user['score']);
        managementRel.setCookie("national", user['national_code']);
        managementRel.setCookie("status", user['page_status']);
        managementRel.setCookie("city", user['city_name']);
        managementRel.setCookie("store", user['store_name']);
        managementRel.setCookie("isLogin", "1");

        checkPage();
        menu.userCreat();
    } else {

        managementRel.tost(obj['description2']);
    }
    // alert( managementRel.getCookie("name"));
};
