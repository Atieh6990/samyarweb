pageTwentyNine = {
    selectedModel: ""
};
pageTwentyNine.init = function () {
    var data = {'model': pageTwentyNine.selectedModel};
    pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/modeleducat', pageTwentyNine.manage, data);

};

pageTwentyNine.reset = function () {
    window.scrollTo(0, 0);
    $("#collapsible-28").empty();
    $(".head-title-29").html("");
    pageTwentyNine.data = '';
};

pageTwentyNine.manage = function (data) {

    pageTwentyNine.parser(data);
    pageTwentyNine.create();
};
pageTwentyNine.parser = function (data2) {
    var obj = jQuery.parseJSON(data2);
    //  console.log('suceeeeeeeeeeess->' + obj['success']);
    if (obj['success'] == true) {
        pageTwentyNine.data = obj['data'];
    } else {
        managementRel.tost(obj['error']['message']['q']);
    }
};

pageTwentyNine.create = function () {
    $(".head-holder-29").css({
        "height": handelPage.height * (0.079) + 'px',
        'margin-bottom': handelPage.height * (0.017) + 'px'
    });
    $(".head-title-29").css({
        "height": handelPage.height * (0.079) + 'px',
        'line-height': handelPage.height * (0.079) + 'px'
    });
    $(".head-logo-29").css({'margin-top': handelPage.height * (0.079) * (0.28) + 'px'});
    $(".head-title-29").html(pageTwentySix.obj['title']);

    for (var i = 0; i < pageTwentyNine.data.category.length; i++) {

        var elli = $("<li></li>");
        $("#collapsible-28").append(elli);

        var el = $("<div></div>");
        el.addClass("edu-main-29 collapsible-header");
        el.attr("select", 0);
        el.attr("id", "collapse-28-" + pageTwentyNine.data.category[i]['id']);
        // el.html(pageTwentyNine.data.category[i]['name']);
        el.attr('onClick', 'pageTwentyNine.closeCollapsible(id)');
        el.css({
            'height': handelPage.height * (0.081) + 'px',
            'line-height': handelPage.height * (0.081) + 'px',
            'margin-bottom': handelPage.height * (0.015) + 'px'
        });
        elli.append(el);

        var eltitle = $("<div></div>");
        eltitle.css('width', '95%');
        eltitle.html(pageTwentyNine.data.category[i]['name']);
        el.append(eltitle);

        var ell = $("<div></div>");
        ell.attr("id", "clarrow-28-" + pageTwentyNine.data.category[i]['id']);
        ell.addClass("edu-left-29");
        el.append(ell);

        var arrow = $("<img>");
        arrow.addClass("edu-img-29");
        arrow.css({"top": handelPage.height * (0.081) * (0.03) + 'px'});
        arrow.attr("src", "./images/eduarrow.png");
        ell.append(arrow);


        var elc = $("<div></div>");
        elc.addClass("collapsible-body");
        elc.css({
            'padding-bottom': handelPage.height * (0.03) + 'px !important',
            'margin-bottom': handelPage.height * (0.014) + 'px'
        });
        el.after(elc);


        var education = pageTwentyFour.filterByProperty(pageTwentyNine.data['education'], 'category_id', pageTwentyNine.data.category[i]['id']);

        //console.log('education->'+education);

        for (var j = 0; j < education.length; j++) {

            var el2 = $("<div></div>");
            el2.addClass("edu-item-29 fc-small-font");
            el2.attr("id", "edu-item-29-" + education[j]['id']);
            el2.attr('onClick', 'pageTwentyNine.ClickItem(id)');
            el2.html(education[j]['title']);
            el2.css({
                'height': handelPage.height * (0.061) + 'px',
                'line-height': handelPage.height * (0.061) + 'px',
                'margin-bottom': handelPage.height * (0.005) + 'px'
            });
            elc.append(el2);

            var elr = $("<div></div>");
            elr.addClass("edu-line-29");
            el2.append(elr);

            var eli = $("<img>");
            eli.addClass("edu-blue-29");
            //eli.css({"top":handelPage.height * (0.081) *(0.03)+ 'px'});
            eli.attr("src", "./images/arrowblue.png");
            el2.append(eli);

        }

    }
    if (pageTwentyNine.data.category.length == 0) {
        managementRel.tost("در حال حاضر این محصول ویژگی ندارد");
    }

    $("#page-holder-29").css({"display": "block", 'height': handelPage.height + 'px'});
    pageTwentyFour.handleHeight('#page-holder-29', 24);
};

pageTwentyNine.return = function () {
    this.reset();
};
pageTwentyNine.ClickItem = function (id) {
    var mainID = (id.split('-'))[3];
    // console.log('item id->'+mainID);

    var itemArr = pageTwentyFour.filterByProperty(pageTwentyNine.data['education'], 'id', mainID);

    //  console.log(JSON.stringify(itemArr));

    if ((itemArr[0]['file'] == null) || (itemArr[0]['file'] == "")) {
        var data = {
            userID: managementRel.getCookie("id"),
            id: mainID
        };

        handelPage.managerEnter(4);
        ajax("POST", dir, pageFour.init, "act=product&type=detail" + setParamsAjax(data));
    } else {
        // alert("fuck");
        // console.log(itemArr[0]['file']);
        // console.log('avali->'+'https://samyar.rasgames.ir/pannel/samyar/public/uploads/shares/education/'+ itemArr[0]['file']+',dovomi=>'+itemArr[0]['title']);
        managementRel.playVideo(itemArr[0]['file'], itemArr[0]['title']);
    }


};
pageTwentyNine.closeCollapsible = function (id) {
    var mainID = id.split('-');
    $(".edu-left-29").removeClass("hide-arrow-28");
    $(".edu-main-29").removeClass("hide-space-28");
    $("#" + id).addClass("hide-space-28");
    $("#clarrow-28-" + mainID[2]).addClass("hide-arrow-28");
    var isSelect = 0;
    ($("#" + id).attr("select") == 1 ? isSelect = 1 : "");
    /* if($("#"+id).attr("select")==1){
         isSelect=1;
     }*/
    $(".edu-main-29").attr("select", 0);
    (isSelect == 1 ? $("#" + id).attr("select", 0) : $("#" + id).attr("select", 1));
    /*  if(isSelect==1){
          $("#"+id).attr("select",0);
      }else{
          $("#"+id).attr("select",1);
      }*/
    var numItems = $('.edu-main-29[select="1"]').length;
    if (numItems == 0) {

        $(".edu-left-29").removeClass("hide-arrow-28");
        $(".edu-main-29").removeClass("hide-space-28");
    }
};
