pageTwentyEight = {};
pageTwentyEight.init = function () {
    pageTwentyEight.reset();
    pageTwentyEight.drawPicBox(0);
};
pageTwentyEight.reset = function () {
    //pageTwentyEight.isSelect = 0;
    //alert(pageTwentyEight.isSelect);
    pageTwentyEight.obj = '';
    pageTwentyEight.comparison = '';
    pageTwentyEight.verHeight = parseInt(0);
    $(".mtitle-r-28").html("");
    $(".model-picr-28").attr("src", "");
    window.scrollTo(0, 0);
    heightVertical = 0;
    $("#table-models-28").empty();
    /*$(".head-all-28").css({'display': 'none'});*/
    //if (window.JSInterface) {
    $('body').removeClass('model-scroll');
    //}
    $(".model-two-28").attr("onclick", "pageTwentyEight.addNewModel()");
};
pageTwentyEight.drawPicBox = function (status) {
    var pic28Hiehgt = parseInt(handelPage.height * (0.122));
    if (status == 0) {
        $("#model-holder-28").css({"width": handelPage.width * (0.95) + 'px'});
        $(".model-pic-28 .model-boxes-28").css({"height": handelPage.height * (0.122) + 'px'});
        $(".model-plus-28").css({"margin-top": handelPage.height * (0.035) + 'px'});
        var widthBox = ((parseInt($(".model-pic-28").css("width"))) / 2);
        //  $(".model-picr-28").css({"margin-top": handelPage.height * (0.122) * (0.15) + 'px'});
        $(".pic-holder-28").css({"width": widthBox * (0.293) + 'px', 'height': handelPage.height * (0.122) + 'px'});
        $(".model-picr-28").attr("src", (pageTwentySix.obj['thumbnail'] == null ? './images/default-model.png' : pageTwentySix.obj['thumbnail']));
        $(".model-one-28 .model-picr-28").load(function () {
            var heightF = $(this).height();
            $(this).css("margin-top", (pic28Hiehgt - heightF) / 2 + 'px');
        });
        $(".title-r-28").css({"width": widthBox * (0.5) + 'px'});
        $(".mtitle-r-28").html(pageTwentySix.obj['title'].substr(0, 25));
        $(".cell-vertical-28").css("height", handelPage.height * (0.122) + 'px');
    } else {
        heightVertical = 0;
        window.scrollTo(0, 0);
        $(".model-two-28").html($(".model-one-28").html());
        $(".model-two-28").addClass("box-main-28");
        $(".model-two-28").attr("onclick", "pageTwentyEight.removeModel()");
        $(".model-two-28 .mtitle-r-28").html(pageTwentyEight.obj['title'].substr(0, 25));
        $(".model-two-28 .model-picr-28").attr("src", (pageTwentyEight.obj['thumbnail'] == null ? './images/default-model.png' : pageTwentyEight.obj['thumbnail']));
        $(".model-two-28 .model-picr-28").load(function () {
            var heightF = $(this).height();
            $(this).css("margin-top", (pic28Hiehgt - heightF) / 2 + 'px');
        });
        var el = $("<img>");
        el.addClass("model-cancle-28");
        el.attr("src", "./images/canclem.png");
        $(".model-two-28").append(el);

    }
    $("#twentyEight").css("height", handelPage.height + 'px');
    pageTwentyFour.handleHeight('#model-holder-28', 24);
};

pageTwentyEight.manage = function (data) {
    handelPage.initShowPage(28);
    pageTwentyEight.parser(data);
    pageTwentyEight.create();
};
pageTwentyEight.parser = function (data2) {
    //  console.log('data data data ' + JSON.stringify(data2));
    var obj = jQuery.parseJSON(data2);
    if (obj['success'] == true) {
        pageTwentyEight.obj = obj['data'];
        pageTwentyEight.comparison = obj['data']['comparison'];
        // console.log('obj e safe 28->' + JSON.stringify(pageTwentyEight.obj));
    } else {
        managementRel.tost("");
    }
};
pageTwentyEight.create = function () {
    this.drawPicBox(1);
    this.drawTables();
    this.fillTabels();
    this.handleHeight();

    // }

};
pageTwentyEight.handleHeight = function () {
    $(".cell-vertical-28").css("height", ((handelPage.height * (0.122)) + heightVertical) + 'px');
    $("#table-models-28").css('height', heightVertical);
    //pageTwentyFour.handleHeight('#table-models-28', 30);
   // pageTwentyFour.handleHeight('.cell-vertical-28', 30);

    var heightNow = parseInt(($('#table-models-28').css("height")).replace('px', ''));
    $('#table-models-28').css({"height": (heightNow + 30) + 'px'});

    var heightNow = parseInt(($('.cell-vertical-28').css("height")).replace('px', ''));
    $('.cell-vertical-28').css({"height": (heightNow + 30) + 'px'});


    //  if (window.JSInterface) {
    $('body').addClass('model-scroll');
};

