pageSixteen = {
    imgCrop: '', page: 1, sts: "0"
};
tk1='1256';
pageSixteen.init = function () {
    //$("#sixteen-detail-box").empty();
    if (typeof webkit != "undefined")
        $(".wrapper .inner .content").css('margin-bottom', '170px');

    pageSixteen.page = 1;

    $("#sixteen-box-tab").css({"height": handelPage.height * 0.091});
    $(".sixteen-tab").css({"margin-top": handelPage.height * 0.025, "line-height": (handelPage.height * 0.091 * 0.5) - 4 + "px"});
    $(".wrapper .content").css({"top": (handelPage.height * 0.091) + parseInt(25)});
    //$(".wrapper").css({"height":handelPage.height-menu.hMenu+"px","top":menu.hMenu+"px"})
    //$(".inner").css({"height":handelPage.height-menu.hMenu-20+"px"})

    menu.titleBar("images/24.png", "گفتگو");
    //alert(pageSixteen.page)
    var data = {
        userID: managementRel.getCookie("id"),
        page: "1",
        count: "10",
        status: pageSixteen.sts
    }
    ajax("POST", dir, pageSixteen.manage, "act=chat&type=list" + setParamsAjax(data));

}
pageSixteen.manage = function (data) {
    if (pageSixteen.page == 1) {
        pageSixteen.page++;
    }

    pageSixteen.SixteenObj = pageSixteen.parser(data);
    pageSixteen.create();

}
pageSixteen.parser = function (data) {
    mylog.log(data);
    pageSixteen.name = [];
    pageSixteen.id = [];
    pageSixteen.sender = [];
    pageSixteen.receiver = [];
    pageSixteen.date = [];
    pageSixteen.time = [];
    pageSixteen.text = [];
    pageSixteen.status = [];
    var obj = jQuery.parseJSON(data);

    if (obj['status'] == "ok") {
        this.detail = obj['chat'];
        for (var i = 0; i < this.detail.length; i++) {

            if (this.detail[i]['id'])
                pageSixteen.id[i] = this.detail[i]['id'];
            if (this.detail[i]['sender'])
                pageSixteen.sender[i] = this.detail[i]['sender'];
            if (this.detail[i]['receiver'])
                pageSixteen.receiver[i] = this.detail[i]['receiver'];
            if (this.detail[i]['date'])
                pageSixteen.date[i] = this.detail[i]['date'];
            if (this.detail[i]['time'])
                pageSixteen.time[i] = this.detail[i]['time'];
            if (this.detail[i]['text'])
                pageSixteen.text[i] = this.detail[i]['text'];
            if (this.detail[i]['status'] || this.detail[i]['status'] == 0)
                pageSixteen.status[i] = this.detail[i]['status'];
        }
        return  {"id": pageSixteen.id, "sender": pageSixteen.sender, "receiver": pageSixteen.receiver, "date": pageSixteen.date, "time": pageSixteen.time, "text": pageSixteen.text, status: pageSixteen.status};

    }


};
pageSixteen.create = function () {
    pageSixteen.creatchat();
    if (pageSixteen.SixteenObj["text"]) {
        for (var i = 0; i < pageSixteen.SixteenObj["text"].length; i++) {

            if (pageSixteen.SixteenObj["status"][i] == 1) {

                buildChat.messenger.send(pageSixteen.SixteenObj["text"][i]);
            } else {
                buildChat.messenger.recieve(pageSixteen.SixteenObj["text"][i]);
            }
            if (pageSixteen.SixteenObj["text"].length - 1 == i) {
                pageSixteen.lastId = pageSixteen.SixteenObj["id"][i];

            }
        }
    }
    //$(".me .circle-wrapper").html("<img src='" + managementRel.getCookie("avatar") + "'>");




};

pageSixteen.creatchat = function () {
    //alert("(buildChat.messenger=="+buildChat.messenger)
    if (buildChat.messenger == "") {
        buildChat.init();

        buildChat.$send.on('click', function (e) {

            buildChat.sendMessage();

        });

        buildChat.$input.on('keydown', function (e) {
            var key = e.which || e.keyCode;

            if (key === 13) {
                // enter key
                e.preventDefault();

                buildChat.sendMessage();
            }
        });

        buildChat.$inner.scroll(function () {
            mylog.log($(this).scrollTop());

            if ($(this).scrollTop() == 0) {

                pageSixteen.firstPm();

            }
        });
    }




    pageSixteen.newPM();



};

pageSixteen.newPM = function () {
    clearInterval(pageSixteen.intervalNewPm);
    pageSixteen.intervalNewPm = setInterval(function () {
        var data = {
            userID: managementRel.getCookie("id"),
            id: pageSixteen.lastId,
            status: pageSixteen.sts
        }
        ajax("POST", dir, pageSixteen.manage, "act=chat&type=newPM" + setParamsAjax(data));
    }, 6000);


}

