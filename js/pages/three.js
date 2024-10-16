var pageThree = {
    imgs: ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"],
    title: ["images/1.png", "images/2.png", "images/3.png", "images/4.png"],
    slide: "",
    cnt: 0,
    store_address: [],
    store_phone: [], store_name: [], st1: false, st2: false, st3: false, st4: false
};
pageThree.init = function () {
    menu.titleBar("", "");
    $("#three-tab").css({height: handelPage.height * 0.07});
    pageThree.validForm();
    pageThree.calcTap();
    createFildes();



}
pageThree.createPluse = function () {
    this.cnt++;
    this.content = "";
    this.content += '<div style="clear: both"></div>';
    this.content += ' <div class="marginTop20px">';
    this.content += '  <div class="input-field col s12 rtl nopadding">';
    this.content += '              <input id="three-one-name-child-' + this.cnt + '" type="text" title="نام فرزند وارد نشده است" name="three-one-name-child-' + this.cnt + '"  class="validate h45 childName">';
    this.content += '  <label for="three-one-name-child-' + this.cnt + '">نام فرزند</label>';
    this.content += ' </div>'

    this.content += ' <div class="col12">';
    this.content += '    <label class="subTitle marginTop5px col12">تاریخ تولد فرزند</label>';

    this.content += '<div class=" col3" style="position: relative;">';
    this.content += '    <select class="browser-default" style=" margin-bottom: 17px;" name="three-one-child-day-' + this.cnt + '" id="three-one-child-day-' + this.cnt + '" title="روز وارد نشده">';
    this.content += '        <option value=""  selected>روز</option>';
    for (var i = 1; i <= 31; i++) {
        if (i < 10)
            var x = "0" + i;
        else
            var x = i;
        this.content += '       <option value="' + x + '">' + x + '</option>';
    }
    this.content += '  </select>';
    this.content += '  </div>';

    this.content += '<div class=" col3 marginLeft5 marginright5 " style="position: relative;">';
    this.content += '  <select class="browser-default" style=" margin-bottom: 17px;" name="three-one-child-month-' + this.cnt + '" id="three-one-child-month-' + this.cnt + '" title="ماه وارد نشده">';
    this.content += '      <option value=""  selected>ماه</option>';
    for (var i = 1; i <= 12; i++) {
        if (i < 10)
            var x = "0" + i;
        else
            var x = i;
        this.content += '     <option value="' + x + '">' + x + '</option>';
    }
    this.content += ' </select>';
    this.content += '  </div>';

    this.content += '<div class=" col3" style="position: relative;">';
    this.content += ' <select class="browser-default" style=" margin-bottom: 17px;" name="three-one-child-year-' + this.cnt + '" id="three-one-child-year-' + this.cnt + '" title="سال وارد نشده">';
    this.content += '     <option value=""  selected>سال</option>';
    for (var i = 1340; i <= 1400; i++) {
        this.content += '     <option value="' + i + '">' + i + '</option>';
    }
    this.content += '    </select>';
    this.content += '  </div>';
    this.content += '  </div>';
    this.content += '  </div>';
    this.content += ' <div style="clear: both"></div>';



    $("#pluse-farzand").prev().append(this.content);




}

