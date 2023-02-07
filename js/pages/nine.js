pageNine = {};

pageNine.init = function () {
    $('.pageTTParent_9').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    $('.Pparent_9').attr("style", 'height:' + ((1150 * window.innerHeight) / 1280) + 'px');
    // $("#nine-detailNews-box").empty();
}
pageNine.manage = function (data) {

    pageNine.NineObj = pageSix.parser(data);
    pageNine.create();

}


pageNine.create = function () {
    new contentList({
        data: pageNine.NineObj,
        itemClass: "Citem",
        itemHeight: ((250 * window.innerHeight) / 1920) + "px",
        appendItem: ".Pchild_9",
        sideClass: "CitemSide",
        imgClass: "CitemImg",
        txtClass: "CitemTxt",
        onclick: "pageNine.ClickItem(id)",
        type: 3,
        endScrollFun: "pageNine.productLazyLoad()",
        scrollElClass: 'Pparent_34',

    });
    // this.list = new list({
    //     title: this.NineObj['name'],
    //     height: handelPage.height * 0.12,
    //     baseId: "nine-subcat-",
    //     className: "modole-A waves-effect waves-light",
    //     appendEl: "#nine-detailNews-box",
    //     model: "A",
    //     img: this.NineObj['image'],
    //     onclick: "pageNine.ClickItem(id)"
    // });
};
pageNine.return = function () {

    // $("#nine-detailNews-box").empty();
    pageNine.NineObj = ""
    $(".Pchild_9").empty();

    if (typeof pageSeven.SevenObj != "undefined")
        menu.titleBar(pageSeven.SevenObj["image"][pageSeven.index[2]], "" + pageSeven.SevenObj["name"][pageSeven.index[2]]);
    else
        menu.titleBar("", "");

};

pageNine.productLazyLoad = function(){

}
pageNine.ClickItem = function (id) {
    this.index = id.split("-");
    //alert(pageEight.EightObj["name"][pageEight.index[2]])
//alert(pageNine.NineObj["file"][pageNine.index[2]])


    // console.log('file',pageNine.NineObj["file"][pageNine.index[2]])
    // console.log('name',pageNine.NineObj["name"][pageNine.index[2]])
    // console.log('dirVid',dirVid)

    // console.log(pageNine.NineObj["id"][pageNine.index[2]])

    if (typeof pageEight.EightObj != "undefined") {
        this.name = pageEight.EightObj["name"][pageEight.index__[2]];
        var data = {
            userID: managementRel.getCookie("id"),

            id: pageNine.NineObj["id"][pageNine.index[2]],
        };
        if (this.name.indexOf("ویدیو") > -1) {

            if (typeof pageNine.NineObj["file"][pageNine.index[2]] != "undefined") {

                managementRel.playVideo(dirVid + pageNine.NineObj["file"][pageNine.index[2]], pageNine.NineObj["name"][pageNine.index[2]]);
            } else {
                managementRel.tost("فایل موجود نیست");

            }

        } else {
       //     gaU('send', 'pageview', 'pg9-detail');

            handelPage.managerEnter(4);
            ajax("POST", dir, pageFour.init, "act=product&type=detail" + setParamsAjax(data));

        }
    } else {
        handelPage.managerEnter(4);
        var data = {
            userID: managementRel.getCookie("id"),

            id: pageNine.NineObj["id"][pageNine.index[2]],
        };
       // gaU('send', 'pageview', 'pg9-detail');
        ajax("POST", dir, pageFour.init, "act=product&type=detail" + setParamsAjax(data));
    }
    //managementRel.playVideo();
};
