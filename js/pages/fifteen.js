pageFifteen = {
    cnt: 0, objId: '', pop: false, showpop: false
};

pageFifteen.init = function () {
    //$("#fifteen-detailNews-box").empty();
    //pageFifteen.manage("");
    $('#fifteen-box-bottom').css({'display':'none'});
    pageFifteen.pop = false;
    $('#fifteen-modal').modal({dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '44%', // Starting top style attribute
        endingTop: '20%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            pageFifteen.pop = false;
            pageFifteen.showpop = true;

        },
        complete: function () {
            pageFifteen.pop = false;
            pageFifteen.showpop = false;
        } // Callback for Modal close
    });



    $(".fifteen-item-top").css({"height": handelPage.height * 0.031 + "px", "line-height": handelPage.height * 0.031 + "px"});
    $("#fifteen-box-bottom").css({"height": handelPage.height * 0.071 + "px"});
    $("#fifteen-detail-box").css({"margin-bottom": parseInt((handelPage.height * 0.138) + 10) + "px", "margin-top": (handelPage.height * 0.031) + parseInt(6) + "px"});


    menu.titleBar(pageFourteen.FourteenObj["image"][pageFourteen.index[2]], "نظرسنجی>" + pageFourteen.FourteenObj["name"][pageFourteen.index[2]]);

    var data = {
        userID: managementRel.getCookie("id"),
        pollID: pageFourteen.FourteenObj["id"][pageFourteen.index[2]],
    }
    ajax("POST", dir, pageFifteen.manage, "act=poll&type=get" + setParamsAjax(data));


};
pageFifteen.manage = function (data) {
    pageFifteen.pop = false;
    pageFifteen.showpop = false;
    //var data1 = '{"code":34,"status":"ok","description":"list of Exams question","description2":"\u0644\u06cc\u0633\u062a \u0633\u0648\u0627\u0644\u0627\u062a \u0622\u0632\u0645\u0648\u0646 ","detail":[{"id":"1","title":"\u0647\u0648\u0627 \u06af\u0631\u0645\u0645\u0647\u061f\u061f","description":"\u062b\u062e\u0635\u0647\u062b\u0639\u062e\u06cc\u0647\u0628\u062a\u0633\u0645\u0646\u0628\u062a\u06cc\u0628","choice1":"\u0622\u0631\u0647","choice2":"\u0646\u0647","choice3":"\u0634\u0627\u06cc\u062f","choice4":null,"file":null,"image":null,"choice1_file":null,"choice2_file":null,"choice3_file":null,"choice4_file":null,"is_text":"1"},{"id":"3","title":"meshki ya ghermez","description":"\u062b\u062e\u0635\u0647\u062b\u0639\u062e\u06cc\u0647\u0628\u062a\u0633\u0645\u0646\u0628\u062a\u06cc\u0628","choice1":"meshkiiiiiiiiiiiiiii","choice2":"blaaaaaaaaaaaaaaaaaaack","choice3":"edr","choice4":"\u0631\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f\u062f","file":null,"image":null,"choice1_file":null,"choice2_file":null,"choice3_file":null,"choice4_file":null,"is_text":"1"},{"id":"2","title":"khabet maid","description":"\u062b\u062e\u0635\u0647\u062b\u0639\u062e\u06cc\u0647\u0628\u062a\u0633\u0645\u0646\u0628\u062a\u06cc\u0628","choice1":"\u0622\u0631\u0647sffsa","choice2":"\u0646\u0647asffsdf","choice3":"\u0634\u0627\u06cc\u062fasds","choice4":null,"file":null,"image":null,"choice1_file":null,"choice2_file":null,"choice3_file":null,"choice4_file":null,"is_text":"0"}],"time":"00:08:03"}';
    pageFifteen.FifteenObj = pageEleven.parser(data);

    if (pageFifteen.FifteenObj["status"] == "ok") {
        pageFifteen.cnt = 0;
        pageFifteen.create(pageFifteen.cnt);

        pageFifteen.objId = toObject(pageFifteen.FifteenObj["id"]);
    }
};

pageFifteen.quesParser = function (index) {

    // for(var i=1; pageFifteen.FifteenObj["choice"].length; i++){
    //
    // }
    var keys =[];
    var values =[];
    for (var key in pageFifteen.FifteenObj["choices"][index]) {
		keys.push(key);
	    values.push(pageFifteen.FifteenObj["choices"][index][key]);
    }
    //alert(values);
   // return new Array(pageFifteen.FifteenObj["choice1"][index], pageFifteen.FifteenObj["choice2"][index], pageFifteen.FifteenObj["choice3"][index], pageFifteen.FifteenObj["choice4"][index]);
    return new Array(keys,values);
}


