var xhr;
var os = true;
var pk = "5771A6EAF24122C643E0";


//------------------------------------------------------------------------------
var cnt = 0;
//var addedLink = "&mode=debug";
var addedLink = "";


function setParamsAjax(obj) {

    var time = new Date().getTime();
    var hdata = {
        agent: time,
        cnt: cnt++
    }
    //console.log('JSON.stringify(obj)->' + JSON.stringify(obj));
  //  alert("sar");

    $.extend(hdata, {data: btoa(btoa(encode_utf8(JSON.stringify(obj)) + "OCHX5ICOBO="))});
    var st = {hdata: hdata};
    if ((window.JSInterface)&&(((obj['password'])&&(obj['phoneNum']))||(parseFloat(managementRel.versionBuild())>=4.4))) {
     //  alert("1111");
       // console.log("11111");
        var st1 = {hdata: hdata, hash: managementRel.shCode(JSON.stringify(hdata), pk, time.toString())};
    } else if((!(window.JSInterface))){
    //alert("2222");
    //alert("pk->"+pk);
       // console.log("22222");
        var st1 = {hdata: hdata, hash: managementRel.shCode(JSON.stringify(hdata), pk, time.toString())};

       // var st1 = {hdata: hdata, hash:"sssss"};
        //alert("hash=>"+hash);
    }else if((window.JSInterface)&&(parseFloat(managementRel.versionBuild())<4.4)){
        var st1 = {hdata: hdata, hash: managementRel.shCodeOld(JSON.stringify(hdata), pk, time.toString())};
    }
    return "&datas=" + JSON.stringify(st1);
}


//------------------------------------------------------------------------------


function ajax(type, link, funSuccess, sendData) {

    managementRel.ios({"action": "print", "msg": "ajax"});
    //gaU('send', 'pageview', link);
    var sendData1 = sendData.concat(addedLink);
    if (sendData1.indexOf("act=chat&type=newPM") < 0) {
        managementRel.showLoading();
    }
    //alert(sendData)

    //loadingAjax('loaderImage'+dis,true);
    $("#loading").removeClass("hidden");
    if (typeof xhr !== 'undefined')
        xhr.abort();

    xhr = $.ajax({
        type: type,
        dataType: "html",
        data: sendData1,
        //contentType: 'application/x-www-form-urlencoded',
        headers: {'Accept': 'application/json'},
        url: link,
        success: funSuccess,

        tryCount: 0,
        retryLimit: 10,

        beforeSend: function (xhr) {
            // xhr.overrideMimeType( "text/plain; charset=ut8f" );
            mylog.log("start");
        },
        error: function (xhr, textStatus, errorThrown) {
            // alert('erorr = ' + xhr + ' ' + textStatus + '' + errorThrown);
            if (textStatus == 'timeout' || textStatus == 'error') {
                managementRel.hideLoading();
                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {
                    //try again
                    $.ajax(this);
                    return;
                } else {
                    managementRel.tost("00 اختلال در برقراری ارتباط با اینترنت");
                    mylog.log('a');
                    //document.getElementById('dis'+dis).style.display = 'block';
                }
                return;
            }

            if (xhr.status == 500) {

            } else {
                //handle error

            }
        },
        statusCode: {
            404: function () {
                mylog.log("page not found");
            }
        },
    }).done(function () {
        mylog.log("success");
        $("#loading").addClass("hidden");
        //loadingAjax('loaderImage'+dis,false);
        managementRel.hideLoading();
    })
        .fail(function () {
            mylog.log("error");
            managementRel.hideLoading();
        })
        .always(function () {
            mylog.log("complete");
        });
}


function loadingAjax(picID, flag) {
    /* if (flag) {
     stopAnimation();
     new imageLoader(cImageSrc, 'startAnimation(' + dis + ')');
     document.getElementById(picID).style.display = 'block';
     document.getElementById(picID).style.zIndex = 5000;
     } else {
     document.getElementById(picID).style.display = 'none';
     stopAnimation();

     }*/
}

var pk1 = '12569F9C3A0E7B919565';


function getKey(str) {
    pk1 = str;
    //managementRel.ios({"action": "print", "msg": str});
}

function shCodeJs(str, pk, a) {

    var getKey = managementRel.getCookie("key");
  //  console.log("pk1=>"+pk1);
    return md5((md5(pk1) + $.base64.encode(str) + md5(a) + md5($.base64.encode(pk + a)) + $.base64.encode((getKey == null ? "" : getKey)))).replace("\n", "").replace("\r", "");
}
