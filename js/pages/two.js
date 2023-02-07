var pageTwo = {
    imgs: ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"],
    title: ["images/1.png", "images/2.png", "images/3.png", "images/4.png"],
    slide: "", slidId: [], slidTxt: [], slidPic: [], slidTime: [], slidType: [], slidTypeId: [],parsedData:[],
    newsId: [], newsTxt: [], newsLongTxt: [], newsPic: [], newsTime: [], newsType: [], newsTypeId: [],isNews:0,popUpTitle:[],popUpSub:[],popUpPic:[],popUpIds:[],popUpSgroup:[],popUpTypeId:[],popUpNewsID:[]
};
pageTwo.init = function () {
    /* if(pageOne.slide._pusse())
     pageOne.slide._pusse();*/
    // alert("2 init");
    menu.titleBar("", "");
    $('#two-modal-1').modal({dismissible: false});

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
    ajax("POST", dir, pageTwo.resulNews, "act=slide&type=news" + setParamsAjax(data));


    // var data = {
    //     userID: managementRel.getCookie("id"),
    //     cityID: $(obj).val(),
    // };
    // ajax("POST", dir, pageThree.resultStore, "act=store&type=getstore" + setParamsAjax(data));
    //
    //


}

pageTwo.getStore=function(data){
    this.data=jQuery.parseJSON(data)
    if(this.data["success"]=="true"){
        $(".exam-m-up-two").html(this.data["data"]["store_name"])
        $(".exam-m-down-two").html(managementRel.getCookie("city") +  " - "+this.data["data"]["store_adrs"])
        //  console.log("================================",jQuery.parseJSON(data)["data"])
    }

}
pageTwo.onClickPrice=function(image,model){
    pageTwentySix.selectedModel = model
    if(image==1){
        pageTwentySix.logoAdd = "images/products/samsungicon.png"
    }else{
        pageTwentySix.logoAdd = "images/products/sam_icon.png?t=22"
    }

    handelPage.managerEnter(26);
}
pageTwo.onClickData=function(type,id,index){
    pageTwo.slide._pusse();
    handelPage.managerEnter(4);
    //  gaU('send', 'pageview', 'pg2-detail');


    if(index >= pageTwo.parsedData["education_content"].length){
        var data = {
            userID: managementRel.getCookie("id"),
            type: type,
            id: id,
        };
        ajax("POST", dir, pageFour.init, "act=slide&type=detail" + setParamsAjax(data));
    }else{

        var data = {
            userID: managementRel.getCookie("id"),
            id: id
        };
        // gaU('send', 'pageview', 'pg9-detail');
        handelPage.managerEnter(4);
        ajax("POST", dir, pageFour.init, "act=product&type=detail" + setParamsAjax(data));
    }




}
pageTwo.eventInsta= function () {
    gaU('send', 'pageview', 'pg1-instagram');
}
pageTwo.manageSearchItems=function (data) {

    pageTwo.parsedData=jQuery.parseJSON(data)["data"]

    pageTwo.popUpTitle=[]
    pageTwo.popUpSub=[]
    pageTwo.popUpPic=[]
    pageTwo.popUpIds=[]
    pageTwo.popUpSgroup=[]
    $("#popup-two").removeClass("d-none-m")
    $("#popup-two").addClass("d-block-m")
    //   alert(pageTwo.isNews)

    if(pageTwo.isNews==0){
        for (var i = 0; i < pageTwo.parsedData["model"].length; i++) {
            //    console.log("----------------------", this.parsedData["news"][0])
            pageTwo.popUpTitle[i] = pageTwo.parsedData["model"][i]["title"]
            pageTwo.popUpSub[i] ="قیمت : " + pageTwo.parsedData["model"][i]["price"]
            pageTwo.popUpPic[i] = pageTwo.parsedData["model"][i]["thumbnail"]
            pageTwo.popUpIds[i] = pageTwo.parsedData["model"][i]["id"]
            pageTwo.popUpSgroup[i]=pageTwo.parsedData["model"][i]["s_group"]


        }
//         for (var i = 0; i < this.parsedData.length; i++) {
// //popUpTitle:[],popUpSub:[],popUpPic:[],popUpIds:[],
//             //  pageTwo.popUpTitle[i]=this.parsedData[i]["short_desc"]+" مدل "+this.parsedData[i]["title"]
//             pageTwo.popUpTitle[i]=this.parsedData[i]["title"]
//             pageTwo.popUpSub[i]="قیمت : " + this.parsedData[i]["price"]
//             pageTwo.popUpPic[i]=this.parsedData[i]["thumbnail"]
//             pageTwo.popUpIds[i]=this.parsedData[i]["id"]
//             pageTwo.popUpSgroup[i]=this.parsedData[i]["s_group"]
//         }
    }else{

        pageTwo.popUpTypeId=[]
        // pageTwo.popUpNewsID=[]
        for (var i = 0; i < pageTwo.parsedData["education_content"].length; i++) {
            //    console.log("----------------------", this.parsedData["news"][0])
            pageTwo.popUpTitle[i] = pageTwo.parsedData["education_content"][i]["title"]
            pageTwo.popUpSub[i] = pageTwo.parsedData["education_content"][i]["short_desc"]
            pageTwo.popUpPic[i] = pageTwo.parsedData["education_content"][i]["thumbnail"]
            pageTwo.popUpIds[i] = pageTwo.parsedData["education_content"][i]["id"]
            pageTwo.popUpTypeId[i]=pageTwo.parsedData["education_content"][i]["type"]


        }
        for (var i = pageTwo.parsedData["education_content"].length; i < pageTwo.parsedData["news"].length+pageTwo.parsedData["education_content"].length; i++) {
            //    console.log("----------------------", this.parsedData["news"][0])
            pageTwo.popUpTitle[i] = pageTwo.parsedData["news"][i-pageTwo.parsedData["education_content"].length]["title"]
            pageTwo.popUpSub[i] = pageTwo.parsedData["news"][i-pageTwo.parsedData["education_content"].length]["short_desc"]
            pageTwo.popUpPic[i] = pageTwo.parsedData["news"][i-pageTwo.parsedData["education_content"].length]["thumbnail"]
            pageTwo.popUpIds[i] = pageTwo.parsedData["news"][i-pageTwo.parsedData["education_content"].length]["id"]
            pageTwo.popUpTypeId[i]=pageTwo.parsedData["news"][i-pageTwo.parsedData["education_content"].length]["type"]


        }

        // pageSix.productList.push(JSON.parse(data).data[i])
    }
    pageTwo.createItem()

}
pageTwo.searchItems = function (x) {
    if(pageTwo.isNews==0){
        var data = {'q': x, 'product': null};
        pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/search/all', pageTwo.manageSearchItems, data);
    }else{
        var data = {'q': x, 'product': null};
        pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/search/all', pageTwo.manageSearchItems, data);
    }


}
pageTwo.submitInput=function (e) {
    if (e.code === 'Enter') {
        pageTwo.changeInputTwo()
    }

};
pageTwo.changeInputTwo= function () {
    var x = document.getElementById("input-two").value;
    pageTwo.createPopUP(x);
};