pageThree.pluse = function () {
    pageThree.createPluse();
}
pageThree.calcTap = function () {
    $(".three-tab").css({"line-height": $("#tb-4").height() + "px"});
    $(".three-tab").width($("#tb-4").height());
    this.wImg = $("#tb-4").height();
    this.w = ($("#three-tab").width() - ($("#tb-4").height() * 3 + handelPage.width * 0.06));
    mylog.log($("#three-tab").width() - ($("#tb-4").height() * 4 + handelPage.width * 0.6));
    $(".three-tab-box").width(this.w);
};
pageThree.clickTab = function () {


};
pageThree.validForm = function () {

    var v = $("#three-form-one").validate({
        debug: true,

        errorElement: "span",
        rules: {
            "three-one-email": {
                required: true,
                email: true,
            }

        },
        messages: {
            "three-one-email": {
                required: "ایمیل وارد نشده",
                email: "ایمیل وارد شده صحیح نمی باشد",

            }
        },
        submitHandler: function () {

            //alert(base64img)
            //var formData = new FormData(document.getElementById('three-avatar').files[0]);
            managementRel.setCookie("gender", $('input[name="gender3"]:checked').val());
            var data = {
                userID: managementRel.getCookie("id"),
                usr_name: $("#three-one-name").val(),
                usr_family: $("#three-one-family").val(),
                usr_birthday: $("#three-one-user-year").val() + '-' + $("#three-one-user-month").val() + '-' + $("#three-one-user-day").val(),
                usr_gender: $('input[name="gender3"]:checked').val(),
                usr_ismarried: $('input[name="married3"]:checked').val(),
                usr_isparent: $("#inp5").val(),
                usr_education: $("#three-one-edu").val(),
                usr_email: $("#three-one-email").val(),
                usr_address: $("#three-one-address").val(),
                usr_location: $("#three-one-location").val(),
                usr_avatar: $("#three-avatar").val(),
                children: [],
                spouse: []
            }
            var cnt = 0;
            $(".childName").each(function () {
                if ($(this).val() != "" && $("#inp5").is(':checked')) {
                    data.children.push({'child_name': $(this).val(), 'child_birthday': $("#three-one-child-year-" + cnt).val() + '-' + $("#three-one-child-month-" + cnt).val() + '-' + $("#three-one-child-day-" + cnt).val()})
                    cnt++;
                }
            });
            if ($("#three-one-name-partner").val() != "" && $("#inp4").is(':checked')) {
                data.spouse.push({'spouse_name': $("#three-one-name-partner").val(), 'spouse_family': $("#three-one-family-partner").val(), 'spouse_birthday': $("#three-one-partner-year-0").val() + '-' + $("#three-one-partner-month-0").val() + '-' + $("#three-one-partner-day-0").val()});
            }
            ajax("POST", dir, pageThree.resultSubmit, "act=profile&type=update" + setParamsAjax(data));


        },

    });





    $("#three-form-two").validate({
        debug: true,

        errorElement: "span",
        rules: {
            "three-two-cart": {
                required: true,
                number: true,
                minlength: 16,
                maxlength: 20,
            }

        },
        messages: {
            "three-two-cart": {
                required: "شماره کارت وارد نشده",
                number: "ورودی صحیح نمی باشد",
                minlength: "تعداد ارقام وارد شده صحیح نمی باشد",
                maxlength: "تعداد ارقام وارد شده صحیح نمی باشد"

            }
        },
        submitHandler: function () {

            var data = {
                userID: managementRel.getCookie("id"),
                bankID: $("#three-two-bank").val(),
                card: $("#three-two-cart").val(),
                acount: $("#three-two-number").val(),
                shaba: $("#three-two-shaba").val()
            }

            ajax("POST", dir, pageThree.resultSubmitBank, "act=profile&type=updatecard" + setParamsAjax(data));


        },

    });



    $("#three-form-three").validate({
        debug: true,

        errorElement: "span",

        submitHandler: function () {

            var data = {
                userID: managementRel.getCookie("id"),
                storeID: $("#three-three-store").val().split('_')[1],
                cityID: $("#three-three-city").val(),
                exp: $('input[name="exp"]:checked').val(),
                expname: "",
                expyear: "",
            };
            if ($("#inp-3-2").is(':checked')) {
                data.expname = $("#three-one-experience").val();
                data.expyear = $("#three-three-yearEx").val();
            }
            ajax("POST", dir, pageThree.resultSubmitExp, "act=store&type=update" + setParamsAjax(data));


        },

    });


    $("#three-form-four").validate({
        debug: true,

        errorElement: "span",

        submitHandler: function () {

            var data = {
                userID: managementRel.getCookie("id"),
                pirhan: $("#three-three-pirhan").val(),
                kafsh: $("#three-three-kafsh").val(),
                shalvar: $("#three-three-shalvar").val(),

            };

            ajax("POST", dir, pageThree.resultSubmitCloth, "act=cloth&type=update" + setParamsAjax(data));


        },

    });

};
pageThree.checkViewTab = function (str) {

    switch (str) {
        case "three-one-tab":


            $("#three-one-name").val(managementRel.getCookie("name"));
            $("#three-one-family").val(managementRel.getCookie("family"));
            Materialize.updateTextFields();
            if (managementRel.getCookie("status") == "5" && !pageThree.st1) {
                var data = {
                    userID: managementRel.getCookie("id"),
                };
                ajax("POST", dir, pageThree.resultGetProfile, "act=profile&type=get" + setParamsAjax(data));
            }
            break;
        case "three-two-tab":
            if (!pageThree.st2) {
                var data = {
                    userID: managementRel.getCookie("id"),
                };
                ajax("POST", dir, pageThree.resultBank, "act=profile&type=bank" + setParamsAjax(data));
            }
            break;
        case "three-three-tab":
            if (managementRel.getCookie("status") == "5") {
                if (!pageThree.st3) {
                    var data = {
                        userID: managementRel.getCookie("id"),
                    };
                    ajax("POST", dir, pageThree.getStore, "act=store&type=get" + setParamsAjax(data));
                }
            } else {
                if (!pageThree.st3) {
                    var data = {
                        userID: managementRel.getCookie("id"),
                    };
                    ajax("POST", dir, pageThree.resultState, "act=store&type=state" + setParamsAjax(data));
                }
            }
            break;
        case "three-four-tab":

            if (managementRel.getCookie("gender") == 1) {

                $("#three-three-pirhan").attr("title", "سایز مانتو وارد نشده ")
                $("#three-three-pirhan option:first").html("سایز مانتو");
            } else {
                $("#three-three-pirhan").attr("title", "سایز پیراهن وارد نشده ");
                $("#three-three-pirhan option:first").html("سایز پیراهن");
            }
            if (!pageThree.st4) {
                var data = {
                    userID: managementRel.getCookie("id"),
                };
                ajax("POST", dir, pageThree.resultCloth, "act=cloth&type=get" + setParamsAjax(data));
            }
            break;

        default:

            break;
    }
    setTimeout(function () {
        $("body").scrollTop(0);
    }, 100);
}
pageThree.resultGetProfile = function (data) {

    mylog.log(data);
    this.child_name = [];
    this.child_birthday = [];

    var obj = jQuery.parseJSON(data);
    if (obj['status'] == "ok") {
        pageThree.st1 = true
        this.user_details = obj["user_details"];
        this.usr_name = this.user_details['usr_name'];
        this.usr_family = this.user_details['usr_family'];
        this.usr_birthday = this.user_details['usr_birthday'];
        this.usr_gender = this.user_details['usr_gender'];
        this.usr_ismarried = this.user_details['usr_ismarried'];
        this.usr_isparent = this.user_details['usr_isparent'];
        this.usr_education = this.user_details['usr_education'];
        this.usr_email = this.user_details['usr_email'];
        this.usr_address = this.user_details['usr_address'];
        this.usr_location = this.user_details['usr_location'];
        this.usr_avatar = this.user_details['usr_avatar'];

        if (this.usr_ismarried == 1) {
            this.spouse = this.user_details['spouse'];
            this.spouse_name = this.spouse[0]['spouse_name'];
            this.spouse_family = this.spouse[0]['spouse_family'];
            this.spouse_birthday = this.spouse[0]['spouse_birthday'];
            this.spouse_birthday = this.spouse_birthday.split('-');
            $("#two-part-1").removeClass("hidden");

            $("#three-one-name-partner").val(this.spouse_name);
            $("#three-one-family-partner").val(this.spouse_family);

            $("#three-one-partner-day-0").val(this.spouse_birthday[2]);
            $("#three-one-partner-month-0").val(this.spouse_birthday[1]);
            $("#three-one-partner-year-0").val(this.spouse_birthday[0]);
        }


        if (this.usr_isparent == 1) {
            this.children = this.user_details['children'];

            for (var i = 0; i < this.children.length; i++) {
                this.child_name[i] = this.children[i]['child_name'];
                this.child_birthday[i] = this.children[i]['child_birthday'];

                this.ChBi = this.child_birthday[i].split('-');
                if (i != 0) {
                    pageThree.createPluse();
                }
                $("#three-one-name-child-" + i).val(this.child_name[i]);
                $("#three-one-child-day-" + i).val(this.ChBi[2]);
                $("#three-one-child-month-" + i).val(this.ChBi[1]);
                $("#three-one-child-year-" + i).val(this.ChBi[0]);

            }

            $("#inp5").prop("checked", true);
            $("#two-part-2").removeClass("hidden");
        }

        this.usr_birthday = this.usr_birthday.split('-');


        $("#three-one-name").val(this.usr_name);
        $("#three-one-family").val(this.usr_family);
        $("#three-one-user-day").val(this.usr_birthday[2]);
        $("#three-one-user-month").val(this.usr_birthday[1]);
        $("#three-one-user-year").val(this.usr_birthday[0]);
        managementRel.setCookie("gender", this.usr_gender);
        if (this.usr_gender == 2) {
            $('#inp1').prop("checked", true);
        } else {
            $('#inp2').prop("checked", true);
        }
        $('input[name="married3"][value="' + this.usr_ismarried + '"]').prop("checked", true);




        $("#inp5").val(this.usr_isparent);


        $("#three-one-edu").val(this.usr_education);
        $("#three-one-email").val(this.usr_email);
        $("#three-one-address").val(this.usr_address);
        $("#three-one-location").val(this.usr_location);
        $("#three-avatar").val(this.usr_avatar);

        $("#three-one-avatar").html("<img src=" + dirImg + this.usr_avatar + ">");



        Materialize.updateTextFields();
    }
}
pageThree.getCard = function (data) {
    mylog.log(data);
    var obj = jQuery.parseJSON(data);

    if (obj['status'] == "ok") {
        this.user_finance = obj["user_finance"];
        this.bank_card = this.user_finance['bank_card'];
        this.bank_number = this.user_finance['bank_number'];
        this.bank_id = this.user_finance['bank_id'];
        this.bank_name = this.user_finance['bank_name'];
        this.bank_sheba = this.user_finance['bank_shaba'];

        $("#three-two-bank").val(this.bank_id);
        $("#three-two-cart").val(this.bank_card);
        $("#three-two-number").val(this.bank_number);
        $("#three-two-shaba").val(this.bank_sheba);
        Materialize.updateTextFields();
    }
}
pageThree.getStore = function (data) {
    mylog.log(data);
    var obj = jQuery.parseJSON(data);

    if (obj['status'] == "ok") {
        pageThree.st3 = true;
        this.user_details = obj["user_details"];

        this.is_exp = this.user_details['is_exp'];
        this.time_exp = this.user_details['time_exp'];
        this.loc_exp = this.user_details['loc_exp'];
        this.states = this.user_details['states'];
        this.cities = this.user_details['cities'];
        this.stores = this.user_details['stores'];
        this.state_ids = this.user_details['state_id'];
        this.state_names = this.user_details['state_name'];
        this.city_ids = this.user_details['city_id'];
        this.city_name = this.user_details['city_name'];
        this.store_id = this.user_details['store_id'];
        this.store_name = this.user_details['store_name'];


        if (this.is_exp == 1) {
            $("#inp-3-2").prop("checked", true);
            $("#three-part-3-1").removeClass("hidden");

            $("#three-one-experience").val(this.loc_exp);
            $("#three-three-yearEx").val(this.time_exp);
        }



        $('#three-three-state option').not(":first").remove();
        this.state_id = [];
        this.state_name = [];

        for (var i = 0; i < this.states.length; i++) {
            this.state_id[i] = this.states[i]['state_id'];
            this.state_name[i] = this.states[i]['state_name'];

            pageThree.appendOptions("three-three-state", this.state_id[i], this.state_name[i]);
        }
        $('#three-three-state').val(this.state_ids);


        $('#three-three-city option').not(":first").remove();
        this.city_id = [];
        this.city_name = [];
        for (var i = 0; i < this.cities.length; i++) {
            this.city_id[i] = this.cities[i]['city_id'];
            this.city_name[i] = this.cities[i]['city_name'];

            pageThree.appendOptions("three-three-city", this.city_id[i], this.city_name[i]);
        }
        $('#three-three-city').val(this.city_ids);



        $('#three-three-store option').not(":first").remove();

        pageThree.store_ids = [];
        pageThree.store_name = [];
        pageThree.store_address = [];
        pageThree.store_phone = [];

        for (var i = 0; i < this.stores.length; i++) {
            pageThree.store_ids[i] = this.stores[i]['store_id'];
            pageThree.store_name[i] = this.stores[i]['store_name'];
            pageThree.store_address[i] = this.stores[i]['store_address'];
            pageThree.store_phone[i] = this.stores[i]['state_phone'];

            pageThree.appendOptions("three-three-store", [i] + "_" + pageThree.store_ids[i], pageThree.store_name[i]);
            if (pageThree.store_ids[i] == this.store_id) {
                this.index = i;
            }
            //
        }//alert(this.store_id)
        $('#three-three-store').val(this.index + "_" + this.store_id);

        if (pageThree.store_address[this.index] != null || pageThree.store_phone[this.index] != null)
            $("#three-three-address").attr("placeholder", pageThree.store_address[this.index] + " - " + pageThree.store_phone[this.index]);
        else
            $("#three-three-address").attr("placeholder", "آدرس این فروشگاه موجود نیست");
        /*$("#three-two-bank").val(this.bank_id);
         $("#three-two-cart").val(this.bank_card);
         $("#three-two-number").val(this.bank_number);*/
        Materialize.updateTextFields();
    }
}

