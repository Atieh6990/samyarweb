thirtyNine = {
    starModule_39: "",
    obj: '',
    vidID: '',
    userID: managementRel.getCookie("id"),
};

//TODO: nahveye emtiyaz giri da star.js eslah beshe  chon dare ye seri value az safeye 23migire->line 151


thirtyNine.init = function () {
    // thirtyNine.reset()

    var data = {
        userID: thirtyNine.userID,
        vidID: thirtyNine.vidID,
    }
    ajax("POST", dir, thirtyNine.manage, "act=contest&type=detailN" + setParamsAjax(data));
};
thirtyNine.manage = function (data) {
    thirtyNine.obj = jQuery.parseJSON(data)
    thirtyNine.starModule_39 = new starModule({});
    thirtyNine.create();
}
thirtyNine.create = function () {
    const Vid = $('#video_39')
    Vid.attr('src', thirtyNine.obj.detail.url);

    if (parseInt(thirtyNine.obj.detail.is_vote) === 1) {
        thirtyNine.starModule_39._init("#parentStar_39", parseInt(thirtyNine.obj.detail.rate_count), parseInt(thirtyNine.vidID), parseInt(thirtyNine.obj.detail.is_rated), parseInt(thirtyNine.obj.detail.rate_user), thirtyEight.cntID);
    }

    $('#score-user_39').html(' امتیاز این کاربر : ' + thirtyNine.obj.detail.value);
    $('#user-name_39').html('<span style="text-indent: 25px"> ارسال کننده : ' + thirtyNine.obj.detail.username + ' </span><br><span style="text-indent: 25px"> فروشگاه : ' + thirtyNine.obj.detail.store + ' </span><br><span style="text-indent: 25px"> شهر : ' + thirtyNine.obj.detail.city + ' </span><br><span style="text-indent: 25px"> امتیاز ویدئو : ' + thirtyNine.obj.detail.value + ' </span><br>')
}
thirtyNine.submitRate = function (rate) {
    var data = {
        userID: thirtyNine.userID,
        vidID: thirtyNine.vidID,
        rate: rate,
    };
    ajax("POST", 'https://samyar.rasgames.ir/v1/', thirtyNine.doneRate, "act=contest&type=rateN" + setParamsAjax(data));
}
thirtyNine.doneRate = function (data) {
    const rateRes = $('.star-rateText')
    rateRes.empty()
    rateRes.text(jQuery.parseJSON(data).description2)
}
// thirtyNine.calcUserStarRate = function () {
//     var rateCount = thirtyNine.obj.detail.rate_count//coun nafarati ke be video rate dadan
//     var realStarVal = rateCount * 2; //baraye mohasebeye arzeshe vaghe ee star ha
//     var allValue = parseInt(realStarVal + parseInt(thirtyNine.obj.detail.value))
//     var starRate = allValue / rateCount;
//     return Math.round(starRate * 10) / 10
// }

thirtyNine.return = function () {
    thirtyNine.reset()
};
thirtyNine.reset = function () {
    $('#parentStar_39').empty();
    $('.star-BackMainDiv').remove();
    $('.star-rateText').remove();
    $('.star-mainHolder').remove();
    $('#video_39').attr('src', "");
};
