pageEleven = {
    cnt: 0, objId: '', pop: false, showpop: false, review: false
};

pageEleven.init = function (type) {
    //$("#eleven-detailNews-box").empty();
    //pageEleven.manage("");

    pageEleven.calcPos();

    $("#eleven-prv").css({"opacity": "0"});
    $("#eleven-next").css({"opacity": "1"});
    $("#eleven-cancel").html("اتمام آزمون");
    pageEleven.pop = false;
    $('#eleven-modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '44%', // Starting top style attribute
        endingTop: '20%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            pageEleven.pop = false;
            pageEleven.showpop = true;

        },
        complete: function () {
            pageEleven.pop = false;
            pageEleven.showpop = false;
        } // Callback for Modal close
    });
    $('#eleven-modal-3').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '44%', // Starting top style attribute
        endingTop: '20%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            pageEleven.pop = false;
            pageEleven.showpop = true;

        },
        complete: function () {
            pageEleven.pop = false;
            pageEleven.showpop = false;
        } // Callback for Modal close
    });
    $('#eleven-modal-2').modal({dismissible: false});


    $(".eleven-item-top").css({
        "height": handelPage.height * 0.031 + "px",
        "line-height": handelPage.height * 0.031 + "px"
    });
    // $("#eleven-box-bottom").css({"height": handelPage.height * 0.071 + "px"});
    // $("#eleven-detail-box").css({"margin-bottom": parseInt((handelPage.height * 0.138) + 10) + "px", "margin-top": (handelPage.height * 0.031) + parseInt(6) + "px"});


    menu.titleBar(pageTen.TenObj["image"][pageTen.index[2]], "آزمون>" + pageTen.TenObj["name"][pageTen.index[2]]);

    if (typeof type == "undefined") {
        var data = {
            userID: managementRel.getCookie("id"),
            examID: pageTen.TenObj["id"][pageTen.index[2]]
        };
        ajax("POST", dir, pageEleven.manage, "act=exam&type=get" + setParamsAjax(data));
    } else {
        pageEleven.review = true;
        $("#eleven-cancel").html("خروج");
        /*$("#eleven-modal-3 h4").html("خروج");
         $("#eleven-modal-3 p").html("خروج");*/
    }
};
pageEleven.manage = function (data) {
    pageEleven.pop = false;
    pageEleven.showpop = false;
    //var data1 = '{"code":34,"status":"ok","description":"list of Exams question","description2":"\u0644\u06cc\u0633\u062a \u0633\u0648\u0627\u0644\u0627\u062a \u0622\u0632\u0645\u0648\u0646 ","detail":[{"id":"1","title":"\u0647\u0648\u0627 \u06af\u0631\u0645\u0645\u0647\u061f\u061f","description":"\u062b\u062e\u0635\u0647\u062b\u0639\u062e\u06cc\u0647\u0628\u062a\u0633\u0645\u0646\u0628\u062a\u06cc\u0628","choice1":"\u0622\u0631\u0647","choice2":"\u0646\u0647","choice3":"\u0634\u0627\u06cc\u062f","choice4":null,"file":null,"image":null,"choice1_file":null,"choice2_file":null,"choice3_file":null,"choice4_file":null,"is_text":"1"},{"id":"3","title":"meshki ya ghermez","description":"\u062b\u062e\u0635\u0647\u062b\u0639\u062e\u06cc\u0647\u0628\u062a\u0633\u0645\u0646\u0628\u062a\u06cc\u0628","choice1":"meshkiiiiiiiiiiiiiii","choice2":"blaaaaaaaaaaaaaaaaaaack","choice3":"edr","choice4":"\u0631\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f","file":null,"image":null,"choice1_file":null,"choice2_file":null,"choice3_file":null,"choice4_file":null,"is_text":"1"},{"id":"2","title":"khabet maid","description":"\u062b\u062e\u0635\u0647\u062b\u0639\u062e\u06cc\u0647\u0628\u062a\u0633\u0645\u0646\u0628\u062a\u06cc\u0628","choice1":"\u0622\u0631\u0647sffsa","choice2":"\u0646\u0647asffsdf","choice3":"\u0634\u0627\u06cc\u062fasds","choice4":null,"file":null,"image":null,"choice1_file":null,"choice2_file":null,"choice3_file":null,"choice4_file":null,"is_text":"0"}],"time":"00:08:03"}';
    pageEleven.ElevenObj = pageEleven.parser(data);
    if (pageEleven.status == "ok") {
        pageEleven.cnt = 0;
        pageEleven.create(pageEleven.cnt);

        if (!pageEleven.review) {
            this.t = pageEleven.ElevenObj.time.split(":");
            pageEleven.startTime(this.t[1], this.t[2]);
        }

        pageEleven.objId = toObject(pageEleven.id);
        pageEleven.startExam = new Date().getTime();
    }
};
pageEleven.parser = function (data) {
    // console.log("ss==========" + data);
    pageEleven.title = [];
    pageEleven.id = [];
    pageEleven.image = [];
    pageEleven.choice1 = [];
    pageEleven.choice2 = [];
    pageEleven.choice3 = [];
    pageEleven.choice4 = [];
    pageEleven.file = [];
    pageEleven.choice1_file = [];
    pageEleven.choice2_file = [];
    pageEleven.choice3_file = [];
    pageEleven.choice4_file = [];
    pageEleven.is_text = [];
    pageEleven.is_true = [];
    pageEleven.usr_ans = [];
    pageEleven.true_ans = [];
    pageEleven.choices = [];

    var obj = jQuery.parseJSON(data);
    pageEleven.status = obj['status'];
    if (obj['status'] == "ok") {
        pageEleven.detail = obj['detail'];

        for (var i = 0; i < pageEleven.detail.length; i++) {
            //mylog.log(this.detail[i]['title'])
            if (this.detail[i]['id'])
                pageEleven.id[i] = this.detail[i]['id'];

            if (this.detail[i]['title'])
                pageEleven.title[i] = this.detail[i]['title'];

            if (this.detail[i]['image'])
                pageEleven.image[i] = dirImg + this.detail[i]['image'];

            if (this.detail[i]['choice1'])
                pageEleven.choice1[i] = this.detail[i]['choice1'];

            if (this.detail[i]['choice2'])
                pageEleven.choice2[i] = this.detail[i]['choice2'];

            if (this.detail[i]['choice3'])
                pageEleven.choice3[i] = this.detail[i]['choice3'];

            if (this.detail[i]['choice4'])
                pageEleven.choice4[i] = this.detail[i]['choice4'];

            if (this.detail[i]['file'])
                pageEleven.file[i] = this.detail[i]['file'];

            if (this.detail[i]['choice1_file'])
                pageEleven.choice1_file[i] = this.detail[i]['choice1_file'];

            if (this.detail[i]['choice2_file'])
                pageEleven.choice2_file[i] = this.detail[i]['choice2_file'];

            if (this.detail[i]['choice3_file'])
                pageEleven.choice3_file[i] = this.detail[i]['choice3_file'];

            if (this.detail[i]['choice4_file'])
                pageEleven.choice4_file[i] = this.detail[i]['choice4_file'];

            if (this.detail[i]['is_text'])
                pageEleven.is_text[i] = this.detail[i]['is_text'];

            if (this.detail[i]['is_true'])
                pageEleven.is_true[i] = this.detail[i]['is_true'];

            if (this.detail[i]['usr_ans'])
                pageEleven.usr_ans[i] = this.detail[i]['usr_ans'];

            if (this.detail[i]['true_ans'])
                pageEleven.true_ans[i] = this.detail[i]['true_ans'];

            if (obj['time'])
                pageEleven.time = obj['time'];

            if (this.detail[i]['choices'])
                pageEleven.choices[i] = this.detail[i]['choices'];
        }

        return {
            "id": pageEleven.id,
            "title": pageEleven.title,
            "image": pageEleven.image,
            "choice1": pageEleven.choice1,
            "choice2": pageEleven.choice2,
            "choice3": pageEleven.choice3,
            "choice4": pageEleven.choice4,
            "file": pageEleven.file,
            "choice1_file": pageEleven.choice1_file,
            "choice2_file": pageEleven.choice2_file,
            "choice3_file": pageEleven.choice3_file,
            "choice4_file": pageEleven.choice4_file,
            "time": pageEleven.time,
            "status": pageEleven.status,
            "is_text": pageEleven.is_text,
            "is_true": pageEleven.is_true,
            "usr_ans": pageEleven.usr_ans,
            "true_ans": pageEleven.true_ans,
            "choices": pageEleven.choices
        };

    } else {

        managementRel.tost(obj['description2']);
    }


};
pageEleven.quesParser = function (index) {

    return new Array(pageEleven.ElevenObj["choice1"][index], pageEleven.ElevenObj["choice2"][index], pageEleven.ElevenObj["choice3"][index], pageEleven.ElevenObj["choice4"][index]);
}