pageThree.resultBank = function (data) {
    mylog.log(data);
    this.bank_id = [];
    this.bank_name = [];
    var obj = jQuery.parseJSON(data);
    pageThree.st2 = true;
    this.bank_details = obj["bank_details"];

    $('#three-two-bank option').not(":first").remove();
    for (var i = 0; i < this.bank_details.length; i++) {
        this.bank_id[i] = this.bank_details[i]['bank_id'];
        this.bank_name[i] = this.bank_details[i]['bank_name'];

        pageThree.appendOptions("three-two-bank", this.bank_id[i], this.bank_name[i])
    }
    if (managementRel.getCookie("status") == "5") {
        var data = {
            userID: managementRel.getCookie("id"),
        };
        ajax("POST", dir, pageThree.getCard, "act=profile&type=getcard" + setParamsAjax(data));
    }
}
pageThree.resultSubmit = function (data) {
    mylog.log(data);
    var obj = jQuery.parseJSON(data);

    if (obj['status'] == "ok") {
        if (managementRel.getCookie("status") != "5") {
            pageThree.clicMenu("three-two-tab");
            managementRel.setCookie("status", "2");
        }
        managementRel.setCookie("avatar", obj['detail']['pic']);
        managementRel.setCookie("name", obj['detail']['name']);
        managementRel.setCookie("family", obj['detail']['family']);
        menu.userCreat();

    } else {

    }
    managementRel.tost(obj['description2']);
}
pageThree.resultSubmitExp = function (data) {
    mylog.log(data);
    var obj = jQuery.parseJSON(data);

    if (obj['status'] == "ok") {
        if (managementRel.getCookie("status") != "5") {
            pageThree.clicMenu("three-four-tab");
            managementRel.setCookie("status", "4");
        }

        managementRel.setCookie("store", obj["detail"]["store_name"]);
        $(".two-shop-text").html("" + obj["detail"]["store_name"]);
    }
    managementRel.tost(obj['description2']);
}
pageThree.resultSubmitCloth = function (data) {
    mylog.log(data);
    var obj = jQuery.parseJSON(data);

    if (obj['status'] == "ok") {
        if (managementRel.getCookie("status") != "5") {
            managementRel.setCookie("status", "5");
            handelPage.managerEnter(2);

        }
    } else {

    }
    managementRel.tost(obj['description2']);
}
pageThree.resultSubmitBank = function (data) {
    mylog.log(data);
    var obj = jQuery.parseJSON(data);

    if (obj['status'] == "ok") {
        if (managementRel.getCookie("status") != "5") {
            pageThree.clicMenu("three-three-tab");
            managementRel.setCookie("status", "3");
        }
    } else {

    }
    managementRel.tost(obj['description2']);
}
pageThree.resultState = function (data) {
    mylog.log(data);

    this.state_id = [];
    this.state_name = [];
    var obj = jQuery.parseJSON(data);

    $('#three-three-state option').not(":first").remove();
    if (obj['status'] == "ok") {
        pageThree.st3 = true;
        this.state = obj["states"];
        for (var i = 0; i < this.state.length; i++) {
            this.state_id[i] = this.state[i]['state_id'];
            this.state_name[i] = this.state[i]['state_name'];

            pageThree.appendOptions("three-three-state", this.state_id[i], this.state_name[i]);
        }
    }
}
pageThree.resultCloth = function (data) {
    mylog.log(data);

    this.id = [];
    this.size = [];
    this.name = [];
    var obj = jQuery.parseJSON(data);


    if (obj['status'] == "ok") {
        pageThree.st4 = true;
        this.stores = obj["stores"]["cloth_all"];


        $('#three-three-pirhan option').not(":first").remove();
        for (var i = 0; i < this.stores["pirhan"].length; i++) {
            this.name[i] = this.stores["pirhan"][i]['name'];
            this.size[i] = this.stores["pirhan"][i]['size'];
            this.id[i] = this.stores["pirhan"][i]['id'];

            pageThree.appendOptions("three-three-pirhan", this.id[i], this.name[i]);
        }

        $('#three-three-shalvar option').not(":first").remove();
        for (var i = 0; i < this.stores["shalvar"].length; i++) {
            this.name[i] = this.stores["shalvar"][i]['name'];
            this.size[i] = this.stores["shalvar"][i]['size'];
            this.id[i] = this.stores["shalvar"][i]['id'];

            pageThree.appendOptions("three-three-shalvar", this.id[i], this.name[i]);
        }

        $('#three-three-kafsh option').not(":first").remove();
        for (var i = 0; i < this.stores["kafsh"].length; i++) {
            this.name[i] = this.stores["kafsh"][i]['name'];
            this.size[i] = this.stores["kafsh"][i]['size'];
            this.id[i] = this.stores["kafsh"][i]['id'];

            pageThree.appendOptions("three-three-kafsh", this.id[i], this.name[i]);
        }

        this.cloth_user = obj["stores"]["cloth_user"];

        if (this.cloth_user["kafsh"]) {
            this.kafsh = this.cloth_user["kafsh"]["id"];
            this.pirhan = this.cloth_user["pirhan"]["id"];
            this.shalvar = this.cloth_user["shalvar"]["id"];

            $('#three-three-kafsh').val(this.kafsh);
            $('#three-three-shalvar').val(this.shalvar);
            $('#three-three-pirhan').val(this.pirhan);
        }
    }
}
pageThree.resultCity = function (data) {
    mylog.log(data);

    this.city_id = [];
    this.city_name = [];
    var obj = jQuery.parseJSON(data);

    $('#three-three-city option').not(":first").remove();
    if (obj['status'] == "ok") {
        this.bank_details = obj["bank_details"];
        for (var i = 0; i < this.bank_details.length; i++) {
            this.city_id[i] = this.bank_details[i]['city_id'];
            this.city_name[i] = this.bank_details[i]['city_name'];

            pageThree.appendOptions("three-three-city", this.city_id[i], this.city_name[i]);
        }
    }
}
pageThree.resultStore = function (data) {
    mylog.log(data);

    this.store_id = [];
    this.store_name = [];
    pageThree.store_address = [];
    pageThree.store_phone = [];
    var obj = jQuery.parseJSON(data);

    $('#three-three-store option').not(":first").remove();
    if (obj['status'] == "ok") {
        this.stores = obj["stores"];
        for (var i = 0; i < this.stores.length; i++) {
            this.store_id[i] = this.stores[i]['store_id'];
            pageThree.store_name[i] = this.stores[i]['store_name'];
            pageThree.store_address[i] = this.stores[i]['store_address'];
            pageThree.store_phone[i] = this.stores[i]['store_phone'];

            pageThree.appendOptions("three-three-store", [i] + "_" + this.store_id[i], pageThree.store_name[i]);
            //
        }
    }
}
pageThree.clicMenu = function (id) {
    pageThree.checkViewTab(id);
    $(".three-tab").width(pageThree.wImg);
    $(".three-tab-box").removeClass("three-tab-box");


    $("#" + id).addClass("three-tab-box");
    $("#" + id).width(pageThree.w);


    $(".tab-wrapper").addClass("hidden");
    $("#" + $("#" + id).attr("data-id")).removeClass("hidden");
}

