pageTen = {
    titleType: ["آزمون های گذشته", "آزمون های پیش رو", "سوالات کلیدی"],
    pastExamObj: [],
    noExam: "در حال حاضر آزمون فعالی موجود نیست",
    pureData: '', futureExamObj: [],
    typeExamSelect:-1,
};

pageTen.init = function () {
    $('.pageTTParent_10').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    pageTen.clearPage()
    pageTen.calcPos();
    menu.titleBar("images/19.png", "آزمون");
    var data = {
        userID: managementRel.getCookie("id"),
    }
    ajax("POST", dir, pageTen.manage, "act=exam&type=listall" + setParamsAjax(data));
}
pageTen.manage = function (data) {
    pageTen.TenObj = pageSix.parser(data);
    pageTen.pureData = data;
    if (typeof pageTen.TenObj['name'] != "undefined" && pageTen.TenObj['name'].length > 0)
        pageTen.create();
    else
        managementRel.tost("در حال حاضر آزمون فعالی موجود نیست");
};
pageTen.managePastExam = function (data) {
    pageTen.pastExamObj = pageSix.parser(data);
    pageThirteen.ThirteenObj = pageSix.parser(data);

    if (typeof pageTen.pastExamObj['name'] == "undefined") {
        managementRel.tost("در حال حاضر آزمون فعالی موجود نیست");
        $(".pastExamChild_10").addClass("noExam_10")
        $(".pastExamChild_10").html(pageTen.noExam)
    } else {
        new pastExamList({
            data: pageTen.pastExamObj,
            id: "pastExam-subcat-",
            itemClass: 'pastExamItem',
            appendName: 'pastExamChild_10',
            itemWidth: ((250 * window.innerWidth) / 720) + "px",
            tagClass: 'tagClass_10',
            examDet: 'examDet_10',
            examElemClass: "examElemClass",
            examElem_1: "examElem_1",
            examElem_2: "examElem_2 ",
            onclick: "pageTen.clickPastExam(id)"
        })
    }
}

pageTen.create = function () {

    $(".titleTxt_10_0").html(pageTen.titleType[0]);
    $(".titleTxt_10_1").html(pageTen.titleType[1]);
    $(".titleTxt_10_2").html(pageTen.titleType[2]);
    pageTen.prepareFutureExamData();
    var data = {
        userID: managementRel.getCookie("id"),
        status: 2
    }
    ajax("POST", dir, pageTen.managePastExam, "act=exam&type=list" + setParamsAjax(data));
};

pageTen.clickPastExam = function (id) {
    pageThirteen.index = id.split("-");
    pageTen.index = ("ten-subcat-0").split('-');
    pageTen.typeExamSelect = 0
    var data = {
        userID: managementRel.getCookie("id"),
        examID: pageTen.pastExamObj.id[pageThirteen.index[2]],
    }
    ajax("POST", dir, pageThirteen.resultExam, "act=exam&type=result" + setParamsAjax(data));

}
pageTen.clickFutureExam = function (id) {
    pageTen.typeExamSelect = 1
    pageTen.index = ("ten-subcat-0").split('-');
    handelPage.managerEnter(11);
}

pageTen.return = function () {

    if (managePage.direction[(managePage.direction.length) - 2] == 11 || managePage.direction[(managePage.direction.length) - 2] == 13) {
        pageTen.clearPage()
        managePage.retun();
    }
    // $("#ten-detailNews-box").empty();
    // menu.titleBar(pageSeven.SevenObj["image"][pageSeven.index[2]], "" + pageSeven.SevenObj["name"][pageSeven.index[2]]);
};

pageTen.ClickItem = function (id) {
    // pageTen.index = id.split("-");
    // if (pageTen.TenObj["status"][pageTen.index[2]] == 0) {
    //     handelPage.managerEnter(11);
    // } else if (pageTen.TenObj["status"][pageTen.index[2]] == 1) {
    //     handelPage.managerEnter(13);
    // }
    //managementRel.playVideo();
};
pageTen.calcPos = function () {
    // $('.pageTTParent_10').attr("style", 'height:' + ((100 * window.innerHeight) / 1920) + 'px');
    $('.pastExamParent_10').attr("style", 'height:' + ((150 * window.innerHeight) / 1280) + 'px');
    $('.futureExamParent_10').attr("style", 'height:' + ((355 * window.innerHeight) / 1280) + 'px');
    $('.FrequentlyQuestionsParent_10').attr("style", 'height:' + ((350 * window.innerHeight) / 1280) + 'px');
    $('.pageTTParent_10').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important");
}
pageTen.clearPage = function () {
    pageTen.typeExamSelect = -1
    while (pageTen.futureExamObj.length > 0) {
        pageTen.futureExamObj.pop()
    }

    while (pageTen.pastExamObj.length > 0) {
        pageTen.pastExamObj.pop()
    }

    $(".pastExamChild_10").empty()
    $(".futureExamChild_10").empty()
    $(".FrequentlyQuestionsChild_10").empty();

    $(".futureExamChild_10").removeClass("noExam_10")
    $(".pastExamChild_10").removeClass("noExam_10")

}
pageTen.drowPage = function () {

}

pageTen.prepareFutureExamData = function () {
    var parsePureData = jQuery.parseJSON(pageTen.pureData)
    for (var i = 0; i < parsePureData.detail.length; i++) {
        if (parsePureData.detail[i].status == 0) {//azmooni ke sherkat nakardam
            pageTen.futureExamObj.push(parsePureData.detail[i])
        }
    }

    if (pageTen.futureExamObj.length == 0) {
        $(".futureExamChild_10").html(pageTen.noExam)
        $(".futureExamChild_10").addClass("noExam_10")
    }

    new futureExamList({
        data: pageTen.futureExamObj,
        id: "futureExam-subcat-",
        itemClass: "futureExamItem",
        itemHeight: ((250 * window.innerHeight) / 1920) + "px",
        appendItem: ".futureExamChild_10",
        sideClass: "CitemSide",
        txtClass: "futureExamTxt",
        onclick: "pageTen.clickFutureExam(id)",
    });//bad az baz shodane ye azmoon bayad ba ajax azmoone faAl jaygozin beshe
    // new frequentlyQuestionsList({
    //     itemClass: "frequentlyQuestionsItem",
    //     itemWidth: ((325 * window.innerWidth) / 720) + "px",
    //     appendName: "FrequentlyQuestionsChild_10",
    //     FrequentlyQuestionsTitle: "FrequentlyQuestionsTitle",
    //     FrequentlyQuestionsTxt: "FrequentlyQuestionsTxt",
    // })
}
