pageTwentyFour = {
    starAppModule: "",
};
// in page baraye jamejahanie 2022 va jame melathaye asia 2023 ast va dar tarikhe 16.11.2022 taghir peyda karde ast. file taghir nayafte(baraye league ha) bename twentyFour.js dar proje vojod darad
var urlForecast = 'https://samyar.rasgames.ir/samyarpishbini/api/';
// var urlForecast = 'http://localhost/samyarpishbini/api/';

pageTwentyFour.init = function () {

    // alert('width->'+handelPage.width+',height->'+handelPage.height);

    $("html").css("overflow", "");

    pageTwentyFour.changeNav();
    $("#twentyFour").css({"background-size": handelPage.width + 'px'});
    // $(".fc-content-holder").css({"background-size": handelPage.width + 'px'});
    $(".fc-header-bar").css({"height": (handelPage.height * (0.049)) + "px", "width": handelPage.width + "px"});
    $(".fc-header-title").css({
        "line-height": (handelPage.height * (0.049)) + "px",
        "width": (handelPage.width * (0.75)) + "px"
    });
    $(".fc-header-score").css({
        "line-height": (handelPage.height * (0.049)) + "px",
        "width": (handelPage.width * (0.233)) + "px"
    });
    pageTwentyFour.reset();
    $(".fc-header-score ").html(" امتیاز : " + pageTwo.userScore);
    /*  var data = {
          userID: managementRel.getCookie("id")
      }
      ajax("POST", urlForecast + 'login', pageTwentyFour.successLogin, "act=contest&type=get" + setParamsAjax(data));*/
    var data = {};
    $(".contet-menu-bar").css("background", "#051e3c");
    pageTwentyFour.ajaxForecast("POST", urlForecast + 'groupteams', pageTwentyFour.manage, data);

}
var form_data;
pageTwentyFour.reset = function () {
    $(".fc-levelHolder").empty();
    $(".fc-level-del").remove();
    $(".fc-level-content").empty();
    $(".fc-match-footerbar").remove();
};
pageTwentyFour.changeNav = function () {
    //alert($(".menu-bar").css("height"));
    //alert($(".fc-toolbar-header").css("height"));
    $(".fc-toolbar-header").css("top", $(".menu-bar").css("height"));
    $(".contet-menu-bar").css("background", "#051e3c");
    $("#menu-back").attr('onClick', 'pageTwentyFour.return()');
    $("#menu-title").empty();
    if (isActiveFc == 0) {
        $("#bodyContent").css({"background": "url('./images/back-1.svg')", "max-height": ""});
    }
    // alert(handelPage.width);

};
pageTwentyFour.resetNav = function () {
    $(".contet-menu-bar").css("background", "#035faa");
    $("#bodyContent").css({
        "background": "",
        "max-height": (handelPage.height - 50) - ((handelPage.height) * 0.0625) + "px"
    });
    $("#menu-back").attr('onClick', 'handelPage.managerReturn()');
};
var isActiveFc = 1;
pageTwentyFour.successLogin = function (data) {
    var obj = jQuery.parseJSON(data);
    if (obj['success'] == "true") {
        pageTwentyFour.userScore = obj['data']['score'];
        pageTwentyFour.rank = obj['data']['rank'];
        pageTwentyFour.token = obj['data']['token'];
        $(".fc-header-score ").html("امتیاز : " + obj['data']['score']);
        var data = {};
        isActiveFc = 1;
        pageTwentyFour.ajaxForecast("POST", urlForecast + 'groupteams', pageTwentyFour.manage, data);
    } else if (obj['success'] == "false") {
        //alert("pekh");
        //$("#twentyFour").css({"background-size":handelPage.width+'px'});
        // $("#bodyContent").css({"background":"url('./images/back-1.svg')","background-size":handelPage.width+'px '+handelPage.height+'px'});
        $("#bodyContent").css({"background": "url('./images/back-1.svg')", "max-height": ""});
        isActiveFc = 0;
        managementRel.tost("به زودی... ");
    }
};
pageTwentyFour.manage = function (data) {
    // alert("fuck");

    pageTwentyFour.TwentyFourObj = pageTwentyFour.parser(data);
    pageTwentyFour.create();
    $(".contet-menu-bar").css("background", "#051e3c");

};
pageTwentyFour.parser = function (data2) {
    pageTwentyFour.levels = [];
    pageTwentyFour.Groups = [];
    pageTwentyFour.Matchs = [];
    pageTwentyFour.levelID = [];
    pageTwentyFour.levelname = [];
    pageTwentyFour.levelactive = [];
    pageTwentyFour.levelorder = [];
    pageTwentyFour.groupID = [];
    pageTwentyFour.groupname = [];
    pageTwentyFour.grouplvlID = [];
    pageTwentyFour.grouppic = [];
    pageTwentyFour.teams = [];
    pageTwentyFour.groups = [];
    pageTwentyFour.matches = [];
    pageTwentyFour.scoreBoard = [];
    var obj = jQuery.parseJSON(data2);
    if (obj['success'] == "true") {

        pageTwentyFour.groups = obj['data']['Groups'];
        pageTwentyFour.matches = obj['data']['Matchs'];

        for (var i = 0; i < obj['data']['levels'].length; i++) {
            pageTwentyFour.levelID[i] = obj['data']['levels'][i]['id'];
            pageTwentyFour.levelname[i] = obj['data']['levels'][i]['name'];
            pageTwentyFour.levelactive[i] = obj['data']['levels'][i]['active'];
            pageTwentyFour.levelorder[i] = obj['data']['levels'][i]['order'];
        }
        for (var j = 0; j < obj['data']['Groups'].length; j++) {
            var groupLvlID = obj['data']['Groups'][j]['level_id'];
            pageTwentyFour.groupID[j] = obj['data']['Groups'][j]['id'];
            pageTwentyFour.groupname[j] = obj['data']['Groups'][j]['name'];
            pageTwentyFour.grouplvlID[j] = obj['data']['Groups'][j]['level_id'];
            pageTwentyFour.grouppic[j] = obj['data']['Groups'][j]['pic'];
            for (var z = 0; z < obj['data']['Groups'][j]['teams'].length; z++) {
            }

        }

    }
};
pageTwentyFour.create = function () {
    $(".fc-levelHolder").css({"width": handelPage.width + 'px', "height": handelPage.height * (0.06) + 'px'});
    var elScroll = $("<div></div>");
    elScroll.addClass("fc-level-Scroll");
    $(".fc-levelHolder").append(elScroll);

    for (var i = 0; i < pageTwentyFour.levelID.length; i++) {
        var elM = $("<div></div>");
        elM.addClass("fc-levelS-item fc-middle-font");
        //el.css({"height": handelPage.height * (0.046) + 'px', "line-height": handelPage.height * (0.046) + 'px'});
        elM.css({"height": handelPage.height * (0.06) + 'px'});
        elM.attr('onClick', 'pageTwentyFour.showTab(' + (pageTwentyFour.levelID[i] == 1 ? 0 : pageTwentyFour.levelID[i]) + ');pageTwentyFour.sendMessage(' + (pageTwentyFour.levelID[i] == 1 ? 0 : pageTwentyFour.levelID[i]) + ',0)');
        elM.attr("id", "fc-tabItem-" + pageTwentyFour.levelID[i]);
        elM.attr("levelid", pageTwentyFour.levelID[i]);
        elM.html(pageTwentyFour.levelname[i]);
        elScroll.append(elM);
        /*
                var el = $("<div></div>");
                el.addClass("fc-levelS-border");
                el.css({"height": '3px',"background":"#041e3b","width":parseInt(elM.css("width"))});
                el.attr("id", "fc-borderitem-" + pageTwentyFour.levelID[i]);
                $(".fc-levelHolder").append(el);*/

    }

    /*  $(document).ready(function () {
          $('ul.tabs').tabs();
          //  $('ul.tabs').tabs('select_tab', "fc-tabItem-1");
      });*/
    //  pageTwentyFour.drawGroupLevel();
    pageTwentyFour.levelID.sort();
    console.log('level id fifa ->' + pageTwentyFour.levelID);
    for (var j = 0; j < pageTwentyFour.levelID.length; j++) {
        if (pageTwentyFour.levelID[j] != '1') {
            pageTwentyFour.drawLevels(pageTwentyFour.levelID[j], 0, 0);
        }
    }
    pageTwentyFour.showTab(pageTwentyFour.levelID[0]);
    pageTwentyFour.handleHeight(".fc-level-content", 70);

};
pageTwentyFour.drawGroupLevel = function () {
    var grouped = pageTwentyFour.filterByProperty(pageTwentyFour.groups, 'level_id', 1);
    console.log('grouped->' + JSON.stringify(grouped));

    for (var i = 0; i < grouped.length; i++) {
        var GroupItem = $("<div></div>");
        GroupItem.addClass("fc-Group-Item");
        GroupItem.css({
            "height": (handelPage.height * (0.23)) + "px",
            "width": (handelPage.width * (0.43)) + "px",
            "margin-right": (handelPage.width * (0.044)) + "px",
            "margin-top": (handelPage.width * (0.024)) + "px"
        });

        GroupItem.attr("id", "fc-GrpItm-" + i);
        GroupItem.attr('onClick', 'pageTwentyFour.drawLevels(1,' + grouped[i]['id'] + ',"' + grouped[i]['name'] + '")');
        $(".fc-level-content").append(GroupItem);
        var GroupHeight = parseFloat(GroupItem.innerHeight());
        var GroupWidth = parseFloat(GroupItem.innerWidth());

        var elhead = $("<div></div>");
        elhead.css({"height": (parseFloat(GroupHeight * (0.15))) + "px"});
        GroupItem.append(elhead);

        var el = $("<div></div>");
        el.addClass("fc-Group-titleHead");
        el.html("Group");
        el.css({"height": ((GroupItem.css("height")) * (0.16))});
        elhead.append(el);

        var el = $("<div></div>");
        el.addClass("fc-Group-titleName");
        el.html('&nbsp;' + (grouped[i]['name']).replace("گروه", ""));
        el.css({"height": ((GroupItem.css("height")) * (0.16))});
        elhead.append(el);

        var el = $("<div></div>");
        el.css("clear", "both");
        GroupItem.append(el);


        var boxGroup = $("<div></div>");
        boxGroup.addClass("fc-Group-innerBox");
        boxGroup.css({
            "margin-right": (parseFloat(GroupHeight * (0.074))) + "px",
            "margin-left": (parseFloat(GroupHeight * (0.074))) + "px"
        });
        boxGroup.css({"height": (parseFloat(GroupHeight * (0.83))) + "px"});
        GroupItem.append(boxGroup);

        for (var j = 0; j < 4; j++) {

            var elTeam = $("<div></div>");
            elTeam.addClass("fc-Group-itemS");
            elTeam.css({"height": (parseFloat(GroupHeight * (0.185))) + "px"});
            if (j != 3) {
                elTeam.css("border-bottom", "1px solid #2d446d");
            }
            boxGroup.append(elTeam);

            var el = $("<div></div>");
            el.addClass("fc-GroupTeam-title fc-main-font");
            el.html(grouped[i]['teams'][j]['name']);
            elTeam.css({"line-height": (parseFloat(GroupHeight * (0.185))) + "px"});
            el.css({"float": "right"});
            elTeam.append(el);


            var elboxImage = $("<div></div>");
            elboxImage.addClass("fc-GroupTeam-Bimg");
            elboxImage.css({"width": (parseFloat(GroupWidth * (0.17))) + "px"});
            elTeam.append(elboxImage);

            var el = $("<img></img>");
            el.addClass("fc-GroupTeam-img");
            el.attr("src", (grouped[i]['teams'][j]['pic']));
            //console.log(GroupHeight);
            var heightbar = parseFloat(elTeam.css("height"));
            //console.log(heightbar);
            el.css({
                "width": (parseFloat(GroupWidth * (0.17))) + "px",
                "margin-top": (parseFloat(heightbar * (0.14))) + "px"
            });
            elboxImage.append(el);


        }
    }
    //pageTwentyFour.manageScroll();
}

