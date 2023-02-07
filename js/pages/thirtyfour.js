var pageThrtyFour = {
    imgs: ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"],
    title: ["images/1.png", "images/2.png", "images/3.png", "images/4.png"],
    slide: "", slidId: [], slidTxt: [], slidPic: [], slidTime: [], slidType: [], slidTypeId: [],
    newsId: [], newsTxt: [], newsLongTxt: [], newsPic: [], newsTime: [], newsType: [], newsTypeId: [],
    listObj:''
};
pageThrtyFour.init = function () {
    $('.pageTTParent_34').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    $('.Pparent_34').attr("style", 'height:' + ((1150 * window.innerHeight) / 1280) + 'px');
    /* if(pageOne.slide._pusse())
     pageOne.slide._pusse();*/
    // alert("2 init");
    menu.titleBar("", "");
    $('#thirtyfour-modal-1').modal({dismissible: false});

    // alert("2-1");
    menu.userCreat();


    // alert("2-2");


    var data = {
        userID: managementRel.getCookie("id"),
        playerID : managementRel.getPalayId ()
    };

    //   alert("2 sare ajax");
    // console.log(managementRel.keyOld());
    if((window.JSInterface)&&(parseFloat(managementRel.versionBuild())<4.4)){
        getKey(managementRel.keyOld());
    }

    //  alert("sare ajax e slide");
    ajax("POST", dir, pageThrtyFour.resulNews, "act=slide&type=news" + setParamsAjax(data));




}
pageThrtyFour.resulNews = function (data) {

     // alert("data=>"+data);

    var dataAjax = {
        userID: managementRel.getCookie("id")
    }
    var obj = jQuery.parseJSON(data);
    pageThrtyFour.drewPage(obj);
    pageThrtyFour.parser(data)



    // alert("2 sare forecast");

    //  ajax("POST", urlForecast + 'login', pageThrtyFour.successLogin, "act=contest&type=get" + setParamsAjax(dataAjax));  //ajax e login

    // pageThrtyFour.parser(data);
    // if (pageThrtyFour.slide == "") {
    //     pageThrtyFour.slide = new slideshow({height: handelPage.height * 0.3, indicators: false, id: "slider34", append: "#thirtyfour-slide-box", img: pageThrtyFour.slidPic, title: pageThrtyFour.slidTxt, onclick: "pageThrtyFour.ClickItem(id)", baseId: "thirtyfour-slide-", titleBar: true});
    //     pageThrtyFour.create();
    // } else {
    //
    //     pageThrtyFour.slide._start();
    // }

    // $(window).scroll(function () {
    //
    //     if ($(this).scrollTop() < 50) {
    //
    //         pageThrtyFour.slide._start();
    //
    //     } else {
    //         pageThrtyFour.slide._pusse();
    //     }
    // });

    if(managementRel.isNotif()){
        menu.clickItems('me_16');
        managementRel.notifClick(false);
    }


}
pageThrtyFour.drewPage=function(data){

        new contentList({
            data: data,
            itemClass: "Citem",
            itemHeight: ((250 * window.innerHeight) / 1920) + "px",
            appendItem: ".Pchild_34",
            sideClass: "CitemSide",
            imgClass: "CitemImg",
            txtClass: "CitemTxt",
            onclick: "pageThrtyFour.ClickItem(id)",
            type: 2,
            endScrollFun: "pageSix.productLazyLoad()",
            scrollElClass: 'Pparent_34',
            txtTitleClass:"txtTitleClass_34"
        });

}
pageThrtyFour.successLogin=function(data){
    //console.log("success login"+JSON.stringify(data));
    var obj = jQuery.parseJSON(data);
    if (obj['success'] == "true") {
        pageThrtyFour.token = obj['data']['token'];
        pageThrtyFour.userScore = obj['data']['score'];
        pageThrtyFour.rank = obj['data']['rank'];
        //console.log("token->"+pageThrtyFour.token);
    }else if (obj['success'] == "false") {

    }
};
pageThrtyFour.parser = function (data) {


    var obj = jQuery.parseJSON(data);
    if (obj['status'] == "ok") {

        pageThrtyFour.listObj = obj["lists"];
        for (var i = 0; i < pageThrtyFour.listObj['slide'].length; i++) {
            this.slidId[i] = pageThrtyFour.listObj['slide'][i]['id'];
            this.slidTxt[i] = pageThrtyFour.listObj['slide'][i]['short_txt'];
            this.slidPic[i] = dirImg + pageThrtyFour.listObj['slide'][i]['pic'];
            this.slidTime[i] = pageThrtyFour.listObj['slide'][i]['start_time'];
            this.slidType[i] = pageThrtyFour.listObj['slide'][i]['type'];
            this.slidTypeId[i] = pageThrtyFour.listObj['slide'][i]['type_id'];

        }
        for (var i = 0; i < pageThrtyFour.listObj['news'].length; i++) {
            this.newsId[i] = pageThrtyFour.listObj['news'][i]['id'];
            this.newsTxt[i] = pageThrtyFour.listObj['news'][i]['short_txt'];
            this.newsLongTxt[i] = pageThrtyFour.listObj['news'][i]['long_txt'];
            this.newsPic[i] = dirImg + pageThrtyFour.listObj['news'][i]['pic'];
            this.newsTime[i] = pageThrtyFour.listObj['news'][i]['start_time'];
            this.newsType[i] = pageThrtyFour.listObj['news'][i]['type'];
            this.newsTypeId[i] = pageThrtyFour.listObj['news'][i]['type_id'];

        }
    } else {
        $('#thirtyfour-modal-1 p').html(obj['description2']);
        $('#thirtyfour-modal-1').modal('open');
        //managementRel.tost(obj['description2']);
    }
}
pageThrtyFour.create = function () {
    this.list = new list({title: pageThrtyFour.newsTxt, height: handelPage.height * 0.12, baseId: "thirtyfour-list-", className: "thirtyfour-list-news", appendEl: "#thirtyfour-news-box", model: "A", img: pageThrtyFour.newsPic, time: pageThrtyFour.newsTime,
        onclick: "pageThrtyFour.ClickItem(id)"});

    $("#thirtyfour-news-box").css({"margin-bottom": (handelPage.height * 0.093) + 20 + "px"});

    this.el = $("<div></div>");
    this.el.addClass("thirtyfour-box-btn");
    this.el.attr("style", "height:" + handelPage.height * 0.093 + "px");
    $("#thirtyfour").append(this.el);


    this.elSht111 = $("<a target='_blank' href='https://www.instagram.com/samyar.raikar/'><img style='height: 67%;margin-top: 10px;float: left' src='https://samyar.rasgames.ir/web/images/INSTAGRAM_ICON.png'></a>");
    this.el.append(this.elSht111);

    this.elSh = $("<div></div>");
    this.elSh.addClass("thirtyfour-btn-shop");
    this.elSh.attr("onclick", "javascript:menu.clickItems('me_3_2');pageThree.clicMenu('three-three-tab');")
    this.el.append(this.elSh);

    this.elSht = $("<div></div>");
    this.elSht.addClass("thirtyfour-shop-text");
    this.elSht.html("فروشگاه: " + managementRel.getCookie("store"));
    this.elSh.append(this.elSht);


    this.elSht = $("<img>");
    this.elSht.attr("src", "images/3.png");
    this.elSht.addClass("thirtyfour-shop-icon");
    this.elSh.append(this.elSht);


    $(".thirtyfour-btn-shop").css({"line-height": $(".thirtyfour-btn-shop").height() + "px"})
    if (typeof webkit != "undefined") {
        $(".thirtyfour-box-btn").css({"bottom": "0px"});
    }
}