pageThree.return = function () {
    // $('#two-slider').slider('pause');
    //menu.hide();

    pageThree.st1 = false;
    pageThree.st2 = false;
    pageThree.st3 = false;
    pageThree.st4 = false;
}

pageThree.appendOptions = function (id, val, name) {

    $("#" + id).append('<option value="' + val + '">' + name + '</option>');
}
pageThree.checkGps = function () {
    if ($("#three-one-location").val() != "") {
        managementRel.tost('موقعیت شما با موفقیت ثبت شد');
    }
}
pageThree.iosGpsRes = function (data) {
    $("#three-one-location").val(JSON.stringify(data));
    if ($("#three-one-location").val() != "") {
        managementRel.tost('موقعیت شما با موفقیت ثبت شد');
    }
}

$(document).ready(function () {
    $("#inp4").change(function () {

        if ($(this).is(':checked'))
            $("#two-part-1").removeClass("hidden");
    });
    $("#inp3").change(function () {

        if ($(this).is(':checked'))
            $("#two-part-1").addClass("hidden");

    });
    $("#inp5").change(function () {

        if ($(this).is(':checked')) {
            $("#two-part-2").removeClass("hidden");
            $(this).val("1");
        } else {
            $("#two-part-2").addClass("hidden");
            $(this).val("0");
        }

    });

    $("#inp-3-2").change(function () {

        if ($(this).is(':checked'))
            $("#three-part-3-1").removeClass("hidden");


    });
    $("#inp-3-1").change(function () {

        if ($(this).is(':checked'))
            $("#three-part-3-1").addClass("hidden");

    });



    $(".three-tab").click(function () {

        if (managementRel.getCookie("status") == 5) {
            pageThree.checkViewTab(this.id);
            $(".three-tab").width(pageThree.wImg);
            $(".three-tab-box").removeClass("three-tab-box");


            $(this).addClass("three-tab-box");
            $(this).width(pageThree.w);


            $(".tab-wrapper").addClass("hidden");
            $("#" + $(this).attr("data-id")).removeClass("hidden");
        }
    });


});




