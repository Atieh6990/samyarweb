pageThirtyTwo = {
    qrWidth: ''
};


pageThirtyTwo.init = function () {
    pageThirtyTwo.reset();
    pageThirtyTwo.create();
    pageThirtyTwo.validForm();
    pageThirtyTwo.calcPos()
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
    // alert("0000")
    var html5QrCode = new Html5Qrcode("reader", /* verbose= */ true);
    var qrCodeSuccessCallback = (decodedText, decodedResult) => {
        // alert("decodedText => " + decodedText + " **** decodedResult" + decodedResult)
        managementRel.tost('بارکد با موفقیت اسکن شد.');
        $("#input_serial_32").val(decodedText);
    };
    // alert("1111")
    var config = {fps: 10, formatsToSupport: formatsToSupport};
    html5QrCode.start({facingMode: "environment"}, config, qrCodeSuccessCallback);
    // alert("2222")
    setTimeout(function () {
        // alert("4444")
        $(".submit-32").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + " ; display :flex !important");
        $(".history-32").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + " ; display :flex !important");

    }, 1000)

};
pageThirtyTwo.manage = function (data2) {
    pageThirtyTwo.parse(data2);
    pageThirtyTwo.create();
};
pageThirtyTwo.parse = function (data2) {
    var obj = jQuery.parseJSON(data2);
    if (obj['success'] == true) {
        pageThirtyTwo.data = obj['data'];
        if (obj['data'].length == 0) {
            managementRel.tost("در حال حاضر فروشی انجام نشده است");
        } else {
            for (var i = 0; i < obj['data'].length; i++) {

                pageThirtyTwo.serial[i] = obj['data'][i]['serial'];
                pageThirtyTwo.isScored[i] = obj['data'][i]['is_scored'];
                pageThirtyTwo.status[i] = obj['data'][i]['status'];
            }
        }
    } else {
        managementRel.tost("اختلال در برقراری ارتباط با اینترنت");
    }

};
pageThirtyTwo.reset = function () {
    window.scrollTo(0, 0);
    $("#input_serial_32").val("");
};
pageThirtyTwo.create = function () {
    $(".serial_32").html(pageEighteen.selectedTitle + ' ' + pageThirty.selectedTitle);


    // var heightBox = parseFloat(handelPage.height * (0.764));
    // var widthBox = parseFloat($(".code-holder-32").css("width"));
    // $("#page-holder-32").css({"min-height": handelPage.height + 'px'});
    // $(".serial-holder-32").css({"height": heightBox + 'px'});
    // $(".serial-head-32").css({"height": heightBox * (0.112) + 'px', 'line-height': heightBox * (0.112) + 'px'});
    // $(".serial-head-32").html(pageEighteen.selectedTitle + ' ' + pageThirty.selectedTitle);
    // $(".code-holder-32").css({"height": heightBox * (0.888) + 'px'});
    // //$(".img-holder-32").css({"height": heightBox * (0.211) + 'px', 'border': '1px solid red'});
    // $(".img-holder-32").css({"height": heightBox * (0.211) + 'px'});
    // var paddingR = $(".code-holder-32").css("padding-right");
    // $(".serial-submit-32").css({
    //     "height": heightBox * (0.096) + 'px',
    //     'line-height': heightBox * (0.096) + 'px',
    //     'width': widthBox * (0.9) + 'px',
    //     "right": widthBox * (0.05) + 'px',
    //     "bottom": heightBox * (0.04) + 'px'
    // });
    // $(".barcode-text-32").css({
    //     "height": heightBox * (0.05) + 'px',
    //     'line-height': heightBox * (0.05) + 'px',
    //     'margin-top': heightBox * (0.01) + 'px'
    // });
    // $(".serial-scan-32").css({
    //     "height": heightBox * (0.08) + 'px',
    //     'line-height': heightBox * (0.08) + 'px',
    //     'margin-top': heightBox * (0.03) + 'px'
    // });
    // $(".input-32").css({
    //     "height": heightBox * (0.08) + 'px',
    //     'line-height': heightBox * (0.08) + 'px',
    //     'margin-top': heightBox * (0.03) + 'px',
    //     'margin-bottom': "0px"
    // });
    // $(".barcode-score-32").html("Ø§Ù…ØªÛŒØ§Ø² Ù…Ø­ØµÙˆÙ„: " + pageThirty.selectedScore);
    // var remaining = parseFloat(heightBox * (0.211)) - parseFloat($(".barcode-img-32").css("height"));
    // $(".barcode-star-32").css({"top": parseFloat((remaining) * (0.27)) + 'px'});
    // $(".barcode-score-32").css({"top": parseFloat((remaining) * (0.35)) + parseFloat($(".barcode-star-32").css("height")) + 'px'});
    // $(".barcode-score-32").css({"height": ((remaining - (parseFloat((remaining) * (0.35)) + parseFloat($(".barcode-star-32").css("height"))))) * (0.75) + 'px'});
    //

};


pageThirtyTwo.return = function () {
    $('.main-sell-div').removeClass("hide-keyboard-32");
    this.reset();


};
pageThirtyTwo.scan = function () {
    // alert("Scan");
    managementRel.tost("Ø¨Ù‡ Ø²ÙˆØ¯ÛŒ...");
};
pageThirtyTwo.validForm = function () {

    var v = $("#form-32").validate({
        debug: true,
        errorElement: "span",
        rules: {
            input_serial_32: {
                required: true,
                minlength: 4,
                maxlength: 15,
            }
        },
        messages: {
            input_serial_32: {
                required: "شماره سریال وارد نشده",
                minlength: "تعداد ارقام وارد شده صحیح نمی باشد",
                maxlength: "تعداد ارقام وارد شده صحیح نمی باشد"

            },
        },
        submitHandler: function () {
            if( $("#input_serial_32").val().length < 15){
                managementRel.tost('شماره سریال کمتر از 15 کاراکتر ثبت نخواهد شد.');
                return false
            }
            var data = {
                code: $("#input_serial_32").val(),
                model: pageThirty.selected

            }

            pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/sell', pageThirtyTwo.submit, data);

        },
    });
};

pageThirtyTwo.submit = function (data2) {
    $('.main-sell-div').removeClass("hide-keyboard-32");
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


pageThirtyTwo.calcPos = function () {

    $('.pageTTParent_32').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    $(".serial_32").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + "");
    $("#form-32").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + "");

    $("#reader").attr("style", "width :90%");
    // $("#reader").attr("style", "width :" + ((250 * window.innerWidth) / 1920) + 'px' + "");

}

pageThirtyTwo.openkeyboard = function () {
    //if((window.JSInterface)&&(parseFloat(managementRel.versionBuild())>=4.4)){

    $('.main-sell-div').addClass("hide-keyboard-32");
    //   console.log('final->' + parseInt(($(selector).css("height")).replace('px', '')));

    //}
};
pageThirtyTwo.closeKeyboard = function () {
    // alert("blur");
    $('.main-sell-div').removeClass("hide-keyboard-32");
};