pageThrtyFour.createLogo = function () {

}
pageThrtyFour.clearPage = function () {
    $(".Pchild_34").empty();
    while (pageThrtyFour.listObj.length>0){
        pageThrtyFour.listObj.pop();
    }
}
pageThrtyFour.return = function () {
    pageThrtyFour.clearPage()
    //$('#thirtyfour-slider').slider('pause');
    // if (typeof webkit != "undefined") {
    //     managementRel.ios({"action": "exit"});
    // }
    // if (window.JSInterface) {
    //     window.JSInterface.returnApp();
    // }

    // menu.hide();
}
pageThrtyFour.ClickItem = function (id) {
    // pageThrtyFour.slide._pusse();
    pageThrtyFour.index = id.split("-");
    pageThrtyFour.slid = pageThrtyFour.index[1];
    pageThrtyFour.index = pageThrtyFour.index[2];


    //type noeshe(0=khabare khali,1=azmoon,2=nazarsanji) , id hamoon type id e
    // console.log(pageThrtyFour.newsType[pageThrtyFour.index])
    switch (pageThrtyFour.newsType[pageThrtyFour.index]) {
        case "0":
            handelPage.managerEnter(4);

            if (pageThrtyFour.slid == "slide") {
                //gaU('send', 'pageview', 'pgNews-slide');
                var data = {
                    userID: managementRel.getCookie("id"),
                    type: pageThrtyFour.slidType[pageThrtyFour.index],
                    id: pageThrtyFour.slidId[pageThrtyFour.index],
                };
            } else {
              //  gaU('send', 'pageview', 'pgNews-detail');
                var data = {
                    userID: managementRel.getCookie("id"),
                    type: pageThrtyFour.newsType[pageThrtyFour.index],
                    id: pageThrtyFour.newsId[pageThrtyFour.index],
                };
            }


            ajax("POST", dir, pageFour.init, "act=slide&type=detail" + setParamsAjax(data));
            break;
        case "1":
            //   gaU('send', 'pageview', 'pg2-exam');
            menu.clickItems("me_10");
            break;
        case "2":
            //   gaU('send', 'pageview', 'pg2-poll');
            menu.clickItems("me_14");
            break;

        default:

            break;
    }

}
pageThrtyFour.productLazyLoad = function () {

}