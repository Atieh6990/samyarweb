pageSix = {
    imgCrop: '',
    catList: '',
    contentList: '', catSelectedId: "",
    productList: [],
    filter: "maxprice",
    productId: '',
    canCallSort: true,
    nextLinkProduct: '', productCounterFrom: '', canCallNextLink: true,
    searchWord: '', showSortPopup: false,

};

pageSix.init = function (obj) {
    console.log(obj)
    pageSix.productList = []
    pageSix.clearPage()
    pageSix.calcPos(obj);
    var data = {
        userID: managementRel.getCookie("id"),
        catID: obj.subBrand.products[obj.itemIndex].id
    };
    ajax("POST", dir, pageSix.manage, "act=product&type=cattype" + setParamsAjax(data));
}
pageSix.manage = function (data) {
    pageSix.catList = jQuery.parseJSON(data);
    pageSix.creatCat(pageSix.catList)
}
pageSix.manageContent = function (data) {
    pageSix.contentList = jQuery.parseJSON(data);
    pageSix.creatContent(pageSix.contentList)
}
pageSix.manageProduct = function (data) {
    if (JSON.parse(data).data.length == 0) {
        managementRel.tost("نتیجه ای یافت نشد");
        return false
    }

    if (pageSix.canCallSort == false) {
        pageSix.canCallSort = true
    }

    while (pageSix.productList.length > 0) {
        pageSix.productList.pop()
    }

    for (var i = 0; i < JSON.parse(data).data.length; i++) {
        pageSix.productList.push(JSON.parse(data).data[i])
    }

    pageSix.nextLinkProduct = jQuery.parseJSON(data).links.next;
    pageSix.productCounterFrom = jQuery.parseJSON(data).meta.from;
    pageSix.canCallNextLink = true;

    if (pageSix.showSortPopup == true) {
        pageSix.hideSort();
    }
    pageSix.creatProducts(pageSix.productList)
}


pageSix.parser = function (data) {
    mylog.log('data->' + data);
    pageSix.name = [];
    pageSix.id = [];
    pageSix.image = [];
    pageSix.count = [];
    pageSix.file = [];
    pageSix.status = [];
    pageSix.positionFrom = 0;
    pageSix.positionTo = 0;
    pageSix.isMore = 0;
    pageSix.is_finished = [];
    pageSix.long_txt = "";
    pageSix.send_status = 0;
    pageSix.duration = [];//َATIEH


    var obj = jQuery.parseJSON(data);
    mylog.log('status->' + obj['status']);
    if (obj['status'] == "ok") {

        this.detail = obj['detail'];

        if (obj['positionFrom'])
            this.positionFrom = obj['positionFrom'];
        if (obj['positionTo'])
            this.positionTo = obj['positionTo'];
        if (obj['isMore'])
            this.isMore = obj['isMore'];

        for (var i = 0; i < this.detail.length; i++) {

            if (this.detail[i]['id'])
                pageSix.id[i] = this.detail[i]['id'];
            if (this.detail[i]['name'])
                pageSix.name[i] = this.detail[i]['name'];
            if (this.detail[i]['image'])
                pageSix.image[i] = dirImg + this.detail[i]['image'];
            if (this.detail[i]['count'])
                pageSix.count[i] = this.detail[i]['count'];
            if (this.detail[i]['file'])
                pageSix.file[i] = this.detail[i]['file'];
            if (this.detail[i]['status'] || this.detail[i]['status'] == 0)
                pageSix.status[i] = this.detail[i]['status'];
            if (this.detail[i]['is_finished'] || this.detail[i]['is_finished'] == 0)
                pageSix.is_finished[i] = this.detail[i]['is_finished'];
            if (this.detail[i]['duration'])//َATIEH
                pageSix.duration[i] = this.detail[i]['duration'];

        }
        if (this.detail['long_txt'])
            pageSix.long_txt = this.detail['long_txt'];
        if (this.detail['send_status'] || this.detail['send_status'] == 0)
            pageSix.send_status = this.detail['send_status'];

        return {
            "id": pageSix.id,
            "name": pageSix.name,
            "image": pageSix.image,
            "count": pageSix.count,
            "file": pageSix.file,
            "status": pageSix.status,
            "is_finished": pageSix.is_finished,
            "long_txt": pageSix.long_txt,
            "send_status": pageSix.send_status,
            "positionFrom": pageSix.positionFrom,
            "positionTo": pageSix.positionTo,
            isMore: pageSix.isMore,
            "duration": pageSix.duration //َATIEH
        };

    } else {
        mylog.log('nooo');
        managementRel.tost(obj['description2']);
    }


};

