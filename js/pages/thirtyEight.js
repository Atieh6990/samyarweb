thirtyEight = {
    cntID: 8,//id in mosabeghe hamishe 8
    userID: managementRel.getCookie("id"),
    dir: 'https://samyar.rasgames.ir/v1/',
    imgDir: 'https://samyar.rasgames.ir/pannel/samyar/public/uploads/shares/contestimg/',
    sendData: {},
    headerSelect: 0,
    acceptRules: false,
    campainName: 'تجربه خوب فروش',
    showUploadPopup: false,
    typeUploadPopup: 2, //2->reject  , 3->accept
    textToShow: ['در حال بررسی', ' بارگذاری ویدئو ', 'عدم تائید', 'تائید شد', 'حجم فایل زیاد است', 'ویدئو با فرمت مناسب انتخاب کنید', 'قوانین را مطالعه کنید. '],
    detailvideos: [],
    videoListId: [],
    videoListName: [],
    videoListRate: [],
    videoListValue: [],
    videoListRateCount: [],
    videoListImage: []

};

thirtyEight.init = function () {

    thirtyEight.calcPos()
    thirtyEight.hoverHeader(thirtyEight.headerSelect)

    thirtyEight.sendData = {
        userID: thirtyEight.userID,
        cntID: thirtyEight.cntID
    };
    ajax("POST", 'https://samyar.rasgames.ir/v1/', thirtyEight.fillRules, "act=contest&type=detailContest" + setParamsAjax(thirtyEight.sendData))

    document.getElementById('customCheckbox_38').addEventListener('change', function () {
        thirtyEight.acceptRules = !!(this.checked)
    });

};

thirtyEight.fillRules = function (data) {
    const dataDetail = jQuery.parseJSON(data)
    if (dataDetail.detail.is_active === 0) {
        thirtyEight.toggleUploadPopup(true, 'در این تاریخ هیچ مسابقه ای تعریف نشده است.')
        setTimeout(function () {
            handelPage.managerReturn()
        }, 2000)
    } else {
        $('.rulesContent_38').html(dataDetail.detail.long_txt)
        ajax("POST", 'https://samyar.rasgames.ir/v1/', thirtyEight.drawSelectVideoItems, "act=contest&type=userDetail" + setParamsAjax(thirtyEight.sendData))
    }
}

thirtyEight.parseVideoList = function (data) {
    var obj = jQuery.parseJSON(data);
    thirtyEight.detailvideos = obj['detail']['videos']
    if (typeof thirtyEight.detailvideos != "undefined") {
        thirtyEight.drawVideoList()
    } else {
        //ehtemalan list khalie
    }

};
thirtyEight.parse = function (data2) {

};
thirtyEight.reset = function () {
    const rulesContent = document.querySelector(".popUpRulesParent_38");
    rulesContent.scrollTop = 0;
    thirtyEight.headerSelect = 0
    thirtyEight.acceptRules = false
    thirtyEight.showUploadPopup = false
    thirtyEight.videoListId = [];
    thirtyEight.videoListName = [];
    thirtyEight.videoListImage = [];
    thirtyEight.videoListRate = [];
    thirtyEight.videoListValue = [];
    thirtyEight.videoListRateCount = [];
    thirtyEight.detailvideos = []
    thirtyEight.toggleUploadPopup(false)
    thirtyEight.toggleRulesPopup(false)
    $('.uploadVideo_38').empty()
    $('.videList_Pchild_38').empty()
    $('.rulesContent_38').empty()
    document.getElementById('customCheckbox_38').checked = false;

};
thirtyEight.create = function () {

};

thirtyEight.return = function () {
    thirtyEight.reset()
};

thirtyEight.drawVideoList = function () {

    thirtyEight.detailvideos.forEach(video => {
        thirtyEight.videoListId.push(video['id'] || null);
        thirtyEight.videoListName.push(video['username'] || null);
        thirtyEight.videoListImage.push(video['image'] || null);
        thirtyEight.videoListRate.push(video['rate'] || null);
        thirtyEight.videoListValue.push(video['value'] || null);
        thirtyEight.videoListRateCount.push(video['rate_count'] || null);
    });


    // console.log(thirtyEight.videoListName)
    const height = (345 * window.innerHeight) / 1280;
    const width = (300 * window.innerWidth) / 720;
    const starWidth = (20 * window.innerWidth) / 720;

    this.table = new table({
        title: thirtyEight.videoListName,
        height: height,
        width: width,
        baseId: "thirtyEight-Video-",
        className: "videos waves-effect waves-light",
        model: "A",
        appendEl: "#videList_Pchild_38",
        img: thirtyEight.videoListImage,
        rate: thirtyEight.videoListRate,
        onclick: "thirtyEight.ClickItem(id)",
        starWidth: starWidth,
    });
};

