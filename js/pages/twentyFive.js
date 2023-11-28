pageTwentyFive = {};
pageTwentyFive.init = function () {
    pageTwentyFive.reset();
    pageTwentyFive.productID = pageSeven.SevenObj["id"][pageSeven.index[2]];
    // pageTwentyFive.productID =  3;
    var data = {'product': pageTwentyFive.productID, 'filter': pageTwentyFive.filter};
    console.log(JSON.stringify(data));
    pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/modellist', pageTwentyFive.manage, data);
};

pageTwentyFive.reset = function () {
    $("html").css("overflow", "");
    $("#model-holder-25").empty();
    pageTwentyFive.id = [];
    pageTwentyFive.title = [];
    pageTwentyFive.price = [];
    pageTwentyFive.realPrice = [];
    pageTwentyFive.pic = [];
    pageTwentyFive.data = [];
    pageTwentyFive.isFest = [];
    pageTwentyFive.festPrice = [];
    pageTwentyFive.next = "";
    pageTwentyFive.last = "";
    pageTwentyFive.price = [];
    pageTwentyFive.filter = 'maxprice';
    pageTwentyFive.productID = '';
    pageTwentyFive.from = '';
    pageTwentyFive.to = '';
    pageTwentyFive.selectedModel = '';
    pageTwentyFive.s_group=[]
};

