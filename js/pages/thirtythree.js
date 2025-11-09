pageThirtyThree = {
    imgCrop: '',
    brandCnt: '',
    hFilter: '',
    brandSelected: 0,
    subBrands: [],
    subBrandCnt: [],
    lastSubBrand: 0,
    lastBrandId: 0,
    subBrandId: 0,
    products: [],
    brands: '',
    eighteenTitle:""
};

pageThirtyThree.init = function () {
    gtag('event', 'productions');
    $('.pageTTParent').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    pageThirtyThree.clearPage()

    pageThirtyThree.brands = {
        "status": "ok",
        "detail": [
            {
                "id": "1",
                "name": "سامسونگ",
                "image": "http://samyar.rasgames.ir/client4/images/samsungProduct.png",
                "icon":"images/products/samsungicon.png",
                "description": "سامسونگ"
            },
            {
                "id": "2",
                "name": "سام",
                "image": "http://samyar.rasgames.ir/client4/images/samProduct.png",
                "icon":"images/products/sam_icon.png?t=22",
                "description": "سام"
            }
        ]
    }
    pageThirtyThree.manage(JSON.stringify(pageThirtyThree.brands))
    pageThirtyThree.getSubBrand(this.lastBrandId);
}
pageThirtyThree.manage = function (data) {
    pageThirtyThree.SixObj = pageThirtyThree.parser(data);
    pageThirtyThree.create();
    menu.titleBar("images/21.png", "اطلاعات محصولات");
}
pageThirtyThree.parser = function (data) {
    var obj = jQuery.parseJSON(data);
    if (obj['status'] == "ok") {
        return obj['detail'];
    } else {
        managementRel.tost(obj['description2']);
    }
};
pageThirtyThree.create = function () {
    pageThirtyThree.createTabs();
};
pageThirtyThree.createTabs = function () {

    pageThirtyThree.brandCnt = pageThirtyThree.SixObj.length;
    pageThirtyThree.hFilter = ((150 * handelPage.height) / 1920)

    var brandParent = $('<div></div>');
    brandParent.addClass("head-products");
    brandParent.attr('style', 'height:' + pageThirtyThree.hFilter + 'px');
    $("#thirtythree-detailNews-box").append(brandParent);


    this.tabs = new tabs({
        obj: pageThirtyThree.SixObj, appendEl: ".head-products", className: "head-item", baseId: "brandItem_",
        onclick: "pageThirtyThree.selectBrand(id)", hover: "hoverTab", hoverShow: "colorHideHover"
    })


}

pageThirtyThree.selectBrand = function (name) {
    // console.log(pageThirtyThree.brandCnt)
    for (var i = 0; i < pageThirtyThree.brandCnt; i++) {
        $("#brandItem_" + i).removeClass("colorHideHover")
        $("#productBrand_" + i).attr('style', 'display:none !important')
    }
    $("#" + name).addClass("colorHideHover");
    pageThirtyThree.brandSelected = name.split("_")[1]
    $("#productBrand_" + pageThirtyThree.brandSelected).attr('style', 'display:block !important')
}


pageThirtyThree.return = function () {
    pageThirtyThree.clearPage()
};


