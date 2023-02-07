pageSeventeen = {
    imgCrop: '', page: 1, sts: "0",
    tabsTitle: [{
        name: 'رتبه کل',
        img_1: 'images/rate/votbr-kol.png',
        img_2: 'images/rate/votbr-kol_desable.png'
    }, {
        name: 'رتبه در شهر',
        img_1: 'images/rate/rotbe-dar-shar.png',
        img_2: 'images/rate/rotbe-dar-shar_desable.png'
    }, {
        name: 'رتبه در فروشگاه',
        img_1: 'images/rate/rotbe-dar-foroshgah.png',
        img_2: 'images/rate/rotbe-dar-foroshgah_desable.png'
    }]
};

pageSeventeen.init = function () {
    // $("#seventeen-content").empty();
    // $("#seventeen-box-tab").css({"height": handelPage.height * 0.091});
    // $(".seventeen-tab").css({"margin-top": handelPage.height * 0.025, "line-height": (handelPage.height * 0.091 * 0.5) - 4 + "px"});
    // $("#seventeen-content").css({"margin-top": handelPage.height * 0.091 + "px"});


    menu.titleBar("images/24.png", pageNineteen.itemTitle);
    pageSeventeen.clearPage();
    pageSeventeen.calcPos();
    pageSeventeen.drawTabs();


    var data = {
        userID: managementRel.getCookie("id"),
        examID: pageNineteen.itemId
    }
    ajax("POST", dir, pageSeventeen.manage, "act=rank&type=exam" + setParamsAjax(data));
    //pageSeventeen.manage("");
}
pageSeventeen.manage = function (data) {
    //data = '{"code":63,"status":"ok","description":"user rank list","description2":"\u0644\u06cc\u0633\u062a \u0631\u062a\u0628\u0647 \u0628\u0646\u062f\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646","detail":{"all_country":2109,"user_country":11,"all_state":673,"user_state":3,"all_store":6,"user_store":1},"country":[{"name":"\u0645\u062d\u0633\u0646 \u0637\u0647\u0645\u0627\u0633\u0628\u06cc","family":"","avatar":null,"username":null,"score":"555555","is_user":0,"rank":1},{"name":"\u0632\u0647\u0631\u0627 \u0645\u062c\u0631\u062f \u0646\u0645\u06a9 \u0631\u0648\u062f\u0628\u0627\u0631","family":"","avatar":null,"username":null,"score":"10000","is_user":0,"rank":2},{"name":"\u0631\u0636\u0627 ","family":"\u0639\u0644\u06cc\u0632\u0627\u062f\u0647 \u0627\u0646\u062a\u0638\u0627\u0631","avatar":null,"username":null,"score":"9999","is_user":0,"rank":3},{"name":"\u0627\u0645\u06cc\u0646 \u067e\u0648\u0631\u0631\u0634\u062a \u0622\u0628\u0627\u062f\u06cc","family":"","avatar":null,"username":null,"score":"6666","is_user":0,"rank":4},{"name":"\u0645\u0631\u06cc\u0645 \u062d\u062c\u062a \u0646\u0698\u0627\u062f","family":"","avatar":null,"username":null,"score":"2222","is_user":0,"rank":5},{"name":"\u0633\u0639\u06cc\u062f \u0631\u0633\u062a\u0645\u06cc\u0627\u0646 \u062a\u0648\u06cc\u0647 \u062f\u0631\u0648\u0627\u0631","family":"","avatar":null,"username":null,"score":"888","is_user":0,"rank":6},{"name":"\u0633\u0644\u0637\u0627\u0646\u0639\u0644\u06cc ","family":"\u0627\u0633\u0645\u0627\u0639\u06cc\u0644\u06cc \u0627\u0642\u062f\u0645","avatar":null,"username":null,"score":"777","is_user":0,"rank":7},{"name":"\u0639\u0628\u062f\u0627\u0644\u0647 \u062c\u0648\u062f\u06cc","family":"","avatar":null,"username":null,"score":"590","is_user":0,"rank":8},{"name":"","family":"","avatar":null,"username":null,"score":"555","is_user":0,"rank":9},{"name":"\u0627\u062d\u0633\u0627\u0646","family":"\u0646\u0635\u06cc\u0631\u06cc","avatar":"http:\/\/samyar.rasgames.ir\/v1\/images\/avatar\/61-1501657178.png","username":null,"score":"336.3","is_user":1,"rank":11}],"state":[{"name":"\u0627\u0645\u06cc\u0646 \u067e\u0648\u0631\u0631\u0634\u062a \u0622\u0628\u0627\u062f\u06cc","family":"","avatar":null,"username":null,"score":"6666","is_user":0,"rank":1},{"name":"","family":"","avatar":null,"username":null,"score":"555","is_user":0,"rank":2},{"name":"\u0627\u062d\u0633\u0627\u0646","family":"\u0646\u0635\u06cc\u0631\u06cc","avatar":"http:\/\/samyar.rasgames.ir\/v1\/images\/avatar\/61-1501657178.png","username":null,"score":"336.3","is_user":1,"rank":3},{"name":"","family":"","avatar":null,"username":null,"score":"0","is_user":0,"rank":4},{"name":"\u0645\u0631\u062a\u0636\u06cc \u0639\u0638\u0645\u06cc \u0632\u0631\u0647 \u0646\u0627\u0633","family":"","avatar":null,"username":null,"score":"0","is_user":0,"rank":5},{"name":"\u0639\u0644\u06cc\u0631\u0636\u0627 ","family":"\u0634\u06cc\u0631\u0627\u0632\u06cc","avatar":null,"username":null,"score":"0","is_user":0,"rank":6},{"name":"\u0645\u0633\u0639\u0648\u062f \u0641\u0636\u0644\u06cc","family":"","avatar":null,"username":null,"score":"0","is_user":0,"rank":7},{"name":"","family":"","avatar":null,"username":null,"score":"0","is_user":0,"rank":8},{"name":"\u0642\u0627\u062f\u0631 \u062c\u0639\u0641\u0631\u067e\u0648\u0631\u0644\u0627\u0647\u0631\u0648\u062f","family":"","avatar":null,"username":null,"score":"0","is_user":0,"rank":9},{"name":"\u0645\u062c\u06cc\u062f \u0622\u0642\u0627 \u0628\u0627\u0628\u0627\u0626\u06cc \u062c\u0648\u0634\u0642\u0627\u0646\u06cc","family":"","avatar":null,"username":null,"score":"0","is_user":0,"rank":10}],"store":[{"name":"\u0627\u062d\u0633\u0627\u0646","family":"\u0646\u0635\u06cc\u0631\u06cc","avatar":"http:\/\/samyar.rasgames.ir\/v1\/images\/avatar\/61-1501657178.png","username":null,"score":"336.3","is_user":1,"rank":1},{"name":"\u0633\u0639\u06cc\u062f \u0627\u062d\u0645\u062f\u06cc","family":"","avatar":null,"username":null,"score":"0","is_user":0,"rank":2},{"name":"\u0639\u0644\u06cc ","family":"\u0646\u0635\u0631\u0627\u0644\u0647 \u0632\u0627\u062f\u0647","avatar":null,"username":null,"score":"0","is_user":0,"rank":3},{"name":"\u0633\u0647\u0631\u0627\u0628 \u0633\u0627\u0644\u06a9 \u0627\u0631\u062f\u0633\u062a\u0627\u0646\u06cc","family":"","avatar":null,"username":null,"score":"0","is_user":0,"rank":4},{"name":"\u0645\u062d\u0645\u0648\u062f \u062b\u0627\u0628\u062a\u06cc \u06a9\u06cc\u0627","family":"","avatar":null,"username":null,"score":"0","is_user":0,"rank":5},{"name":"\u062c\u0645\u0627\u0644 \u0631\u062d\u0645\u0627\u0646\u06cc","family":"","avatar":null,"username":null,"score":"0","is_user":0,"rank":6}]}';
    pageSeventeen.objSeventeen = pageSeventeen.parser(data);
    //alert(this.country_name)
    pageSeventeen.create("country");
    /*if( pageSeventeen.page ==1){
     pageSeventeen.page++;
     }
     
     pageSeventeen.SeventeenObj = pageSeventeen.parser(data);
     pageSeventeen.create();*/

}
pageSeventeen.parser = function (data) {
    mylog.log(data);
    var obj = jQuery.parseJSON(data);
    pageSeventeen.country_name = [];
    pageSeventeen.country_family = [];
    pageSeventeen.country_avatar = [];
    pageSeventeen.country_username = [];
    pageSeventeen.country_score = [];
    pageSeventeen.country_is_user = [];
    pageSeventeen.country_rank = [];
    pageSeventeen.state_name = [];
    pageSeventeen.state_family = [];
    pageSeventeen.state_avatar = [];
    pageSeventeen.state_username = [];
    pageSeventeen.state_score = [];
    pageSeventeen.state_is_user = [];
    pageSeventeen.state_rank = [];
    pageSeventeen.store_name = [];
    pageSeventeen.store_family = [];
    pageSeventeen.store_avatar = [];
    pageSeventeen.store_username = [];
    pageSeventeen.store_score = [];
    pageSeventeen.store_is_user = [];
    pageSeventeen.store_rank = [];
    if (obj['status'] == "ok") {

        this.detail = obj['detail'];
        this.country = obj['country'];
        this.state = obj['state'];
        this.store = obj['store'];

        pageSeventeen.detail_all_country = this.detail['all_country'];
        pageSeventeen.detail_user_country = this.detail['user_country'];
        pageSeventeen.detail_all_state = this.detail['all_state'];
        pageSeventeen.detail_user_state = this.detail['user_state'];
        pageSeventeen.detail_all_store = this.detail['all_store'];
        pageSeventeen.detail_user_store = this.detail['user_store'];

        for (var i = 0; i < this.country.length; i++) {
            //alert(this.country[i]['name'])
            pageSeventeen.country_name[i] = this.country[i]['name'];
            pageSeventeen.country_family[i] = this.country[i]['family'];
            pageSeventeen.country_avatar[i] = this.country[i]['avatar'];
            pageSeventeen.country_username[i] = this.country[i]['username'];
            pageSeventeen.country_score[i] = "امتیاز :" + this.country[i]['score'];
            pageSeventeen.country_is_user[i] = this.country[i]['is_user'];
            pageSeventeen.country_rank[i] = this.country[i]['rank'];
        }
        for (var i = 0; i < this.state.length; i++) {

            pageSeventeen.state_name[i] = this.state[i]['name'];
            pageSeventeen.state_family[i] = this.state[i]['family'];
            pageSeventeen.state_avatar[i] = this.state[i]['avatar'];
            pageSeventeen.state_username[i] = this.state[i]['username'];
            pageSeventeen.state_score[i] = "امتیاز :" + this.state[i]['score'];
            pageSeventeen.state_is_user[i] = this.state[i]['is_user'];
            pageSeventeen.state_rank[i] = this.state[i]['rank'];
        }
        for (var i = 0; i < this.store.length; i++) {

            pageSeventeen.store_name[i] = this.store[i]['name'];
            pageSeventeen.store_family[i] = this.store[i]['family'];
            pageSeventeen.store_avatar[i] = this.store[i]['avatar'];
            pageSeventeen.store_username[i] = this.store[i]['username'];
            pageSeventeen.store_score[i] = "امتیاز :" + this.store[i]['score'];
            pageSeventeen.store_is_user[i] = this.store[i]['is_user'];
            pageSeventeen.store_rank[i] = this.store[i]['rank'];
        }
        return {"detail": this.detail, "country": this.country, "state": this.state, "store": this.store};

    }


};
pageSeventeen.create = function (str) {

    var showData = {
        title: eval("pageSeventeen." + str + "_name"),
        rank: eval("pageSeventeen." + str + "_rank"),
        image: eval("pageSeventeen." + str + "_avatar"),
        score: eval("pageSeventeen." + str + "_score")
    }

    new contentList({
        data: showData,
        itemClass: "Citem",
        itemHeight: ((200 * window.innerHeight) / 1920) + "px",
        appendItem: ".Pchild_17",
        sideClass: "sideList_17",
        imgClass: "CitemImg_17",
        txtClass: "CitemTxt",
        onclick: "pageSeventeen.rateClick(id)",
        type: 4,
        endScrollFun: "pageSeventeen.rateLazyLoad()",
        scrollElClass: 'Pparent_17',
    });


    var self =  $("#seventeen-list-" + eval("pageSeventeen." + str + "_is_user").indexOf(1))

    self.addClass("isUser_total_17");
    self.children(".CElIn").children(".CitemTxt").addClass("is_user_colorTxt")
    self.children(".sideList_17").addClass("isUser_side_17 is_user_colorTxt");


    var fingerImg = $("<img>");
    fingerImg.addClass("isUserListImg");
    fingerImg.attr('src', 'images/rate/hand.png');
    self.children(".CElIn").append(fingerImg)


    // this.list = new list({
    //     title: eval("pageSeventeen." + str + "_name"),
    //     rank: eval("pageSeventeen." + str + "_rank"),
    //     height: handelPage.height * 0.072,
    //     baseId: "seventeen-list-",
    //     className: "seventeen-list",
    //     appendEl: "#seventeen-content",
    //     model: "D",
    //     img: eval("pageSeventeen." + str + "_avatar"),
    //     score: eval("pageSeventeen." + str + "_score")
    // });
    //
    // $("#seventeen-list-" + eval("pageSeventeen." + str + "_is_user").indexOf(1)).addClass("seventeen-isuser");

};