pageTwentyFour.return = function () {
    //alert('selected level->'+pageTwentyFour.selectedLevel+',table css->'+$(".fc-tables").css("display"));
    //  alert($("body").scrollTop());
    if ($('#forecast-holder').is(':empty')) {
        if (pageTwentyFour.selectedLevel == '1') {
            pageTwentyFour.showTab(0);
        } else if ($(".fc-tables").css("display") == 'block') {
            pageTwentyFour.drawFooter(groupTableSlected[0], groupTableSlected[1]);
            pageTwentyFour.showTab(1);
        } else {
            // alert('inja');
            pageTwentyFour.reset();
            pageTwentyFour.resetNav();
            handelPage.page = managePage.retun();
            handelPage.animPage(handelPage.pageName[handelPage.page - 1]);
            //handelPage.managerReturn()
        }
    } else {  //age box e paEne forecast baz bood
        pageTwentyFour.closeforecast();
    }
};

pageTwentyFour.filterByProperty = function (array, prop, value) {
    var filtered = [];
    for (var i = 0; i < array.length; i++) {
        var obj = array[i];
        if (obj[prop] == value) {
            filtered.push(obj);
        }
    }
    return filtered;

};
var groupTableSlected = [];
pageTwentyFour.drawLevels = function (id, groupID, name) {
    $("#fc-content-holder").css({"margin-top": parseInt($(".fc-toolbar-header").css("height")) + 'px'});
    if (id == 8) {  //my forecasts
        var leveled = pageTwentyFour.filterByProperty(pageTwentyFour.matches, 'is_forecast', '1');
    } else if (id != 1) {  //hame bejoz levele1
        var leveled = pageTwentyFour.filterByProperty(pageTwentyFour.matches, 'level_id', id);
    } else {  //levele 1
        var level1 = pageTwentyFour.filterByProperty(pageTwentyFour.matches, 'level_id', id);
        var leveled = pageTwentyFour.filterByProperty(level1, 'group_id', groupID);
    }
    $("#fc-lvlHolder-" + id).remove();

    var elHolder = $("<div></div>");
    elHolder.attr("id", "fc-lvlHolder-" + id);
    elHolder.attr("lvlID", id);
    elHolder.addClass("fc-level-holder fc-level-del");
    $("#fc-content-holder").append(elHolder);


    for (var i = 0; i < leveled.length; i++) {

        if ((id == 1) && (i == 0)) {
            var el = $("<div></div>");
            el.addClass("fc-match-groupBar fc-small-font");
            el.css({
                "height": (handelPage.height * (0.039)) + "px",
                "line-height": (handelPage.height * (0.039)) + "px ",
            });
            el.html(name);
            elHolder.append(el);

            pageTwentyFour.drawFooter(leveled[i]['group_id'], name);

        }

        var elMain = $("<div></div>");
        elMain.addClass("fc-level-item");
        elMain.css({
            "height": (handelPage.height * (0.137)) + "px",
            "width": (handelPage.width * (0.898)) + "px",
            "margin": (handelPage.width * (0.013)) + "px " + (handelPage.width * (0.043)) + "px"
        });
        elHolder.append(elMain);


        var mainWidth = parseFloat(elMain.css("width"));
        var mainheight = parseFloat(elMain.css("height"));

        var picHr = $("<div></div>");
        picHr.addClass("fc-match-picHolder");
        picHr.attr('id', 'fc-match-picHolderR');
        picHr.css({"float": "right", "width": parseFloat(mainWidth * (0.25)) + "px"});
        elMain.append(picHr);

        var picHl = $("<div></div>");
        picHl.addClass("fc-match-picHolder");
        picHl.attr('id', 'fc-match-picHolderL');
        picHl.css({"float": "left", "width": parseFloat(mainWidth * (0.25)) + "px"});
        elMain.append(picHl);


        var elbox = $("<div></div>");
        elbox.addClass("fc-match-boxImg");
        elbox.css({
            "height": parseFloat(mainheight * (0.61)) + "px",
            "padding-top": parseFloat(mainheight * (0.175)) + "px"
        });
        picHl.append(elbox);

        var el = $("<img>");
        el.addClass("fc-match-Img");
        el.css({"height": parseFloat(parseFloat(mainheight * (0.7) * (0.61))) + "px"});
        el.attr("src", leveled[i]['teamb']['pic2']);
        elbox.append(el);

        var elbox = $("<div></div>");
        elbox.addClass("fc-match-boxImg");
        //  console.log(mainheight);
        elbox.css({
            "height": parseFloat(mainheight * (0.61)) + "px",
            "padding-top": parseFloat(mainheight * (0.175)) + "px"
        });
        picHr.append(elbox);


        var el = $("<img>");
        el.addClass("fc-match-Img");
        el.css({"height": parseFloat(parseFloat(mainheight * (0.7) * (0.61))) + "px"});
        el.attr("src", leveled[i]['teama']['pic2']);
        elbox.append(el);
        ;


        var el = $("<div></div>");
        if (leveled[i]['teamb']['name'].length <= 7) {
            el.addClass("fc-match-title fc-main-font");
        } else {
            el.addClass("fc-match-title fc-supersmall-font");
        }
        // el.addClass("fc-match-title fc-main-font");
        // el.addClass("fc-match-title fc-small-font");
        el.css({
            "height": parseFloat(mainheight * (0.384)) + "px",
            "line-height": parseFloat(mainheight * (0.384)) + "px"
        });
        el.html(leveled[i]['teamb']['name']);
        //console.log('b->'+leveled[i]['teamb']['name'].length);
        picHl.append(el);

        var el = $("<div></div>");
        if (leveled[i]['teama']['name'].length <= 7) {
            el.addClass("fc-match-title fc-main-font");
        } else {
            el.addClass("fc-match-title fc-supersmall-font");
        }
        el.css({
            "height": parseFloat(mainheight * (0.384)) + "px",
            "line-height": parseFloat(mainheight * (0.384)) + "px"
        });
        //console.log('a->'+leveled[i]['teama']['name'].length);
        el.html(leveled[i]['teama']['name']);
        picHr.append(el);

        var elCenter = $("<div></div>");
        elCenter.addClass("fc-box-center");
        elCenter.css({
            "width": parseFloat(mainWidth - parseFloat(mainWidth * (0.52))) + "px",
            "height": mainheight + "px"
        });
        elMain.append(elCenter);
        var centerWidth = parseInt(elCenter.css("width"));
        var centerheight = parseInt(elCenter.css("height"));

        var elTop = $("<div></div>");
        elTop.addClass("fc-center-div fc-small-font");
        elTop.css({
            "height": parseInt(centerheight * (0.33)) + "px",
            "line-height": parseInt(parseInt(centerheight * (0.66)) - 25) + "px",
        });
        elCenter.append(elTop);
        var boxHeight = parseInt(centerheight * (0.33));


        var elresult = $("<div></div>");
        elresult.addClass("fc-center-result");
        elresult.css({
            "height": parseInt(boxHeight * (0.883)) + "px",
            "width": parseInt(centerWidth * (0.254)) + "px",
            "left": parseInt(centerWidth * (0.373)) + "px",
            "top": parseInt(centerheight * (0.33) * (0.30)) + "px",
            "line-height": parseInt(boxHeight * (0.883)) + "px",
            "display": "none",
        });
        elTop.append(elresult);


        var elmid = $("<div></div>");
        elmid.addClass("fc-center-div");
        elmid.css({
            "height": parseInt(centerheight * (0.33)) + "px",
        });
        elCenter.append(elmid);


        $(document).ready(function () {
            $('.modal').modal();
        });


        var elfc = $("<div></div>");
        elfc.addClass("fc-forecast-div");
        if (leveled[i]['goala'] == null) {
            elfc.attr('onClick', 'pageTwentyFour.drawforecast(' + leveled[i]['id'] + ')');
        } else {
            elfc.attr('onClick', 'pageTwentyFour.sendMessage(0,"بازی تمام شده است")');
        }
        // elfc.attr('href','#modal1');
        elfc.css({
            "height": parseInt(boxHeight * (0.883)) + "px",
            "line-height": parseInt(boxHeight * (0.883)) + "px",
            "width": parseInt(centerWidth * (0.669)) + "px",
            "margin-left": parseInt(centerWidth * (0.165)) + "px",
        });
        elmid.append(elfc);


        var elbot = $("<div></div>");
        elbot.addClass("fc-center-div");
        elbot.css({
            "height": parseInt(centerheight * (0.33)) + "px",
            /*"line-height": parseInt(centerheight * (0.33)) + "px",*/
        });
        elCenter.append(elbot);
        if (leveled[i]['goala'] == null) {   //age bazi tamoom nashode bood
            if ((leveled[i]['is_forecast'] == 0)) {  //hands nazade bood
                elfc.css("background", "#3275ed");
                elfc.html("پیش بینی کن");
            } else {   //hads zade bood
                elfc.css("background", "#122536");
                elfc.html(leveled[i]['forecasts'][0]['goalb'] + '&nbsp&nbsp&nbsp&nbsp&nbsp' + "-" + '&nbsp&nbsp&nbsp&nbsp&nbsp' + leveled[i]['forecasts'][0]['goala']);

            }

            elTop.html(leveled[i]['startdate']);
            elbot.html(leveled[i]['starttime']);

        } else if ((leveled[i]['goala'] != null)) {  //age bazi tamoom shode bood
            //  alert("tamoom shode"+leveled[i]['id']+'forecast=>'+leveled[i]['is_forecast']);

            elfc.css("background", "#122536");
            elresult.html(leveled[i]['goalb'] + "-" + leveled[i]['goala']);
            elresult.css("display", "block");
            if ((leveled[i]['is_forecast'] == 0)) {  //age pishbini nakarde bood
                elfc.html("-&nbsp&nbsp&nbsp&nbsp:&nbsp&nbsp&nbsp&nbsp;-");
            } else {  //age karde bood
                //  console.log("ino karde o tamoom shode->" + leveled[i]['id']);
                elfc.html(leveled[i]['forecasts'][0]['goalb'] + '&nbsp&nbsp&nbsp&nbsp&nbsp' + "-" + '&nbsp&nbsp&nbsp&nbsp&nbsp' + leveled[i]['forecasts'][0]['goala']);
                /* elCenter.css("background", "red");*/
                for (var k = 0; k < 4; k++) {
                    // alert("k"+k);
                    var el = $("<img>");
                    el.addClass("fc-ball-grey");
                    var ballWidth = parseInt(centerWidth * (0.071));
                    var ballleft = parseInt(centerWidth * (0.35)) + parseInt(ballWidth * k) + parseInt((k * 2));
                    el.css({
                        "width": ballWidth + "px",
                        "top": parseInt(centerheight * (0.187) * (0.33)) + "px",
                        "left": ballleft + "px",
                    });
                    el.attr("src", "images/fc-grayball.svg");
                    elbot.append(el);

                    if (k < leveled[i]['forecasts'][0]['ball_score']) {
                        var el = $("<img>");
                        el.addClass("fc-ball-green");
                        var ballWidth = parseInt(centerWidth * (0.071));
                        var ballleft = parseInt(centerWidth * (0.35)) + parseInt(ballWidth * k) + parseInt((k * 2));
                        el.css({
                            "width": ballWidth + "px",
                            "top": parseInt(centerheight * (0.187) * (0.33)) + "px",
                            "left": ballleft + "px",
                        });
                        el.attr("src", "images/fc-greenball.svg");
                        elbot.append(el);
                    }
                }

            }

        }

    }
    if (id == 1) {
        pageTwentyFour.showTab(1);
        pageTwentyFour.handleHeight("#fc-lvlHolder-" + id, 70);
    } else {
        /*  //alert(elHolder.css("height"));
         if(id==1){

          }else{*/
        pageTwentyFour.handleHeight("#fc-lvlHolder-" + id, 50);
    }
    //  }


};
pageTwentyFour.drawFooter = function (groupID, name) {
    $(".fc-match-footerbar").remove();
    var el = $("<div></div>");
    el.addClass("fc-match-footerbar");
    el.css({
        "height": (handelPage.height * (0.080)) + "px",
        "line-height": (handelPage.height * (0.080)) + "px ",
    });
    el.attr('onClick', 'pageTwentyFour.getGroupTable(' + groupID + ')');
    el.attr('idGroup', groupID);
    groupTableSlected[0] = groupID;
    el.attr('nameGroup', name);
    groupTableSlected[1] = name;
    el.html(name);
    $("#twentyFour").append(el);

    pageTwentyFour.handleHeight('.fc-match-footerbar', 20);
};
pageTwentyFour.handleHeight = function (selector, dif) {
    var heightNow = parseInt(($(selector).css("height")).replace('px', ''));

    if (window.JSInterface) {

        $(selector).css({"height": (heightNow + dif) + 'px'});
        //   console.log('final->' + parseInt(($(selector).css("height")).replace('px', '')));

    }

};
pageTwentyFour.getGroupTable = function (groupID) {
    pageTwentyFour.closeforecast();
    pageTwentyFour.selectedGroup = groupID;
    var data = {};
    pageTwentyFour.ajaxForecast("POST", urlForecast + 'scorboards', pageTwentyFour.drawTableHead, data);
};

