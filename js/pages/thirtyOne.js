pageThirtyOne = {};

pageThirtyOne.init = function () {
    pageThirtyOne.reset();
   // menu.titleBar("images/sell-history.png", "گزارش فروش");
    menu.titleBar("", "گزارش فروش");

};
pageThirtyOne.manage = function (data2) {
    pageThirtyOne.parse(data2);
    pageThirtyOne.create();
};
pageThirtyOne.parse = function (data2) {
    var obj = jQuery.parseJSON(data2);
    if (obj['success'] == true) {
        pageThirtyOne.data = obj['data'];
        if (obj['data'].length == 0) {
            managementRel.tost("در حال حاضر فروشی انجام نشده است");
        } else {
            for (var i = 0; i < obj['data'].length; i++) {

                pageThirtyOne.serial[i] = obj['data'][i]['serial'];
                pageThirtyOne.isScored[i] = obj['data'][i]['is_scored'];
                pageThirtyOne.isRejected[i] = obj['data'][i]['is_reject'];
                pageThirtyOne.isDuplicate[i] = obj['data'][i]['is_duplicate'];
                pageThirtyOne.isInvalid[i] = obj['data'][i]['is_invalid'];
                pageThirtyOne.status[i] = obj['data'][i]['status'];
            }
        }
    } else {
        managementRel.tost("11  اختلال در برقراری ارتباط با اینترنت");
    }

};
pageThirtyOne.reset = function () {
    window.scrollTo(0, 0);
    $("#report-list-31").empty();
    pageThirtyOne.serial = [];
    pageThirtyOne.isScored = [];
    pageThirtyOne.isRejected = [];
    pageThirtyOne.isDuplicate = [];
    pageThirtyOne.isInvalid = [];
    pageThirtyOne.title = [];
    pageThirtyOne.data = [];
    pageThirtyOne.list = "";
    pageThirtyOne.status = [];
};
pageThirtyOne.create = function () {
    $(".report-holder-31").css({"height": handelPage.height * (0.066) + 'px'});
    $(".report-head-31").css({"line-height": handelPage.height * (0.066) + 'px'});
    $("#head-31-1").css({"border-left": "1px solid #b1b3b6"});
  //  $("#page-holder-31").css({'min-height': handelPage.height + 'px'});
    var pageHeight = ((((pageThirtyOne.serial.length * (0.074))) * handelPage.height) + 20);
    if (pageThirtyOne.serial.length == 0) {
        $("#report-list-31").css({'min-height': handelPage.height * (0.72) + 'px'});
    } else {
        $("#page-holder-31").css({'height': pageHeight + 'px'});
    }

    this.list = new list({
        title: pageThirtyOne.serial,
        id: pageThirtyOne.isScored,
        scored: pageThirtyOne.isScored,
        rejected: pageThirtyOne.isRejected,
        invalid: pageThirtyOne.isInvalid,
        duplicate: pageThirtyOne.isDuplicate,
        height: handelPage.height * 0.076,
        width: parseFloat($(".report-holder-31").css("width")),
        baseId: "sold-item-31-",
        className: "sold-item-31  waves-light",
        appendEl: "#report-list-31",
        model: "F",
        onclick: "pageThirtyOne.ClickItem(id)",
        baseClass: "sold-item-31",
        classRight: "report-itemR-31",
        imgClass:"img-item-31",
        textClass:"sell-title-31",
    });

    var pageHeight = ((((this.isScored.length * (0.076))+(0.074)) * handelPage.height) + 20);
   // console.log("page hight=>" + pageHeight);
    $("#page-holder-31").css({"height": pageHeight + 'px','min-height':handelPage.height+'px'});
    pageTwentyFour.handleHeight('#page-holder-31', 24);
    var select = document.getElementById('report-list-31');
    select.removeChild(select.lastChild);
   // pageTwentyFour.handleHeight('#page-holder-31', 24);
};
pageThirtyOne.return = function () {
    this.reset();

};


pageThirtyOne.ClickItem = function (idm) {

   // console.log('id->' + idm);


};