pageSeventeen.return = function () {

    menu.titleBar("images/24.png", "رتبه بندی");
    pageSeventeen.clearPage()
    // $(".seventeen-tab").removeClass("seventeen-tab-active");
    // $("#seventeen-1").addClass("seventeen-tab-active");

};


pageSeventeen.tabClick = function (id) {

    // $(".seventeen-tab").removeClass("seventeen-tab-active");
    // $("#" + id).addClass("seventeen-tab-active");
    // $(".inner .content").empty();
    for (var i = 0; i < pageSeventeen.tabsTitle.length; i++) {
        $("#rateTabItem_" + i).removeClass("colorHideHover")
    }
    $("#" + id).addClass("colorHideHover");
    $(".Pchild_17").empty();
    switch (id) {
        case "rateTabItem_0":
            pageSeventeen.create("country");
            break;
        case "rateTabItem_1":
            pageSeventeen.create("state");
            break;
        case "rateTabItem_2":
            pageSeventeen.create("store");
            break;

        default:

            break;
    }
}
pageSeventeen.drawTabs = function () {
    new tabs({
        obj: pageSeventeen.tabsTitle,
        appendEl: ".head_rate_17",
        className: "rate-item-17",
        baseId: "rateTabItem_",
        onclick: "pageSeventeen.tabClick (id)",
        hover: "hoverTab_17",
        hoverShow: "colorHideHover",
        type: 1,
        imgClass: "tabImg_17"
    })
}
pageSeventeen.calcPos = function () {
    $('.pageTTParent_17').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    $('.head_rate_17').attr("style", "height:" + ((200 * handelPage.height) / 1920) + "px !important")
}

pageSeventeen.clearPage = function () {
    $(".head_rate_17").empty();
    $(".Pchild_17").empty();
}
pageSeventeen.rateClick = function (id) {

}
pageSeventeen.rateLazyLoad = function () {

}