pageThirtyThree.ClickItem = function (id) {
    var name = id.split("_");
    // console.log(name)
    if(menu.isSell){
        // console.log(pageThirtyThree.products[name[1]].subBrands[name[2]]["products"][name[3]]["id"])



        if (pageThirtyThree.brandSelected == 0) {//baraye jashnvare , sabte mahsoole samsung hazf shod(10/9/1400)
            managementRel.tost("امکان درج محصول وجود ندارد.");
            return
        }

        if(pageThirtyThree.products[name[1]].subBrands[name[2]]["products"][name[3]]["id"]  != 17 && pageThirtyThree.products[name[1]].subBrands[name[2]]["products"][name[3]]["id"] != 18 && pageThirtyThree.products[name[1]].subBrands[name[2]]["products"][name[3]]["id"]  != 16 && pageThirtyThree.products[name[1]].subBrands[name[2]]["products"][name[3]]["id"]  != 22 && pageThirtyThree.products[name[1]].subBrands[name[2]]["products"][name[3]]["id"]  != 21){

            // id == 16 (tv) , id == 22 (side) , id == 21 (DW) dar tarikhe 15.08.02 be darkhste teame samyar be promotion ezafe shod
            //17 == id mashin lebas shooee sam & 18 = yakhchal sam(01/04/1)
            // & 22 = side by side sam & 21 = zarfshooee sam (30/11/1401) /*****/ (dar tarikhe 22/01/1402 side va zarfshoee hazf shod (21&22))
            managementRel.tost("امکان درج محصول وجود ندارد.");
            return
        }

        pageThirtyThree.eighteenTitle=pageThirtyThree.products[name[1]].subBrands[name[2]]["products"][name[3]]["name"]
        pageEighteen.ClickItem("product-click-18-" + pageThirtyThree.products[name[1]].subBrands[name[2]]["products"][name[3]]["id"])

        return
    }
    // var iconAdd = (pageThirtyThree.products[name[1]].brandId == 1)?("images/samsungicon.png"):("images/products/sam_logo.png")
    var sendData = {
        brandId: pageThirtyThree.products[name[1]].brandId,
        brandName: pageThirtyThree.products[name[1]].BrandName,
        subBrand: pageThirtyThree.products[name[1]].subBrands[name[2]],
        itemIndex:name[3],
        icon:pageThirtyThree.products[name[1]].brandIcon
    }
    // console.log(sendData)
    handelPage.managerEnter(6);
    pageSix.init(sendData);
};


pageThirtyThree.getSubBrand = function (brandId) {

    var params = {
        userID: managementRel.getCookie("id"),
    }

    if (brandId == 0) {
        ajax("POST", dir, pageThirtyThree.manageSubBrand, "act=product&type=category" + setParamsAjax(params));
    }
    if (brandId == 1) {
        ajax("POST", dir, pageThirtyThree.manageSubBrand, "act=product&type=categoryN" + setParamsAjax(params));

    }
    pageThirtyThree.products.push({
        BrandIndex: pageThirtyThree.lastBrandId,
        brandId: pageThirtyThree.SixObj[pageThirtyThree.lastBrandId].id,
        BrandName: pageThirtyThree.SixObj[pageThirtyThree.lastBrandId].name,
        brandIcon:pageThirtyThree.SixObj[pageThirtyThree.lastBrandId].icon,
        subBrands: ''
    })

}

pageThirtyThree.manageSubBrand = function (data) {

    var obj = jQuery.parseJSON(data);
    if (obj.status) {
        pageThirtyThree.subBrands.push(obj.detail);
        pageThirtyThree.subBrandCnt.push(obj.detail.length);
        pageThirtyThree.products[pageThirtyThree.lastBrandId]["subBrands"] = (obj.detail)
    }

    pageThirtyThree.lastBrandId++;
    if (pageThirtyThree.brandCnt > pageThirtyThree.lastBrandId) {
        pageThirtyThree.getSubBrand(pageThirtyThree.lastBrandId);
    }

    // console.log(pageThirtyThree.subBrands , pageThirtyThree.subBrandCnt)

    if (pageThirtyThree.brandCnt == pageThirtyThree.lastBrandId) {
        pageThirtyThree.lastBrandId = 0
        pageThirtyThree.getProducts(pageThirtyThree.subBrands[0][0].id)
        return false;
    }

}

pageThirtyThree.getProducts = function (subBrand) {

    var data = {
        userID: managementRel.getCookie("id"),
        catID: subBrand
    };
    ajax("POST", dir, pageThirtyThree.manageProducts, "act=product&type=subcategoryN" + setParamsAjax(data));
}

