pageThirty = {
    canCallNextLink: true,
    canSubmitProduct: true
};

pageThirty.init = function () {
    pageThirty.reset();
    // pageThirty.drawSearch();
    pageThirty.calcPos()
    menu.titleBar("images/21.png", "لیست محصولات/" + pageEighteen.selectedTitle);

};
pageThirty.manage = function (data2) {
    pageThirty.parse(data2);
    pageThirty.create();
    //   $(".list-holder-30").empty();
};
pageThirty.drawSearch = function () {
    $("#filter-text-30").val("");
    $("#search-holder-30").css({
        "height": handelPage.height * (0.067) + 'px',
        'line-height': handelPage.height * (0.067) + 'px',
        'width': handelPage.width + 'px'
    });
    $("#filter-text-30").css({
        "height": handelPage.height * (0.067) + 'px',
        'line-height': handelPage.height * (0.067) + 'px',
        'width': handelPage.width + 'px'
    });
    $("#filter-img-30").css({
        "height": handelPage.height * (0.03) + 'px',
        "margin-right": handelPage.width * (0.107) + 'px',
        "margin-top": handelPage.height * (0.018) + 'px'
    });
    $("#page-holder-30").css({"margin-top": handelPage.height * (0.067) + 'px'});
};
pageThirty.parse = function (data2) {
    var obj = jQuery.parseJSON(data2);


    if (obj['success'] == true) {
        if (obj['meta']['from'] - 1 == 0) {
            pageThirty.reset();
            window.scrollTo(0, 0);
        }
        var start = (obj['meta']['from']) - (1);
        pageThirty.next = obj['links']['next'];
        pageThirty.last = obj['links']['last'];
        pageThirty.from = (obj['meta']['from'] - 1);
        pageThirty.to = (obj['meta']['to']);
        pageThirty.data = obj['data'];
        if (obj['data'].length == 0) {
            managementRel.tost("در حال حاضر محصولی در این دسته وجود ندارد");
        } else {
            for (var i = 0; i < obj['data'].length; i++) {

                pageThirty.title[i + start] = obj['data'][i]['title'];
                pageThirty.id[i + start] = obj['data'][i]['id'];
                pageThirty.score[i + start] = obj['data'][i]['score'];
            }
        }
    } else {
        pageThirty.canSubmitProduct = false;//azmoon sherkat nakarde =>nemitoone mahsool sabt kone
        pageThirty.title[0] = "برای ثبت محصول ابتدا در آزمون شرکت کنید"
        managementRel.tost("برای ثبت محصول ابتدا در آزمون شرکت کنید");
    }

};
pageThirty.reset = function () {
    // window.scrollTo(0, 0);
    // $(".list-holder-30-").empty();


    pageThirty.canCallNextLink = true
    $("#filter-text-30").val("")
    $(".Pchild_30").empty();
    pageThirty.id = [];
    pageThirty.title = [];
    pageThirty.data = [];
    pageThirty.score = [];
    pageThirty.list = "";
    pageThirty.selected = "";
    pageThirty.selectedTitle = "";
    pageThirty.selectedScore = "";
    pageThirty.next = "";
    pageThirty.last = "";
    pageThirty.from = "";
    pageThirty.to = "";
};
pageThirty.create = function () {

    var data = {
        title: pageThirty.title,
        id: pageThirty.id,

    }
    this.list = new sellList({
        obj: data,
        type: 2,
        itemHeight: ((200 * window.innerHeight) / 1920) + "px",
        itemClass: 'sellsItem_18',
        baseId: "product-click-30-",
        onclick: "pageThirty.ClickItem(id)",
        appendItem: ".Pchild_30",
        innerClass: "CElIn",
        sideClass: "sideList_18",
        txtClass: "CitemTxt",
        lineClass: "lineList_18",
        radioID: "product-radio-30-",
        radioClass: "radioClass_18",
        endScrollFun: "pageThirty.endScroll()",
        scrollElClass: 'Pparent_30',

    })
    pageThirty.canCallNextLink = true;

    var pageHeight = ((((pageThirty.title.length * (0.086)) + (0.077)) * handelPage.height) + 20);
    $(".list-holder-30-").css({"height": pageHeight + 'px', 'min-height': handelPage.height + 'px'});
    $(".sell-history").css({
        "height": handelPage.height * (0.067) + 'px',
        'line-height': handelPage.height * (0.067) + 'px'
    });
    // console.log("-pageThirty.title>" + pageThirty.title);
    // if (pageThirty.title.length != 0) {
    //     this.list = new list({
    //         title: pageThirty.title,
    //         id: pageThirty.id,
    //         height: handelPage.height * 0.0625,
    //         baseId: "product-item-30-",
    //         className: "product-item-30 waves-effect waves-light",
    //         appendEl: ".list-holder-30-",
    //         model: "E",
    //         onclick: "pageThirty.ClickItem(id)",
    //         score: pageThirty.score,
    //         onclickL: "pageThirty.ClickItem(",
    //         baseClass: "product-item-30",
    //         classLeft: "product-left-18",
    //         classRight: "product-right-30",
    //         classTitle: "product-title-18",
    //         rightID: "product-click-30-",
    //         radioID: "product-radio-30-",
    //         endScrollFun: "pageThirty.endScroll()",
    //         from: pageThirty.from,
    //         to: pageThirty.to
    //     });
    // }
    //
    // pageTwentyFour.handleHeight('.list-holder-30-', 24);
};
pageThirty.return = function () {
    this.reset();
    window.scrollTo(0, 0);
};


