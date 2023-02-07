pageThirteen = {

};

pageThirteen.init = function () {
    $("#thirteen-detail-box").empty();
    menu.titleBar(pageTen.TenObj["image"][pageTen.index[2]], pageTen.TenObj["name"][pageTen.index[2]]);
    var data = {
        userID: managementRel.getCookie("id"),
        status: 2
    }
    ajax("POST", dir, pageThirteen.manage, "act=exam&type=list" + setParamsAjax(data));

}
pageThirteen.manage = function (data) {
    //  var data = '{"code": 33,"status": "ok","description": "list of Exams for this instant","description2": "لیست امتحانات لحظه ای","detail": [{"id": "3","name": "کلم میخواره","duration": "00:15:00","image": null }]}';
    pageThirteen.ThirteenObj = pageSix.parser(data);
    if (typeof pageThirteen.ThirteenObj['name'] != "undefined")
        pageThirteen.create();
    else
        managementRel.tost("در حال حاضر آزمون فعالی موجود نیست");

};


pageThirteen.create = function () {

    this.list = new list({title: pageThirteen.ThirteenObj['name'], height: handelPage.height * 0.0625, baseId: "thirteen-subcat-", className: "modole-B waves-effect waves-light", appendEl: "#thirteen-detail-box", model: "B", img: pageThirteen.ThirteenObj['image'],
        onclick: "pageThirteen.ClickItem(id)"});
};
pageThirteen.return = function () {
    $("#thirteen-detail-box").empty();
    menu.titleBar("images/19.png", "آزمون");
    // menu.titleBar(pageSeven.SevenObj["image"][pageSeven.index[2]], "" + pageSeven.SevenObj["name"][pageSeven.index[2]]);
};


pageThirteen.ClickItem = function (id) {
    pageThirteen.index = id.split("-");
    //alert(pageEight.EightObj["name"][pageEight.index[2]])
//alert(pageThirteen.ThirteenObj["file"][pageThirteen.index[2]])
    var data = {
        userID: managementRel.getCookie("id"),
        examID: pageThirteen.ThirteenObj["id"][pageThirteen.index[2]],
    }
    ajax("POST", dir, pageThirteen.resultExam, "act=exam&type=result" + setParamsAjax(data));



//



    //managementRel.playVideo();
};
pageThirteen.resultExam = function (data) {
    mylog.log(data);
    var obj = jQuery.parseJSON(data);
    pageThirteen.is_revised = "";

    if (obj['status'] == "ok") {
        this.results = obj['results'];
        pageThirteen.trueVal = this.results["true"];
        pageThirteen.falseVal = this.results["false"];
        pageThirteen.ignoreVal = this.results["ignore"];
        pageThirteen.durationVal = this.results["duration"];
        pageThirteen.exam_score = this.results["exam_score"];
        pageThirteen.all_country = this.results["all_country"];
        pageThirteen.user_country = this.results["user_country"];
        pageThirteen.all_state = this.results["all_state"];
        pageThirteen.user_state = this.results["user_state"];
        pageThirteen.all_store = this.results["all_store"];
        pageThirteen.user_store = this.results["user_store"];
        pageThirteen.all_score = this.results["all_score"];
        if (this.results["is_revised"] || this.results["is_revised"] == 0)
            pageThirteen.is_revised = this.results["is_revised"];
        menu.score(pageThirteen.all_score);
        handelPage.managerEnter(12);
       
        pageTwelve.create(pageThirteen.trueVal, pageThirteen.falseVal, pageThirteen.exam_score, pageThirteen.durationVal, pageThirteen.exam_score, pageThirteen.all_country, pageThirteen.user_country, pageThirteen.all_state, pageThirteen.user_state, pageThirteen.all_store, pageThirteen.user_store,pageThirteen.is_revised);


        menu.titleBar(pageThirteen.ThirteenObj["image"][pageThirteen.index[2]], pageThirteen.ThirteenObj["name"][pageThirteen.index[2]]);

    }
   
    //managementRel.tost(obj['description2']);
}

