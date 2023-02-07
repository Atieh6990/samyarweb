pageTwentyOne = {
};

pageTwentyOne.init = function () {
    //$("#twentyOne-detailNews-box").empty();
    menu.titleBar("images/34.png", "من یک متخصصم");
    $('#twentyone-modal-2').modal({dismissible: false});
    var data = {
        userID: managementRel.getCookie("id"),
        cntID: pageTwenty.TwentyObj['id'][pageTwenty.index[2]],
    }

    $('#filled-in-box').prop('checked', false);
    $('#upButton').removeClass('backRed');
    $('#parentButton').css('display', 'none');
    $("#parentButton").attr("onclick", "javascript:$('#uploadNew').click()");
    $("#progress").css('display', 'none');
    $("#cancle").css('display', 'none');

    $('#description').empty();
    $('#stateVideo').empty();


  
    ajax("POST", dir, pageTwentyOne.manage, "act=contest&type=get" + setParamsAjax(data));

}
pageTwentyOne.manage = function (data) {
    //  var data = '{"code": 33,"status": "ok","description": "list of Exams for this instant","description2": "لیست امتحانات لحظه ای","detail": [{"id": "3","name": "کلم میخواره","duration": "00:15:00","image": null }]}';
    pageTwentyOne.TwentyOneObj = pageSix.parser(data);

    if (typeof pageTwenty.TwentyObj['id'][pageTwenty.index[2]] != "undefined" && pageTwenty.TwentyObj['id'][pageTwenty.index[2]].length > 0)
        pageTwentyOne.create();



    else
        managementRel.tost("در حال حاضر مسابقه ای وجود ندارد");

};
var form_data;
pageTwentyOne.choose = function () {

    mylog.log('choooose->' + dir);


    var file_data = $('#uploadNew').prop('files')[0];
    mylog.log('file_data-> ' + file_data);
    form_data = new FormData();
    form_data.append('file', file_data);
    form_data.append('type', 'up');
    form_data.append('act', 'contest');
    var data = {userID: managementRel.getCookie("id"), cntID: pageTwenty.TwentyObj['id'][pageTwenty.index[2]]}
    form_data.append('datas', pageTwentyOne.setparams(data));
    //console.log(form_data);

    if (typeof AJAX != 'undefined')
        AJAX.abort();
    $("#progress").css('display', 'block');
    $("#progressPercent").html('0%');
    $("#cancle").css('display', 'block');


    // $('#cancelUpload_' + selectItem).css('display', 'none');
    AJAX = $.ajax({
        //  url: localdir, // point to server-side PHP script 
        url: 'https://samyar.rasgames.ir/v1/index.php', // point to server-side PHP script 
        dataType: 'html', // what to expect back from the PHP script, if anything
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: 'post',
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;

                    percentComplete = parseInt(percentComplete * 100);
                   // mylog.log('percentComplete->' + percentComplete);
                    $('#progressPercent').text(percentComplete + '%');
                    if (percentComplete == '100'){
                        
                         managementRel.showLoading();

                    }
                       
                    

                }
            }, false);
            return xhr;
        },
        success: function (data) {
            //   console.log(data); // display response from the PHP script, if any
            var obj = jQuery.parseJSON(data);
            // $("#loading").addClass("hidden");
            managementRel.hideLoading();
            managementRel.tost(obj['description2']);
        }
    });


    // ajax("POST", dir, pageTwentyOne.manage, "act=contest&type=up" + setParamsAjax(data));

}
pageTwentyOne.setparams = function (obj) {
    var time = new Date().getTime();
    var hdata = {
        agent: time,
        cnt: cnt++
    }
    $.extend(hdata, {data: btoa(btoa(encode_utf8(JSON.stringify(obj)) + "OCHX5ICOBO="))});
    var st = {hdata: hdata};
    var st1 = {hdata: hdata, hash: managementRel.shCode(JSON.stringify(hdata), pk, time.toString())};
    return  JSON.stringify(st1);
}


pageTwentyOne.showUpload = function () {
//alert('showUpload');
    if ($('#filled-in-box').is(':checked')) {
        // alert('checked');
        $('#parentButton').css('display', 'block');
    } else {
        //  alert('no checked');
        $('#parentButton').css('display', 'none');

    }

}

pageTwentyOne.showRules = function () {


    $('#twentyone-modal-2').modal('open');



}
pageTwentyOne.return = function () {
    $("#twentyOne-detailNews-box").empty();
    menu.titleBar("images/34.png", "من یک متخصصم");
};

pageTwentyOne.create = function () {
    //alert(pageTwentyOne.TwentyOneObj['send_status']);

    if (pageTwentyOne.TwentyOneObj['send_status'] == "0") {

        $('#stateVideo').html('در حال بررسی');
        $('#filled-in-box').prop('checked', true);
        $('#icon').attr('src', 'images/red.png');
        $('#parentButton').css('display', 'block');

        $('#upButton').addClass('backRed')
        $("#parentButton").removeAttr("onclick");
    } else if (pageTwentyOne.TwentyOneObj['send_status'] == "1") {

        $('#stateVideo').html('فیلم شما تایید شد.');
        $('#filled-in-box').prop('checked', true);
        $('#icon').attr('src', 'images/red.png');
        $('#parentButton').css('display', 'block');
        $('#upButton').addClass('backRed')
        $("#parentButton").removeAttr("onclick");



    } else if (pageTwentyOne.TwentyOneObj['send_status'] == "3") {

        if ($('#filled-in-box').is(':checked')) {
            // alert('checked');
            $('#parentButton').css('display', 'block');
        } else {
            //  alert('no checked');
            $('#parentButton').css('display', 'none');

        }
        $('#upButton').removeClass('backRed');
        $('#icon').attr('src', 'images/green.png');
        $("#parentButton").attr("onclick", "javascript:$('#uploadNew').click()");
        $("#progress").css('display', 'none');
        $("#cancle").css('display', 'none');





    }

    $('#description').html(pageTwentyOne.TwentyOneObj['long_txt']);

    mylog.log('twenty one');
};
pageTwentyOne.cancle = function () {

    AJAX.abort();
    $("#progressPercent").html('0%');
    managementRel.hideLoading();
    //  $('#fileName_' + selectItem).html("");


}