function createFildes() {

    var edus = ["زیر دیپلم", "دیپلم", "فوق دیپلم", "لیسانس", "فوق لیسانس"];


    $(".day").each(function () {
        $('#' + this.id + ' option').not(":first").remove();

        for (var i = 1; i <= 31; i++) {
            if (i < 10)
                var x = "0" + i;
            else
                var x = i;
            $(this).append('<option value="' + x + '">' + x + '</option>');
        }
    });


    $(".month").each(function () {
        $('#' + this.id + ' option').not(":first").remove();
        for (var i = 1; i <= 12; i++) {
            if (i < 10)
                var x = "0" + i;
            else
                var x = i;
            $(this).append('<option value="' + x + '">' + x + '</option>');
        }
    });


    $(".year").each(function () {
        $('#' + this.id + ' option').not(":first").remove();
        for (var i = 1320; i <= 1400; i++) {
            $(this).append('<option value="' + i + '">' + i + '</option>');
        }
    });


    $(".educations").each(function () {
        $('#' + this.id + ' option').not(":first").remove();
        for (var i = 0; i < edus.length; i++) {
            $(this).append('<option value="' + (i + 1) + '">' + edus[i] + '</option>');
        }
    });

}
var base64img = "";
function changeOnline(event) {
    base64img = "";
    var input = event.target;
    if (input.files && input.files[0]) {

        var FR = new FileReader();
        FR.onload = function () {
            base64img = FR.result;

        }

        FR.readAsDataURL(input.files[0]);


    }
}

function changeSelect(obj) {

    switch (obj.id) {
        case "three-three-state":
            var data = {
                userID: managementRel.getCookie("id"),
                stateID: $(obj).val(),
            };
            ajax("POST", dir, pageThree.resultCity, "act=store&type=city" + setParamsAjax(data));
            break;
        case "three-three-city":
            var data = {
                userID: managementRel.getCookie("id"),
                cityID: $(obj).val(),
            };
            ajax("POST", dir, pageThree.resultStore, "act=store&type=getstore" + setParamsAjax(data));
            break;
        case "three-three-store":
            mylog.log(pageThree.store_address);
            var index = $(obj).val().split("_")[0];
            if (pageThree.store_address[index] != null || pageThree.store_phone[index] != null)
                $("#three-three-address").attr("placeholder", pageThree.store_address[index] + " - " + pageThree.store_phone[index]);
            else
                $("#three-three-address").attr("placeholder", "آدرس این فروشگاه موجود نیست");
            break;

        default:

            break;
    }
}
