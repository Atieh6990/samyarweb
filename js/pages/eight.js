pageEight = {};

pageEight.init = function () {
    $("#eight-detailNews-box").empty();
}
pageEight.manage = function (data) {

    pageEight.EightObj = pageSix.parser(data);
    pageEight.parser();
    pageEight.create();

}
pageEight.parser = function () {
    pageEight.name = [];
    for (var i = 0; i < this.EightObj['name'].length; i++) {
        mylog.log(pageEight.EightObj['name'][i] + "<span>(" + pageEight.EightObj['count'][i] + ")</span>")
        pageEight.name.push(pageEight.EightObj['name'][i] + (pageEight.EightObj["id"][i] == "-1" ? "" : "<span>(" + pageEight.EightObj['count'][i] + ")</span>"));
    }

}
tk4 = '9565';

pageEight.create = function () {

    this.list = new list({
        title: pageEight.name,
        height: handelPage.height * 0.0625,
        baseId: "eight-subcat-",
        className: "modole-B waves-effect waves-light",
        appendEl: "#eight-detailNews-box",
        model: "B",
        img: this.EightObj['image'],
        onclick: "pageEight.ClickItem(id)"
    });
};
pageEight.return = function () {
    $("#eight-detailNews-box").empty();
    menu.titleBar(pageSix.SixObj["image"][pageSix.index[2]], "اطلاعات محصولات> " + pageSix.SixObj["name"][pageSix.index[2]]);

};


pageEight.ClickItem = function (id) {

    //alert(pageSeven.SevenObj["id"][pageSeven.index[2]])
    this.index = id.split("-");

    this.tit = pageSeven.SevenObj["name"][pageSeven.index[2]] + " > " + pageEight.EightObj["name"][pageEight.index__[2]];
    menu.titleBar(pageEight.EightObj["image"][pageEight.index__[2]], this.tit);
    // alert(pageSeven.SevenObj["id"][pageSeven.index[2]]  + "***" + pageEight.EightObj["id"][pageEight.index[2]])


    if (pageEight.EightObj["id"][pageEight.index__[2]] == "-1") {  //products
        //    var data = {'product': +pageSeven.SevenObj["id"][pageSeven.index[2]], 'filter': 'maxprice'};
    //    gaU('send', 'pageview', 'pg8-products');
        handelPage.managerEnter(25);
    } else {
        var data = {
            userID: managementRel.getCookie("id"),
            catID: pageSeven.SevenObj["id"][pageSeven.index[2]],
            typeID: pageEight.EightObj["id"][pageEight.index__[2]]

        };

        handelPage.managerEnter(9);
        ajax("POST", dir, pageNine.manage, "act=product&type=catlist" + setParamsAjax(data));

    }


}
