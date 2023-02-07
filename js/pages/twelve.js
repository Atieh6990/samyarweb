pageTwelve = {
    title: ["امتیاز کسب شده", "زمان آزمون", "رتبه کل", "کل شرکت کنندگان", "رتبه در استان", "شرکت کنندگان در استان", "رتبه در فروشگاه", "شرکت کنندگان در فروشگاه"],
    images: ["0.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"],
    obj: []
};

pageTwelve.init = function () {
    pageTwelve.calcPos();
    // $(".twelve-item-top").css({"height": handelPage.height * 0.031 + "px", "line-height": handelPage.height * 0.031 + "px"});


}
pageTwelve.manage = function (data) {
    //  var data = '{"code": 33,"status": "ok","description": "list of Exams for this instant","description2": "لیست امتحانات لحظه ای","detail": [{"id": "3","name": "کلم میخواره","duration": "00:15:00","image": null }]}';
    pageTwelve.TwelveObj = pageSix.parser(data);

    pageTwelve.create();

};


pageTwelve.create = function (tr, fa, sc, ti, es, ac, uc, as, us, ast, ust, re) {
    $("#twelve-true").html(tr);
    $("#twelve-false").html(fa);

    pageTwelve.obj = [
        {img: pageTwelve.images[0], title: pageTwelve.title[0], num: sc},
        {img: pageTwelve.images[1], title: pageTwelve.title[1], num: ti},
        {img: pageTwelve.images[2], title: pageTwelve.title[2], num: uc},
        {img: pageTwelve.images[3], title: pageTwelve.title[3], num: ac},
        {img: pageTwelve.images[4], title: pageTwelve.title[4], num: us},
        {img: pageTwelve.images[5], title: pageTwelve.title[5], num: as},
        {img: pageTwelve.images[6], title: pageTwelve.title[6], num: ust},
        {img: pageTwelve.images[7], title: pageTwelve.title[7], num: ast}
    ];
    pageTwelve.drawExamList(pageTwelve.obj)
    if(typeof re != "undefined" && re == 1){
        $(".reviewBtn_12").css("opacity","1");
    }

    // $("#twelve-true").html(tr);
    // $("#twelve-false").html(fa);
    //
    // $("#twelve-score").html(sc);
    // $("#twelve-time").html(ti);
    // $("#twelve-userContry").html(uc);
    // $("#twelve-allContry").html(ac);
    // $("#twelve-userState").html(us);
    // $("#twelve-allState").html(as);
    // $("#twelve-userStore").html(ust);
    // $("#twelve-allStore").html(ast);


};
pageTwelve.review = function () {
    handelPage.initShowPage(11)
    pageEleven.init("review");
    var data = {
        userID: managementRel.getCookie("id"),
        examID: pageThirteen.ThirteenObj["id"][pageThirteen.index[2]],
    }
    ajax("POST", dir, pageEleven.manage, "act=exam&type=review" + setParamsAjax(data));

}
pageTwelve.clearPage=function(){
    $("#twelve-true").empty();
    $("#twelve-false").empty();
    $(".Pchild_12").empty();
    while (pageTwelve.obj.length>0){
        pageTwelve.obj.pop()
    }
}
pageTwelve.returnTher = function () {

    pageTwelve.clearPage()
    // $("#twelve-score").empty();
    // $("#twelve-time").empty();
    // $("#twelve-userContry").html();
    // $("#twelve-allContry").html();
    // $("#twelve-userState").html();
    // $("#twelve-allState").html();
    // $("#twelve-userStore").html();
    // $("#twelve-allStore").html();
}
pageTwelve.return = function () {
    pageTwelve.clearPage()
    // $("#twelve-true").empty();
    // $("#twelve-false").empty();
    // $("#twelve-score").empty();
    // $("#twelve-time").empty();
    // $("#twelve-userContry").html();
    // $("#twelve-allContry").html();
    // $("#twelve-userState").html();
    // $("#twelve-allState").html();
    // $("#twelve-userStore").html();
    // $("#twelve-allStore").html();
    pageTen.init()
    clearInterval(intval);
    $('#eleven-question-time').empty();
    $("#eleven-questions").empty();
    $("#eleven-question-options").empty();
    pageEleven.cnt = 0;
    //$("#twelve-detailNews-box").empty();
    // menu.titleBar(pageSeven.SevenObj["image"][pageSeven.index[2]], "" + pageSeven.SevenObj["name"][pageSeven.index[2]]);
};


pageTwelve.ClickItem = function (id) {
    pageTwelve.index = id.split("-");
    handelPage.managerEnter(11);
};

pageTwelve.calcPos = function () {
    $('.pageTTParent_12').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    $(".answerParent_12").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + "");
    $(".reviewBtn_12").attr("style", "height :" + ((85 * window.innerHeight) / 1280) + 'px' + "");
}
pageTwelve.drawExamList = function (obj) {
    for(var i=0;i<obj.length;i++){
        var elm = $("<div></div>")
        elm.addClass("listItem_12")
        elm.attr("style","height :" + ((90 * window.innerHeight) / 1280) + 'px' + "")
        $(".Pchild_12").append(elm)

        var topDiv = $("<div></div>");
        topDiv.addClass("examListTopDiv_12");
        elm.append(topDiv);

        var icon = $("<img>");
        icon.addClass("examListIcon_12");
        icon.attr("src","images/exams/"+obj[i].img+"")
        topDiv.append(icon)

        var title = $("<div></div>");
        title.addClass("examListTitle_12 ansCntTxt_12")
        title.html(obj[i].title)
        topDiv.append(title)

        var num = $("<div></div>")
        num.addClass("examListNum_12")
        num.html(obj[i].num)
        topDiv.append(num)

        var line =$("<div></div>")
        line.addClass("examListLine_12");
        elm.append(line)
    }
}

resetExam = function () {
    // alert(managePage.direction)
    if (managePage.direction[(managePage.direction.length) - 2] == 11 || managePage.direction[(managePage.direction.length) - 2] == 13) {
        managePage.retun();
        managePage.retun();
    }
    pageTwelve.clearPage()
    // $("#twelve-true").empty();
    // $("#twelve-false").empty();
    // $("#twelve-score").empty();
    // $("#twelve-time").empty();
    // $("#twelve-userContry").html();
    // $("#twelve-allContry").html();
    // $("#twelve-userState").html();
    // $("#twelve-allState").html();
    // $("#twelve-userStore").html();
    // $("#twelve-allStore").html();
    clearInterval(intval);
    $('#eleven-question-time').empty();
    $("#eleven-questions").empty();
    $("#eleven-question-options").empty();
    pageEleven.cnt = 0;
}