pageTwentyFour.drawTableHead = function (data) {
    $("html").css("overflow", "");
    var tabNum = ((pageTwentyFour.levelID.length) + (1));
    var obj = jQuery.parseJSON(data);

    if (obj['success'] == "true") {
        pageTwentyFour.scoreBoard = obj['data'];

        $("#fc-lvlHolder-" + tabNum).remove();
        var elHolder = $("<div></div>");
        elHolder.attr("id", "fc-lvlHolder-" + tabNum);
        elHolder.addClass("fc-level-holder fc-tables fc-level-del");
        elHolder.css("padding-top", "0px");
        $("#fc-content-holder").append(elHolder);

        var elHead = $("<div></div>");
        elHead.addClass("fc-table-head");
        elHead.css({
            "height": handelPage.height * (0.067) + "px",
            "width": handelPage.width + "px",
            "padding-right": handelPage.width * (0.05) + "px"
        });
        elHolder.append(elHead);

        for (var i = ((obj['data']['Groups'].length) - 1); i >= 0; i--) {
            var el = $("<div></div>");
            el.addClass("fc-table-headG fc-middle-font");
            el.attr("id", "fc-tableHead-item-" + obj['data']['Groups'][i]['id']);
            var widthbox = parseInt(parseInt(elHead.css("width")) * (0.06));
            var marginbox = parseInt((parseInt(elHead.css("height")) - widthbox) / 2);
            el.css({
                "width": widthbox + "px",
                "height": widthbox + "px",
                "line-height": widthbox + "px",
                "margin-left": handelPage.width * (0.055) + "px",
                "margin-top": marginbox + "px"
            });
            el.attr('onClick', 'pageTwentyFour.drawGroupTable(' + obj['data']['Groups'][i]['id'] + ')');
            el.html(obj['data']['Groups'][i]['name'].replace("گروه", ""));
            elHead.append(el);

        }

        var elTitle = $("<div></div>");
        elTitle.addClass("fc-head-title");
        elTitle.css({
            "width": parseInt(elHead.css("width")) + "px",
            "height": handelPage.height * (0.032) + "px",
            "padding-right": handelPage.width * (0.05) + "px"
        });
        elHolder.append(elTitle);


        var el = $("<div></div>");
        el.addClass("fc-small-font fc-head-titlebar");
        el.css({
            "width": parseInt(handelPage.width * (0.38) - parseInt(elTitle.css('padding-right'))) + "px",
            "height": parseInt(elTitle.css("height")) + "px",
            "line-height": parseInt(elTitle.css("height")) + "px",
            //  'border': '1px solid red',
        });
        el.html('تیم ها');
        elTitle.append(el);

        var titlebar = ['بازی', 'برد', 'تساوی', 'باخت', 'تفاضل', 'امتیاز'];
        var widthbar = ['61', '43', '84', '71', '85', '74'];
        for (var j = 0; j < titlebar.length; j++) {

            var itemWidth = parseInt(parseInt(parseInt(widthbar[j]) * handelPage.width) / 1080);
            var marginitem = parseInt(parseInt(parseInt(44) * handelPage.width) / 1080);

            var el = $("<div></div>");
            el.addClass("fc-small-font  fc-head-Gamebar");
            el.css({
                "width": itemWidth + "px",
                "height": parseInt(elTitle.css("height")) + "px",
                "line-height": parseInt(elTitle.css("height")) + "px",
                'margin-left': marginitem + 'px'
            });
            (j + 1 == titlebar.length ? el.css("margin-left", "0px") : "");
            el.html(titlebar[j]);
            elTitle.append(el);

        }

        pageTwentyFour.drawGroupTable(pageTwentyFour.selectedGroup);
        pageTwentyFour.showTab(tabNum);
    }


};
pageTwentyFour.drawGroupTable = function (idGroup) {
    $(".fc-table-headG").removeClass("fc-table-headOver");
    $("#fc-tableHead-item-" + idGroup).addClass("fc-table-headOver");

    var tableArray = pageTwentyFour.filterByProperty(pageTwentyFour.scoreBoard['Scorboard'], 'group_id', idGroup);
    //console.log('table array->' + JSON.stringify(tableArray));


    $(".fc-table-holder").remove();
    var elTable = $("<div></div>");
    elTable.addClass("fc-table-holder");
    $(".fc-tables").append(elTable);

    for (var i = 0; i < tableArray.length; i++) {
        var elM = $("<div></div>");
        elM.addClass("fc-table-item");
        var boxHeight = parseInt(handelPage.height * (0.081));
        elM.css({
            "width": handelPage.width + "px",
            "height": boxHeight + "px",
            "line-height": boxHeight + "px",
            'padding-right': parseInt($(".fc-head-title").css('padding-right')) + 'px'
        });
        elTable.append(elM);

        var el = $("<div></div>");
        el.addClass("fc-table-border");
        el.css({
            "margin-right": parseInt(handelPage.width * (0.084)) + 'px',
            'width': parseInt(handelPage.width * (0.856)) + 'px'
        });
        elTable.append(el);

        var elHolder = $("<div></div>");
        elHolder.addClass("fc-table-righH");
        elHolder.css({
            "width": parseInt($(".fc-head-titlebar").css("width")) + 'px',
            "height": boxHeight + "px",
            "line-height": boxHeight + "px",
        });
        elM.append(elHolder);

        var elImg = $("<div></div>");
        elImg.addClass("fc-table-picHolder");
        var rightWidth = handelPage.width * (0.087);
        var marginBox = parseInt((boxHeight - rightWidth) / 2);
        elImg.css({
            "width": rightWidth + 'px', "height": rightWidth + "px", 'margin-top': marginBox + 'px'
        });
        elHolder.append(elImg);

        var el = $("<img>");
        el.addClass("fc-table-pic");
        el.attr("src", tableArray[i]['team']['pic2']);
        el.css({
            "width": rightWidth
        });
        elImg.append(el);

        var el = $("<div></div>");
        el.addClass("fc-small-font fc-table-groupTitle");
        el.css({
            "height": boxHeight + "px",
            "line-height": boxHeight + "px",
            'margin-right': handelPage.width * (0.030) + 'px'
        });
        el.html(tableArray[i]['team']['name']);
        elHolder.append(el);

        var titlebar = ['played', 'won', 'drawn', 'lost', 'gaoldifference', 'points'];
        var widthbar = ['61', '43', '84', '71', '85', '74'];
        for (var j = 0; j < titlebar.length; j++) {

            var itemWidth = parseInt(parseInt(parseInt(widthbar[j]) * handelPage.width) / 1080);
            var marginitem = parseInt(parseInt(parseInt(44) * handelPage.width) / 1080);

            var el = $("<div></div>");
            el.addClass("fc-small-font  fc-head-Gamebar");
            el.css({
                "width": itemWidth + "px",
                "height": parseInt(boxHeight) + "px",
                "line-height": parseInt(boxHeight) + "px",
                'margin-left': marginitem + 'px'
            });
            (j + 1 == titlebar.length ? el.css("margin-left", "0px") : "");
            el.html(tableArray[i][titlebar[j]]);
            elM.append(el);

        }


    }

    // alert(this.selectedGroup);


};
pageTwentyFour.drawforecast = function (matchID) {  //box e pishbini
    window.scrollTo(0, 0);
    $('body').addClass('stop-scrolling');
    $("html").css("overflow", "");
    var matcharr = pageTwentyFour.filterByProperty(pageTwentyFour.matches, 'id', matchID);
    //console.log('match->' + JSON.stringify(matcharr));
    $("#forecast-holder").empty();
    $("#forecast-holder").css({"width": handelPage.width + 'px', "height": handelPage.height * (0.4) + 'px'});
    $("#forecast-holder-close").css({
        "width": handelPage.width + 'px',
        "height": handelPage.height + 'px',
        'display': 'block'
    });
    pageTwentyFour.handleHeight('#forecast-holder', 20);

    var eltop = $("<div></div>");
    eltop.addClass("fc-main-top");
    eltop.css({
        "height": (handelPage.height * (0.4) * (0.48)) + 'px'
    });
    $("#forecast-holder").append(eltop);

    var elMid = $("<div></div>");
    elMid.addClass("fc-main-middle");
    elMid.css({
        "height": (handelPage.height * (0.4) * (0.28)) + 'px'
    });
    $("#forecast-holder").append(elMid);

    for (var k = 0; k < 3; k++) {
        var el = $("<div></div>");
        el.addClass("fc-main-middlediv fc-middle-font");
        el.css({
            "height": (handelPage.height * (0.376) * (0.28)) + 'px',
            "line-height": (handelPage.height * (0.376) * (0.28)) + 'px'
        });
        switch (k) {
            case 0:
                //  el.html("برد " + matcharr[0]['teama']['name'] + ":" + matcharr[0]['percent_teama'] + "%");
                el.html("برد " + ":" + matcharr[0]['percent_teama'] + "%");
                break;
            case 1:
                // el.html("برد " + matcharr[0]['teamb']['name'] + ":" + matcharr[0]['percent_teamb'] + "%");
                el.html("تساوی" + ":" + matcharr[0]['percent_equal'] + "%");
                break;
            case 2:
                //    el.html("تساوی دو تیم" + ":" + matcharr[0]['percent_equal'] + "%");

                el.html("برد " + ":" + matcharr[0]['percent_teamb'] + "%");
                break;
        }
        elMid.append(el);
    }

    var elright = $("<div></div>");
    elright.css({
        "width": handelPage.width * (0.224) + 'px',
        'height': parseInt(eltop.css("height")) + 'px',
        'float': 'right',
    });
    eltop.append(elright);

    var picR = $("<div></div>");
    picR.addClass("fc-main-picHolder");
    picR.css({
        "width": handelPage.width * (0.106) + 'px',
        'height': handelPage.width * (0.106) + 'px',
        'margin-right': handelPage.width * (0.118) + 'px',
        'float': 'right',
        'margin-top': parseInt(parseInt(eltop.css("height")) * (0.312)) + 'px'
    });
    elright.append(picR);

    var el = $("<img>");
    el.addClass("");
    el.css({"width": handelPage.width * (0.106) + 'px'});
    el.attr("src", matcharr[0]['teama']['pic2']);
    picR.append(el);


    var el = $("<div></div>");
    //el.addClass("fc-main-font fc-main-teamTitle");
    if (matcharr[0]['teama']['name'].length <= 7) {
        el.addClass("fc-main-teamTitle fc-main-font");
    } else {
        el.addClass("fc-main-teamTitle fc-ssmall-font");
    }
    el.css({
        "width": handelPage.width * (0.106) + 'px',
        'height': parseInt(parseInt(eltop.css("height")) * (0.144)) + 'px',
        'line-height': parseInt(parseInt(eltop.css("height")) * (0.144)) + 'px',
        'margin-right': handelPage.width * (0.118) + 'px',
        'float': 'right',
        'margin-top': parseInt(parseInt(eltop.css("height")) * (0.028)) + 'px',
    });
    el.html(matcharr[0]['teama']['name']);
    elright.append(el);

    var elleft = $("<div></div>");
    elleft.css({
        "width": handelPage.width * (0.224) + 'px',
        'height': parseInt(eltop.css("height")) + 'px',
        'float': 'left',
    });
    eltop.append(elleft);

    var picL = $("<div></div>");
    picL.css({
        "width": handelPage.width * (0.106) + 'px',
        'height': handelPage.width * (0.106) + 'px',
        'margin-left': handelPage.width * (0.118) + 'px',
        'float': 'left',
        'margin-top': parseInt(parseInt(eltop.css("height")) * (0.312)) + 'px'
    });
    picL.addClass("fc-main-picHolder");
    elleft.append(picL);

    var el = $("<img>");
    el.addClass("");
    el.css({"width": handelPage.width * (0.106) + 'px'});
    el.attr("src", matcharr[0]['teamb']['pic2']);
    picL.append(el);

    var el = $("<div></div>");
    //  el.addClass("fc-main-font fc-main-teamTitle");
    if (matcharr[0]['teamb']['name'].length <= 7) {
        el.addClass("fc-main-teamTitle fc-main-font");
    } else {
        el.addClass("fc-main-teamTitle fc-ssmall-font");
    }
    el.css({
        "width": handelPage.width * (0.106) + 'px',
        'height': parseInt(parseInt(eltop.css("height")) * (0.144)) + 'px',
        'line-height': parseInt(parseInt(eltop.css("height")) * (0.144)) + 'px',
        'margin-left': handelPage.width * (0.118) + 'px',
        'float': 'left',
        'margin-top': parseInt(parseInt(eltop.css("height")) * (0.028)) + 'px',
    });
    el.html(matcharr[0]['teamb']['name']);
    elleft.append(el);

    var elCenter = $("<div></div>");
    elCenter.addClass("fc-main-center");
    var marginCenter = handelPage.width * (0.051);
    elCenter.css({
        "height": parseInt(parseInt(eltop.css("height"))) + 'px',
        'margin-right': marginCenter + 'px',
        'margin-left': marginCenter + 'px',
        'width': parseInt(handelPage.width * (0.45)) + 'px'
    });
    eltop.append(elCenter);

    var bot1 = $("<div></div>");
    bot1.addClass("fc-main-bot1 fc-big-font");
    bot1.css({
        "height": (handelPage.height * (0.4) * (0.24)) + 'px',
        "line-height": (handelPage.height * (0.4) * (0.24)) + 'px',
        "width": "100%",
    });
    // console.log('forecast time->'+matcharr[0]['is_forcasttime']);
    bot1.html(" ثبت پیش بینی");

    if (matcharr[0]['is_forcasttime'] == 0 ? bot1.css('background', '#A0A0A0') : bot1.attr('onClick', 'pageTwentyFour.submitForecast(' + matchID + ')')) ;

    $("#forecast-holder").append(bot1);

    var bot2 = $("<div></div>");
    bot2.addClass("fc-main-bot2 fc-big-font");
    bot2.css({
        "height": (handelPage.height * (0.4) * (0.24)) + 'px',
        "line-height": (handelPage.height * (0.4) * (0.24)) + 'px',
        "display": "none",
    });
    bot2.html("جدول گروه");
    bot2.attr('onClick', 'pageTwentyFour.getGroupTable(' + groupTableSlected[0] + ')');
    $("#forecast-holder").append(bot2);


    var el = $("<div></div>");
    el.addClass("fc-main-teamTitle fc-small-font ");
    el.css({
        "height": parseInt(parseInt(elCenter.css("height")) * (0.275)) + 'px',
        "line-height": parseInt(parseInt(elCenter.css("height")) * (0.5)) - 25 + 'px',
        'width': parseInt(parseInt(elCenter.css("width"))) + 'px',
    });
    el.html(matcharr[0]['startdate']);
    elCenter.append(el);


    var el = $("<div></div>");
    el.addClass("fc-main-cc");
    el.attr("id", "main-wheel-holder");
    el.css({
        "height": parseInt(parseInt(elCenter.css("height")) * (0.45)) + 'px',
        'width': parseInt(parseInt(elCenter.css("width"))) + 'px',
    });
    elCenter.append(el);
    //alert(parseInt(parseInt(elCenter.css("height")) * (0.33)));
    var heightWheel = parseInt(parseInt($("#main-wheel-holder").css("height")));

    var elleft = $("<div></div>");
    elleft.addClass("fc-main-left fc-main-font");
    elleft.css({
        'width': (parseInt($(".fc-main-cc").css('width')) * (0.5)) + 'px',
        "height": heightWheel + 'px',
        "line-height": (parseInt(heightWheel) / 2) + 'px',
    });
    $(".fc-main-cc").append(elleft);

    var elleft = $("<div></div>");
    elleft.addClass("fc-main-left fc-main-font");
    elleft.css({
        'width': (parseInt($(".fc-main-cc").css('width')) * (0.5)) + 'px',
        "height": heightWheel + 'px',
        "line-height": (parseInt(heightWheel) / 2) + 'px',
    });
    $(".fc-main-cc").append(elleft);

    var el = $("<div></div>");
    el.attr("id", "resultWheel");
    $("#forecast-holder").append(el);
    drawForecastWheel();

    var el = $("<div></div>");
    el.addClass("fc-main-teamTitle fc-main-font");
    el.css({
        "height": parseInt(parseInt(elCenter.css("height")) * (0.275)) + 'px',
        'width': parseInt(parseInt(elCenter.css("width"))) + 'px',
    });
    el.html(matcharr[0]['starttime']);
    elCenter.append(el);

};
pageTwentyFour.submitForecast = function (id) {  //pishbini kardan
    var goalValue = ($("#resultWheel").html());
    var goalarray = goalValue.split("");
    //alert(goalarray[0] + ',' + goalarray[1]);
    var data = {'goala': +goalarray[1], 'goalb': goalarray[0], "match": id};
    pageTwentyFour.ajaxForecast("POST", urlForecast + 'forecast', pageTwentyFour.successForecast, data);
};
pageTwentyFour.successForecast = function (data) {  //success e forecast
    //console.log(JSON.stringify(data));
    var obj = jQuery.parseJSON(data);
    if (obj['success'] == "true") {
        managementRel.tost("پیش بینی ثبت شد");
        pageTwentyFour.closeforecast();
        var groupID = $(".fc-match-footerbar").attr("idGroup");
        var groupname = $(".fc-match-footerbar").attr("nameGroup");
        // alert("ok.id->" + groupID + ',name->' + groupname+'level=>'+pageTwentyFour.selectedLevel);
        //alert(groupTableSlected[1]);
        pageTwentyFour.matches = obj['data']['Matchs'];
        pageTwentyFour.groups = obj['data']['Groups'];
        pageTwentyFour.drawLevels(8, 0, 0);
        // alert('in levelo biar->' + pageTwentyFour.selectedLevel + 'i have no idea->' + groupID);
        if (pageTwentyFour.selectedLevel == 1) {
            //   alert("1 o bekesh" + groupTableSlected[1]);
            pageTwentyFour.drawLevels(pageTwentyFour.selectedLevel, (groupTableSlected[0]), (groupTableSlected[1]));
        } else {
            //  alert("gheyre 1");
            pageTwentyFour.drawLevels(pageTwentyFour.selectedLevel, (groupID == undefined ? 0 : groupID), (groupname == undefined ? 0 : groupname));
        }
        pageTwentyFour.showTab(pageTwentyFour.selectedLevel);
    } else if (obj['success'] == "false") {
        managementRel.tost(obj['data']['msg']);
        pageTwentyFour.closeforecast();
    }
};
pageTwentyFour.closeforecast = function () {  //bastane box e forecast
    $('body').removeClass('stop-scrolling');
    $("#forecast-holder").empty();
    $("#forecast-holder").removeAttr("style");
    $("#forecast-holder-close").css({'display': 'none'})
};
pageTwentyFour.sendMessage = function (id, msg) {
    if (msg == 0) {
        console.log('matches --------------------->' + $('#fc-lvlHolder-' + id).children().length);
        childNum = $('#fc-lvlHolder-' + id).children().length;
        if ((childNum == 0) && (id != 0)) {
            managementRel.tost("بازی وجود ندارد");
        }
    } else {
        managementRel.tost(msg);
    }
}
;
pageTwentyFour.showTab = function (id) {  //neshoon dadane safe

    $("#fc-content-holder").css("height", handelPage.height);
    $(".fc-level-holder").css({"display": "none"});
    // pageTwentyFour.manageScroll();
    //alert($("body").scrollTop());
    window.scrollTo(0, 0);
    //  groupTableSlected=[];

    if (id == 0) {
        $(".fc-level-content").css({"display": "block"});
        $(".fc-match-footerbar").remove();
    } else if (id == 1) {

        $("#fc-lvlHolder-" + id).css({"display": "block"});
    } else {
        $("#fc-lvlHolder-" + id).css({"display": "block"});
        $(".fc-match-footerbar").remove();
    }

    pageTwentyFour.selectedLevel = id;
    $(".fc-levelS-item").removeClass("fc-tab-over");
    // console.log("ino bede->" + id + ' *** ' + ((pageTwentyFour.levelID.length) + (1)));
    // if (id == 0 || id == ((pageTwentyFour.levelID.length) + (1))) {
    if (id == 8) {
        $("#fc-tabItem-8").addClass("fc-tab-over");
        // $("#fc-tabItem-2").addClass("fc-tab-over");
    } else {
        $("#fc-tabItem-" + id).addClass("fc-tab-over");
    }
    if ($(".fc-tables").css("display") == 'block') {
        $('body').addClass('stop-scrolling');
    } else {
        $('body').removeClass('stop-scrolling');
    }

};
pageTwentyFour.ajaxForecast = function (type, link, funSuccess, data) {
    // console.log(data);
    managementRel.ios({"action": "print", "msg": "ajax"});
    // $("#loadId").addClass("fc-loading");
    managementRel.showLoading();
    if (typeof xhr2 !== 'undefined')
        xhr2.abort();

    xhr2 = $.ajax({
        type: 'POST',
        dataType: "html",
        data: data,
        contentType: 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        headers: {
            'Accept': 'application/json',
        },
        url: link,
        success: funSuccess,
        tryCount: 0,
        retryLimit: 0,

        beforeSend: function (xhr2) {
            // console.log(pageTwentyFour.token);
            //alert('pageTwo.token->'+pageTwo.token);
            xhr2.setRequestHeader("Authorization", "Bearer " + pageTwo.token);
            //mylog.log("start");
        },
        error: function (xhr2, textStatus, errorThrown) {
            mylog.log('erorr = ' + xhr2 + ' ' + textStatus + '' + errorThrown);
            if (textStatus == 'timeout' || textStatus == 'error') {
                managementRel.hideLoading();
                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {
                    //try again
                    $.ajax(this);
                    return;
                } else {
                    managementRel.tost("اختلال در برقراری ارتباط با اینترنت");
                    mylog.log('a');
                    //document.getElementById('dis'+dis).style.display = 'block';
                }
                return;
            }

            if (xhr2.status == 500) {

            } else {
                //handle error

            }
        },
        statusCode: {
            404: function () {
                mylog.log("page not found");
            }
        },
    }).done(function () {
        mylog.log("success");
        // $("#loadId").removeClass("fc-loading");
        //loadingAjax('loaderImage'+dis,false);
        managementRel.hideLoading();
    })
        .fail(function () {
            mylog.log("error");
            managementRel.hideLoading();
        })
        .always(function () {
            mylog.log("complete");
        });
}