pageThirtyThree.manageProducts = function (data) {
    var obj = jQuery.parseJSON(data);
    pageThirtyThree.products[pageThirtyThree.lastBrandId]["subBrands"][pageThirtyThree.lastSubBrand]["products"] = (obj.detail);

    pageThirtyThree.lastSubBrand++;
    if (pageThirtyThree.lastSubBrand >= pageThirtyThree.subBrandCnt[pageThirtyThree.lastBrandId]) {
        pageThirtyThree.lastSubBrand = 0;
        pageThirtyThree.lastBrandId++;
    }

    if (typeof pageThirtyThree.subBrands[pageThirtyThree.lastBrandId] != 'undefined')
        pageThirtyThree.getProducts(pageThirtyThree.subBrands[pageThirtyThree.lastBrandId][pageThirtyThree.lastSubBrand].id)

    if (pageThirtyThree.lastBrandId >= pageThirtyThree.brandCnt) {
        pageThirtyThree.creatHorizontalList(pageThirtyThree.products)
        return false;
    }
}
pageThirtyThree.creatHorizontalList = function (data) {
    console.log(pageThirtyThree.products)
    var Lheight = (100 * window.innerHeight) / 1920 + 'px';
    var listMargin = (33 * window.innerWidth) / 1080 + 'px !important';
    var listItemHeightL = (430 * window.innerHeight) / 1920 + 'px';
    $(".listParent").attr("style", "height:" + listItemHeightL + "")

    new horizontalList({
        brandIndex: 0,
        subBrandIndex: 0,
        appendTitleEl: "#product_0_0",
        listTitle: "<b>" + data[0].subBrands[0].name + "</b>",
        externalStyle: "height:" + Lheight + "",
        listData: data[0].subBrands[0].products, appendEl: '#productParent_0_0',
        elStyle: "margin-right:" + listMargin + ";height:" + listItemHeightL + "", elTitle: "listItemTitle",
        onclick: "pageThirtyThree.ClickItem(id)",
        titleIMG:data[0].brandIcon,titleIgClass:"titleImg_33_t1"
    });

    new horizontalList({
        brandIndex: 0,
        subBrandIndex: 1,
        appendTitleEl: "#product_0_1",
        listTitle: "<b>" + data[0].subBrands[1].name + "</b>",
        externalStyle: "height:" + Lheight + "",
        listData: data[0].subBrands[1].products, appendEl: '#productParent_0_1',
        elStyle: "margin-right:" + listMargin + ";height:" + listItemHeightL + "", elTitle: "listItemTitle",
        onclick: "pageThirtyThree.ClickItem(id)",
        titleIMG:'',titleIgClass:""
        // titleIMG:data[0].brandIcon,titleIgClass:"titleImg_33_t1"
    })

    new horizontalList({
        brandIndex: 1,
        subBrandIndex: 0,
        appendTitleEl: "#product_1_0",
        listTitle: "<b>" + data[1].subBrands[0].name + "</b>",
        externalStyle: "height:" + Lheight + "",
        listData: data[1].subBrands[0].products, appendEl: '#productParent_1_0',
        elStyle: "margin-right:" + listMargin + ";height:" + listItemHeightL + "", elTitle: "listItemTitle",
        onclick: "pageThirtyThree.ClickItem(id)", titleIMG:data[1].brandIcon,titleIgClass:"titleImg_33_t2"
    })

    new horizontalList({
        brandIndex: 1,
        subBrandIndex: 1,
        appendTitleEl: "#product_1_1",
        listTitle: "<b>" + data[1].subBrands[1].name + "</b>",
        externalStyle: "height:" + Lheight + "",
        listData: data[1].subBrands[1].products, appendEl: '#productParent_1_1',
        elStyle: "margin-right:" + listMargin + ";height:" + listItemHeightL + "", elTitle: "listItemTitle",
        onclick: "pageThirtyThree.ClickItem(id)",
        titleIMG:'',titleIgClass:""
        // titleIMG:data[1].brandIcon,titleIgClass:"titleImg_33_t2"
    })
    $("#productBrand_0").attr('style', 'display:block !important')
}


pageThirtyThree.clearPage = function () {
    pageThirtyThree.lastBrandId = 0;
    pageThirtyThree.lastSubBrand = 0;
    pageThirtyThree.brandSelected = 0;
    pageThirtyThree.subBrandId = 0;
    while (pageThirtyThree.products.length > 0) {
        pageThirtyThree.products.pop()
    }
    while (pageThirtyThree.subBrands.length > 0) {
        pageThirtyThree.subBrands.pop()
    }
    while (pageThirtyThree.subBrandCnt.length > 0) {
        pageThirtyThree.subBrandCnt.pop()
    }
    $("#thirtythree-detailNews-box").empty();
    $(".listTitle").remove();
    $("#productBrand_0").attr('style', 'display:none !important')
    $("#productBrand_1").attr('style', 'display:none !important')
    $("#productParent_0_0").empty();
    $("#productParent_0_1").empty();
    $("#productParent_1_0").empty();
    $("#productParent_1_1").empty();

}
