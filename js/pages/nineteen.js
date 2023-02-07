pageNineteen = {
    tempId: '', tempName: '',
    // tempId: [], tempName: [],
    showData: [],
    counter: 0,
};

pageNineteen.init = function () {
    // this.tempId = [];
    // this.tempName = [];

    pageNineteen.clearPage();
    pageNineteen.calcPos();
    pageNineteen.getTotalActivity()

    // $("#nineteen-box").empty();


    // menu.titleBar("images/19.png", "رتبه بندی");
    // var data = {
    //     userID: managementRel.getCookie("id"),
    //     "positionFrom": "0",
    //     "positionTo": "10"
    // }
    // pageNineteen.from = 0;
    // pageNineteen.to = 10;
    // ajax("POST", dir, pageNineteen.manage, "act=rank&type=list" + setParamsAjax(data));


}
pageNineteen.manage = function (data) {
    //  var data = '{"code": 33,"status": "ok","description": "list of Exams for this instant","description2": "لیست امتحانات لحظه ای","detail": [{"id": "3","name": "کلم میخواره","duration": "00:15:00","image": null }]}';
    pageNineteen.NineTeenObj = pageSix.parser(data);
    // console.log(pageNineteen.NineTeenObj)


    if (typeof pageNineteen.NineTeenObj['name'] != "undefined" && pageNineteen.NineTeenObj['name'].length > 0) {
        pageNineteen.create();
        // pageNineteen.tempId = pageNineteen.tempId.concat(pageNineteen.NineTeenObj['id']);
        // pageNineteen.tempName = pageNineteen.tempName.concat(pageNineteen.NineTeenObj['name']);
        //console.log(pageNineteen.tempId);

    } else
        managementRel.tost("شما در آزمونی شرکت نکرده اید");

};


pageNineteen.create = function () {
    // this.list = new list({title: pageNineteen.NineTeenObj['name'], height: handelPage.height * 0.0625, baseId: "ten-subcat-", className: "modole-B waves-effect waves-light", appendEl: "#nineteen-box", model: "B", img: pageNineteen.NineTeenObj['image'],
    // onclick: "pageNineteen.ClickItem(id)", endScrollFun: "pageNineteen.endScroll()", from: pageNineteen.from, to: pageNineteen.to});

    pageNineteen.showData = []
    for (var i = 0; i < pageNineteen.NineTeenObj['name'].length; i++) {
        if (typeof pageNineteen.NineTeenObj.id[i] == "undefined") {
            continue;
        }

        var img = (pageNineteen.NineTeenObj.id[i] == -2) ? ("images/rate/lig-bartar.png") : ("images/rate/other-test.png")
        var data = {
            name: pageNineteen.NineTeenObj['name'][i],
            img: img,
            id: pageNineteen.NineTeenObj.id[i]
        }
        pageNineteen.showData.push(data)
    }


    new contentList({
        data: pageNineteen.showData,
        itemClass: "Citem",
        itemHeight: ((155 * window.innerHeight) / 1920) + "px",
        appendItem: ".Pchild_19",
        sideClass: "CitemTxt",
        imgClass: "CitemImg_19",
        txtClass: "CitemTxt_19",
        onclick: "pageNineteen.ClickItem(id)",
        type: 5,
        counter: pageNineteen.counter,
        endScrollFun: "pageNineteen.endScroll()",
        scrollElClass: 'Pparent_19',
    });
    pageNineteen.from = pageNineteen.NineTeenObj['name'].length;

};
pageNineteen.return = function () {
    if (managePage.direction[(managePage.direction.length) - 2] == 11 || managePage.direction[(managePage.direction.length) - 2] == 13) {
        managePage.retun();
    }
    pageNineteen.clearPage()
    // $("#nineteen-box").empty();
    // menu.titleBar(pageSeven.SevenObj["image"][pageSeven.index[2]], "" + pageSeven.SevenObj["name"][pageSeven.index[2]]);
};


pageNineteen.ClickItem = function (id) {
    pageNineteen.NineTeenObj["id"]

    pageNineteen.index = id.split("-");


    // pageNineteen.itemId = (typeof pageNineteen.tempId[pageNineteen.index[2]] == "undefined" ? "0" : pageNineteen.tempId[pageNineteen.index[2]]);
    // pageNineteen.itemTitle = (typeof pageNineteen.tempName[pageNineteen.index[2]] == "undefined" ? "کل" : pageNineteen.tempName[pageNineteen.index[2]]);

    pageNineteen.itemId = $("#" + id).attr("ids")
    pageNineteen.itemTitle = $("#" + id).attr("title")

    // console.log(pageNineteen.itemId, pageNineteen.itemTitle)

    handelPage.managerEnter(17);
    /*if (pageNineteen.NineTeenObj["status"][pageNineteen.index[2]] == 0) {
     handelPage.managerEnter(11);
     } else if (pageNineteen.NineTeenObj["status"][pageNineteen.index[2]] == 1) {
     handelPage.managerEnter(13);
     }
     */


    //managementRel.playVideo();
};
pageNineteen.endScroll = function () {
    // alert("end");

    if (pageNineteen.NineTeenObj["isMore"] == 1) {
        // console.log(typeof parseInt(pageNineteen.NineTeenObj["positionFrom"]))
        pageNineteen.counter = parseInt(pageNineteen.NineTeenObj["positionFrom"]) + 1
        var data = {
            userID: managementRel.getCookie("id"),
            "positionFrom": pageNineteen.NineTeenObj["positionFrom"],
            "positionTo": pageNineteen.NineTeenObj["positionTo"]
        }
        /* pageNineteen.from = pageNineteen.NineTeenObj["positionFrom"];
         pageNineteen.to = pageNineteen.NineTeenObj["positionTo"];*/
        ajax("POST", dir, pageNineteen.manage, "act=rank&type=list" + setParamsAjax(data));
    }
}
pageNineteen.clearPage = function () {
    pageNineteen.counter = 0;
    pageNineteen.itemId = '';
    pageNineteen.itemTitle = '';
    while (pageNineteen.showData.length > 0) {
        pageNineteen.showData.pop();
    }
    $(".Pchild_19").empty();
    $("#rateInCountry_19").empty()
    $("#rateInCountry_19").empty()
    $("#rateInCity_19").empty()
}
pageNineteen.calcPos = function () {
    $('.pageTTParent_19').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important");
    $(".totalActivity_19").attr("style", "height :" + ((590 * window.innerHeight) / 1920) + 'px' + "");

}
pageNineteen.getTotalActivity = function () {
    pageNineteen.itemId = "0"
    var data = {
        userID: managementRel.getCookie("id"),
        examID: pageNineteen.itemId
    }
    ajax("POST", dir, pageNineteen.totalActivityManage, "act=rank&type=exam" + setParamsAjax(data));
}
pageNineteen.totalActivityManage = function (data) {
    var totalActivitycData = jQuery.parseJSON(data);
    $("#rateInCountry_19").html("امتیاز : " + totalActivitycData.detail.user_country)
    $("#rateInCity_19").html("امتیاز : " + totalActivitycData.detail.user_state)
    $("#rateInStore_19").html("امتیاز : " + totalActivitycData.detail.user_store);
    pageNineteen.rankListData();
}

pageNineteen.rankListData = function () {
    menu.titleBar("images/19.png", "رتبه بندی");
    var data = {
        userID: managementRel.getCookie("id"),
        "positionFrom": "0",
        "positionTo": "10"
    }
    pageNineteen.from = 0;
    pageNineteen.to = 10;
    ajax("POST", dir, pageNineteen.manage, "act=rank&type=list" + setParamsAjax(data));
}