pageSix.create = function () {
};
pageSix.return = function () {
    $("#inputSearch").val("");
};
pageSix.ClickCat = function (id) {
    var index = id.split("_");
    for (var i = 0; i < pageSix.catList.detail.length; i++) {
        $("#HEl_" + i).removeClass("HitemHover")
    }
    $("#" + id).addClass("HitemHover");
    pageSix.contentList = "";
    $(".Pchild_6").empty();
    pageSix.catSelectedId = pageSix.catList.detail[index[1]].id;

    if (pageSix.catSelectedId == -1) {
        pageSix.showProduct();
        return false
    }

    $(".Pparent_6").removeClass("hideContent");
    $(".Pparent_6").addClass("showContent");

    $(".productParent_6").removeClass("showContent");
    $(".productParent_6").removeClass("showContent");

    $(".searchParent_6").addClass("hideContent");
    $(".productParent_6").addClass("hideContent");

    var data = {
        userID: managementRel.getCookie("id"),
        catID: pageSix.catList.catID,
        typeID: pageSix.catList.detail[index[1]].id
    };
    ajax("POST", dir, pageSix.manageContent, "act=product&type=catlist" + setParamsAjax(data));
};
pageSix.clickContent = function (id) {
    var index = id.split("_");
    // console.log(pageSix.catSelectedId, pageSix.contentList.detail[index[1]].name, dirVid, pageSix.contentList.detail[index[1]].file)
    if (pageSix.catSelectedId == 1) {//video
        if (typeof pageSix.contentList.detail[index[1]].file != "undefined") {
            // managementRel.playVideo(dirVid + pageSix.contentList.detail[index[1]].file, pageSix.contentList.detail[index[1]].name);
            var data = {
                title: pageSix.contentList.detail[index[1]].name,
                fileUrl: dirVid + pageSix.contentList.detail[index[1]].file,
            }
            thirtyFive.fillParams(data)
            handelPage.managerEnter(35);

        } else {
            managementRel.tost("فایل موجود نیست");
        }
        return false
    }
    if (pageSix.catSelectedId == -1) {//product

        return false
    }
    var data = {
        userID: managementRel.getCookie("id"),
        id: pageSix.contentList.detail[index[1]].id
    };
    // gaU('send', 'pageview', 'pg9-detail');
    handelPage.managerEnter(4);
    ajax("POST", dir, pageFour.init, "act=product&type=detail" + setParamsAjax(data));

}

pageSix.showProduct = function () {

    pageSix.productId = pageSix.catList.catID;
    // pageSix.productList = "";
    pageSix.nextLinkProduct = ""
    $(".productChild_6").empty();

    $(".Pparent_6").addClass("hideContent");
    $(".Pparent_6").removeClass("showContent");

    $(".searchParent_6").removeClass("hideContent");
    $(".productParent_6").removeClass("hideContent");

    $(".searchParent_6").addClass("showContent")
    $(".productParent_6").addClass("showContent")

    pageSix.getModelList(urlForecast + 'v1/modellist', pageSix.productId, pageSix.filter)
}

pageSix.getModelList = function (url, id, filter) {
    var data = {'product': id, 'filter': filter};
    pageTwentyFour.ajaxForecast("POST", url, pageSix.manageProduct, data);
}


pageSix.clickProduct = function (id) {
    var index = id.split("_");
    pageTwentySix.selectedModel = index[1]
    pageTwentySix.logoAdd = $(".titleImgLogo_6").attr("src")
    handelPage.managerEnter(26);
}

