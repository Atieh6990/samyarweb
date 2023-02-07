pageTwentySeven = {};
pageTwentySeven.init = function () {
    pageTwentySeven.reset();
    pageTwentySeven.drawHead();

};

pageTwentySeven.reset = function () {
    //alert('reset');
    window.scrollTo(0, 0);
    $(".filter-text-27").val("");
    $("html").css("overflow", "");
    $("#model-holder-27").empty();
    pageTwentySeven.id = [];
    pageTwentySeven.title = [];
    pageTwentySeven.price = [];
    pageTwentySeven.pic = [];
    pageTwentySeven.data = [];
    pageTwentySeven.isFest = [];
    pageTwentySeven.festPrice = [];
    pageTwentySeven.next = "";
    pageTwentySeven.last = "";
    pageTwentySeven.price = [];
    pageTwentySeven.realPrice = [];
    // pageTwentySeven.filter = 'maxprice';
    //  pageTwentyFive.productID = '';
    pageTwentySeven.from = '';
    pageTwentySeven.to = '';
    pageTwentySeven.isAll = 0;
    pageTwentySeven.s_group=[]
    //  pageTwentyFive.selectedModel='';
    //pageTwentyEight.isSelect=0;
};

pageTwentySeven.manage = function (data) {
    // console.log('data sare mnanage 27->'+data);
    pageTwentySeven.parser(data);
    pageTwentySeven.create();
};
pageTwentySeven.parser = function (data2) {
    var obj = jQuery.parseJSON(data2);
    //  console.log('suceeeeeeeeeeess->' + obj['success']);
    if (obj['success'] == true) {
        pageTwentySeven.data = obj['data'];
        var start = (obj['meta']['from']) - (1);
        pageTwentySeven.next = obj['links']['next'];
        pageTwentySeven.last = obj['links']['last'];
        pageTwentySeven.from = (obj['meta']['from'] - 1);
        pageTwentySeven.to = (obj['meta']['to']);
        // console.log('size e data->?'+obj['data'].length);
        for (var i = 0; i < this.data.length; i++) {

            this.id[i + start] = this.data[i]['id'];
            this.title[i + start] = this.data[i]['title'];
           // this.pic[i + start] = this.data[i]['thumbnail'];
            if(this.data[i]['thumbnail']==null){
                this.pic[i + start] = './images/default-model.png';
            }else {
                this.pic[i + start] = this.data[i]['thumbnail'];
            }
            this.isFest[i + start] = this.data[i]['is_festival'];
            this.realPrice[i + start] = this.data[i]['price_final'];
            this.price[i + start] = this.data[i]['price'];
            (this.isFest == '1' ? this.festPrice[i + start] = this.data[i]['festival']['price'] : this.festPrice[i + start] = "");
            pageTwentySeven.s_group[i + start]=this.data[i]['s_group'];
        }

    } else {
        managementRel.tost(obj['error']['message']['q']);
    }
};
pageTwentySeven.drawHead = function () {
    $(".head-holder-27").css({
        "height": handelPage.height * (0.067) + 'px',
        'line-height': handelPage.height * (0.067) + 'px',
        'width': handelPage.width + 'px'
    });
    $(".filter-text-27").css({
        "height": handelPage.height * (0.067) + 'px',
        'line-height': handelPage.height * (0.067) + 'px',
        'width': handelPage.width + 'px'
    });
    $(".filter-img-27").css({
        "height": handelPage.height * (0.03) + 'px',
        "margin-right": handelPage.width * (0.107) + 'px',
        "margin-top": handelPage.height * (0.018) + 'px'
    });

    $("#model-holder-27").css("margin-top", handelPage.height * (0.067) + 'px');
    // $(".filter-txt-25").css("margin-right", handelPage.width * (0.025) + 'px');
};
pageTwentySeven.create = function () {
    //console.log("id0>"+this.id);
    if (this.data.length != 0) {
        this.table = new table({
            title: this.title,
            festPrice: this.festPrice,
            price: this.price,
            realPrice: this.realPrice,
            height: handelPage.height * (0.379),
            width: handelPage.width * (0.460),
            baseId: "model-item-27-",
            baseClass: "model-items-25",
            className: "model-items-25 model-items-25 waves-effect waves-light",
            model: "B",
            appendEl: "#model-holder-27",
            img: this.pic,
            onclick: "pageTwentySeven.ClickItem(id)",
            marginRight: parseInt(handelPage.width * (0.023)),
            marginTop: parseInt(handelPage.height * (0.015)),
            endScrollFun: "pageTwentySeven.endScroll()",
            from: pageTwentySeven.from,
            to: pageTwentySeven.to,
            s_group: pageTwentySeven.s_group
        });
       /* var numberRow = parseInt(Math.ceil((this.id.length) / 2));
        var pageHeight = numberRow * (handelPage.height * (0.379) + parseInt(handelPage.height * (0.015)) + parseInt(handelPage.height * (0.03))) + parseInt(handelPage.height * (0.015));
*/
        var numberRow = parseInt(Math.ceil((this.to) / 2));
        var pageHeight=parseInt(parseInt($(".model-items-25").outerHeight(true)*numberRow)+parseInt(handelPage.height * (0.067)));
        $("#model-holder-27").css({"height": pageHeight + 'px', "min-height": handelPage.height + 'px'});
        pageTwentyFour.handleHeight('#model-holder-27', 24);
    } else {
        // console.log('data khali');
        managementRel.tost("جستجوی شما نتیجه نداشت");
    }
    //((pageTwentySeven.from == '0') ? pageTwentyFive.endScroll() : '');
};

pageTwentySeven.return = function () {
   // console.log('27->'+managePage.direction);
    this.reset();
};
pageTwentySeven.ClickItem = function (id) {
    // alert("model detail=>" + id);
    var idFilter = id.split('-');
    pageTwentyFive.selectedModel = this.id[idFilter[3]];
    // console.log(managePage.direction);
     var lastPage=managePage.direction[(managePage.direction.length) - 2];
    // alert('lastPage->'+lastPage);
  //  alert(pageTwentyEight.isSelect);
    if (lastPage==28) {
        pageTwentyEight.newmodelDetail(this.id[idFilter[3]]);
    } else {
        // console.log('id e selected dar safe 27=>'+this.id[idFilter[3]]);
        handelPage.managerEnter(26);
    }


};
pageTwentySeven.endScroll = function () {
    //alert("end scroll 27,"+pageTwentySeven.next+',is all->'+pageTwentySeven.isAll);
    if ((pageTwentySeven.next != null)) {
        pageTwentySeven.searchItem(pageTwentySeven.isAll, 0);
    } else {
        // console.log("ended");
    }
};
pageTwentySeven.searchItem = function (status, isNew) {
    if((handelPage.page==27)||(handelPage.page==25)) {
        var valueSearch = $(".filter-text-27").val();
        if (valueSearch.length >= 3) {
            if (isNew == 1) {
                // alert('khali kon=>'+this.from);
                //console.log('khaaaali kon');
                this.reset();
                $(".filter-text-27").val(valueSearch);

            }
            pageTwentySeven.isAll = status;
            if (status == 0) {
                var data = {'q': valueSearch};
            } else {
                var data = {'q': valueSearch, 'product': pageTwentyFive.productID};
            }
            pageTwentyFour.ajaxForecast("POST", (pageTwentySeven.next != '' ? pageTwentySeven.next : urlForecast + 'v1/search'), pageTwentySeven.manage, data);
        } else {
            managementRel.tost("برای جستجو بیشتر از 3 کلمه وارد کنید");
        }
    }
};