pageTwentyEight.return = function () {
    this.reset();
    pageTwentyEight.removeModel();
};
pageTwentyEight.addNewModel = function () {

    handelPage.managerEnter(27);
};
pageTwentyEight.newmodelDetail = function (idselected) {
    var data = {'model': idselected};
    pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/detail', pageTwentyEight.manage, data);
};
pageTwentyEight.removeModel = function () {
    $(".model-two-28").html('<img class="model-plus-28" src="./images/plus.png">');
    $(".model-plus-28").css({"margin-top": handelPage.height * (0.035) + 'px'});
    $(".model-two-28").removeClass("box-main-28");
    $("#table-models-28").empty();
    $("#table-models-28").css('height', 0 + 'px');
    /*  $(".head-all-28").css({'display': 'none'});*/
    $(".model-two-28").attr("onclick", "pageTwentyEight.addNewModel()");
    $(".cell-vertical-28").css("height", handelPage.height * (0.122) + 'px');
};
pageTwentyEight.drawTables = function () {
    this.drawTableCell('قیمت', pageTwentySix.obj['price_final'], this.obj['price_final'], 0);
    this.drawTableCell('رنگ محصول', pageTwentySix.obj['color'], this.obj['color'], 0);
    for (var i = 0; i < pageTwentyEight.comparison.length; i++) {
        this.drawTableCell(pageTwentyEight.comparison[i]['name'], 0, 0, 'table-main-28-' + pageTwentyEight.comparison[i]['id']);
        for (var j = 0; j < pageTwentyEight.comparison[i]['child_property'].length; j++) {
            this.drawTableItem('table-main-28-' + pageTwentyEight.comparison[i]['id'], pageTwentyEight.comparison[i]['child_property'][j]);
        }
    }
    $("#table-models-28").append('<div style="clear:both"></div>');
    $("#model-holder-28").append('<div style="clear:both;width:100%;height:30px"></div>');

    // if (window.JSInterface) {
    $("#model-holder-28").append('<div style="width:100%;height:30px;"></div>');
    //  }
    // pageTwentyFour.handleHeight('#table-models-28', 50);

};
var heightVertical = 0;
pageTwentyEight.drawTableCell = function (title, val1, val2, id) {

    var el = $("<div></div>");
    el.addClass("cell-title-28 md-middle-font");
    el.css({
        "height": handelPage.height * (0.04) + 'px',
        'line-height': handelPage.height * (0.04) + 'px'
    });
    el.html(title);
    $("#table-models-28").append('<div style="clear:both"></div>');
    $("#table-models-28").append(el);
    heightVertical += parseInt(el.outerHeight(true));
    if (title == 'قیمت') {
        var el2 = $("<div></div>");
        // el.css("margin-top",'0px');
        el2.addClass("cell-prp-28 md-middle-font");
        el2.css({
            "height": handelPage.height * (0.058) + 'px',
            'line-height': handelPage.height * (0.058) + 'px',
            'margin-bottom': handelPage.height * (0.01) + 'px',
            'margin-top': handelPage.height * (0.01) + 'px',
        });
        el2.html(val1 + ' ' + 'تومان');
        el.after(el2);
        heightVertical += parseInt(el2.outerHeight(true));
        var el3 = $("<div></div>");
        el3.addClass("cell-prp-28 md-middle-font");
        el3.css("color", '#626365');
        el3.css({
            "height": handelPage.height * (0.058) + 'px',
            'line-height': handelPage.height * (0.058) + 'px',
            'margin-bottom': handelPage.height * (0.01) + 'px',
            'margin-top': handelPage.height * (0.01) + 'px',
        });
        el3.html(val2 + ' ' + 'تومان');
        el2.after(el3);
    } else if (title == 'رنگ محصول') {
        var el2 = $("<div></div>");
        el2.addClass("cell-prp-28 md-middle-font");
        el2.css({
            "height": handelPage.height * (0.072) + 'px',
            'line-height': handelPage.height * (0.072) + 'px',
            'margin-bottom': handelPage.height * (0.01) + 'px',
            'margin-top': handelPage.height * (0.01) + 'px'
        });
        el.after(el2);
        heightVertical += parseInt(el2.outerHeight(true));

        var cBox = $("<div></div>");
        cBox.addClass("cell-circle-28");
        cBox.css({
            "height": handelPage.height * (0.072) * (0.33) + 'px',
            "width": handelPage.height * (0.072) * (0.33) + 'px',
            "margin-top": handelPage.height * (0.072) * (0.10) + 'px',
            "margin-top": handelPage.height * (0.072) * (0.10) + 'px',
            'background': pageTwentySix.obj['color_icon'],
            'border': '1px solid #0054a6'
        });
        el2.append(cBox);


        var ct = $("<div></div>");
        ct.addClass("cell-circleT-28 md-middle-font");
        ct.css({
            "height": handelPage.height * (0.072) * (0.4) + 'px',
            "line-height": handelPage.height * (0.072) * (0.4) + 'px',
            "margin-top": handelPage.height * (0.072) * (0.10) + 'px',
            'color': '#0054a6'
        });
        ct.html(pageTwentySix.obj['color']);
        el2.append('<div style="clear:both"></div>');
        el2.append(ct);


        var el3 = $("<div></div>");
        el3.addClass("cell-color-28");
        el3.css({
            "height": handelPage.height * (0.072) + 'px',
            'line-height': handelPage.height * (0.072) + 'px',
            'margin-bottom': handelPage.height * (0.01) + 'px',
            'margin-top': handelPage.height * (0.01) + 'px',
        });
        el2.after(el3);

        var cBox = $("<div></div>");
        cBox.addClass("cell-circle-28");
        cBox.css({
            "height": handelPage.height * (0.072) * (0.33) + 'px',
            "width": handelPage.height * (0.072) * (0.33) + 'px',
            "margin-top": handelPage.height * (0.072) * (0.10) + 'px',
            'background': pageTwentyEight.obj['color_icon'],
            'border': '1px solid rgb(98, 99, 101)'
        });
        el3.append(cBox);


        var ct = $("<div></div>");
        ct.addClass("cell-circleT-28 md-middle-font");
        ct.css({
            "height": handelPage.height * (0.072) * (0.4) + 'px',
            "line-height": handelPage.height * (0.072) * (0.4) + 'px',
            "margin-top": handelPage.height * (0.072) * (0.10) + 'px',
            'color': 'rgb(171, 171, 171)'
        });
        ct.html(pageTwentyEight.obj['color']);
        el3.append('<div style="clear:both"></div>');
        el3.append(ct);

    } else {
        el.attr("id", id);
    }


};
pageTwentyEight.drawTableItem = function (id, obj) {
    // console.log(obj['name']);
    var el = $("<div></div>");
    el.addClass("cell-title-28 md-middle-font");
    // el.attr("id", 'prp-28-0-' + obj['id']);
    el.css({
        "height": handelPage.height * (0.04) + 'px',
        'line-height': handelPage.height * (0.04) + 'px',
        'background': '#ababab'
    });
    el.html(obj['name']);
    $("#" + id).after(el);
    heightVertical += parseInt(el.outerHeight(true));

    var elr = $("<div></div>");
    elr.addClass("cell-table-28 cell-middle-29 md-middle-font");
    elr.attr("id", 'prp-28-0-' + obj['id']);
    elr.attr("over", '0');
    elr.css({
        "height": handelPage.height * (0.04) + 'px',
        'line-height': handelPage.height * (0.04) + 'px',
        'margin-bottom': handelPage.height * (0.01) + 'px',
        'margin-top': handelPage.height * (0.01) + 'px',
        'color': '#0054a6 !important',
        'padding-right': '0%'
    });
    elr.html('_');
    heightVertical += parseInt(elr.outerHeight(true));
    el.after(elr);

    var ell = $("<div></div>");
    ell.addClass("cell-table-28 cell-middle-29 md-middle-font");
    ell.attr("id", 'prp-28-1-' + obj['id']);
    ell.attr("over", '0');
    ell.css({
        "height": handelPage.height * (0.04) + 'px',
        'line-height': handelPage.height * (0.04) + 'px',
        'margin-bottom': handelPage.height * (0.01) + 'px',
        'margin-top': handelPage.height * (0.01) + 'px',
        'color': 'rgb(171, 171, 171)',
        'padding-right': '0%'
    });
    ell.html('_');
    elr.after(ell);
    $("#" + id).append('<div style="clear:both"></div>');
};
pageTwentyEight.fillTabels = function () {
    var objA = pageTwentySix.obj['properties'];
    var objB = pageTwentyEight.obj['properties'];

    for (var i = 0; i < objA.length; i++) {


        if (document.getElementById('prp-28-0-' + objA[i]['id'])) {
            var elemr = $("#prp-28-0-" + objA[i]['id']);
            if (objA[i]['value'] == 'دارد') {
                elemr.html('<img class="img-sts-28" src="./images/truem.png">');
                elemr.css({'padding-right': '0px', "width": "50%"});
            } else if (objA[i]['value'] == 'ندارد') {
                elemr.html('<img class="img-sts-28" src="./images/falsem.png">');
                elemr.css({'padding-right': '0px', "width": "50%"});
            } else if (objA[i]['value'] == '-') {
                elemr.css('width', '50%');
            } else {
                elemr.html(objA[i]['value']);
                elemr.removeClass("cell-middle-29");
                elemr.css("padding-right", "6%");
                var r1 = parseInt(elemr.css("width"));
                //  console.log("r1->"+r1);
                elemr.css("width", "50%");
                var r2 = parseInt(elemr.css("width"));
                // console.log("r2->"+r2);
                if (r1 > r2) {
                    elemr.attr("over", "1");
                }
            }
        }


    }
    for (var i = 0; i < objB.length; i++) {


        if (document.getElementById('prp-28-1-' + objB[i]['id'])) {
            var eleml = $("#prp-28-1-" + objB[i]['id']);
            //  console.log('id->'+eleml.attr("id"));
            //console.log('value->'+objB[i]['value'] );
            if (objB[i]['value'] == 'دارد') {
                eleml.html('<img class="img-sts-28" src="./images/truem.png">');
                eleml.css({'padding-right': '0px', "width": "50%"});
            } else if (objB[i]['value'] == 'ندارد') {
                eleml.html('<img class="img-sts-28" src="./images/falsem.png">');
                eleml.css({'padding-right': '0px', "width": "50%"});
            } else if (objB[i]['value'] == '-') {
                eleml.css('width', '50%');
            } else {
                eleml.html(objB[i]['value']);
                eleml.removeClass("cell-middle-29");
                eleml.css("padding-right", "6%");
                var l1 = parseInt(eleml.css("width"));
                // console.log("l1->"+l1);
                eleml.css("width", "50%");
                var l2 = parseInt(eleml.css("width"));
                // console.log("l2->"+l2);
                if (l1 > l2) {
                    eleml.attr("over", "1");
                }
            }
        }
        if ((eleml.attr("over") == 1) || ($("#prp-28-0-" + objB[i]['id']).attr("over") == 1)) {
            eleml.css({"height": handelPage.height * (0.1), "line-height": "", "padding-left": "6%"});
            var val1 = eleml.html();
            eleml.html("");
            eleml.append('<div class="item-long-26" style="color:#0054a6">' + val1 + '</div>');
            $("#prp-28-0-" + objB[i]['id']).css({
                "height": handelPage.height * (0.1),
                "line-height": "",
                "padding-left": "6%"
            });
            var val2 = $("#prp-28-0-" + objB[i]['id']).html();
            $("#prp-28-0-" + objB[i]['id']).html("");
            $("#prp-28-0-" + objB[i]['id']).append('<div class="item-long-26">' + val2 + '</div>');
            heightVertical += parseInt(handelPage.height * (0.06));

        }
    }
    $(".cell-table-28").css("width", "50%");
};