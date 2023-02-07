pageTwentySix = {
    selectedModel: "",logoAdd:""
};
pageTwentySix.init = function () {
    pageTwentySix.reset();

    console.log( pageTwentySix.logoAdd)
    var data = {'model': pageTwentySix.selectedModel};
    pageTwentyFour.ajaxForecast("POST", urlForecast + 'v1/detail', pageTwentySix.manage, data);

    /*    $(document).ready(function(){
            $('.slider').slider();
        });*/


};

pageTwentySix.reset = function () {
    pageTwentySix.obj = '';
    pageTwentySix.id = [];
    pageTwentySix.title = [];
    pageTwentySix.pic = [];
    pageTwentySix.paddingR = handelPage.width * (0.05) + 'px';
    $("#twentySix").css("background-color", " #e4ebf3")
    window.scrollTo(0, 0);
    $("#carousel-26-m2").empty();
    $("#model-table-26").empty();
    $(".model-title-26").empty();
    $(".model-pricee-26").empty();
    $(".model-logopic-25").attr("src","")
    $("#trait_26").addClass("select-tab-26");
    $("#search_26").removeClass("select-tab-26");
    $(".search-line-26").attr("style","display:none !important");
    $(".trait-line-26").attr("style","display:block !important");

};

pageTwentySix.manage = function (data) {


    pageTwentySix.parser(data);
    pageTwentySix.create();

};
pageTwentySix.parser = function (data2) {
    var obj = jQuery.parseJSON(data2);
    //console.log('json e model detail->' + JSON.stringify(obj['data']));
    if (obj['success'] == true) {
        pageTwentySix.obj = obj['data'];
        var z = 0;
        if( obj['data']["s_group"]==1){
            $("#model-logo-icon-26").attr("src","./images/samsungicon.png")
        }else{
            $("#model-logo-icon-26").attr("src","https://samyar.rasgames.ir/web/images/sam_icon.png?t=22")
        }
        for (var i = 0; i < pageTwentySix.obj['pic'].length; i++) {
            /* if (pageTwentySix.obj['pic'] != null) {
                 pageTwentySix.pic[z] =  pageTwentySix.obj['pic'][i];
                 z++;
             }*/
            //  console.log('pageTwentySix.obj[\'pic\']->'+pageTwentySix.obj['pic'][i]);
            if (pageTwentySix.obj['pic'][i] == null) {
                pageTwentySix.pic[z] = './images/default-model.png';
            } else {
                pageTwentySix.pic[z] = pageTwentySix.obj['pic'][i];
            }
            z++;

        }
    }
    // console.log(pageTwentySix.pic);
};

