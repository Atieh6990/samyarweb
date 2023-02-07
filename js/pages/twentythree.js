pageTwentyThree = {
    starAppModule: "",
};

pageTwentyThree.init = function () {

    // console.log(pageTwentyTwo.TwentyTwoObj)

    $("#pageTwentyThree-detailNews-box").empty();
    $('#video').empty();
    $('#user-name').empty();
    $('#score-user').empty();
    menu.titleBar("images/34.png", "من یک متخصصم");
    $('.parentStar').empty();
    $('.star-BackMainDiv').remove();
    $('.star-rateText').remove();
    $('.star-mainHolder').remove();

    var data = {
        userID: managementRel.getCookie("id"),
        vidID: pageTwentyTwo.TwentyTwoObj['id'][pageTwentyTwo.index[2]],
    }


    ajax("POST", dir, pageTwentyThree.manage, "act=contest&type=detail" + setParamsAjax(data));
}

pageTwentyThree.manage = function (data) {
    //  var data = '{"code": 33,"status": "ok","description": "list of Exams for this instant","description2": "لیست امتحانات لحظه ای","detail": [{"id": "3","name": "کلم میخواره","duration": "00:15:00","image": null }]}';
    pageTwentyThree.pageTwentyThreeObj = pageTwentyTwo.parser(data);
    mylog.log('url----->' + pageTwentyTwo.url);
    mylog.log('id----->' + pageTwentyTwo.TwentyTwoObj['id'][pageTwentyTwo.index[2]]);
    pageTwentyThree.starAppModule = new starModule({});
    pageTwentyThree.create();


}

pageTwentyThree.calcUserStarRate = function () {
    var rateCount = pageTwentyTwo.TwentyTwoObj['ratecount'][pageTwentyTwo.index[2]]//coun nafarati ke be video rate dadan
    var realStarVal = rateCount * 2; //baraye mohasebeye arzeshe vaghe ee star ha
    var allValue = parseInt(realStarVal + parseInt(pageTwentyTwo.TwentyTwoObj['value'][pageTwentyTwo.index[2]]))
    var starRate = allValue / rateCount;
    var showScore = Math.round(starRate * 10) / 10
    return showScore
}

pageTwentyThree.create = function () {


    // console.log('rate_user---->' + pageTwentyTwo.rate_user);

    $('#video').attr('src', pageTwentyTwo.url);
    $('#video').attr('onclick', "pageTwentyThree.openVideo()");
    // $('#score-user').html('امتیاز این کاربر: ' + pageTwentyTwo.TwentyTwoObj['value'][pageTwentyTwo.index[2]]);
    $('#score-user').html('میانگین امتیاز این کاربر : ' + pageTwentyThree.calcUserStarRate());
    $('#user-name').html('ارسال کننده: ' + pageTwentyTwo.TwentyTwoObj['name'][pageTwentyTwo.index[2]]);
    pageTwentyThree.starAppModule._init("#parentStar", pageTwentyTwo.TwentyTwoObj['ratecount'][pageTwentyTwo.index[2]], pageTwentyTwo.TwentyTwoObj['id'][pageTwentyTwo.index[2]], pageTwentyTwo.is_rated, pageTwentyTwo.rate_user);


}


pageTwentyThree.return = function () {
    //alert('return');
    $('.parentStar').empty();
    $('.star-BackMainDiv').remove();
    $('.star-rateText').remove();
    $('.star-mainHolder').remove();
    $('#video').attr('src', "");
    /*$('#bodyContent').scrollTop(parseInt(pageTwentyTwo.pos));
   /!* window.scrollTo(parseInt(pageTwentyTwo.pos), 0);
    window.scrollTo(0,parseInt(pageTwentyTwo.pos));*!/

    var scrollHeight = $("#bodyContent").height();
    var plus = 0;
    if (window.JSInterface)
        plus = 24;*/
    //  window.scrollTo(0,2000);


};
pageTwentyThree.openVideo = function () {
    if (parseFloat(managementRel.versionBuild()) < 4.4) {
        //console.log('->'+ pageTwentyTwo.url);
        managementRel.playVideo(pageTwentyTwo.url, 'g');


    }
};