pageEleven.create = function (index) {
    $("#eleven-question-cnt").html("سوال " + parseInt(pageEleven.cnt + 1, 10) + " از " + pageEleven.detail.length);
    $(".qElNum_11").html("سوال شماره " + parseInt(pageEleven.cnt + 1, 10))

    if (pageEleven.ElevenObj["image"][index] != "" && typeof pageEleven.ElevenObj["image"][index] != "undefined") {
        this.content = pageEleven.ElevenObj["title"][index] + "<img src='" + pageEleven.ElevenObj["image"][index] + "' style='width: 100%;'>";
    } else {
        this.content = pageEleven.ElevenObj["title"][index];
    }
    $("#eleven-questions").html(this.content);
    $("#eleven-question-options").empty()
    //alert(pageEleven.quesParser(index))
    // this.list = new list({
    //     title: pageEleven.quesParser(index),
    //     "minHeight": handelPage.height * 0.0625,
    //     baseId: "eleven-subcat-",
    //     className: "modole-C waves-effect item-answer",
    //     appendEl: "#eleven-question-options",
    //     model: "C",
    //     onclick: "pageEleven.ClickItem(id)"
    // });

    this.list = new questionOption({
        obj: pageEleven.quesParser(index),
        baseId: "eleven-subcat-",
        className: "optionEl_11",
        appendEl: "#eleven-question-options",
        sideClass: "CitemSide_11",
        sideBaseId: "eleven-side-",
        innerClss: "CElIn_11",
        baseInnerId: "eleven-option-",
        onclick: "pageEleven.ClickItem(id)",
        userAnsId: parseInt((pageEleven.ElevenObj["usr_ans"][index]) - 1),
        truAnsId: parseInt((pageEleven.ElevenObj["true_ans"][index]) - 1),
    })

    if (pageEleven.review) {

        // $("#eleven-option-" + parseInt((pageEleven.ElevenObj["usr_ans"][index]) - 1)).addClass("eleven-false");
        // $("#eleven-option-" + parseInt((pageEleven.ElevenObj["true_ans"][index]) - 1)).addClass("eleven-true");

        $("#eleven-side-" + parseInt((pageEleven.ElevenObj["usr_ans"][index]) - 1)).addClass("eleven-side-false");
        $("#eleven-side-" + parseInt((pageEleven.ElevenObj["true_ans"][index]) - 1)).addClass("eleven-side-true");

        $("#eleven-option-" + parseInt((pageEleven.ElevenObj["usr_ans"][index]) - 1)).addClass("eleven-false");
        $("#eleven-option-" + parseInt((pageEleven.ElevenObj["true_ans"][index]) - 1)).addClass("eleven-true");

        $("#eleven-subcat-" + parseInt((pageEleven.ElevenObj["usr_ans"][index]) - 1)).addClass("eleven-false");
        $("#eleven-subcat-" + parseInt((pageEleven.ElevenObj["true_ans"][index]) - 1)).addClass("eleven-true");
    }
};