thirtyEight.ClickItem = function (id) {

    const index = id.split("-")
    $(".videos").removeClass("item-22-hover");
    $("#thirtyEight-Video-" + index[2]).addClass("item-22-hover");
    thirtyNine.vidID = thirtyEight.detailvideos[index[2]].id
    handelPage.managerEnter(39);

};


thirtyEight.handleFileChange = function (event) {

    const maxFileSize = 60 * 1024 * 1024; // 60 MB
    let allowed = true;
    const input = event.target;
    const index = input.dataset.index;
    const file = input.files[0];
    // let file= input.file[0]
    // if (input) {
    //     file = input.file[0]
    // }
    // console.log('input', input, 'index', parseInt(index), 'file', file, file.type, typeof file.type, file.size)

    const errors = [
        {condition: file.size > maxFileSize, code: 0},
        {condition: file.type !== 'video/mp4', code: 1},
        {condition: !thirtyEight.acceptRules, code: 2}
    ];

    for (const error in errors) {
        if (errors[error].condition) {
            thirtyEight.manageUploadFile(errors[error].code, parseInt(index));
            allowed = false;
            break;
        }
    }
    if (allowed) {
        thirtyEight.uploadFormData(file, index)
    }
}
thirtyEight.manageUploadFile = function (type, index) {
    let uploadStatus = $('#leftItemVideo_38_' + index);
    uploadStatus.empty();
    switch (type) {
        case 0: // size
            uploadStatus.append(thirtyEight.videoItemTypeDraw(2, parseInt(index), thirtyEight.textToShow[4]));
            break;
        case 1: // format
            uploadStatus.append(thirtyEight.videoItemTypeDraw(2, parseInt(index), thirtyEight.textToShow[5]));
            break;
        case 2: // rules
            uploadStatus.append(thirtyEight.videoItemTypeDraw(2, parseInt(index), thirtyEight.textToShow[6]));
            break;
        case 3: // success (reset to original state)
            uploadStatus.append(thirtyEight.videoItemTypeDraw(1, parseInt(index), thirtyEight.textToShow[1]));
            break;
    }
    setTimeout(function () {
        uploadStatus.empty();
        uploadStatus.append(thirtyEight.videoItemTypeDraw(1, parseInt(index), thirtyEight.textToShow[1]));
    }, 3000);
};
thirtyEight.drawSelectVideoItems = function (data) {

    ajax("POST", dir, thirtyEight.parseVideoList, "act=contest&type=listN" + setParamsAjax(thirtyEight.sendData));

    const videos = jQuery.parseJSON(data).detail.videos;
    const approvedVideos = videos.filter(video => video.status === "1");
    const heightItem = (165 * window.innerHeight) / 1920;
    const widthImg = (145 * window.innerHeight) / 1920;
    const createVideoItem = (video, index) => {
        const item = $("<div></div>").addClass("uploadBox_38").css("height", heightItem + "px");
        if (index === 0) item.css("margin-top", "0px");

        const RItem = $("<div></div>").addClass("itemVideo_38 rightItemVideo_38");
        const camera = $("<img>");

        if (parseInt(video.allow_upload) === 0) {
            thirtyEight.acceptRules = true
            document.getElementById("customCheckbox_38").checked = true;
            camera.css("width", widthImg + "px");
            camera.attr("src", thirtyEight.imgDir + video.image);
        } else {
            camera.css("width", "7vw");
            camera.attr("src", "./images/goodSelling/camera.svg");
        }

        const title = $("<div></div>")
            .addClass("titleVide_38")
            .attr("id", "videoTitle_38_" + index)
            .html(parseInt(video.allow_upload) === 0 ? video.url.slice(-7) : "ویدئو شماره " + (index + 1));

        RItem.append(camera, title);
        item.append(RItem);

        // Left side (status + click handler if rejected)
        const LItem = $("<div></div>")
            .addClass("itemVideo_38 leftItemVideo_38")
            .attr("id", "leftItemVideo_38_" + index);

        if (parseInt(video.status) === 2) {
            LItem.on("click", function () {
                thirtyEight.toggleUploadPopup(true, video.description);
            });
        }

        const status = parseInt(video.status);
        const statusMap = {
            0: 0, // بررسی
            1: 3, // تأیید شده
            2: 2, // رد شده
        };
        const drawType = statusMap.hasOwnProperty(status) ? statusMap[status] : 1;
        LItem.append(thirtyEight.videoItemTypeDraw(drawType, index, thirtyEight.textToShow[drawType]));

        item.append(LItem);
        $(".uploadVideo_38").append(item);
    };

    if (approvedVideos.length > 0) {
        createVideoItem(approvedVideos[0], 0);
    } else {
        videos.forEach((video, i) => createVideoItem(video, i));
    }

};
thirtyEight.videoItemTypeDraw = function (type, index, textShow) {
    // console.log(type, index, textShow)

    const el = $("<div></div>");
    el.addClass('successUpload_38')
    el.attr('id', 'successUpload_38_' + index)

    switch (type) {
        case 0://uploaded file

            const tik = $("<img>");
            el.append(tik);
            tik.css('width', '6vw');
            tik.attr("src", "./images/goodSelling/loading.svg");

            const text = $("<div></div>")
            el.append(text)
            text.css('color', '#4788F4')
            text.html(textShow)
            text.css('padding-right', '10px');

            break
        case 1://select to upload

            const label = $("<label></label>")
            label.addClass('submitVideoBtn_38')
            label.html(textShow)
            el.append(label)

            const plus = $("<img>");
            label.append(plus);
            plus.css('max-width', '25%');
            plus.attr("src", "./images/goodSelling/Plus.svg");

            const btn = $("<input />")
            btn.attr('type', 'file')
            btn.attr('id', 'videoUpload_38_' + index)
            btn.attr('style', 'display:none')
            btn.attr('accept', 'Video/*')
            btn.attr('data-index', index)
            btn.on('change', thirtyEight.handleFileChange);
            label.append(btn)

            break
        case 2://reject file
            const reject = $("<img>");
            el.append(reject);
            reject.css('width', '6vw');
            reject.attr("src", "./images/goodSelling/Cancel.svg");

            const rejectText = $("<div></div>")
            el.append(rejectText)
            rejectText.css('color', '#F14040')
            rejectText.html(textShow)
            rejectText.css('padding-right', '10px');

            break
        case 3://accept
            const accept = $("<img>");
            el.append(accept);
            accept.css('width', '6vw');
            accept.attr("src", "./images/goodSelling/ok.svg");

            const acceptText = $("<div></div>")
            el.append(acceptText)
            acceptText.css('color', '#6FB116')
            acceptText.html(textShow)
            acceptText.css('padding-right', '10px');
            break

    }
    return el
}
thirtyEight.uploadPopupContent = function (type, des) {
    let parentStick = $('#popUpBoxParent_38');
    let imgAdd = (type === 2) ? ('./images/goodSelling/Cancel.svg') : ('./images/goodSelling/ok.svg')
    // let descriptionText = (type === 2) ? ('رد شده چون ریدی !!!') : ('با  موفقیت بازگذاری شد')
    let descriptionText = des
    let colorClass = (type === 2) ? ('rejectColor_38') : ('successColor_38')

    const successImg = $("<img>");
    parentStick.append(successImg);
    successImg.css('width', '7vw');
    successImg.attr("src", imgAdd);

    const campainName = $("<div></div>");
    parentStick.append(campainName);
    campainName.addClass('campainNamePopup_38');
    campainName.html(thirtyEight.campainName);

    const description = $("<div></div>");
    parentStick.append(description);
    description.addClass('descriptionPopup_38  ' + colorClass + '');
    description.html(descriptionText);
}