pageSixteen.firstPm = function () {

    pageSixteen.tempHeight = $("#content").height();

    if (pageSixteen.page != -1) {
        clearInterval(pageSixteen.intervalNewPm);


        var data = {
            userID: managementRel.getCookie("id"),
            page: "" + pageSixteen.page,
            count: "10",
            status: pageSixteen.sts
        }
        ajax("POST", dir, pageSixteen.rsFirstPm, "act=chat&type=list" + setParamsAjax(data));
    }
}
pageSixteen.rsFirstPm = function (data) {

    pageSixteen.SixteenObj = pageSixteen.parser(data);

    if (typeof pageSixteen.SixteenObj["text"] != "undefined") {
        pageSixteen.page++;


        for (var i = pageSixteen.SixteenObj["text"].length - 1; i >= 0; i--) {

            if (pageSixteen.SixteenObj["status"][i] == 1) {
//alert(pageSixteen.SixteenObj["text"][i])
                buildChat.buildFirstSent(pageSixteen.SixteenObj["text"][i]);
            } else {
                buildChat.buildFirstRecieved(pageSixteen.SixteenObj["text"][i]);
            }

        }

        $("#inner").scrollTop($("#content").height() - pageSixteen.tempHeight);

        if (pageSixteen.SixteenObj["text"].length == 0) {
            pageSixteen.page = -1;
        }
    } else {
        pageSixteen.page = -1;
    }
    pageSixteen.newPM();
}
pageSixteen.return = function () {

    menu.titleBar("", "");
    $(".sixteen-tab").removeClass("sixteen-tab-active");
    $("#sixteen-2").addClass("sixteen-tab-active");
    $(".inner .content").empty();

    clearInterval(pageSixteen.intervalNewPm);

    pageSixteen.sts = "0";
    pageSixteen.page = 1;
    // alert(pageSixteen.page)
    //pageSixteen.imgCrop.croppie('destroy');

};
pageSixteen.insertPm = function (data) {
    var obj = jQuery.parseJSON(data);
    pageSixteen.newPM();
    if (obj['status'] == "ok") {

    } else {
        managementRel.tost(obj['description2']);
    }
}

pageSixteen.tabClick = function (id) {

    $(".sixteen-tab").removeClass("sixteen-tab-active");
    $("#" + id).addClass("sixteen-tab-active");
    $(".inner .content").empty();

    clearInterval(pageSixteen.intervalNewPm);
    //pageSixteen.init();
    pageSixteen.page = 1;

    switch (id) {
        case "sixteen-2":
            pageSixteen.sts = "0";
            break;
        case "sixteen-1":
            pageSixteen.sts = "1";
            break;

        default:

            break;
    }
    var data = {
        userID: managementRel.getCookie("id"),
        page: "1",
        count: "10",
        status: pageSixteen.sts
    }
    ajax("POST", dir, pageSixteen.manage, "act=chat&type=list" + setParamsAjax(data));
    pageSixteen.page = 1;
}















var buildChat = {
    messenger: ""
}
buildChat.init = function () {
    buildChat.messenger = new Messenger();
    buildChat.buildHTML = new BuildHTML();

    buildChat.$input = $('#input');
    buildChat.$send = $('#send');
    buildChat.$content = $('#content');
    buildChat.$inner = $('#inner');

    buildChat.buildHTML.meAvatar = managementRel.getCookie("avatar");
    buildChat.buildHTML.themAvatar = "images/logo.png";

    buildChat.messenger.onSend = buildChat.buildSent;
    buildChat.messenger.onRecieve = buildChat.buildRecieved;
}
buildChat.safeText = function (text) {
    buildChat.$content.find('.message-wrapper').last().find('.text-wrapper').text(text);
}

buildChat.animateText = function () {
    setTimeout(function () {
        buildChat.$content.find('.message-wrapper').last().find('.text-wrapper').addClass('animated fadeIn');
    }, 350);
}

buildChat.scrollBottom = function () {

    //$("#inner").scrollTop($($content).outerHeight(true));
    $(buildChat.$inner).animate({
        scrollTop: $(buildChat.$content).outerHeight(true)
    }, {
        queue: false,
        duration: 'ease'
    });
}

buildChat.buildSent = function (message) {
    // console.log('sending: ', message.text);

    buildChat.$content.append(buildChat.buildHTML.me(message.text));

    buildChat.safeText(message.text);
    buildChat.animateText();

    buildChat.scrollBottom();
}

buildChat.buildRecieved = function (message) {
    //console.log('recieving: ', message.text);

    buildChat.$content.append(buildChat.buildHTML.them(message.text));
    buildChat.safeText(message.text);
    buildChat.animateText();

    buildChat.scrollBottom();
}


buildChat.sendMessage = function () {
    //alert(buildChat.$input.val())
    var text = buildChat.$input.val();
    buildChat.messenger.send(text);

    clearInterval(pageSixteen.intervalNewPm);
    var data = {
        userID: managementRel.getCookie("id"),
        status: pageSixteen.sts,
        text: encode_utf8(text)
    }

    ajax("POST", dir, pageSixteen.insertPm, "act=chat&type=insert" + setParamsAjax(data));
    buildChat.$input.val('');
    buildChat.$input.focus();
}

buildChat.buildFirstSent = function (message) {
    //console.log('sending: ', message);

    buildChat.$content.prepend(buildChat.buildHTML.me(message));
    //buildChat.safeText(message);
    buildChat.animateText();

    // scrollBottom();
}

buildChat.buildFirstRecieved = function (message) {
    //console.log('recieving: ', message);

    buildChat.$content.prepend(buildChat.buildHTML.them(message));
    // buildChat.safeText(message);
    buildChat.animateText();


}