pageEleven.nextBtn = function () {
    //console.log(pageEleven.cnt + '=====' + (pageEleven.ElevenObj["choice1"].length - 1));
    if (pageEleven.cnt < pageEleven.ElevenObj["choice1"].length - 1) {
        pageEleven.cnt++;
        pageEleven.create(pageEleven.cnt);
        this.num = (pageEleven.objId[pageEleven.id[pageEleven.cnt]]) - 1;
        $("#eleven-subcat-" + this.num).addClass("eleven-active");
        $("#eleven-prv").css({"opacity": "1"});


    }
    if (pageEleven.cnt == (pageEleven.ElevenObj["choice1"].length - 1)) {
        $("#eleven-next").css({"opacity": "0"});


    } else {
        // pageEleven.popopEndExam();
    }

};
pageEleven.popopEndExam = function () {
    if (pageEleven.review) {
        if (!pageEleven.showpop)
            $('#eleven-modal').modal('open');
    } else {
        if (!pageEleven.showpop)
            $('#eleven-modal-3').modal('open');
    }
}
pageEleven.prvBtn = function () {

    if (pageEleven.cnt > 0) {
        pageEleven.cnt--;
        pageEleven.create(pageEleven.cnt);

        this.num = (pageEleven.objId[pageEleven.id[pageEleven.cnt]]) - 1;
        $("#eleven-subcat-" + this.num).addClass("eleven-active");
        $("#eleven-next").css({"opacity": "1"});
        if (pageEleven.cnt == 0) {
            $("#eleven-prv").css({"opacity": "0"});
        }
    }
};
pageEleven.return = function () {
    if (pageEleven.pop) {
        clearInterval(intval);
        $('#eleven-question-time').empty();
        $("#eleven-questions").empty();
        $("#eleven-question-options").empty();
        $("#eleven-question-cnt").empty();
        $(".qElNum_11").empty();


        pageEleven.cnt = 0;

    } else {

        if (!pageEleven.showpop)
            $('#eleven-modal').modal('open');
        else
            $('#eleven-modal').modal('close');

    }

    //$("#eleven-detailNews-box").empty();
    // menu.titleBar(pageSeven.SevenObj["image"][pageSeven.index[2]], "" + pageSeven.SevenObj["name"][pageSeven.index[2]]);
};