pageTwentyFive.manage = function (data) {
    pageTwentyFive.drawHead();
    pageTwentyFive.parser(data);
    // alert(JSON.stringify(pageTwentyFive.data));
    if (pageTwentyFive.data.length != 0) {
        pageTwentyFive.create();
    } else {
        managementRel.tost("44  اختلال در برقراری ارتباط با اینترنت");
    }
};
pageTwentyFive.parser = function (data2) {
    var obj = jQuery.parseJSON(data2);
    // console.log('suceeeeeeeeeeess->' + obj['success']);
    // alert(obj['success']+','+obj['error']['message']);
    //alert(obj['success']);
    if (obj['success'] == true) {
        this.data = obj['data'];
        var start = (obj['meta']['from']) - (1);
        pageTwentyFive.next = obj['links']['next'];
        pageTwentyFive.last = obj['links']['last'];
        pageTwentyFive.from = (obj['meta']['from'] - 1);
        pageTwentyFive.to = (obj['meta']['to']);

        for (var i = 0; i < this.data.length; i++) {

                pageTwentyFive.s_group[i + start]=this.data[i]['s_group'];

            this.id[i + start] = this.data[i]['id'];
            this.title[i + start] = this.data[i]['title'];
            if (this.data[i]['thumbnail'] == null) {
                this.pic[i + start] = './images/default-model.png';
            } else {
                this.pic[i + start] = this.data[i]['thumbnail'];
            }
            this.isFest[i + start] = this.data[i]['is_festival'];
            this.price[i + start] = this.data[i]['price'];
            this.realPrice[i + start] = this.data[i]['price_final'];
            //  (this.isFest[i + start] == '1' ? this.festPrice[i + start] = this.data[i]['festival']['price'] : this.festPrice[i + start] = "");
            (((this.isFest[i + start] == '1') && (this.data[i]['festival'] != null)) ? this.festPrice[i + start] = this.data[i]['festival']['price'] : this.festPrice[i + start] = "");

        }

    }
};
pageTwentyFive.drawHead = function () {
    $(".head-filter-25").css({
        "height": handelPage.height * (0.067) + 'px',
        'line-height': handelPage.height * (0.067) + 'px'
    });
    $(".filter-img-25").css({
        "height": handelPage.height * (0.03) + 'px',
        "margin-right": handelPage.width * (0.107) + 'px',
        "margin-top": handelPage.height * (0.018) + 'px'
    });
    $("#model-holder-25").css("margin-top", handelPage.height * (0.067) + 'px');
    $(".filter-txt-25").css("margin-right", handelPage.width * (0.025) + 'px');

};
pageTwentyFive.create = function () {
    // console.log("ptwentyfive from->" + pageTwentyFive.from + ',to=>' + pageTwentyFive.to);
    console.log("title->" + pageTwentyFive.title);
    $(".head-holder-25").css("display", "block");
    /*console.log('real price=>'+this.realPrice);
    console.log('price=>'+this.price);*/
    this.table = new table({
        title: this.title,
        festPrice: this.festPrice,
        price: this.price,
        realPrice: this.realPrice,
        height: handelPage.height * (0.379),
        width: handelPage.width * (0.460),
        baseId: "model-item-25-",
        baseClass: "model-items-25",
        className: "model-items-25 model-items-25 waves-effect waves-light",
        model: "B",
        appendEl: "#model-holder-25",
        img: this.pic,
        onclick: "pageTwentyFive.ClickItem(id)",
        marginRight: parseInt(handelPage.width * (0.023)),
        marginTop: parseInt(handelPage.height * (0.015)),
        endScrollFun: "pageTwentyFive.endScroll()",
        from: pageTwentyFive.from,
        to: pageTwentyFive.to,
        s_group: pageTwentyFive.s_group
    });

    var numberRow = parseInt(Math.ceil((this.to) / 2));
    var pageHeight = parseInt(parseInt($(".model-items-25").outerHeight(true) * numberRow) + parseInt(handelPage.height * (0.067)));
    // alert("end 25->" + this.to + ",row num=>" + numberRow+",oputeh height->"+$(".model-items-25").outerHeight(true)+',pageHeight->'+pageHeight);
    $("#model-holder-25").css({"height": pageHeight + 'px', "min-height": handelPage.height + 'px'});

    // console.log("ffff");
    pageTwentyFour.handleHeight('#model-holder-25', 24);
    // ((pageTwentyFive.from == '0') ? pageTwentyFive.endScroll() : '');

};
pageTwentyFive.drawFilters = function () {
    handelPage.managerEnter(27);

};
tk2 = '9F9C3A0';
pageTwentyFive.drawSorts = function () {
    $("#mi-back-25").addClass("mi-show-25");
    $("#mi-sortHolder-25").addClass("mi-show-25");
    $('body').addClass('stop-scrolling');
    $("html").css("overflow", "");
    $("#mi-back-25").css("height", $("#twentyFive").css("height"));
    $("#mi-sortHolder-25").css({
        "width": handelPage.width * (0.72) + 'px',
        'height': handelPage.height * (0.26) + 'px'
    });
    $(".mi-filter-25").css({"width": handelPage.width * (0.72) + 'px', 'height': handelPage.height * (0.050) + 'px'});
    $(".mi-sortr-25").css({'padding-top': handelPage.height * (0.0083) + 'px'});
    $(".radio-lable-25").css({'line-height': handelPage.height * (0.050) + 'px'});
    //  $(".mi-radio-25").attr("checked","false");

};
pageTwentyFive.closeSorts = function (id) {

    var idFilter = id.split('-');
    if (idFilter[1] == 'filter') {
        managementRel.showLoading();
        var valuefilter = $("#mi-radio-" + idFilter[2]).attr("value");
        productID = pageTwentyFive.productID;
        setTimeout(function () {
            $('body').removeClass('stop-scrolling');
            $("#mi-back-25").removeClass("mi-show-25");
            $("#mi-sortHolder-25").removeClass("mi-show-25");
            pageTwentyFive.reset();
            pageTwentyFive.filter = valuefilter;
            pageTwentyFive.productID = productID;
            var data = {'product': pageTwentyFive.productID, 'filter': pageTwentyFive.filter};
            pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/modellist', pageTwentyFive.manage, data);
        }, 500);
    } else {
        $('body').removeClass('stop-scrolling');
        $("#mi-back-25").removeClass("mi-show-25");
        $("#mi-sortHolder-25").removeClass("mi-show-25");
    }


};
pageTwentyFive.return = function () {
  //  alert("return");
    this.reset();
    menu.titleBar("images/21.png", "اطلاعات محصولات");
};
pageTwentyFive.ClickItem = function (id) {
    //alert("model detail=>" + id);
    //console.log('this.id->'+this.id);
    var idFilter = id.split('-');
    pageTwentyFive.selectedModel = this.id[idFilter[3]];
    console.log('id e selected=>' + this.id[idFilter[3]]);
    handelPage.managerEnter(26);


};
pageTwentyFive.endScroll = function () {
    //alert(pageTwentyFive.from);
    // alert("24 end scroll");
    if ((pageTwentyFive.next != null)) {
        var data = {'product': pageTwentyFive.productID, 'filter': pageTwentyFive.filter};
        pageTwentyFour.ajaxForecast("POST", pageTwentyFive.next, pageTwentyFive.manage, data);
    } else {
        //  console.log("ended");

    }
};