pageFifteen.create = function (index) {
    $("#fifteen-question-options").empty();
    $("#fifteen-question-cnt span").html(parseInt(pageFifteen.cnt + 1, 10));

    if (pageFifteen.FifteenObj["image"][index] != "" && typeof pageFifteen.FifteenObj["image"][index] != "undefined") {


        this.content = pageFifteen.FifteenObj["title"][index] + "<img id='fifteen-click-video' src='" + pageFifteen.FifteenObj["image"][index] + "' style='width: 100%;' >";



    } else {
        this.content = pageFifteen.FifteenObj["title"][index];
    }
    $("#fifteen-questions").html(this.content);
    if (pageFifteen.FifteenObj["file"][index] != null) {
        //alert(pageFifteen.FifteenObj["file"][index])
        $("#fifteen-click-video").attr("onclick", 'managementRel.playVideo("' + dirVid + pageFifteen.FifteenObj["file"][index] + '","' + pageFifteen.FifteenObj["title"][index] + '")');

    }
    //alert(pageFifteen.quesParser(index))
    if (pageFifteen.FifteenObj["is_text"][index] == 0) {
        this.list = new list({title: pageFifteen.quesParser(index)[1], "minHeight": handelPage.height * 0.0625, baseId: "fifteen-subcat-", className: "modole-C waves-effect item-answer", appendEl: "#fifteen-question-options", model: "C",
            onclick: "pageFifteen.ClickItem(id)"});
    } else {
        $("#fifteen-question-options").html('<label for="fifteen-cm">نظر</label><div class="input-field col s12 rtl"><textarea style="min-height:' + handelPage.height * 0.125 + 'px" id="fifteen-cm" class="fifteen-cm"></textarea></div>')
    }
};







pageFifteen.nextBtn = function () {
    if (pageFifteen.cnt < pageFifteen.FifteenObj["choice1"].length - 1) {

        if (pageFifteen.FifteenObj["is_text"][pageFifteen.cnt] == 1) {
            pageFifteen.objId[pageFifteen.FifteenObj["id"][pageFifteen.cnt]] = "" + $("#fifteen-cm").val();
        }


        pageFifteen.cnt++;
        pageFifteen.create(pageFifteen.cnt);

        if (pageFifteen.FifteenObj["is_text"][pageFifteen.cnt] == 1) {
            this.num = (pageFifteen.objId[pageFifteen.FifteenObj["id"][pageFifteen.cnt]]);
            $("#fifteen-cm").val(this.num)
        } else {
            this.num = (pageFifteen.objId[pageFifteen.FifteenObj["id"][pageFifteen.cnt]]) - 1;
            $("#fifteen-subcat-" + this.num).addClass("fifteen-active");
        }

    } else {
        var data = {
            userID: managementRel.getCookie("id"),
            pollID: pageFourteen.FourteenObj["id"][pageFourteen.index[2]],
            answers: pageFifteen.objId
        }
        ajax("POST", dir, pageFifteen.resultPoll, "act=poll&type=done" + setParamsAjax(data));
    }

};
pageFifteen.prvBtn = function () {

    if (pageFifteen.cnt > 0) {
        pageFifteen.cnt--;
        pageFifteen.create(pageFifteen.cnt);

        if (pageFifteen.FifteenObj["is_text"][pageFifteen.cnt] == 1) {
            this.num = (pageFifteen.objId[pageFifteen.FifteenObj["id"][pageFifteen.cnt]]);
            $("#fifteen-cm").val(this.num)
        } else {
            this.num = (pageFifteen.objId[pageFifteen.FifteenObj["id"][pageFifteen.cnt]]) - 1;
            $("#fifteen-subcat-" + this.num).addClass("fifteen-active");
        }



    }

};
pageFifteen.return = function () {

    pageFifteen.cnt = 0;
    $("#fifteen-questions").empty();
    $("#fifteen-question-options").empty();
    $("#fifteen-question-cnt span").empty();
    menu.titleBar("images/20.png", "نظر سنجی");
};

pageFifteen.closePoll = function () {
    
    handelPage.managerReturn();
}

pageFifteen.ClickItem = function (id) {

    $(".item-answer").removeClass("fifteen-active");
    $("#" + id).addClass("fifteen-active");
    pageFifteen.index = id.split("-");

    //var a =eval('b.1=2') ;
   // alert(parseInt(parseInt(pageFifteen.quesParser(pageFifteen.cnt)[0][pageFifteen.index[2]])));
    pageFifteen.objId[pageFifteen.FifteenObj["id"][pageFifteen.cnt]] = "" + parseInt(parseInt(pageFifteen.quesParser(pageFifteen.cnt)[0][pageFifteen.index[2]]), 10);
    pageFifteen.nextBtn();
    //alert(JSON.stringify(pageFifteen.objId))






    //alert(pageEight.EightObj["name"][pageEight.index[2]])
//alert(pageFifteen.FifteenObj["file"][pageFifteen.index[2]])



    /*  handelPage.managerEnter(11);
     var data = {
     userID: managementRel.getCookie("id"),
     examID: pageFifteen.FifteenObj["id"][pageFifteen.index[2]]
     }
     ajax("POST", dir, pageFour.init, "act=exam&type=get" + setParamsAjax(data));*/

    //managementRel.playVideo();
};

pageFifteen.resultPoll = function (data) {
    mylog.log(data);
    var obj = jQuery.parseJSON(data);

    handelPage.managerReturn();
    pageFourteen.init();

    managementRel.tost(obj['description2']);

}




