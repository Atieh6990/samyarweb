pageFourteen = {

};

pageFourteen.init = function () {
    $("#fourteen-detail-box").empty();
    menu.titleBar("images/20.png", "نظر سنجی");
    var data = {
        userID: managementRel.getCookie("id"),
    }
    ajax("POST", dir, pageFourteen.manage, "act=poll&type=listAll" + setParamsAjax(data));

}
pageFourteen.manage = function (data) {
    //  var data = '{"code": 33,"status": "ok","description": "list of Exams for this instant","description2": "لیست امتحانات لحظه ای","detail": [{"id": "3","name": "کلم میخواره","duration": "00:15:00","image": null }]}';
    pageFourteen.FourteenObj = pageSix.parser(data);

    if (typeof pageFourteen.FourteenObj['name'] != "undefined" && pageFourteen.FourteenObj['name'].length > 0)
        pageFourteen.create();
    else
        managementRel.tost("در حال حاضر نظرسنجی فعالی موجود نیست");

};


pageFourteen.create = function () {

    this.list = new list({title: pageFourteen.FourteenObj['name'], height: handelPage.height * 0.0625, baseId: "fourteen-subcat-", className: "modole-B waves-effect waves-light", appendEl: "#fourteen-detail-box", model: "B", img: pageFourteen.FourteenObj['image'],
        onclick: "pageFourteen.ClickItem(id)"});
};
pageFourteen.return = function () {
    if (managePage.direction[(managePage.direction.length) - 2] == 11 || managePage.direction[(managePage.direction.length) - 2] == 13) {
        managePage.retun();
    }
    $("#fourteen-detail-box").empty();
    // menu.titleBar(pageSeven.SevenObj["image"][pageSeven.index[2]], "" + pageSeven.SevenObj["name"][pageSeven.index[2]]);
};


pageFourteen.ClickItem = function (id) {
    pageFourteen.index = id.split("-");
    //alert(pageEight.EightObj["name"][pageEight.index[2]])
//alert(pageFourteen.FourteenObj["file"][pageFourteen.index[2]])

    handelPage.managerEnter(15);


    //managementRel.playVideo();
};
