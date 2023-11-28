pageFive = {
    imgCrop: ''
};

pageFive.init = function (data) {
    $('#upload-demo').empty();
    menu.titleBar("", "");
    menu.manageTopScreen();
    pageFive.intCrop();

}
pageFive.parser = function (data) {


};
pageFive.create = function () {

};
pageFive.return = function () {
    //$("#five-detailNews-box").empty();
    pageFive.imgCrop.croppie('destroy');

};
pageFive.intCrop = function () {
    $('#five-save-img').addClass('hidden');
    var el = document.getElementById('upload-demo');

    pageFive.imgCrop = $('#upload-demo').croppie({
        enableExif: true,
        viewport: {width: 250, height: 250, type: 'circle'},
        boundary: {height: 320},
        showZoomer: true,
        enableOrientation: true,
    });

};
pageFive.resultSubmit = function (data) {
    mylog.log(data)
    var obj = jQuery.parseJSON(data);

    if (obj['status'] == "ok") {

        managementRel.setCookie("avatar", obj['picture']['picture']);
        $("#three-avatar").val(obj['picture']['picture']);
        menu.userCreat();
        $("#three-one-avatar").html("<img src=" + dirImg + obj['picture']['picture'] + ">");
        handelPage.managerReturn();
    }
    managementRel.tost(obj['description2']);
}
readFile = function (input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.upload-demo').addClass('ready');
            pageFive.imgCrop.croppie('bind', {
                url: e.target.result,

            })
            $('#five-save-img').removeClass('hidden');
            //     .then(function (resp) {
            //     mylog.log('jQuery bind complete');
            //     $('#five-save-img').removeClass('hidden');
            // });

        }

        reader.readAsDataURL(input.files[0]);
    } else {
        mylog.log("Sorry - you're browser doesn't support the FileReader API");
    }
}

function funuploadresult9() {
    pageFive.imgCrop.croppie('result', {
        // type: 'base64',
        // size: 'viewport'
        type: 'canvas',
        size: 'original'
    }).then(function (resp) {

        var data = {
            userID: managementRel.getCookie("id"),
            img: resp,
        }
        ajax("POST", dir, pageFive.resultSubmit, "act=profile&type=image" + setParamsAjax(data));

    });
}

$(document).ready(function () {
    $('#five-avatar').on('change', function () {
       // console.log("onChange !@")
        $('#saveImg').removeClass('hidden');
        readFile(this);

    });
    $('.vanilla-rotate').on('click', function (ev) {

        pageFive.imgCrop.croppie('rotate', 90);
    });
})