thirtyEight.uploadFormData = function (file, index) {

    const data = {userID: thirtyEight.userID, cntID: thirtyEight.cntID};
    const form_data = new FormData();
    form_data.append('file', file);
    form_data.append('type', 'upN');
    form_data.append('act', 'contest');
    form_data.append('datas', pageTwentyOne.setparams(data));

    AJAX = $.ajax({
        url: thirtyEight.dir,
        dataType: 'html',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: 'post',
        xhr: function () {
            managementRel.showLoading();
            return new window.XMLHttpRequest();
        },
        success: function (data) {
            // console.log('success', data);
            managementRel.hideLoading();

            const obj = jQuery.parseJSON(data);
            const isOk = obj['status'] === "ok";
            thirtyEight.typeUploadPopup = isOk ? 3 : 2;
            thirtyEight.toggleUploadPopup(true, obj['description2']);

            if (isOk) {
                const fileName = file.name;
                const shortName = fileName.length > 10 ? fileName.slice(-7) : fileName;
                $('#videoTitle_38_' + index).html(shortName);
            }

            const uploadStatus = $('#leftItemVideo_38_' + index);
            uploadStatus.empty();

            const description = isOk ? thirtyEight.textToShow[0] : obj['description2'];
            uploadStatus.append(thirtyEight.videoItemTypeDraw(0, index, description));

            setTimeout(() => {
                thirtyEight.toggleUploadPopup(false);
            }, 3000);

        },
        errors: function (data) {
            managementRel.hideLoading();
            managementRel.tost(JSON.stringify(data));
            console.log('error', data)
        }
    });
}