pageEleven.closeExam = function () {
    pageEleven.pop = true;
    handelPage.managerReturn();
}
pageEleven.endExam = function () {
    if (pageEleven.review) {
        pageEleven.closeExam();
    } else {
        clearInterval(intval);
        handelPage.managerEnter(12);

        var data = {
            userID: managementRel.getCookie("id"),
            examID: pageTen.TenObj["id"][pageTen.index[2]],
            answers: pageEleven.objId,
            start: pageEleven.startExam,
            end: new Date().getTime()
        }
        ajax("POST", dir, pageEleven.resultExam, "act=exam&type=done" + setParamsAjax(data));
    }
}

pageEleven.ClickItem = function (id) {
    if (!pageEleven.review) {
        $(".item-answer").removeClass("eleven-active");
        $("#" + id).addClass("eleven-active");
        pageEleven.index = id.split("-");

        //var a =eval('b.1=2') ;
        pageEleven.objId[pageEleven.id[pageEleven.cnt]] = "" + parseInt(parseInt(pageEleven.index[2]) + 1, 10);
        pageEleven.nextBtn();
    }
    //alert(JSON.stringify(pageEleven.objId))


    //alert(pageEight.EightObj["name"][pageEight.index[2]])
//alert(pageEleven.ElevenObj["file"][pageEleven.index[2]])


    /*  handelPage.managerEnter(11);
     var data = {
     userID: managementRel.getCookie("id"),
     examID: pageEleven.ElevenObj["id"][pageEleven.index[2]]
     }
     ajax("POST", dir, pageFour.init, "act=exam&type=get" + setParamsAjax(data));*/

    //managementRel.playVideo();
};
pageEleven.startTime = function (m, s) {
    var fiveMinutes = 60 * parseInt(m, 10) + parseInt(s, 10)
    var display = $('#eleven-question-time');
    startTimer(fiveMinutes, display);
};
pageEleven.resultExam = function (data) {
    mylog.log(data);

    var obj = jQuery.parseJSON(data);


    if (obj['status'] == "ok") {
        this.results = obj['results'];

        pageEleven.trueVal = this.results["true"];
        pageEleven.falseVal = this.results["false"];
        pageEleven.ignoreVal = this.results["ignore"];
        pageEleven.durationVal = this.results["duration"];
        pageEleven.exam_score = this.results["exam_score"];
        pageEleven.all_country = this.results["all_country"];
        pageEleven.user_country = this.results["user_country"];
        pageEleven.all_state = this.results["all_state"];
        pageEleven.user_state = this.results["user_state"];
        pageEleven.all_store = this.results["all_store"];
        pageEleven.user_store = this.results["user_store"];
        pageEleven.all_score = this.results["all_score"];
        menu.score(pageEleven.all_score);
        // handelPage.managerEnter(12);
        pageTwelve.create(pageEleven.trueVal, pageEleven.falseVal, pageEleven.exam_score, pageEleven.durationVal, pageEleven.exam_score, pageEleven.all_country, pageEleven.user_country, pageEleven.all_state, pageEleven.user_state, pageEleven.all_store, pageEleven.user_store);

    }


    managementRel.tost(obj['description2']);
}


pageEleven.calcPos = function () {
    $('.pageTTParent_11').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
    $("#eleven-box-bottom").attr("style", "height :" + ((400 * window.innerHeight) / 1920) + 'px' + "");
}


var intval = "";

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    intval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
            clearInterval(intval);
            $('#eleven-modal-2').modal('open');
        }
    }, 1000);
}


function toObject(arr) {
    //alert(arr)
    var rv = {};
    for (var i = 0; i < arr.length; i++)
        if (arr[i] !== undefined)
            rv[arr[i]] = "";
    return rv;
}


function test(data) {
    //console.log(data)
}