pageThirty.ClickItem = function (idm) {

    // console.log('idm 30=?' + idm);
    if (pageThirty.canSubmitProduct == false) {//azmoon sherkat nakarde =>nemitoone mahsool sabt kone
        return false
    }

    if (idm.indexOf("product-click-30-") == 0) {
        //if (idm.includes("product-click-30-")) {


        var radioelem = $("#" + idm).children(":first");
        //  console.log(($("#" + idm).children(":first")).attr("id"));

        if (radioelem.is(':checked')) {
            // alert("it's checked");
            // radioelem.attr("checked", false);
        } else {
            //   alert("not checked");
            radioelem.attr("checked", true);
        }
        var scrollHeight = $("#bodyContent").height();
        var plus = 0;
        if (window.JSInterface)
            plus = 24;
        //  console.log('$(window).scrollTop()->'+$(window).scrollTop());
        if ($(window).scrollTop() != 0) {
            pageThirty.pos = $(window).scrollTop() + parseInt(plus);
            //   console.log('[pageThirty.pos=>' + pageThirty.pos);
        }

        pageThirty.selected = idm.replace("product-click-30-", "", idm);
        pageThirty.selectedTitle = $("#" + idm).attr("title");
        pageThirty.selectedScore = $("#" + idm).attr("score");

        console.log(pageEighteen.selectedmodel)
        if (pageEighteen.selectedmodel == 18) {//18 = id yakhchal frezer sam baraye promotion az baghie joda shode ke beshe 2ta mahsool sabt kard(06/04/1401)
            handelPage.managerEnter(36);
        } else {
            handelPage.managerEnter(32);
        }

    }
};
pageThirty.endScroll = function () {

    // console.log("pageThirty.endScroll",pageThirty.next ,pageThirty.canCallNextLink)

    if ((pageThirty.next != null && pageThirty.next != "" && pageThirty.canCallNextLink)) {
        // alert(pageEighteen.selectedmodel);
        pageThirty.canCallNextLink = false;
        var data = {product: pageEighteen.selectedmodel};
        if (pageThirty.next.indexOf("search") != "-1") {
            var data = {'q': $("#filter-text-30").val(), 'product': pageEighteen.selectedmodel};
        }
        pageTwentyFour.ajaxForecast("POST", pageThirty.next, pageThirty.manage, data);

    } else {
        // alert("ended");
        //  console.log("ended scroll");

    }
};
pageThirty.searchItem = function () {
    if ((handelPage.page == 30)) {
        var valueSearch = $("#filter-text-30").val();
        if (valueSearch.length >= 3) {

            var data = {'q': valueSearch, 'product': pageEighteen.selectedmodel};
            pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/search', pageThirty.manage, data);
        } else {
            managementRel.tost("برای جستجو بیشتر از 3 کلمه وارد کنید");
        }
    }
};
pageThirty.calcPos = function () {
    $('.pageTTParent_30').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    $(".searchParent_30").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + "");
    $(".fixBtn_30").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + "");
    $(".fixBtn_30").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + "");
}

pageThirty.lazyLoad = function () {

}