thirtyEight.toggleUploadPopup = function (show, text) {
    let popup = $('#popupVideo_38')
    thirtyEight.showUploadPopup = show;

    const action = thirtyEight.showUploadPopup ? 'show' : 'hide';

    popup.removeClass('hideUploadPopup showUploadPopup').addClass('' + action + 'UploadPopup');
    $('#popUpBoxParent_38').empty();

    if (thirtyEight.showUploadPopup) {
        thirtyEight.uploadPopupContent(thirtyEight.typeUploadPopup, text);
    }
}
thirtyEight.toggleRulesPopup = function (show) {
    let popup = $('#popupRules_38')
    const action = show ? 'show' : 'hide';
    popup.removeClass('hideUploadPopup showUploadPopup').addClass('' + action + 'UploadPopup');
}
thirtyEight.hoverHeader = function (index) {
    const removeIndex = (index === 0) ? 1 : 0;
    thirtyEight.headerSelect = index;

    $('#pageHeaderItem_38_' + removeIndex).removeClass('hoverHeader_38');
    $('#pageHeaderItem_38_' + index).addClass('hoverHeader_38');

    if (thirtyEight.headerSelect === 1) {
        thirtyEight.toggleTabClasses('#videoListTab_38', '#upLoadVideoTab_38');
    } else if (thirtyEight.headerSelect === 0) {
        thirtyEight.toggleTabClasses('#upLoadVideoTab_38', '#videoListTab_38');
    }
};
thirtyEight.toggleTabClasses = function (showTab, hideTab) {
    $(showTab).removeClass('hideTabs_38').addClass('showTabs_38');
    $(hideTab).removeClass('showTabs_38').addClass('hideTabs_38');
}
thirtyEight.calcPos = function () {

    let menuHeight = $(".menu-bar").height()
    let deHeader_38 = $('.des_header_38')
    let checkBoxSize_38 = (50 * window.innerHeight) / 1920

    $('#customCheckbox_38').attr('style', "height:" + (checkBoxSize_38) + "px !important ; width:" + (checkBoxSize_38) + "px !important")
    $('.checkmark').attr('style', "height:" + (checkBoxSize_38) + "px !important ; width:" + (checkBoxSize_38) + "px !important")
    $('#acceptRules_38').attr('style', "margin-right:" + (checkBoxSize_38 * 1.5) + "px !important")

    $('.pageTTParent_38').attr("style", "height:" + (window.innerHeight - (menuHeight * 2)) + "px !important")
    // $('.pageHeader_38').attr("style", "height:" + (menuHeight) + "px !important")
    $('.pageHeaderItemTitle_38').attr("style", "height:" + ((menuHeight * 98) / 100) + "px !important")
    deHeader_38.attr("style", "height:" + ((105 * window.innerHeight) / 1920) + "px !important")
    deHeader_38.html('توضیح مسابقه "تجربه خوب فروش"')
    $('.des_content_38').html(' در مسابقه « تجربه خوب فروش » هر فروشنده می‌تواند با ارسال یک ویدئوی ساده به بیان مهارت‌های خود در زمینه ارتباط با مشتری پرداخته و خاطره‌‌ی فروش یکی از محصولات سام را با دیگران به اشتراک ‌گذارد.\n' +
        'ویدئو‌های ارسالی در اینستاگرام و اپلیکیشن سام‌یار به نمایش در آمده و در معرض قضاوت کاربران قرار خواهند گرفت.\n')

    $('.closeRules_38').attr("style", "height:" + ((165 * window.innerHeight) / 1920) + "px !important")
    $('.uploadBox_38').attr("style", "height:" + menuHeight + "px !important")
    $('.popUpRulesParent_38').attr("style", "top:" + (menuHeight * 1.2) + "px !important ; height: " + ((1700 * window.innerHeight) / 1920) + "px !important")

}