pageTwo.createPopUP= function (x) {

    $(".pooup-inner-two").empty()

    if (x.length > 3) {
        pageTwo.addOverlay()
        $(".search-two").addClass("remove-bottomn-border-radios-m")
        pageTwo.searchItems(x)
        gaU('send', 'pageview', 'pg1-search');
        return;
    }

    if (x.length > 0){
        pageTwo.addOverlay()
        pageTwo.createError("تعداد کارکتر ها باید بیش از 3 حرف باشد")
        return;
    }

}
pageTwo.createItem = function () {

    for(var i=0;i<pageTwo.popUpIds.length;i++){

        this.el = $("<div></div>");
        this.el.addClass("popup-item-two");
        if(pageTwo.isNews==0){

            this.el.attr("onclick", 'pageTwo.onClickPrice("'+pageTwo.popUpSgroup[i] + '","' + pageTwo.popUpIds[i] + '")')
        }else{
            this.el.attr("onclick", 'pageTwo.onClickData("'+pageTwo.popUpTypeId[i] + '","' + pageTwo.popUpIds[i] + '","' + i + '")')
        }

        $(".pooup-inner-two").append(this.el);

        this.el1 = $("<div></div>");
        this.el1.addClass("popup-txt-two");
        this.el.append(this.el1);

        this.el21 = $("<div></div>");
        this.el21.addClass("popup-txt-header-two");
        this.el21.html( pageTwo.popUpTitle[i])
        this.el1.append(this.el21);

        this.el22 = $("<div></div>");
        this.el22.addClass("popup-txt-footer-two");
        this.el22.html(pageTwo.popUpSub[i])
        this.el1.append(this.el22);

        this.el3 = $("<img>");
        this.el3.addClass("popup-img-two");
        this.el3.attr("src",pageTwo.popUpPic[i])
        this.el.append(this.el3);




    }
    if( pageTwo.popUpIds.length==0){
        pageTwo.createError("نتیجه ای یافت نشد.")

    }
    // this.el = $("<div></div>");
    // this.el.addClass("two-box-btn");
    // this.el.attr("style", "height:" + handelPage.height * 0.093 + "px");
    // $("#two").append(this.el);

//managementRel.getCookie("store")
}
pageTwo.createError= function (error) {
    this.el = $("<div></div>");
    this.el.html(error)
    this.el.addClass("popup-error-two");
    $(".pooup-inner-two").append(this.el);
}
pageTwo.clickFilter= function (status) {
    if(status==0){
        gaU('send', 'pageview', 'pg1-filter-data');
        $("#price-two").removeClass("back-not-selected-two")
        $("#price-two div").removeClass("color-not-selected-two")
        $("#price-two svg").attr("fill","#044182")

        $("#price-two").addClass("back-selected-two")
        $("#price-two div").addClass("color-selected-two")


        $("#data-two").removeClass("price-two")
        $("#data-two div").removeClass("color-selected-two")
        $("#data-two svg").attr("fill","#a9b1b4")


        $("#data-two").addClass("back-not-selected-two")
        $("#data-two div").addClass("color-not-selected-two")


    }else{
        gaU('send', 'pageview', 'pg1-filter-price');
        $("#data-two").removeClass("back-not-selected-two")
        $("#data-two div").removeClass("color-not-selected-two")
        $("#data-two svg").attr("fill","#044182")

        $("#data-two").addClass("back-selected-two")
        $("#data-two div").addClass("color-selected-two")


        $("#price-two").removeClass("price-two")
        $("#price-two div").removeClass("color-selected-two")
        $("#price-two svg").attr("fill","#a9b1b4")


        $("#price-two").addClass("back-not-selected-two")
        $("#price-two div").addClass("color-not-selected-two")
    }
    pageTwo.isNews=status
    pageTwo.changeInputTwo()
}
pageTwo.resulNews = function (data) {

    //  alert("data=>"+data);

    var dataAjax = {
        userID: managementRel.getCookie("id")
    }
    // alert("2 sare forecast");

    ajax("POST", urlForecast + 'login', pageTwo.successLogin, "act=contest&type=get" + setParamsAjax(dataAjax));  //ajax e login

    pageTwo.parser(data);
    if (pageTwo.slide == "") {
        pageTwo.slide = new slideshow({height: handelPage.height * 0.3, indicators: false, id: "slider2", append: "#two-slide-box", img: pageTwo.slidPic, title: pageTwo.slidTxt, onclick: "pageTwo.ClickItem(id)", baseId: "two-slide-", titleBar: true});
        pageTwo.create();
    } else {

        pageTwo.slide._start();
    }

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {

            pageTwo.slide._start();

        } else {
            pageTwo.slide._pusse();
        }
    });

    // if(managementRel.isNotif()){
    // 	menu.clickItems('me_16');
    // 	managementRel.notifClick(false);
    // }


}
pageTwo.successLogin=function(data){
    //console.log("success login"+JSON.stringify(data));
    var obj = jQuery.parseJSON(data);
    if (obj['success'] == "true") {
        pageTwo.token = obj['data']['token'];
        pageTwo.userScore = obj['data']['score'];
        pageTwo.rank = obj['data']['rank'];
        pageTwentyFour.ajaxForecast("POST", urlForecast + 'user/store', pageTwo.getStore, {});
        //console.log("token->"+pageTwo.token);
    }else if (obj['success'] == "false") {

    }

};
pageTwo.parser = function (data) {
    mylog.log(data);

    var obj = jQuery.parseJSON(data);
    if (obj['status'] == "ok") {
        this.lists = obj["lists"];
        for (var i = 0; i < this.lists['slide'].length; i++) {
            this.slidId[i] = this.lists['slide'][i]['id'];
            this.slidTxt[i] = this.lists['slide'][i]['short_txt'];
            this.slidPic[i] = dirImg + this.lists['slide'][i]['pic'];
            this.slidTime[i] = this.lists['slide'][i]['start_time'];
            this.slidType[i] = this.lists['slide'][i]['type'];
            this.slidTypeId[i] = this.lists['slide'][i]['type_id'];

        }
        for (var i = 0; i < this.lists['news'].length; i++) {
            this.newsId[i] = this.lists['news'][i]['id'];
            this.newsTxt[i] = this.lists['news'][i]['short_txt'];
            this.newsLongTxt[i] = this.lists['news'][i]['long_txt'];
            this.newsPic[i] = dirImg + this.lists['news'][i]['pic'];
            this.newsTime[i] = this.lists['news'][i]['start_time'];
            this.newsType[i] = this.lists['news'][i]['type'];
            this.newsTypeId[i] = this.lists['news'][i]['type_id'];

        }
    } else {
        $('#two-modal-1 p').html(obj['description2']);
        $('#two-modal-1').modal('open');
        //managementRel.tost(obj['description2']);
    }
}
pageTwo.create = function () {
    for (var i = 0; i < 3; i++) {
        if(this.newsPic[i]!=null && this.newsPic[i]!="null" ){
            $("#news-img-"+i+"-two").attr("src", this.newsPic[i])
        }

        $("#news-h-"+i+"-two").html(this.newsTxt[i].substr(0, 30))
        $("#news-f-"+i+"-two").html( this.newsTime[i])

    }
    this.list = new list({title: pageTwo.newsTxt, height: handelPage.height * 0.12, baseId: "two-list-", className: "two-list-news", appendEl: "#two-news-box", model: "A", img: pageTwo.newsPic, time: pageTwo.newsTime,
        onclick: "pageTwo.ClickItem(id)"});
    //
    // $("#two-news-box").css({"margin-bottom": (handelPage.height * 0.093) + 20 + "px"});
    //
    // this.el = $("<div></div>");
    // this.el.addClass("two-box-btn");
    // this.el.attr("style", "height:" + handelPage.height * 0.093 + "px");
    // $("#two").append(this.el);
    //
    //
    // this.elSht111 = $("<a target='_blank' href='https://www.instagram.com/samyar.raikar/'><img style='height: 67%;margin-top: 10px;float: left' src='https://samyar.rasgames.ir/web/images/INSTAGRAM_ICON.png'></a>");
    // this.el.append(this.elSht111);
    //
    // this.elSh = $("<div></div>");
    // this.elSh.addClass("two-btn-shop");
    // this.elSh.attr("onclick", "javascript:menu.clickItems('me_3_2');pageThree.clicMenu('three-three-tab');")
    // this.el.append(this.elSh);
    //
    // this.elSht = $("<div></div>");
    // this.elSht.addClass("two-shop-text");
    // this.elSht.html("فروشگاه: " + managementRel.getCookie("store"));
    // this.elSh.append(this.elSht);
    //
    //
    // this.elSht = $("<img>");
    // this.elSht.attr("src", "images/3.png");
    // this.elSht.addClass("two-shop-icon");
    // this.elSh.append(this.elSht);
    //
    //
    // $(".two-btn-shop").css({"line-height": $(".two-btn-shop").height() + "px"})
    // if (typeof webkit != "undefined") {
    //     $(".two-box-btn").css({"bottom": "0px"});
    // }
}
pageTwo.addOverlay=function (){
    $(".back-overlay-two").removeClass("d-none-m")
    $(".back-overlay-two").addClass("d-block-m")
}
pageTwo.removeOverlay=function (){
    $(".back-overlay-two").addClass("d-none-m")
    $(".back-overlay-two").removeClass("d-block-m")
    $("#popup-two").addClass("d-none-m")
    $("#popup-two").removeClass("d-block-m")
    $(".search-two").removeClass("remove-bottomn-border-radios-m")
}
pageTwo.overlayClick = function (){

    //  console.log(e.target)
//alert(e.target.className)
//     if(e.target.className!="fa-star far" && e.target.className!="fa-star fas") {
//     }
}
pageTwo.createLogo = function () {

}
pageTwo.return = function () {
    managementRel.closeApp()
    // if (typeof webkit != "undefined") {
    //     managementRel.ios({"action": "exit"});
    // }
    // if (window.JSInterface) {
    //     window.JSInterface.returnApp();
    // }

    menu.hide();
}
pageTwo.ClickItem = function (id) {
    pageTwo.slide._pusse();
    pageTwo.index = id.split("-");
    pageTwo.slid = pageTwo.index[1];
    pageTwo.index = pageTwo.index[2];


    //type noeshe(0=khabare khali,1=azmoon,2=nazarsanji) , id hamoon type id e
    mylog.log(pageTwo.newsType[pageTwo.index])
    switch (pageTwo.newsType[pageTwo.index]) {
        case "0":
            handelPage.managerEnter(4);

            if (pageTwo.slid == "slide") {
                gaU('send', 'pageview', 'pg1-slide');
                //      gaU('send', 'pageview', 'pg2-slide');
                var data = {
                    userID: managementRel.getCookie("id"),
                    type: pageTwo.slidType[pageTwo.index],
                    id: pageTwo.slidId[pageTwo.index],
                };
            } else {
                gaU('send', 'pageview', 'pg1-detail');
                //   gaU('send', 'pageview', 'pg2-detail');
                var data = {
                    userID: managementRel.getCookie("id"),
                    type: pageTwo.newsType[pageTwo.index],
                    id: pageTwo.newsId[pageTwo.index],
                };
            }


            ajax("POST", dir, pageFour.init, "act=slide&type=detail" + setParamsAjax(data));
            break;
        case "1":
            //    gaU('send', 'pageview', 'pg2-exam');
            menu.clickItems("me_10");
            break;
        case "2":
            //  gaU('send', 'pageview', 'pg2-poll');
            menu.clickItems("me_14");
            break;

        default:

            break;
    }




}

