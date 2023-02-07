thirtySix = {
    qrWidth: ''
};


thirtySix.init = function () {
    thirtySix.reset();
    thirtySix.create();
    thirtySix.validForm();
    thirtySix.calcPos()
    //menu.titleBar("images/sell-history.png", "Ú¯Ø²Ø§Ø±Ø´ ÙØ±ÙˆØ´");

    const formatsToSupport = [
        Html5QrcodeSupportedFormats.QR_CODE,
        Html5QrcodeSupportedFormats.UPC_A,
        Html5QrcodeSupportedFormats.UPC_E,
        Html5QrcodeSupportedFormats.AZTEC,
        Html5QrcodeSupportedFormats.CODABAR,
        Html5QrcodeSupportedFormats.CODE_39,
        Html5QrcodeSupportedFormats.CODE_93,
        Html5QrcodeSupportedFormats.CODE_128,
        Html5QrcodeSupportedFormats.DATA_MATRIX,
        Html5QrcodeSupportedFormats.MAXICODE,
        Html5QrcodeSupportedFormats.ITF,
        Html5QrcodeSupportedFormats.EAN_13,
        Html5QrcodeSupportedFormats.EAN_8,
        Html5QrcodeSupportedFormats.PDF_417,
        Html5QrcodeSupportedFormats.RSS_14,
        Html5QrcodeSupportedFormats.RSS_EXPANDED,
        Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
    ];
    var html5QrCode = new Html5Qrcode("reader_36", /* verbose= */ true);
    var qrCodeSuccessCallback = (decodedText, decodedResult) => {
        // alert("decodedText => " + decodedText + " **** decodedResult" + decodedResult)
        managementRel.tost('بارکد با موفقیت اسکن شد.');

        if (document.querySelector('#serial_36_0').checked) {
            $("#input_serial_36_0").val(decodedText)
        }
        if (document.querySelector('#serial_36_1').checked) {
            $("#input_serial_36_1").val(decodedText)
        }


        // if ($("#input_serial_36_0").val() == "") {
        //     $("#input_serial_36_0").val(decodedText)
        // } else {
        //     $("#input_serial_36_1").val(decodedText)
        // }
    };

    var config = {fps: 10, formatsToSupport: formatsToSupport};
    html5QrCode.start({facingMode: "environment"}, config, qrCodeSuccessCallback);

    setTimeout(function () {
        $(".submit-36").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + " ; display :flex !important");
        $(".history-36").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + " ; display :flex !important");

    }, 1000)

};
thirtySix.manage = function (data2) {
    thirtySix.parse(data2);
    thirtySix.create();
};
thirtySix.parse = function (data2) {
    var obj = jQuery.parseJSON(data2);
    if (obj['success'] == true) {
        thirtySix.data = obj['data'];
        if (obj['data'].length == 0) {
            managementRel.tost("در حال حاضر فروشی انجام نشده است");
        } else {
            for (var i = 0; i < obj['data'].length; i++) {

                thirtySix.serial[i] = obj['data'][i]['serial'];
                thirtySix.isScored[i] = obj['data'][i]['is_scored'];
                thirtySix.status[i] = obj['data'][i]['status'];
            }
        }
    } else {
        managementRel.tost("اختلال در برقراری ارتباط با اینترنت");
    }

};
thirtySix.reset = function () {
    window.scrollTo(0, 0);
    $("#input_serial_36_0").val("");
    $("#input_serial_36_1").val("");
};
thirtySix.create = function () {
    $(".serial_36").html(pageEighteen.selectedTitle + ' ' + pageThirty.selectedTitle);
};


thirtySix.return = function () {
    $('.main-sell-div').removeClass("hide-keyboard-36");
    this.reset();
};
thirtySix.scan = function () {
    // alert("Scan");
    managementRel.tost("Ø¨Ù‡ Ø²ÙˆØ¯ÛŒ...");
};
thirtySix.validForm = function () {

    var v = $("#form-36").validate({
        debug: true,
        errorElement: "span",
        rules: {
            input_serial_36_0: {
                required: true,
                minlength: 4,
                maxlength: 15,
            },
            input_serial_36_1: {
                required: true,
                minlength: 4,
                maxlength: 15,
            }
        },
        messages: {
            input_serial_36_0: {
                required: "شماره سریال وارد نشده",
                minlength: "تعداد ارقام وارد شده صحیح نمی باشد",
                maxlength: "تعداد ارقام وارد شده صحیح نمی باشد"
            },
            input_serial_36_1: {
                required: "شماره سریال وارد نشده",
                minlength: "تعداد ارقام وارد شده صحیح نمی باشد",
                maxlength: "تعداد ارقام وارد شده صحیح نمی باشد"
            },
        },
        submitHandler: function () {

            var data = {
                code: $("#input_serial_36_0").val(),
                code2: $("#input_serial_36_1").val(),
                model: pageThirty.selected
            }

            pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/sell', thirtySix.submit, data);

        },
    });
};

thirtySix.submit = function (data2) {

    $('.main-sell-div').removeClass("hide-keyboard-36");
    var obj = jQuery.parseJSON(data2);
    if ((obj['success'] == true) || (obj['success'] === true) || (obj['success'] == 'true')) {
        // console.log("1");
        managementRel.tost(obj['data']['msg']);
    } else {
        // console.log("2");
        if (obj['error']) {
            managementRel.tost(obj['error']['message']['code'][0]);
        } else {
            managementRel.tost(obj['data']['msg']);
        }

    }

};


thirtySix.calcPos = function () {

    $('.pageTTParent_36').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    $(".serial_36").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + "");
    $("#form-36").attr("style", "height :" + ((500 * window.innerHeight) / 1920) + 'px' + "");

    $("#reader_36").attr("style", "width :90%;position:relative;margin: 25% auto");
    // $("#reader").attr("style", "width :" + ((250 * window.innerWidth) / 1920) + 'px' + "");

}

thirtySix.openkeyboard = function () {
    $('.main-sell-div').addClass("hide-keyboard-36");

};
thirtySix.closeKeyboard = function () {
    setTimeout(function () {
        if ($("#input_serial_36_0-error")) {
            $("#input_serial_36_0-error").html("")
        }
        if ($("#input_serial_36_1-error")) {
            $("#input_serial_36_1-error").html("")
        }
    }, 2000)
    $('.main-sell-div').removeClass("hide-keyboard-36");
};
