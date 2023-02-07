pageSeven = {};

pageSeven.init = function () {
    $("#seven-detailNews-box").empty();
}
pageSeven.manage = function (data) {

    pageSeven.SevenObj = pageSix.parser(data);
    pageSeven.create();


}

pageSeven.create = function () {

    this.list = new list({
        title: this.SevenObj['name'],
        height: handelPage.height * 0.0625,
        baseId: "seven-subcat-",
        className: "modole-B waves-effect waves-light",
        appendEl: "#seven-detailNews-box",
        model: "B",
        img: this.SevenObj['image'],
        onclick: "pageSeven.ClickItem(id)"
    });
};
pageSeven.return = function () {
    $("#seven-detailNews-box").empty();
    menu.titleBar("images/21.png", "اطلاعات محصولات");
};


pageSeven.ClickItem = function (id) {

    this.index = id.split("-");
    menu.titleBar(pageSeven.SevenObj["image"][pageSeven.index[2]], "" + pageSeven.SevenObj["name"][pageSeven.index[2]]);
    handelPage.managerEnter(8);

    // alert(pageSeven.SevenObj["id"][pageSeven.index[2]])

    var data = {
        userID: managementRel.getCookie("id"),
        catID: pageSeven.SevenObj["id"][pageSeven.index[2]]
    };
    ajax("POST", dir, pageEight.manage, "act=product&type=cattype" + setParamsAjax(data));
}