pageTwentySix.create = function () {
    $("#page-holder-26").css("display", "block");
    $(".carousel-holder-26").css("height", handelPage.height * (0.34) + 'px');
    // $(".model-logo-26").css("height", handelPage.height * (0.34) * (0.09) + 'px');
    // $(".model-logopic-25").css({
    //     "height": handelPage.height * (0.34) * (0.09) + 'px',
    //     'background-size': handelPage.height * (0.34) * (0.09) + 'px'
    // });
    $(".model-logopic-25").attr("src", pageTwentySix.logoAdd)
    pageTwentySix.slide = new slideshow({
        height: handelPage.height * (0.34),
        indicators: true,
        id: "slider-26",
        append: "#carousel-26-m2",
        img: pageTwentySix.pic,
        title: this.title,
        titleBar: false,
        typeSlide: "B"
    });
    //$('.materialboxed').materialbox();
    pageTwentySix.slide._pusse();
    $(".model-detail-26").css("height", handelPage.height * (0.07) + 'px');
    //  console.log("height e4 courlsel holder0>" + $("#slider-26").css("height"));
    $(".carousel-holder-26").css("height", parseInt($("#slider-26").css("height")) + 'px');
    $(".model-title-26").css({
        "line-height": (handelPage.height * (0.05)) + 5 + 'px',
        "height": handelPage.height * (0.05) + 'px'
    });
    $(".model-pricee-26").css({
        "line-height": handelPage.height * (0.04) + 'px',
        "height": handelPage.height * (0.04) + 'px'
    });
    if (!(this.obj['short_desc'] == null)) {
        $("#model-name-26").html('<b>' + 'مدل : ' + this.obj['title'].substr(0, 50) + '</b>');
    }

    $("#model-price-26").html(this.obj['price_final'] + ' ' + 'تومان');
    $(".model-detail-26").css("margin-bottom", handelPage.height * (0.015) + 'px');
    $(".model-detholder-26").css({
        "height": handelPage.height * (0.06) + 'px',
        // "margin-bottom": handelPage.height * (0.02) + 'px'
    });
    $(".model-detBox-26").css({
        "line-height": handelPage.height * (0.06) + 'px',
        'height': handelPage.height * (0.06) + 'px',
        // 'width': handelPage.width * (0.46) + 'px'
    });
    $(".det-pic-25").css({"margin-top": handelPage.height * (0.06 * 0.24) + 'px'});
    if (this.obj['color']) {

        var elC = $("<div></div>");
        elC.addClass("color-holder-26");
        $("#model-table-26").append(elC);


        var elR = $("<div></div>");
        elR.addClass("color-title-26");
        elR.html("رنگ های محصول");
        elC.append(elR);

        var elL = $("<div></div>");
        elL.addClass("color-items-26");
        elC.append(elL);
        $(".color-holder-26").css({"height": handelPage.height * (0.12) + 'px'});
        $(".color-title-26").css({
            "line-height": handelPage.height * (0.12) + 'px',
            'padding-right': pageTwentySix.paddingR
        });


        var elM = $("<div></div>");
        elM.addClass("color-middle-26");
        elL.append(elM);


        var elT = $("<div></div>");
        elT.addClass("color-hex-26");
        elM.append(elT);


        var elB = $("<div></div>");
        elB.addClass("color-hex-26");
        elB.css("line-height", handelPage.height * (0.06) + 'px');
        elB.html(pageTwentySix.obj['color']);
        elM.append(elB);
        elM.css("width", handelPage.width * (0.20) + 'px');


        var elCircle = $("<div></div>");
        elCircle.addClass("color-circle-26");
        elCircle.css("background-color", pageTwentySix.obj['color_icon']);
        elT.append(elCircle);
        elCircle.css({"width": parseInt($(".color-circle-26").css("height"))});


        var elct = $("<div></div>");
        elct.addClass("color-circle-26");
        //  elct.css("background-color","red");
        elT.append(elCircle);




    }
    var subHeight = 0;
    for (var i = 0; i < pageTwentySix.obj['subparent'].length; i++) {

        //   console.log(pageTwentySix.obj['subparent'][i]);

        var elItem = $("<div></div>");
        elItem.addClass("model-item-26-");
        $("#model-table-26").append(elItem);

        var el = $("<div></div>");
        el.addClass("model-parent-26");
        el.attr("id", "model-parent-26-" + i);
        ///  console.log("id->"+ "model-parent-26-" + i);
        el.css({
            "height": handelPage.height * (0.06) + 'px',
            "line-height": handelPage.height * (0.06) + 'px',
            'padding-right': pageTwentySix.paddingR
        });
        el.html(pageTwentySix.obj['subparent'][i]['name']);
        elItem.append(el);

        //  console.log('properties->'+pageTwentySix.obj['properties']);

        var traits = pageTwentyFour.filterByProperty(pageTwentySix.obj['properties'], 'parent_id', pageTwentySix.obj['subparent'][i]['id']);
        //  console.log('traaaits->'+JSON.stringify(traits));

        for (var j = 0; j < traits.length; j++) {

            var elTrait = $("<div></div>");
            elTrait.addClass("model-traits-26");
            elTrait.css({
                // "height": handelPage.height * (0.06) + 'px',
                // "line-height": handelPage.height * (0.06) + 'px',
                // 'padding-right': pageTwentySix.paddingR
            });
            // el.html(pageTwentySix.obj['subparent'][i]['name']);
            elItem.append(elTrait);


            var ttitle = $("<div></div>");
            ttitle.addClass("trait-title-26");
            ttitle.css({
                "height": handelPage.height * (0.06) + 'px',
                "line-height": handelPage.height * (0.06) + 'px',
                'padding-right': pageTwentySix.paddingR
            });
            ttitle.html(traits[j]['key']);
            elTrait.append(ttitle);
            var t1 = parseInt(ttitle.css("width"));
            // console.log('width 1->'+t1);
            ttitle.css("width", "70%");
            var t2 = parseInt(ttitle.css("width"));
            //  console.log('width 1 after change->'+t2);
            if (t1 > t2) {
                /*ttitle.css({
                    "height": handelPage.height * (0.12) + 'px',"line-height":""
                });
                ttitle.html("");
                ttitle.append('<div class="item-long-26">'+traits[j]['key']+'</div>');*/
            }

            var tvalue = $("<div></div>");
            tvalue.addClass("trait-title-26");
            tvalue.css({
                "height": (t1 > t2 ? handelPage.height * (0.06) : handelPage.height * (0.06)) + 'px',
                "line-height": (t1 > t2 ? handelPage.height * (0.06) : handelPage.height * (0.06)) + 'px'
            });
            tvalue.html(traits[j]['value']);
            elTrait.append(tvalue);
            var e1 = parseInt(tvalue.css("width"));
            // console.log('width 2->'+e1);
            tvalue.css("width", "30%");
            var e2 = parseInt(tvalue.css("width"));
            // console.log('width 2 after change->'+e2);
            if ((e1 > e2) || (t1 > t2)) {
                tvalue.css({
                    "height": handelPage.height * (0.12) + 'px',
                    "line-height": "",
                    'padding-left': pageTwentySix.paddingR
                });
                tvalue.html("");
                tvalue.append('<div class="item-long-26">' + traits[j]['value'] + '</div>');

                ttitle.css({
                    "height": handelPage.height * (0.12) + 'px',
                    "line-height": "",
                    'padding-left': pageTwentySix.paddingR
                });
                ttitle.html("");
                ttitle.append('<div class="item-long-26">' + traits[j]['key'] + '</div>');
            }

            elTrait.after('<div style="clear:both"></div>');

            //  $("#model-table-26").append('<div style="clear:both"></div>');


        }

        subHeight += parseInt(elItem.css("height"));
    }
    // console.log('subHeight->'+subHeight);
    //  console.log('height all->'+(handelPage.height * (0.12))+subHeight+10);
    $("#model-table-26").css("height", (handelPage.height * (0.12)) + subHeight + 10 + 'px');
    $("#model-table-26").append('<div style="clear:both"></div>');
    pageTwentyFour.handleHeight('#model-table-26', 30);

};
pageTwentySix.slideItem = function (status) {

    (status == '0' ? pageTwentySix.slide._next() : pageTwentySix.slide._prev());
    pageTwentySix.slide._pusse();
};
pageTwentySix.return = function () {

    this.reset();
};
pageTwentySix.ClickItem = function (id) {
};
pageTwentySix.endScroll = function () {
};
pageTwentySix.serach = function () {
    $("#trait_26").removeClass("select-tab-26");
    $("#search_26").addClass("select-tab-26");
    $(".search-line-26").attr("style","display:block !important");
    $(".trait-line-26").attr("style","display:none !important");
    handelPage.managerEnter(28);
};
pageTwentySix.trait = function () {
    $("#search_26").removeClass("select-tab-26");
    $("#trait_26").addClass("select-tab-26");
    $(".trait-line-26").attr("style","display:block !important");
    $(".search-line-26").attr("style","display:none !important");
    pageTwentyNine.selectedModel = pageTwentySix.selectedModel
    handelPage.managerEnter(29);

};
