pageTwenty = {
};

pageTwenty.init = function () {
    pageTwenty.calcPos()
    $(".Pchild_20").empty();
    menu.titleBar("images/34.png", "من یک متخصصم");
    var data = {
        userID: managementRel.getCookie("id"),
    }
    // datas={"hdata":{"agent":1517905652141,"cnt":5,"data":"U2xSa1EwcFVTWGxrV0U1c1kydHNSVXBVU1hsS1ZFNUNTbFJKZVU1cVJYbE5ha0V4VG1sVmVVMXBWVE5TUVQwOVQwTklXRFZKUTA5Q1R6MD0="},"hash":"850b1e347cc427c3c7aae491abcb0a91"}&act=contest&type=list&mode=debug+agent:PostmanRuntime/7.1.1+mainData:{"userID":"6122056"}
    ajax("POST", dir, pageTwenty.manage, "act=contest&type=list" + setParamsAjax(data));

}
pageTwenty.manage = function (data) {
    //  var data = '{"code": 33,"status": "ok","description": "list of Exams for this instant","description2": "لیست امتحانات لحظه ای","detail": [{"id": "3","name": "کلم میخواره","duration": "00:15:00","image": null }]}';
    pageTwenty.TwentyObj = pageSix.parser(data);
  
    if (typeof pageTwenty.TwentyObj['name'] != "undefined" && pageTwenty.TwentyObj['name'].length > 0)
        pageTwenty.create();
    // pageTwentyOne.create();x


    else
        managementRel.tost("در حال حاضر مسابقه ای وجود ندارد");

};
pageTwenty.create = function () {
    this.list =new specialistList({
        obj:pageTwenty.TwentyObj['name'],
        itemClass:"Citem",
        itemHeight:((250 * window.innerHeight) / 1920) + "px",
        onclick:"pageTwenty.ClickItem(id)",
        appendItem:".Pchild_20",
        baseId:"twenty-subcat-",
        innerClass:"CElIn",
        sideClass: "CitemSide",
        txtClass: "CitemTxt",
        imgClass: "CitemImg_20",
    })

    // this.list = new list({title: pageTwenty.TwentyObj['name'], height: handelPage.height * 0.0625, baseId: "twenty-subcat-", className: "modole-B waves-effect waves-light", appendEl: "#twenty-detailNews-box", model: "B", img: pageTwenty.TwentyObj['image'],
    //     onclick: "pageTwenty.ClickItem(id)"});
};
pageTwenty.return = function () {
    if (managePage.direction[(managePage.direction.length) - 2] == 21 || managePage.direction[(managePage.direction.length) - 2] == 22) {
        managePage.retun();
    }
    $(".Pchild_20").empty();
    // menu.titleBar(pageSeven.SevenObj["image"][pageSeven.index[2]], "" + pageSeven.SevenObj["name"][pageSeven.index[2]]);
};


pageTwenty.ClickItem = function (id) {

    pageTwenty.index = id.split("-");
    //alert(pageEight.EightObj["name"][pageEight.index[2]])
//alert(pageTen.TenObj["file"][pageTen.index[2]])
    mylog.log('is id->' + id);
    mylog.log('is index->' + pageTwenty.TwentyObj['is_finished'][pageTwenty.index[2]]);
    if (pageTwenty.TwentyObj['is_finished'][pageTwenty.index[2]] == 0) {
        handelPage.managerEnter(21);
    } else if (pageTwenty.TwentyObj['is_finished'][pageTwenty.index[2]] == 1) {
        // mylog.log('1111111111111'); 
        handelPage.managerEnter(22);
        // managementRel.tost("زمان ارسال فیلم شما به پایان رسید");
    }
};
pageTwenty.calcPos = function () {
    $('.pageTTParent_20').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
}


