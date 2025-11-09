pageEighteen = {};

pageEighteen.init = function () {
    pageEighteen.reset();
    pageEighteen.calcPos();

    menu.titleBar("images/21.png", "لیست محصولات");
    var data = {};

    if ((window.JSInterface) && (parseFloat(managementRel.versionBuild()) >= 4.4)) {
        $('.main-sell-div').css({"bottom": '23px'});
    }
    pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/productlist', pageEighteen.manage, data);

};
pageEighteen.manage = function (data2) {
    pageEighteen.parse(data2);
    pageEighteen.create();

};
pageEighteen.parse = function (data2) {
    var obj = jQuery.parseJSON(data2);
    if (obj['success'] == true) {
        $('.main-sell-div').removeClass("hide-keyboard-32");
        pageEighteen.data = obj['data'];
        for (var i = 0; i < obj['data'].length; i++) {

            pageEighteen.title[i] = obj['data'][i]['name'];
            pageEighteen.id[i] = obj['data'][i]['id'];
        }
        // console.log('obj e safe 28->' + JSON.stringify(pageTwentyEight.obj));
    } else {
        if (obj['data']) {
            managementRel.tost(obj['data']['msg']);
        } else if (obj['error']) {
            managementRel.tost("اختلال در ارتباط با اینترنت");
        }
        $('.main-sell-div').addClass("hide-keyboard-32");
    }

};
pageEighteen.reset = function () {
    pageEighteen.id = [];
    pageEighteen.title = [];
    pageEighteen.data = [];
    pageEighteen.list = "";
    pageEighteen.selectedTitle = "";
    pageEighteen.selectedmodel = "";
    $(".list-holder-18").empty();
};
pageEighteen.create = function () {

    var data = {
        title: this.title,
        id: this.id,

    }

    this.list = new sellList({
        obj: data,
        type:1,
        itemHeight: ((200 * window.innerHeight) / 1920) + "px",
        itemClass: 'sellsItem_18',
        baseId: "product-click-18-",
        onclick: "pageEighteen.ClickItem(id)",
        appendItem: ".Pchild_18",
        innerClass: "CElIn",
        sideClass: "sideList_18",
        txtClass: "CitemTxt",
        lineClass: "lineList_18",
        radioID: "product-radio-18-",
        radioClass: "radioClass_18",
        endScrollFun:"pageEighteen.lazyLoad()",
        scrollElClass: 'Pparent_18',

    })

    // $(".sell-history").css({
    //     "height": handelPage.height * (0.067) + 'px',
    //     'line-height': handelPage.height * (0.067) + 'px'
    // });

    // this.list = new list({
    //     title: this.title,
    //     id: this.id,
    //     height: handelPage.height * 0.0625,
    //     baseId: "product-item-18-",
    //     className: "product-item-18 waves-effect waves-light",
    //     appendEl: ".list-holder-18",
    //     model: "E",
    //     onclick: "pageEighteen.ClickItem(id)",
    //     onclickL: "pageEighteen.ClickItem(",
    //     baseClass: "product-item-18",
    //     classLeft: "product-left-18",
    //     classRight: "product-right-18",
    //     classTitle: "product-title-18",
    //     rightID: "product-click-18-",
    //     radioID: "product-radio-18-",
    // });

    // var pageHeight = ((((this.title.length * (0.086)) + (0.077)) * handelPage.height) + 20);
    // //console.log("page hight=>" + pageHeight);
    // $(".list-holder-18").css({"height": pageHeight + 'px', 'min-height': handelPage.height + 'px'});
    // pageTwentyFour.handleHeight('.list-holder-18', 24);
};
pageEighteen.return = function () {


};


pageEighteen.ClickItem = function (idm) {
    //alert(idm);

    // console.log('idm 18=?' + idm.indexOf("product-click-18-"));

    if (idm.indexOf("product-click-18-") == 0) {
        // alert("too 0");

        var radioelem = $("#" + idm).children(":first");
        // console.log(($("#" + idm).children(":first")).attr("id"));

        if (radioelem.is(':checked')) {
            // alert("it's checked");
            // radioelem.attr("checked", false);
        } else {
            //   alert("not checked");
            radioelem.attr("checked", true);
        }

        pageEighteen.selectedmodel = idm.replace("product-click-18-", "", idm);
        var data = {product: pageEighteen.selectedmodel};
        pageEighteen.selectedTitle = $("#" + idm).attr("title");

        if(pageEighteen.selectedTitle===undefined){
            pageEighteen.selectedTitle=pageThirtyThree.eighteenTitle
        }

        handelPage.managerEnter(30);
        window.scrollTo(0, 0);
        // console.log(data  )
        pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/pmodellist', pageThirty.manage, data);
    } else {
        //  alert("too "+idm.indexOf("product-click-18-"));
    }


};
pageEighteen.f = function (data) {

    //handelPage.managerEnter(7);
    //  console.log('data=>' + data);
};
pageEighteen.sellHistory = function () {
    handelPage.managerEnter(31);
    var data = {};
    pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/selllist', pageThirtyOne.manage, data);
};
pageEighteen.return = function () {
    this.reset();
};

pageEighteen.calcPos = function () {
    $('.pageTTParent_18').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    $("#fixBtn_18").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + "");
    // $(".pic-header-18").css({"height": handelPage.height * (0.23) + 'px'});
}
pageEighteen.lazyLoad = function () {

}