pageSix.calcPos = function (obj) {


    $('.Hparent_6').attr("style", 'height:' + ((100 * window.innerHeight) / 1920) + 'px');
    // $(".titleImg_6").attr("src", "images/products/macro.png")
    $(".titleImg_6").attr("src", obj.subBrand.products[obj.itemIndex].image)
    $(".titleImgLogo_6").attr("src", obj.icon)
    $('.titleTxt_6').html(obj.brandName + "/" + obj.subBrand.name + '/' + obj.subBrand.products[obj.itemIndex].name)
    $('.pageTTParent_6').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    $(".searchParent_6").attr("style", "height :" + ((150 * window.innerHeight) / 1920) + 'px' + "");
    $("#mi-sortHolder-6").css({"width": handelPage.width * (0.72) + 'px', 'height': handelPage.height * (0.26) + 'px'});
    $(".sortTitleParent_6").css({'height': ((150 * window.innerHeight) / 1920) + 'px'});

}
pageSix.clearPage = function () {
    $(".HChild_6").empty();
    $('.titleTxt_6').empty();
    $('.Pchild_6').empty();
    $('.productChild_6').empty();
    $('.titleImg_6').attr("src", "");
    $(".blur_6").addClass("hideContent")
    $(".blur_6").removeClass("showContent")
    $("#inputSearch").val("");

    pageSix.hideSort();
    pageSix.removeInpFocus();

    pageSix.catList = ""
    pageSix.contentList = ""
    pageSix.nextLinkProduct = ""
    pageSix.productCounterFrom = ""
    pageSix.searchWord = ""
    pageSix.canCallNextLink = true
    pageSix.canCallSort = true
    pageSix.showSortPopup = false
    pageSix.filter = "maxprice"

    $("#radio2").prop("checked", true);

    $(".Pparent_6").removeClass("hideContent");
    $(".Pparent_6").addClass("showContent");

    $(".productParent_6").removeClass("showContent");
    $(".productParent_6").removeClass("showContent");

    $(".searchParent_6").addClass("hideContent");
    $(".productParent_6").addClass("hideContent");

}
pageSix.creatCat = function (obj) {
    new catList({
        data: obj,
        itemWidth: ((350 * window.innerWidth) / 1080) + "px",
        itemClass: "Hitem",
        onclick: "pageSix.ClickCat(id)",
        appendItem: ".HChild_6",
        hover: "HitemHover",
        imgClass: "HitemImg",
        txtClass: "HitemTxt"
    })
    pageSix.ClickCat("HEl_0")
}
pageSix.creatContent = function (obj) {
    new contentList({
        data: obj,
        itemClass: "Citem",
        itemHeight: ((250 * window.innerHeight) / 1920) + "px",
        appendItem: ".Pchild_6",
        sideClass: "CitemSide",
        imgClass: "CitemImg",
        txtClass: "CitemTxt",
        onclick: "pageSix.clickContent(id)",
        type: 0,
        endScrollFun: "pageSix.contentLazyLoad()",
        scrollElClass: 'Pparent_6'
    });
}
pageSix.creatProducts = function (data) {
    new contentList({
        data: data,
        itemClass: "Citem",
        itemHeight: ((250 * window.innerHeight) / 1920) + "px",
        appendItem: ".productChild_6",
        sideClass: "CitemSide",
        imgClass: "CitemImg",
        txtClass: "CitemTxt",
        onclick: "pageSix.clickProduct(id)",
        type: 1,
        endScrollFun: "pageSix.productLazyLoad()",
        scrollElClass: 'productParent_6',
        productCounterFrom: pageSix.productCounterFrom,
        modelClass: "productModel_6",
        modelTitleClass: "modelTitle_6",
        modelNameClass: "modelName_6",
        modelPrice: "modelPrice_6"
    });
}
pageSix.contentLazyLoad = function () {

}
pageSix.productLazyLoad = function () {
    if (pageSix.nextLinkProduct != null && pageSix.nextLinkProduct != "" && pageSix.canCallNextLink) {
        pageSix.canCallNextLink = false;
        pageSix.getModelList(pageSix.nextLinkProduct, pageSix.productId, pageSix.filter)
    }
}
pageSix.showSearch = function () {
    if (!$(".blur_6").hasClass("showContent")) {
        $(".blur_6").removeClass("hideContent")
        $(".blur_6").addClass("showContent")
    }
}
pageSix.removeInpFocus = function () {
    if ($(".blur_6").hasClass("showContent") && !$(".sort-child-6").hasClass("showContent")) {
        $(".blur_6").addClass("hideContent")
        $(".blur_6").removeClass("showContent")
        $(".blur_6").blur();
    }
}
pageSix.showSort = function () {
    if (!$(".sort-child-6").hasClass("showContent")) {

        pageSix.showSortPopup = true
        $(".sort-child-6").removeClass("hideContent")
        $(".sort-child-6").addClass("showContent")

        // $(".blur_6").removeClass("hideContent")
        // $(".blur_6").addClass("showContent")
    }
}

pageSix.hideSort = function () {
    if ($(".sort-child-6").hasClass("showContent")) {
        pageSix.showSortPopup = false;


        $(".sort-child-6").addClass("hideContent")
        $(".sort-child-6").removeClass("showContent")

        // $(".blur_6").addClass("hideContent")
        // $(".blur_6").removeClass("showContent")
    }
}

pageSix.searchItem = function () {

    pageSix.searchWord = $("#inputSearch").val();
    console.log(pageSix.searchWord);
    if (pageSix.searchWord.length > 3) {
        var data = {'q': pageSix.searchWord, 'product': pageSix.productId};
        pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/search', pageSix.manageSearchRes, data);
    } else {
        managementRel.tost("برای جستجو بیشتر از 3 کلمه وارد کنید");
    }
}
pageSix.manageSearchRes = function (data) {
    pageSix.removeInpFocus();

    $(".productChild_6").empty()
    if (jQuery.parseJSON(data).data.length == 0) {
        managementRel.tost("نتیجه ای یافت نشد.");
    } else {
        pageSix.manageProduct(data)
    }
}
pageSix.closeSorts = function (id) {
    // console.log("into" , pageSix.canCallSort)
    // console.log(pageSix.canCallSort)


    if (pageSix.canCallSort == true) {
        pageSix.canCallSort = false
        $('.productChild_6').empty();
        pageSix.nextLinkProduct = ""
        pageSix.filter = $("#" + id).attr("sortVal");
        pageSix.getModelList(urlForecast + 'v1/modellist', pageSix.productId, pageSix.filter)
    }

}
