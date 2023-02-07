pageTwentyTwo = {};
pageTwentyTwo.test = function(){
    alert("test")
};
pageTwentyTwo.init = function () {

    $("#twentytwo-detailNews-box").empty();
    menu.titleBar("images/34.png", "من یک متخصصم");

    var data = {
        userID: managementRel.getCookie("id"),
        cntID: pageTwenty.TwentyObj['id'][pageTwenty.index[2]],
    }

    ajax("POST", dir, pageTwentyTwo.manage, "act=contest&type=get" + setParamsAjax(data));
    //ajax("POST", dir, pageTwentyTwo.manage, "act=contest&type=detail" + setParamsAjax(data));


};
pageTwentyTwo.manage = function (data) {

    pageTwentyTwo.TwentyTwoObj = pageTwentyTwo.parser(data);
    mylog.log('parser-> ' + pageTwentyTwo.TwentyTwoObj);

    // if (typeof  pageTwentyTwo.TwentyTwoObj['id'] != "undefined" && pageTwenty.TwentyObj['id'][pageTwenty.index[2]].length > 0)
    pageTwentyTwo.create();


   // $('html, body').animate({ scrollTop: 2000 }, 50);

    // else
    //  managementRel.tost("لیست فیلمها وجود ندارد");


}

pageTwentyTwo.parser = function (data) {
    mylog.log('dataaaaa->' + data);
    pageTwentyTwo.id = [];
    pageTwentyTwo.name = [];
    pageTwentyTwo.rate = [];
    pageTwentyTwo.value = [];
    pageTwentyTwo.ratecount = [];
    pageTwentyTwo.image = [];
    pageTwentyTwo.url = "";
    pageTwentyTwo.hls = "";
    pageTwentyTwo.is_rated = "";
    pageTwentyTwo.rate_user = "";


    var obj = jQuery.parseJSON(data);
    mylog.log('statusssss->' + obj['status']);
    if (obj['status'] == "ok") {

        this.detailvideos = obj['detail']['videos'];
        this.detail = obj['detail'];
        if (typeof this.detailvideos != "undefined") {
            mylog.log('this.detail video->' + this.detailvideos.length);
            for (var i = 0; i < this.detailvideos.length; i++) {

                // mylog.log(' pageTwentyTwo.image 0->' + this.detailvideos[i]['image']);
                if (this.detailvideos[i]['id'])
                    pageTwentyTwo.id[i] = this.detailvideos[i]['id'];
                if (this.detailvideos[i]['username'])
                    pageTwentyTwo.name[i] = this.detailvideos[i]['username'];
                if (this.detailvideos[i]['image'])
                    pageTwentyTwo.image[i] = this.detailvideos[i]['image'];
                if (this.detailvideos[i]['rate'])
                    pageTwentyTwo.rate[i] = this.detailvideos[i]['rate'];
                if (this.detailvideos[i]['value'])
                    pageTwentyTwo.value[i] = this.detailvideos[i]['value'];
                if (this.detailvideos[i]['rate_count'])
                    pageTwentyTwo.ratecount[i] = this.detailvideos[i]['rate_count'];


            }
            mylog.log(' value[i]---->' + pageTwentyTwo.value);
            return {
                "id": pageTwentyTwo.id,
                "image": pageTwentyTwo.image,
                "name": pageTwentyTwo.name,
                "rate": pageTwentyTwo.rate,
                "value": pageTwentyTwo.value,
                "ratecount": pageTwentyTwo.ratecount
            };
        }
        if (typeof this.detail != "undefined") {


            pageTwentyTwo.url = this.detail['url'];
            pageTwentyTwo.hls = this.detail['hls'];
            pageTwentyTwo.is_rated = this.detail['is_rated'];
            pageTwentyTwo.rate_user = this.detail['rate_user'];
            //  mylog.log('url in parse ->' + pageTwentyTwo.url);
            mylog.log('pageTwentyTwo.rate_user ->' + pageTwentyTwo.rate_user);

        }

    } else {
        mylog.log('nooo');
        managementRel.tost(obj['description2']);
    }


};
pageTwentyTwo.create = function () {

    mylog.log('user name-|>' + pageTwentyTwo.TwentyTwoObj['name']);
    mylog.log('height------>' + handelPage.height);
    mylog.log('width------>' + handelPage.width);

    // this.table = new table({
    //     title: pageTwentyTwo.TwentyTwoObj['name'],
    //     height: handelPage.height * 0.3,
    //     width: handelPage.width * 0.43,
    //     baseId: "twentytwo-subcat-",
    //     className: "videos waves-effect waves-light",
    //     model: "A",
    //     appendEl: "#twentytwo-detailNews-box",
    //     img: pageTwentyTwo.TwentyTwoObj['image'],
    //     rate: pageTwentyTwo.TwentyTwoObj['rate'],
    //     onclick: "pageTwentyTwo.ClickItem(id)"
    // });

    this.table = new table({
        title: pageTwentyTwo.TwentyTwoObj['name'],
        height: ((345 * window.innerHeight) / 1280) ,
        width: ((300 * window.innerWidth) / 720) ,
        baseId: "twentytwo-subcat-",
        className: "videos waves-effect waves-light",
        model: "A",
        appendEl: "#twentytwo-detailNews-box",
        img: pageTwentyTwo.TwentyTwoObj['image'],
        rate: pageTwentyTwo.TwentyTwoObj['rate'],
        onclick: "pageTwentyTwo.ClickItem(id)",
        starWidth:((20 * window.innerWidth) / 720) ,
    });
};
pageTwentyTwo.return = function () {
    //   if (managePage.direction[(managePage.direction.length) - 2] == 21 || managePage.direction[(managePage.direction.length) - 2] == 22) {
    menu.titleBar("images/34.png", "من یک متخصصم");
    // }
    $("#twentytwo-detailNews-box").empty();
    // menu.titleBar(pageSeven.SevenObj["image"][pageSeven.index[2]], "" + pageSeven.SevenObj["name"][pageSeven.index[2]]);
};

pageTwentyTwo.ClickItem = function (id) {


    /* alert("Top: " + pageTwentyTwo.pos.top + " Left: " + pageTwentyTwo.pos.left);*/


    pageTwentyTwo.index = id.split("-");


    //   console.log("scroooll on");
    var scrollHeight = $("#bodyContent").height();
    var plus = 0;
    if (window.JSInterface)
        plus = 24;
    pageTwentyTwo.pos =   $(window).scrollTop() + parseInt(plus);
    //alert(pageTwentyTwo.pos);
    $(".videos").removeClass("item-22-hover");
    $("#twentytwo-subcat-" + pageTwentyTwo.index[2]).addClass("item-22-hover");

    // mylog.log('id->' + id);
    mylog.log('id ->' + pageTwentyTwo.TwentyTwoObj['id'][pageTwentyTwo.index[2]]);
    mylog.log('id ->' + pageTwentyTwo.TwentyTwoObj['id'][pageTwentyTwo.index[2]]);

    handelPage.managerEnter(23);

};
