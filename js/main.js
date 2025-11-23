//var dir = "http://10.0.0.211/samyar_git/samyar/server/";
//var dir = "https://samyar.tvapps.ir/v1/";
//var dir = "https://samyar.rasgames.ir/v1/";
//var dir = "http://localhost/samyar/";
var dir = "https://samyar.rasgames.ir/v1/";

var dirImg = "";
var dirVid = "";
window.onload = function () {
    // alert("1");
    //  managementRel.setCookie("isLogin",0);


    handelPage.screen();
    handelPage.menuType();

    handelPage.HandleMenu();
    checkPage();
    if (window.ReactNativeWebView) {
        // console.log("intooo")
        managementRel.callNotificationToken();
    } else {
        // console.log("oontooo")
        //az android seda nemishe => notofication token nadare
    }


    menu.userCreat();
    menu.titleBar("", "");
    if (!window.JSInterface) ;
    loading.create();
    //managementRel.setCookie("status", "4");
    //handelPage.managerEnter(2);
    //alert(handelPage.height*0.0625)

    //var test = new slideshow.init({ali: [10, 2], b: 20});
//alert(xx);

    //console.log($("#tb-4").offset().left+$("#tb-4").width()-handelPage.height*0.05);
    $("body").css({"max-height": (handelPage.height - 50) - ((handelPage.height) * 0.0625) + "px"});
    FastClick.attach(document.body);
    iosView();
    managementRel.ios({"action": "hideLoadings"});
    splashscreen();

};

document.addEventListener("keydown", function (event) {
    //alert(handelPage.page);
    //  console.log(event.which);
    //$('.main-sell-div').removeClass("hide-keyboard-32");
    if (event.which === 13) {
        $("input").blur();
        // console.log(''+managePage.direction);
        var lastPage = managePage.direction[(managePage.direction.length) - 2];
        $('.main-sell-div').removeClass("hide-keyboard-32");
        //if((pageTwentyEight.isSelect)&&(pageTwentyEight.isSelect==1)){
//start atieh
        if (handelPage.page == 6) {//search in product
            pageSix.searchItem();
        }
//end atieh
        if ((lastPage == 28)) {

            pageTwentySeven.searchItem(1, 1);

        } else {
            if (handelPage.page == 30) {

                pageThirty.searchItem();
            } else {
                pageTwentySeven.searchItem(0, 1);
            }
        }

    }
});
$(document).ready(function () {

    managementRel.ios({"action": "getKey"});
    managementRel.ios({"action": "getDuid"});
    managementRel.ios({"action": "getModel"});
    managementRel.ios({"action": "getPlayerId"});
    document.addEventListener("keydown", function (event) {

        /* if (event.which === 66) {
         handelPage.managerReturn();
         }*/
    });
    $(window).resize(function () {
//alert(handelPage.page)
//$(".wrapper").css({"height": "97%"});

    });
});

function splashscreen() {
    setTimeout(function () {
        $("#splash").fadeOut();
    }, 6000);
}

function tabSplash() {
    $("#splash").fadeOut();
}

function checkPage() {
    // alert('cookie->'+managementRel.getCookie("isLogin"));

    if (managementRel.getCookie("isLogin") == 1) {

        //handelPage.managerEnter(3);
        // alert("if avval->" + managementRel.getCookie("status"));
        switch (managementRel.getCookie("status")) {
            case "0":
                handelPage.managerEnter(3);
                pageThree.clicMenu("three-one-tab");
                //handelPage.managerEnter(2);
                break;
            case "1":
                handelPage.managerEnter(3);
                pageThree.clicMenu("three-one-tab");
                break;
            case "2":
                handelPage.managerEnter(3);
                pageThree.clicMenu("three-two-tab");
                break;
            case "3":
                handelPage.managerEnter(3);
                pageThree.clicMenu("three-three-tab");
                break;
            case "4":
                handelPage.managerEnter(3);
                pageThree.clicMenu("three-four-tab");
                break;
            default:
                if (!(window.JSInterface)) {
                    setTimeout(function () {
                        //  console.log("rad shyod az time out");
                        handelPage.managerEnter(2);
                    }, 1000);
                } else {
                    handelPage.managerEnter(2);

                }

                break;
        }

    } else {
        // alert("if dovvom");
        handelPage.managerEnter(1);
        pageOne.init();
    }


    //handelPage.managerEnter(17);
}

function test(data) {
//alert(data)
//var file = document.getElementById('three-avatar').files[0];


}

function reciveNotif() {
    //alert("sssss");

    menu.clickItems('me_16');
    managementRel.notifClick(false);


}

var iosRel = {duid: '', model: '', playerId: ''};
iosRel.getDuid = function (str) {
    iosRel.duid = str;
    //managementRel.ios({"action": "print", "msg": "getDuid = " + str});
}
iosRel.getModel = function (str) {
    iosRel.model = str;
    //managementRel.ios({"action": "print", "msg": "getModel = " + str});
}
iosRel.getPlayerId = function (str) {
    iosRel.playerId = str;
    //managementRel.ios({"action": "print", "msg": "getModel = " + str});
}


var managementRel = {
    notificationToken: ''
}; //Management relations function


managementRel.callNotificationToken = function () {

    setTimeout(function () {

        window.ReactNativeWebView &&
        window.ReactNativeWebView.postMessage(
            JSON.stringify({type: "getNotificationToken", data: "null"})
        );
    }, 0)
};


managementRel.getNotificationToken = function (data) {
    // alert("intoooooooooooo22"+(data));
    managementRel.notificationToken = data;

};


managementRel.dbQuery = function (str) {
    var rsQuery = window.JSInterface.dbQuery(str);
    return rsQuery;
};
managementRel.dbQuerys = function (str) {
    window.JSInterface.dbQuerys(str);
};
managementRel.return = function () {
    if (window.JSInterface)
        window.JSInterface.returnApp();
};
managementRel.soundPlay = function (str) {
    managementRel.soundStop();
    window.JSInterface.soundPlay("" + str);
};
managementRel.soundPlayBtn = function (str) {
    managementRel.soundStop();
    window.JSInterface.soundPlayBtn("" + str);
};
managementRel.soundStop = function () {
    window.JSInterface.soundStop();
};
managementRel.soundPuse = function () {
    window.JSInterface.soundPuse();
};
managementRel.isNotif = function () {
    if (window.JSInterface) {
        return window.JSInterface.isClickNotif();
    }
};
managementRel.notifClick = function (click) {
    return window.JSInterface.notifClick(click);
};

managementRel.getPalayId = function () {
    if (window.JSInterface) {
        return window.JSInterface.jsgetPalayId();
    }
    if (typeof webkit != "undefined") {
        return iosRel.playerId;
    }
    return "";
};
managementRel.soundCheck = function () {
    return window.JSInterface.soundCheck();
};
managementRel.tost = function (str) {
    if (window.JSInterface)
        window.JSInterface.showToast(str);
    else if (typeof webkit != "undefined")
        Materialize.toast('<div style="text-align: center;width: 100%;direction: rtl;">' + str + '</div>', 4000);
    else
        Materialize.toast('<div style="text-align: center;width: 100%;direction: rtl;">' + str + '</div>', 4000);
};
managementRel.getPath = function () {
    var str = window.JSInterface.getPath();
    return str;
};
managementRel.callSpeach = function () {
    window.JSInterface.speech();
};
managementRel.playVideo = function (url, str) {
    if (typeof webkit != "undefined")
        managementRel.ios({"action": "video", "url": url})
    if (window.JSInterface)
        window.JSInterface.playVideos(url, str);
};
managementRel.startDownloader = function (url) {
    window.JSInterface.downloadFile("" + url);
};
managementRel.imei = function () {

    if (window.JSInterface)
        return window.JSInterface.getImei();
    if (typeof webkit != "undefined")
        return iosRel.duid;
};
managementRel.macAddress = function () {
    if (window.JSInterface)
        return window.JSInterface.macAddress();
    if (typeof webkit != "undefined")
        return "ios";
};
managementRel.model = function () {
    if (window.JSInterface)
        return window.JSInterface.model();
    if (typeof webkit != "undefined")
        return iosRel.model;
};
managementRel.versionBuild = function () {
    if (window.JSInterface)
        return window.JSInterface.versionBuild();
    if (typeof webkit != "undefined")
        return iosRel.model;
};
managementRel.webViewLoad = function (url) {
    window.JSInterface.webViewLoad(url);
};
managementRel.checkExistFile = function (file) {
    return window.JSInterface.checkExistFile(file);
};
managementRel.extractZip = function (url, file) {
    return window.JSInterface.extractZip(url, file);
};
managementRel.getGps = function () {
    if (typeof webkit != "undefined")
        managementRel.ios({"action": "getGps"});
    else if (window.JSInterface)
        return window.JSInterface.getGps();
    else
        return '{"x":"6446","y":"234553"}';
};
managementRel.shCode = function (s, k, a) {
    if (window.JSInterface) {
        //   if(parseFloat(managementRel.versionBuild())>=4.4){
        return window.JSInterface.shCode(s, k, a);
        // }else{
        //    return shCodeJs(s, k, a);
        // }

    } else {
        return shCodeJs(s, k, a);
    }
};
managementRel.shCodeOld = function (s, k, a) {
    if (window.JSInterface) {
        //alert(' shCodeJs(s, k, a)->'+ shCodeJs(s, k, a));
        return shCodeJs(s, k, a);
    }
};
managementRel.keyOld = function () {
    return tk1 + tk2 + tk3 + tk4;
}
managementRel.setCookie = function (name, val) {
    // alert("set cookie=>"+name+',va;=?'+val);
    if (window.JSInterface) {
        if (parseFloat(managementRel.versionBuild()) >= 4.4) {
            window.JSInterface.setCookie(managementRel.webencodebase64(name), managementRel.webencodebase64(val));
        } else {
            //    alert("document cookie");
            document.cookie = name + "=" + val;
        }
    } else {
        return localStorage.setItem(name, val);
        //document.cookie = managementRel.webencodebase64(name) + "=" + managementRel.webencodebase64(val);
    }
};
managementRel.getCookie = function (name) {
    // alert(managementRel.versionBuild());
    // console.log(window.JSInterface)
    if (window.JSInterface) {
        // alert($.base64.decode(window.JSInterface.getCookie($.base64.encode(name))));
        if (parseFloat(managementRel.versionBuild()) >= 4.4) {
            //  alert('male ghablie->'+name);
            return managementRel.webdecodebase64(window.JSInterface.getCookie(managementRel.webencodebase64(name)));
        } else {
            // alert("1");
            //alert("jadiiiide");
            var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            // alert("2");
            // console.log(name+'->'+match[2]);
            //  var value = $.cookie(name);
            //  alert('name 2->'+value);
            if (match) {
                if ((name == 'name') || (name == 'family') || (name == 'city') || (name == 'store')) {
                    // alert("nameeeeeeeeee");
                    return decodeURIComponent(escape(decodeURIComponent(match[2])));
                    //   return );
                } else {
                    return match[2];
                }
            }
            // document.cookie =name+"="+val;
        }

    } else {
        // console.log('name' , name)
        // console.log('localStorage.getItem(name)' , localStorage.getItem(name))
        return localStorage.getItem(name);
    }

    //return managementRel.webdecodebase64(GetCookieValue(managementRel.webencodebase64(name)));

};

managementRel.hideLoading = function () {
    if (typeof webkit != "undefined")
        loading.hide();
    else if (window.JSInterface)
        window.JSInterface.hideLoading();
    else
        loading.hide();
};
managementRel.showLoading = function () {

    if (typeof webkit != "undefined")
        loading.show();
    else if (window.JSInterface)
        window.JSInterface.showLoading();
    else
        loading.show();
};
managementRel.webdecodebase64 = function (data) {

    /*  if (window.JSInterface)
     return window.JSInterface.webdecodebase(data);*/
    //return decode_utf8(data);
    return data;
};
managementRel.webencodebase64 = function (data) {

    /*if (window.JSInterface)
     return window.JSInterface.webencodebase(data);*/
    return data;
    //return encode_utf8(data);

};
managementRel.ios = function (data) {

    if (typeof webkit != "undefined")
        webkit.messageHandlers.callbackHandler.postMessage(data);
};
managementRel.closeApp = function () {
    // alert("managementRel.closeApp")

    if (window.ReactNativeWebView) {
        // console.log("intooo")
        setTimeout(function () {

            window.ReactNativeWebView &&
            window.ReactNativeWebView.postMessage(
                JSON.stringify({type: "exit", data: "null"})
            );
        }, 0)
    } else {
        // console.log("oontooo")
        //az android seda nemishe
    }

};


function GetCookieValue(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var dis = 1;
var working = {
    flag: 0
};
working.page = function () {
    working.flag = 1;
    setTimeout(function () {
        working.flag = 0
    }, 1000);
    //return working.flag;
};
working.returnFlag = function () {
    if (working.flag == 0)
        return true;
    else
        return false;
};
var managePage = {
    direction: [1], pos: [0]
};
managePage.show = function (index) {
    if (managePage.direction[(managePage.direction.length) - 1] != index) {

        managePage.direction = jQuery.grep(managePage.direction, function (value) {
            return value != index;
        });
        // managePage.pos.push($("body").scrollTop());
        managePage.direction.push(index);
        mylog.log('direction == ' + managePage.direction);
        // mylog.log('pos == ' + managePage.pos);
    }

};
managePage.retun = function () {
    mylog.log(managePage.direction);
    managePage.direction.pop();
    return managePage.direction[(managePage.direction.length) - 1];
};

function encode_utf8(s) {
    return btoa(encodeURIComponent(s));
}

function decode_utf8(s) {
    return decodeURIComponent(atob(s));
}


var applicationConfig = {
    debugMode: false //enables logs in application
};
/*
 * Logger object factory
 */
var Logger = function () {

    var logger = {};
    if (applicationConfig.debugMode === true) {
        logger = {
            log: function (str) {

                var args = Array.prototype.slice.call(arguments, 0);
                console.log(args);
            },
            info: function () {
                var args = Array.prototype.slice.call(arguments, 0);
                console.info(args);
            },
            warn: function () {
                var args = Array.prototype.slice.call(arguments, 0);
                console.warn(args);
            },
            error: function () {
                var args = Array.prototype.slice.call(arguments, 0);
                console.error(args);
            },
            alert: function () {
                var args = Array.prototype.slice.call(arguments, 0);
                //alert(args);
            }

        };
    } else {
        logger = {
            log: function () {
            },
            info: function () {
            },
            warn: function () {
            },
            error: function () {
            },
            alert: function () {
            }
        };
    }

    return logger;
};
var mylog = new Logger(); // Initializes logger.


var handelPage = {
    page: 1,
    pageName: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twentyone", "twentytwo", "twentythree", "twentyFour", "twentyFive", "twentySix", "twentySeven", "twentyEight", "twentyNine", "thirty", "thirtyOne", "thirtyTwo", "thirtythree", "thirtyfour", "thirtyfive", "thirtySix", "thirtySeven", "thirtyEight", "thirtyNine"]
};
handelPage.initShowPage = function (index) {
    handelPage.page = index;
    //handelPage.PageTop = $("#" + handelPage.pageName[this.page - 1]).position().top

    //$.mobile.changePage("#" + handelPage.pageName[this.page - 1], {transition: "none", allowSamePageTransition: true});
    handelPage.animPage(handelPage.pageName[handelPage.page - 1]);
    managePage.show(handelPage.page);
    setTimeout(function () {
        $("body").scrollTop(0);
    }, 100);
    menu.init();
    if (managementRel.getCookie("status") != "5") {
        menu.destroyBtn();
    }

};
handelPage.HandleMenu = function (id) {
    // alert("=>"+id);
    if (parseFloat(managementRel.versionBuild()) < 4.4) {
        if (($("#slide-out").hasClass("side-menu-out")) && (id != 'close')) {
            //  alert("1 show");
            $("#slide-out").removeClass("side-menu-out");
            window.scrollTo(0, 0);
            $("#slide-out").scrollTop(0);
            //  $("body").scrollTop(2000);
            $('#slide-out').animate({scrollTop: 0}, 50);
            ///////////////////////////////
            $("#slide-out").addClass("side-menu-in");
            //  $('body').addClass('stop-scrolling');
            $("[data-role=page]").addClass('stop-scrolling');
            $("body").css({"max-height": ""});
            $(".menue-mover").remove();
            $("#bodyContent").append('<div  id="menu-mclose" class="menue-mover" style="opacity: 1;"></div>');
            $(".menue-mover").css({"width": handelPage.width, "height": handelPage.height});
            if (!(document.getElementById("sidenav-overlay"))) {
                $(".menue-mover").css("background", "rgba(0,0,0,0.5)");
            } else {
                $(".menue-mover").css("opacity", "0");
            }
            $(".menue-mover").attr("onclick", "handelPage.HandleMenu(id)");

        } else {
            //  alert("2 hide");
            $("#sidenav-overlay").attr("onclick", "handelPage.HandleMenu()");
            $("#slide-out").addClass("side-menu-out");
            $("#slide-out").removeClass("side-menu-in");
            // $('body').removeClass('stop-scrolling');
            $("[data-role=page]").removeClass('stop-scrolling');
            $("#sidenav-overlay").remove();
            $("body").css({"max-height": ""});
            $(".menue-mover").remove();

        }
    }

};
handelPage.mainLoad = function () {
    $("#slide-out").css({"display": "none"});
};
handelPage.menuType = function () {
    if (parseFloat(managementRel.versionBuild()) < 4.4) {
        $("#three-avatar").removeClass("required");
        $("#slide-out").removeClass("side-nav right-aligned");
        $("#slide-out").addClass("menu-old");
        $("#slide-out").css({
            "position": "absolute",
            "right": "0px",
            "top": "0px",
            "padding-top": "10px",
            "padding-left": "15px",
            "height": (parseInt(handelPage.height) + 200) + 'px',
            "display": "none",
            "overflow-y": "scroll"
        });
        $('.menu-item').each(function (i, obj) {
        });
        $(".menu-item").css("margin", "5px");
        $(".menu-Mname").css("margin", "5px");
        $("#img-bar").attr("onclick", "handelPage.HandleMenu(id)");
        $("#side-help").attr("onclick", "handelPage.HandleMenu(id)");
        $("#sidenav-main").attr("data-activates", "");
        $(".menue-mover").remove();
    } else {
        $("#slide-out").css("display", "block");
    }
};
handelPage.managerEnter = function (index) {

    $('body').removeClass('model-scroll');

    handelPage.initShowPage(index);
    // alert('page->'+handelPage.page);
    switch (handelPage.page) {
        case 1:

            break;
        case 2:
            // alert("2");

            pageTwo.init();


            if (typeof gaU != 'undefined') {
                gaU('send', 'pageview', 'main');
                //  alert('ok');
            } else {
                //  alert('noooo');
            }

            break;
        case 3:
            gaU('send', 'pageview', 'profile');
            pageThree.init();
            break;
        case 4:
            gaU('send', 'pageview', 'details');
            break;
        case 5:
            gaU('send', 'pageview', 'profile-pic');
            pageFive.init();
            break;
        case 6:
            gaU('send', 'pageview', 'product-detail');

            break;
        case 7:
            gaU('send', 'pageview', 'product-subcategory');
            pageSeven.init();
            break;
        case 8:
            gaU('send', 'pageview', 'product-cattype');
            pageEight.init();
            break;
        case 9:
            gaU('send', 'pageview', 'selltechnics');
            pageNine.init();
            break;
        case 10:
            gaU('send', 'pageview', 'exam-list');
            pageTen.init();
            break;
        case 11:
            gaU('send', 'pageview', 'exam-main');
            pageEleven.init();
            break;
        case 12:
            gaU('send', 'pageview', 'exam-result');
            pageTwelve.init();
            break;
        case 13:
            gaU('send', 'pageview', 'exam-participated');
            pageThirteen.init();
            break;
        case 14:
            gaU('send', 'pageview', 'poll-list');
            pageFourteen.init();
            break;
        case 15:
            gaU('send', 'pageview', 'poll-main');
            pageFifteen.init();
            break;
        case 16:
            gaU('send', 'pageview', 'chat-main');
            pageSixteen.init();
            break;
        case 17:
            gaU('send', 'pageview', 'rank-detail');
            pageSeventeen.init();
            break;
        case 18:
            gaU('send', 'pageview', 'sell');
            pageEighteen.init();
            break;
        case 19:
            gaU('send', 'pageview', 'rank-list');
            pageNineteen.init();
            break;
        case 20:
            gaU('send', 'pageview', 'contest-list');
            pageTwenty.init();
            break;
        case 21:
            gaU('send', 'pageview', 'contest-upload');
            pageTwentyOne.init();
            break;
        case 22:
            gaU('send', 'pageview', 'contest-vids');
            pageTwentyTwo.init();
            break;
        case 23:
            gaU('send', 'pageview', 'contest-details');
            pageTwentyThree.init();
            break;
        case 24:
            gaU('send', 'pageview', 'forecast');
            pageTwentyFour.init();
            $(".contet-menu-bar").css("background", "#051e3c");
            break;
        case 25:
            gaU('send', 'pageview', 'model-list');
            pageTwentyFive.init();
            break;
        case 26:
            gaU('send', 'pageview', 'model-detail');
            pageTwentySix.init();
            break;
        case 27:
            gaU('send', 'pageview', 'model-search');
            pageTwentySeven.init();
            break;
        case 28:
            gaU('send', 'pageview', 'model-compare');
            $('body').addClass('model-scroll');
            pageTwentyEight.init();
            break;
        case 29:
            gaU('send', 'pageview', 'model-edulist');
            pageTwentyNine.init();

            break;
        case 30:
            gaU('send', 'pageview', 'sell-models');
            pageThirty.init();
            break;
        case 31:
            gaU('send', 'pageview', 'sell-history');
            pageThirtyOne.init();
            break;
        case 32:
            gaU('send', 'pageview', 'sell-serial');
            pageThirtyTwo.init();

            break;
        case 33:
            gaU('send', 'pageview', 'get-all-product');
            pageThirtyThree.init();

            break;
        case 34:
            gaU('send', 'pageview', 'get-all-news');
            pageThrtyFour.init();

            break;
        case 35:
            gaU('send', 'pageview', 'videos');
            thirtyFive.init();

            break;
        case 36:
            thirtySix.init();

            break;
        case 37:
            thirtySeven.init();

            break;
        case 38:
            thirtyEight.init();
            break;
        case 39:
            thirtyNine.init();
            break;
    }
    if (pageTwo.slide)
        pageTwo.slide._pusse();
};
handelPage.managerReturn = function () {
    //$(window).lazyLoadXT();
    //$("#loading").addClass("hidden");
    // console.log("manage retuurn");
    // alert("handelPage.page->"+handelPage.page);
    //mm2
    if ((window.JSInterface) && (parseFloat(managementRel.versionBuild()) < 4.4) && ($("#slide-out").hasClass("side-menu-in"))) {
        //  alert("1");

        //  console.log("return 111111");

        handelPage.HandleMenu();


    } else {

        //alert("2");
        // console.log("return 2222222222");

        setTimeout(function () {
            $("body").scrollTop(0);
        }, 100);
        //console.log($("#mi-back-25").css("display"));
        if (handelPage.page == 24) {
            //console.log("retuuuurn 244444");

            pageTwentyFour.return();

        } else if ((handelPage.page == 25) && ($("#mi-back-25").css("display") == 'block')) {
            //  console.log("25 close sort");
            pageTwentyFive.closeSorts('mi-back-25');
        } else if (!menu.sts) {
            // alert(handelPage.page)
            if (handelPage.page == 11 && !pageEleven.pop) {
                //   console.log("return 11");
                pageEleven.return();
                return
            }

            //alert(managePage.direction[(managePage.direction.length) - 2])
            //alert(handelPage.pageName)
            if (handelPage.page == 12 && managePage.direction[(managePage.direction.length) - 2] != 13) {

                //-------> ATIEH_N strat
                if (pageTen.typeExamSelect == 0) {
                    pageTwelve.return();
                    handelPage.page = managePage.retun();
                } else if (pageTen.typeExamSelect == 1) {
                    pageTwelve.return();
                    handelPage.page = managePage.retun();
                    handelPage.page = managePage.retun();
                }
                //---------> ATIEH_N end

                // console.log(handelPage.page, handelPage.pageName)
                handelPage.animPage(handelPage.pageName[handelPage.page - 1]);
                return
            }

            switch (handelPage.page) {

                case 1:
                    managementRel.closeApp()

                    // if (typeof webkit != "undefined") {
                    //     managementRel.ios({"action": "exit"});
                    // } else {
                    //     window.JSInterface.returnApp();
                    // }

                    break;
                case 2:
                    pageTwo.return();
                    break;
                case 3:
                    pageThree.return();
                    break;
                case 4:
                    pageFour.return();
                    break;
                case 5:
                    pageFive.return();
                    break;
                case 6:
                    pageSix.return();
                    break;
                case 7:
                    pageSeven.return();
                    break;
                case 8:
                    pageEight.return();
                    break;
                case 9:
                    pageNine.return();
                    break;
                case 10:
                    pageTen.return();
                    break;
                case 11:
                    pageEleven.return();
                    break;
                case 12:
                    pageTwelve.returnTher();
                    break;
                case 13:
                    pageThirteen.return();
                    break;
                case 14:
                    pageFourteen.return();
                    break;
                case 15:
                    pageFifteen.return();
                    break;
                case 16:
                    pageSixteen.return();
                    break;
                case 17:
                    pageSeventeen.return();
                    break;
                case 18:
                    pageEighteen.return();
                    break;
                case 20:
                    pageTwenty.return();
                    break;
                case 21:
                    pageTwentyOne.return();
                    break;
                case 22:
                    pageTwentyTwo.return();
                    break;
                case 23:
                    pageTwentyThree.return();
                    break;
                //mahta

                /* case 24:
                     alert("24");
                     pageTwentyFour.return();
                     break;*/
                //fmahta
                case 25:
                    pageTwentyFive.return();
                    break;
                case 26:
                    pageTwentySix.return();
                    break;
                case 27:
                    pageTwentySeven.return();
                    break;
                case 28:
                    pageTwentyEight.return();
                    break;
                case 29:
                    pageTwentyNine.return();
                    break;
                case 30:
                    pageThirty.return();

                    break;
                case 31:
                    pageThirtyOne.return();

                    break;
                case 32:
                    pageThirtyTwo.return();

                    break;
                case 33:
                    pageThirtyThree.return();

                    break;
                case 34:
                    pageThrtyFour.return();

                    break;
                case 35:
                    thirtyFive.clearPage();

                    break;
                case 36:
                    thirtySix.return();

                    break;
                case 37:
                    thirtySeven.return();

                    break;
                case 38:
                    thirtyEight.return();
                    break;
                case 39:
                    thirtyNine.return();
                    break;
                default :
                    pageThirty.return();
                    break;
            }
            // alert(xhr)
            if (typeof xhr !== 'undefined') {
                xhr.abort();
                managementRel.hideLoading();
            }

            handelPage.page = managePage.retun();
            //$.mobile.changePage("#" + handelPage.pageName[handelPage.page - 1], {transition: "none", allowSamePageTransition: true});
            if (handelPage.page == 1) {
                if (window.JSInterface)
                    window.JSInterface.returnApp();
            }
            if (handelPage.page == 2) {
                //alert('sss')
                menu.titleBar("", "");
                pageTwo.slide._start();
            }
            if (handelPage.page == 24) {
                pageTwentyFour.changeNav();
            }


            handelPage.animPage(handelPage.pageName[handelPage.page - 1]);

            if ((handelPage.page == 22) && (pageTwentyTwo.pos)) {
                //alert("22,"+pageTwentyTwo.pos);

                window.scrollTo(0, pageTwentyTwo.pos);
                $("body").scrollTop(pageTwentyTwo.pos);
                //  $("body").scrollTop(2000);

                $('html, body').animate({scrollTop: pageTwentyTwo.pos}, 50);
                // alert( handelPage.height + $(window).scrollTop());
            }
            if ((handelPage.page == 30) && (pageThirty.pos)) {
                //alert("22,"+pageTwentyTwo.pos);
                //  console.log('[pageThirty.pos=>'+pageThirty.pos);
                window.scrollTo(0, pageThirty.pos);
                $("body").scrollTop(pageThirty.pos);
                //  $("body").scrollTop(2000);

                $('html, body').animate({scrollTop: pageThirty.pos}, 50);
                // alert( handelPage.height + $(window).scrollTop());
            }
            if (handelPage.page == 18) {
                menu.titleBar("images/21.png", "&#1604;&#1740;&#1587;&#1578; &#1605;&#1581;&#1589;&#1608;&#1604;&#1575;&#1578;");
            }

        } else {
            //  console.log("hide menuuuu return");
            $('.button-collapse').sideNav('hide');
        }
    }


};
handelPage.animPage = function (id) {
    $("[data-role='page']").css("overflow-x", "hidden");
    $("[data-role='page']").each(function (index) {
        $(this).addClass("hidden");
    });
    $("#" + id).removeClass("hidden");
    menu.manageTopScreen();
};
handelPage.screen = function () {
    handelPage.height = $(window).height();
    handelPage.width = $(window).width();
};
/*$.lazyLoadXT.onload = function () {
 var $el = $(this);
 $el
 .removeClass('lazy-hidden')
 .addClass('animated ' + $el.attr('data-effect'));
 };
 $.lazyLoadXT.scrollContainer = '.scrollerL';*/


/***********************************MENU**********************************/
var menu = {
    sts: false,
    imgHis: [], txtHis: []
};
menu.init = function () {

    this.classBar = "menu-bar";
    menu.show();
    $(".button-collapse").sideNav({
        menuWidth: 250, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens);
        onOpen: function () {

            menu.sts = true;
            $('html').css("overflow", "hidden");
            if (pageTwo.slide && handelPage.page == 2)
                pageTwo.slide._pusse();
        },
        onClose: function () {
            menu.sts = false;
            $('html').css("overflow", "auto");
            if (pageTwo.slide && handelPage.page == 2)
                pageTwo.slide._start();
        },
    });
    $('.collapsible').collapsible();
    this.hMenu = handelPage.height * 0.0625;
    //   alert( handelPage.width+","+ handelPage.height );
    $(".contet-menu-bar").css({"height": this.hMenu + "px", "width": handelPage.width + "px"});
    $("#menu-title").css({"height": this.hMenu + "px", "line-height": this.hMenu + "px"});
    if (typeof webkit != "undefined")
        $("#statusbar").css({"display": "block"});
    $("#menu-back").empty();
    this.liImg = $("<img>");
    this.liImg.attr("id", "img-menu-back");
    //this.liImg.attr("onclick", "handelPage.managerReturn()");
    this.liImg.attr("src", "images/back-512.png");
    $("#menu-back").append(this.liImg);
    menu.manageTopScreen();
};
menu.show = function () {
    $("." + this.classBar).removeClass("hidden");
}
menu.hide = function () {
    $("." + this.classBar).addClass("hidden");
};
menu.hideBtn = function () {
    $(".button-collapse").sideNav('hide');
};
menu.showBtn = function () {
    $(".button-collapse").sideNav('show');
};
menu.destroyBtn = function () {
    $(".button-collapse").sideNav('destroy');
};
menu.manageTopScreen = function () {
    $("#" + handelPage.pageName[handelPage.page - 1]).css({"margin-top": this.hMenu + (typeof webkit != "undefined" ? parseInt(20) : parseInt(0)) + "px"});
};
menu.userCreat = function () {
    $(".userDataSideMenu").attr("style", "height:" + ((389 * window.innerHeight) / 1920) + "px" + "")
    $(".menuItem").attr("style", "height:" + ((140 * window.innerHeight) / 1920) + "px" + "")

    $(".userProfileScore").html(managementRel.getCookie('score'))
    // $(".menu-score").html(managementRel.getCookie('score'))

    $(".userProfileImg").attr("src", dirImg + managementRel.getCookie('avatar'))
    // $(".menu-icon").html("<img style='height: 100%;' src='" + dirImg + managementRel.getCookie('avatar') + "'>")

    $(".userNameBox").html(managementRel.getCookie('name') + " " + managementRel.getCookie('family'))
    // $(".menu-name").html(managementRel.getCookie('name') + " " + managementRel.getCookie('family'))

}
menu.clickItemsPg1 = function (id) {
    // console.log('pageTwo.token'+pageTwo.token);

    if(typeof pageTwo.token === "undefined" || typeof pageTwo.token === undefined || pageTwo.token === ''){
        return false
    }
    // console.log("111");

    if (id == "me_18") {
        id = "me_6"
        menu.isSell = 1
    } else if (id == "me_6") {
        menu.isSell = 0
    }

    this.inArray = id.split("_");
    this.index = this.inArray[1];

    if (this.index != handelPage.page) {
        $(".menu-item").removeClass("act-menu");
        $("#" + id).addClass("act-menu");
        //mahta
        pageTwentyFour.resetNav();
        //fmahta
        pageSixteen.return(); //clear interval
        // alert('menu->'+this.index);
        switch (this.index) {
            case "2":
                //alert("main")


                gaU('send', 'pageview', 'pg1-main');

                handelPage.managerEnter(2);
                break;
            case "3":
                //gaU('send', 'pageview', "profile");
                // alert(gaU)
                gaU('send', 'pageview', 'pg1-profile');
                if (this.inArray[2] == "0") {
                    pageThree.st1 = false;
                    pageThree.st2 = false;
                    pageThree.st3 = false;
                    pageThree.st4 = false;
                    handelPage.managerEnter(3);
                    pageThree.clicMenu("three-one-tab");
                } else if (this.inArray[2] == "1") {

                    handelPage.managerEnter(3);
                    pageThree.clicMenu('three-three-tab');
                } else if (this.inArray[2] == "2") {

                    handelPage.managerEnter(3);
                    pageThree.clicMenu('three-two-tab');
                }
                break;
            case "6":
                gaU('send', 'pageview', 'pg1-product-category');
                handelPage.managerEnter(33);
                break;
            case "10":
                gaU('send', 'pageview', 'pg1-exam-list');
                resetExam();
                handelPage.managerEnter(10);
                break;
            case "14":
                gaU('send', 'pageview', 'pg1-rank-detail');
                pageSeventeen.return();
                handelPage.managerEnter(19);
                // gaU('send', 'pageview', 'pg1-poll-list');
                // handelPage.managerEnter(14);
                // pageFifteen.return();
                break;
            case "16":
                gaU('send', 'pageview', 'pg1-chat-main');
                handelPage.managerEnter(16);
                break;
            case "17":
                gaU('send', 'pageview', 'pg1-rank-detail');
                pageSeventeen.return();
                handelPage.managerEnter(19);
                //managementRel.tost("&#1576;&#1607; &#1586;&#1608;&#1583;&#1740;... ");

                break;
            case "18":
                gaU('send', 'pageview', 'pg1-sell');
                handelPage.managerEnter(18);
                //  managementRel.tost("&#1576;&#1607; &#1586;&#1608;&#1583;&#1740;... ");
                break;
            case "9":
                gaU('send', 'pageview', 'pg1-selltechnics');
                handelPage.managerEnter(9);
                var data = {
                    userID: managementRel.getCookie("id"),
                };
                ajax("POST", dir, pageNine.manage, "act=product&type=sale" + setParamsAjax(data));
                menu.titleBar("images/22.png", "&#1578;&#1705;&#1606;&#1740;&#1705; &#1607;&#1575;&#1740; &#1601;&#1585;&#1608;&#1588;");
                break;
            case "20":
                gaU('send', 'pageview', 'pg1-contest-list');
                handelPage.managerEnter(38);
                // if (managementRel.getCookie('national') === '0012981613' || managementRel.getCookie('national') === '1360401415' || managementRel.getCookie('national') === '0016885090' || managementRel.getCookie('national') === '0083488883' || managementRel.getCookie('national') === '0010055398' || managementRel.getCookie('national') === '0453470432' || managementRel.getCookie('national') === '4621681370' || managementRel.getCookie('national') === '1920018425') {
                //     handelPage.managerEnter(38);
                // } else {
                //     handelPage.managerEnter(20);
                // }
                break;
            case "22":

                handelPage.managerEnter(22);
                break;
            case "24": //
                // alert("pish biniii");
                gaU('send', 'pageview', 'pg1-forecast');
                handelPage.managerEnter(24);
                break;
            case "25": //
                handelPage.managerEnter(25);
                break;
            case "37": //
                handelPage.managerEnter(37);
                break;
            default:

                break;
        }
        /* console.log('top e menu bar'+$(".menu-bar").css("top"));
         console.log('top e statusbar'+$("#statusbar").css("top"));
         console.log('height e statusbar'+$("#statusbar").css("height"));*/
    }
    $('.button-collapse').sideNav('hide');

    /*   $("#slide-out").addClass("side-menu-out");
       $("#slide-out").removeClass("side-menu-in");*/
    handelPage.HandleMenu("close");
}
menu.clickItems = function (id) {
    //  alert('id->'+id);

    // console.log("111");
    if (id == "me_18") {

        id = "me_6"
        menu.isSell = 1

    } else if (id == "me_6") {
        menu.isSell = 0
    }

    this.inArray = id.split("_");
    this.index = this.inArray[1];

    // ATIEH_N start
    if (handelPage.page == 23) {
        document.getElementById("video").pause();
    }
    // ATIEH_N end

    if (this.index != handelPage.page) {
        $(".menu-item").removeClass("act-menu");
        $("#" + id).addClass("act-menu");
        //mahta
        pageTwentyFour.resetNav();
        //fmahta
        pageSixteen.return(); //clear interval
        //alert('menu->'+this.index);
        switch (this.index) {
            case "2":
                //alert("main")


                gaU('send', 'pageview', 'menu-main');

                handelPage.managerEnter(2);
                break;
            case "3":
                //gaU('send', 'pageview', "profile");
                // alert(gaU)
                gaU('send', 'pageview', 'menu-profile');
                if (this.inArray[2] == "0") {
                    pageThree.st1 = false;
                    pageThree.st2 = false;
                    pageThree.st3 = false;
                    pageThree.st4 = false;
                    handelPage.managerEnter(3);
                    pageThree.clicMenu("three-one-tab");
                } else if (this.inArray[2] == "1") {

                    handelPage.managerEnter(3);
                    pageThree.clicMenu('three-three-tab');
                } else if (this.inArray[2] == "2") {

                    handelPage.managerEnter(3);
                    pageThree.clicMenu('three-two-tab');
                }
                break;
            case "6":
                gaU('send', 'pageview', 'menu-product-category');
                handelPage.managerEnter(33);
                break;
            case "10":
                gaU('send', 'pageview', 'menu-exam-list');
                resetExam();
                handelPage.managerEnter(10);
                break;
            case "14":
                gaU('send', 'pageview', 'menu-poll-list');
                handelPage.managerEnter(14);
                pageFifteen.return();
                break;
            case "16":
                gaU('send', 'pageview', 'menu-chat-main');
                handelPage.managerEnter(16);
                break;
            case "17":
                gaU('send', 'pageview', 'menu-rank-detail');
                pageSeventeen.return();
                handelPage.managerEnter(19);
                //managementRel.tost("&#1576;&#1607; &#1586;&#1608;&#1583;&#1740;... ");

                break;
            case "18":
                gaU('send', 'pageview', 'menu-sell');
                handelPage.managerEnter(18);
                //  managementRel.tost("&#1576;&#1607; &#1586;&#1608;&#1583;&#1740;... ");
                break;
            case "9":
                gaU('send', 'pageview', 'menu-selltechnics');
                handelPage.managerEnter(9);
                var data = {
                    userID: managementRel.getCookie("id"),
                };
                ajax("POST", dir, pageNine.manage, "act=product&type=sale" + setParamsAjax(data));
                menu.titleBar("images/22.png", "&#1578;&#1705;&#1606;&#1740;&#1705; &#1607;&#1575;&#1740; &#1601;&#1585;&#1608;&#1588;");
                break;
            case "20":
                gaU('send', 'pageview', 'menu-contest-list');
                handelPage.managerEnter(20);
                break;
            case "21":
                pageEighteen.sellHistory()//ba hamahangi teama samyar be side menu ezafe shode
                break;
            case "22":

                handelPage.managerEnter(22);
                break;
            case "24": //
                // alert("pish biniii");
                gaU('send', 'pageview', 'menu-forecast');
                handelPage.managerEnter(24);
                break;
            case "25": //
                handelPage.managerEnter(25);
                break;

            default:

                break;
        }
        /* console.log('top e menu bar'+$(".menu-bar").css("top"));
         console.log('top e statusbar'+$("#statusbar").css("top"));
         console.log('height e statusbar'+$("#statusbar").css("height"));*/
    }
    $('.button-collapse').sideNav('hide');

    /*   $("#slide-out").addClass("side-menu-out");
       $("#slide-out").removeClass("side-menu-in");*/
    handelPage.HandleMenu("close");
}//images/m4.png
menu.titleBar = function (img, txt) {


    this.boxId = "#menu-title";
    $(this.boxId).empty();
    if (img != "") {
        this.liImg = $("<img>");
        this.liImg.attr("src", img);
        $(this.boxId).append(this.liImg);
    }
    if (txt != "") {
        this.el = $("<div></div>");
        this.el.html(txt);
        $(this.boxId).append(this.el);
    }
}
menu.score = function (txt) {
    managementRel.setCookie("score", txt);
    $(".menu-score").html(txt);
}

/***********************************SLIDESHOW**********************************/
function slideshow(obj) {
    this.data = [];
    for (var i in obj) {
        this.data[i] = obj[i];
    }

    this._init();
}

slideshow.prototype = {
    align: ["center-align", "left-align", "right-align"],
    _init: function () {//id, appnedId, img, title, height, indicators

        this._manage();
    },
    _manage: function () {
        this._create();
        //  console.log("before->"+$("#"+this.data.id).css("height"));
        $('#' + this.data.id).slider({indicators: this.data.indicators, height: this.data.height});
        // console.log("after->"+$("#"+this.data.id).css("height"));
    },
    _create: function () {
        this.el = $("<div></div>");
        this.el.attr("id", this.data.id);
        this.el.addClass("slider");
        $(this.data.append).append(this.el);
        this.ulEl = $("<ul></ul>");
        this.ulEl.addClass("slides");
        this.el.append(this.ulEl);
        for (var i = 0; i < this.data.img.length; i++) {
            if (this.data.typeSlide == 'B') {

                this.el.addClass("sindicator-25");
                this.ulEl.addClass("slider-back-26");
                this.liEl = $("<li></li>");
                this.liEl.addClass("slider-li-26");
                this.liEl.attr("id", this.data.baseId + i);
                this.liEl.attr("onclick", this.data.onclick);
                this.ulEl.append(this.liEl);

                this.elD = $("<div></div>");
                this.elD.addClass("slider-div-26");
                this.liEl.append(this.elD);

                this.liImg = $("<img>");
                this.liImg.attr("src", this.data.img[i]);
                this.liImg.addClass("slider-img-26");
//start atieh
                this.liImg.css("margin-top", this.data.height * (0.07) + 'px');
                this.elD.append(this.liImg);
//end atieh
                this.index = this.align[Math.floor(Math.random() * this.align.length)];
                this.liImg.removeClass("slider slides li img");
            } else {
                this.liEl = $("<li></li>");
                this.liEl.attr("id", this.data.baseId + i);
                this.liEl.attr("onclick", this.data.onclick);
                this.ulEl.append(this.liEl);
                this.liImg = $("<img>");
                this.liImg.attr("src", this.data.img[i]);
                this.liEl.append(this.liImg);
                this.index = this.align[Math.floor(Math.random() * this.align.length)];
                if (this.data.titleBar) {
                    this.elDiv = $("<div></div>");
                    this.elDiv.addClass("light grey-text text-lighten-3 caption " + this.index);
                    this.elDiv.html(this.data.title[i]);
                    this.liEl.append(this.elDiv);
                }
            }


        }
    },
    _pusse: function () {
        //alert('pause');

        $('#' + this.data.id).slider('pause');
    },
    _start: function () {
        $('#' + this.data.id).slider('start');
    },
    _next: function () {
        $('#' + this.data.id).slider('next');
    },
    _prev: function () {
        $('#' + this.data.id).slider('next');
    }
};

/***********************************SLIDESHOW**********************************/

function list(obj) {//title - baseId - className -
    this.obj = [];
    this.page = handelPage.page;
    for (var i in obj) {
        this.obj[i] = obj[i];
    }

    this._create();
    this._scrollManage();
}

list.prototype = {
    _create: function () {
        if (!this.obj.endScrollFun) {
            $(this.obj.appendEl).empty();
        }
        this.form = 0;
        if (this.obj.from) {
            this.form = this.obj.from;
        }
        this.to = this.obj.title.length;
        if (this.obj.to) {
            // this.to = parseInt(this.obj.from) + parseInt(this.obj.title.length);
            (this.obj.model == "E" ? this.to = this.obj.to : this.to = parseInt(this.obj.from) + parseInt(this.obj.title.length));
        }

        // alert(this.to + "===" + this.obj.title.length)
        for (var j = this.form; j < this.to; j++) {
            // $.extend(this.obj.onclick, {id: i});
            // console.log('i->'+i+',from=>'+this.form+',j->'+j);
            //alert(this.obj.model);
            var i = j - this.form;
            // var i = j - this.form
            this.el = $("<div></div>");
            //this.el.attr("id", "" + this.obj.baseId + i);

            (this.obj.model == "E" ? this.el.attr("id", "" + this.obj.baseId + j) : this.el.attr("id", "" + this.obj.baseId + i));

            if (typeof this.obj.onclick != "undefined")
                this.el.attr("onclick", "" + this.obj.onclick);
            this.el.addClass("" + this.obj.className);
            if (typeof this.obj.height != "undefined")
                this.el.attr("style", "height:" + this.obj.height + "px");
            if (typeof this.obj.minHeight != "undefined")
                this.el.attr("style", "min-height:" + this.obj.minHeight + "px");
            $(this.obj.appendEl).append(this.el);
            //  mylog.log('this.obj.model->' + this.obj.model);
            // alert("1");
            if (this.obj.model == "A") {

                this.img = $("<img>");
                this.img.attr("onload", 'loadPic("img-' + this.obj.baseId + i + '")');
                this.img.attr("src", this.obj.img[i]);
                this.img.attr("id", "img-" + this.obj.baseId + i);
                this.img.addClass("two-img-news hidden");
                this.el.append(this.img);
                this.elB = $("<div></div>");
                this.elB.addClass("imgbak");
                this.elB.attr("style", "text-align: center;");
                this.elB.html("<img class='' src='images/144.png' style='height: 100%;margin: 0 auto;'>");
                this.el.append(this.elB);
                if (typeof this.obj.time != "undefined") {
                    this.iconT = "<img class='floatLeft' src='images/3-7.png' style='height: 80%; margin-left: 10px; margin-right: 10px;'>";
                    this.elB = $("<div></div>");
                    this.elB.addClass("two-topitem-news");
                    this.elB.html(this.iconT + this.obj.time[i]);
                    this.el.append(this.elB);
                }

                this.elB = $("<div></div>");
                this.elB.addClass("two-title-news");
                this.elB.html(this.obj.title[i])
                this.el.append(this.elB);
            }
            if (this.obj.model == "B") {
                this.el.html(this.obj.title[i]);
                this.el.css("line-height", this.obj.height + "px");
                this.img = $("<img>");
                this.img.attr("src", this.obj.img[i]);
                this.img.attr("id", "img-" + this.obj.baseId + i);
                this.img.addClass("six-item-icon");
                this.el.append(this.img);
            }
            if (this.obj.model == "C") {
                this.el.html(this.obj.title[i]);
                this.el.css("line-height", this.obj.minHeight + "px");
            }
            if (this.obj.model == "D") {
                this.img = $("<img>");
                this.img.attr("onload", 'loadPic("img-' + this.obj.baseId + i + '")');
                this.img.attr("src", this.obj.img[i]);
                this.img.attr("id", "img-" + this.obj.baseId + i);
                this.img.attr("style", "width:" + this.obj.height + "px");
                this.img.addClass("seventeen-img hidden");
                this.el.append(this.img);
                this.elB = $("<div></div>");
                this.elB.addClass("seventeen-imgbak");
                this.elB.attr("style", "text-align: center;");
                this.elB.html("<img class='seventeen-img' src='images/144.png' style='height: 100%;border-radius: 100px;margin: 0 auto;'>");
                this.el.append(this.elB);
                if (typeof this.obj.score != "undefined") {
                    //this.iconT = "<img class='floatLeft' src='images/3-7.png' style='height: 80%; margin-left: 10px; margin-right: 10px;'>";
                    this.elB = $("<div></div>");
                    this.elB.addClass("seventeen-score");
                    this.elB.attr("style", "right:" + (this.obj.height + 5) + "px;left:" + (this.obj.height + 5) + "px");
                    this.elB.html(this.obj.score[i]);
                    this.el.append(this.elB);
                }

                this.elB = $("<div></div>");
                this.elB.addClass("seventeen-title");
                this.elB.html(this.obj.title[i]);
                this.elB.attr("style", "right:" + (this.obj.height + 5) + "px;left:" + (this.obj.height + 5) + "px");
                this.el.append(this.elB);
                this.elB = $("<div></div>");
                this.elB.addClass("seventeen-box-rank");
                this.elB.html(this.obj.rank[i]);
                this.elB.attr("style", "width:" + this.obj.height + "px;line-height:" + this.obj.height + "px");
                this.el.append(this.elB);
            }
            if (this.obj.model == "E") {
                $("." + this.obj.baseClass).css({
                    "margin-top": handelPage.height * (0.01) + 'px',
                    'height': handelPage.height * (0.076) + 'px'
                });
                var itemWidth = parseFloat($("." + this.obj.baseClass).css("width"));
                var itemHeight = parseFloat($("." + this.obj.baseClass).css("height"));
                // console.log("itemWidth=>"+itemWidth);

                this.elL = $("<div></div>");
                this.elL.addClass(this.obj.classLeft);
                this.el.append(this.elL);

                this.elR = $("<div></div>");
                this.elR.addClass(this.obj.classRight);
                this.elR.attr("id", this.obj.rightID + this.obj.id[j]);
                (this.obj.score ? this.elR.attr("score", this.obj.score[j]) : "");
                // console.log("this.obj.onclick=>"+this.obj.onclick);
                this.elR.attr("onclick", "" + this.obj.onclick);
                this.elR.attr("title", this.obj.title[j]);
                $("." + this.obj.classRight).css({"width": itemWidth * (0.106) + 'px'});
                this.el.append(this.elR);

                this.el.attr('onclick', this.obj.onclickL + '"' + this.obj.rightID + this.obj.id[j] + '")');

                this.elR.append("<input type='radio' class='mi-radio-" + this.page + "  with-gap' id='" + this.obj.radioID + j + "' name='filter-25' value='" + this.obj.id[j] + "'> <label class='colorBlue' for='" + this.obj.radioID + j + "'></label>");
                var radioWidth = parseFloat($(".mi-radio-18").css("width"));
                // console.log("width radio box->"+radioWidth+',padding->'+(itemHeight-radioWidth)/2+',itemw itemHeight=>'+itemHeight);
                if ((handelPage.height < 600)) {
                    //  console.log("600");
                    $("." + this.obj.classRight).css("padding-top", (itemHeight - radioWidth) / (4.5) + 'px');
                } else {
                    //console.log("nooo");
                    $("." + this.obj.classRight).css("padding-top", (itemHeight - radioWidth) / (3.5) + 'px');
                }


                this.elTitlte = $("<div></div>");
                this.elTitlte.addClass(this.obj.classTitle + " md-middle-font");
                this.elTitlte.html(this.obj.title[j]);
                this.elTitlte.css({
                    "height": handelPage.height * (0.076) + 'px',
                    "line-height": handelPage.height * (0.076) + 'px'
                });
                this.el.append(this.elTitlte);

            }
            if (this.obj.model == "F") {

                //   this.el.attr("style", "width:" + this.obj.width + "px");
                ((i % 2 == 0) ? this.el.css("background", "#ebebeb") : "");
                $("." + this.obj.baseClass).css({'height': handelPage.height * (0.074) + 'px'});

                this.elR = $("<div></div>");
                this.elR.addClass(this.obj.classRight + " selllist-r md-small-font");
                this.elR.html(this.obj.title[i].substr(0, 15));
                this.elR.css({
                    "height": handelPage.height * (0.076) + 'px',
                    "line-height": handelPage.height * (0.076) + 'px',
                    //'width': "50%"
                });
                this.el.append(this.elR);

                this.elm = $("<div></div>");
                this.elm.addClass(this.obj.classRight + " md-middle-font selllist-l");
                this.imgel = $("<img>");
                this.imgel.addClass(this.obj.imgClass);
                this.elm.append(this.imgel);

                this.elTtitle = $("<div></div>");
                this.elTtitle.addClass(this.obj.textClass);
                this.elm.append(this.elTtitle);
                var classTitle = this.obj.textClass;

                if (this.obj.installConfirm[i] === 0) {  //age barresi & reject
                    if (this.obj.rejected[i] === 0) {
                        this.imgel.attr("src", './images/sellload.png');
                        this.elTtitle.html("در حال بررسی");
                    } else if (this.obj.rejected[i] === 1) {
                        this.imgel.attr("src", './images/sellreject.png');
                        this.elTtitle.append("<span style='color:#f44336'>رد شده</span>");
                        if (this.obj.duplicate[i] === 1) {

                            this.elTtitle.append("<span style='color:#9e9e9e'> &nbsp&nbsp تکراری </span>");
                        } else if (this.obj.invalid[i] === 1) {
                            this.elTtitle.append("<span style='color:#9e9e9e'> &nbsp&nbsp نامعتبر </span>");
                        } else { //pannel
                            this.elTtitle.append("<span style='color:#9e9e9e'> &nbsp&nbsp نامعتبر </span>");
                        }
                    }

                } else if (this.obj.installConfirm[i] === 1) {
                    this.imgel.attr("src", './images/sellok.png');
                    if (this.obj.paymentConfirm[i] === 0) {
                        this.elTtitle.append("<span style='color:#9e9e9e'> &nbsp&nbsp تایید نصب </span>");
                    } else if (this.obj.paymentConfirm[i] === 1 && this.obj.scored[i] === 1) {
                        this.elTtitle.append("<span style='color:#9e9e9e'> &nbsp&nbsp تایید واریز </span>");
                    }
                }
                this.elTtitle.append("<span style='color:#9e9e9e'>&nbsp&nbsp &nbsp&nbsp"+(this.obj.date[i]).split(" ")[0]+"</span>");

                this.imgel.load(function () {
                    var picwidth = parseFloat($(".img-item-31").css("width"));
                    var itemwidth = (parseFloat($(".report-itemR-31").css("width"))) * (0.9);
                    var finalWidth = itemwidth - picwidth;
                    // $("." + classTitle).css({"width": finalWidth + 'px'});
                    $("." + classTitle).css({"width":  '100%'});

                });

                this.elm.css({
                    "height": handelPage.height * (0.076) + 'px',
                    "line-height": handelPage.height * (0.076) + 'px',
                    // 'width': "50%"
                });
                this.el.append(this.elm);

                this.elTtitle.css({"margin-right": (parseFloat(this.elm.css("width")) * (0.1)) + parseFloat(this.imgel.css("width")) + 'px'});

                $("" + this.obj.appendEl).append("<div style='clear:both'></div>");


                /*  this.ell = $("<div></div>");
                  this.ell.addClass(this.obj.classRight);
                  this.ell.html(this.obj.title[i]);
                  this.ell.css({"height":handelPage.height * (0.076)+'px',"line-height":handelPage.height * (0.076)+'px','width':"25%"});
                  this.el.append(this.ell);*/
            }
        }

    },
    _scrollManage: function () {
        var objThis = this;

        //  alert("Scroll manage");

        document.getElementById("bodyContent").onscroll = function (obj) {
            //   console.log("scroooll on");
            var scrollHeight = $(document).height();
            var plus = 0;
            if (window.JSInterface)
                plus = 24;
            var scrollPosition = handelPage.height + $(window).scrollTop() + parseInt(plus);
            if (((scrollHeight - scrollPosition) / scrollHeight) < 0.001) {
                // when scroll to bottom of the page
                //    alert("bottom");
                eval("" + objThis.obj.endScrollFun);
                // if (objThis.obj.endScrollFun && objThis.page == handelPage.page) {
                //     eval("" + objThis.obj.endScrollFun);
                // }
            }
        };

        if ((window.JSInterface) && (parseFloat(managementRel.versionBuild()) < 4.4)) {
            $(document).on('scroll', function () {
                var scrollHeight = $(document).height();
                var plus = 0;
                if (window.JSInterface)
                    plus = 24;
                var scrollPosition = handelPage.height + $(window).scrollTop() + parseInt(plus);
                //console.log((scrollHeight - scrollPosition) / scrollHeight);
                //if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                if (((scrollHeight - scrollPosition) / scrollHeight) < 0.001) {
                    // when scroll to bottom of the page

                    //   console.log("func e list->"+objThis.obj.endScrollFun+'page num-?'+objThis.page+'mpage e app->'+handelPage.page);
                    // if (objThis.obj.endScrollFun)
                    if (objThis.obj.endScrollFun && objThis.page == handelPage.page) {
                        //  console.log("end list bezan");
                        // alert("bottom list");
                        eval("" + objThis.obj.endScrollFun);
                    }
                }
            })
        }

    }

}


function table(obj) {//title - baseId - className -
    this.obj = [];
    this.page = handelPage.page;
    for (var i in obj) {
        this.obj[i] = obj[i];
        mylog.log('obj tableeeeeee->' + this.obj[i]);
    }

    this._create();
    this._scrollManage();
}

table.prototype = {
    _create: function () {
        if (!this.obj.endScrollFun) {
            $(this.obj.appendEl).empty();
        }
        this.form = 0;
        if (this.obj.from) {
            //alert(this.obj.from);
            this.form = this.obj.from;
        }
        this.to = this.obj.title.length;
        if (this.obj.to) {
            (this.obj.model == "B" ? this.to = this.obj.to : this.to = parseInt(this.obj.from) + parseInt(this.obj.title.length));
        }

        for (var j = this.form; j < this.to; j++) {
            // $.extend(this.obj.onclick, {id: i});
            // console.log('i->'+i+',from=>'+this.form+',j->'+j);
            //if (this.obj.model == "B") {
            //  var i = j ;
            //  }else{
            var i = j - this.form;
            //}
            //console.log('i->'+i+',from=>'+this.form+',to->'+this.to+',j->'+j);
            this.el = $("<div></div>");
            (this.obj.model == "B" ? this.el.attr("id", "" + this.obj.baseId + j) : this.el.attr("id", "" + this.obj.baseId + i));
            //this.el.attr("id", "" + this.obj.baseId + i);
            if (typeof this.obj.onclick != "undefined") {
                this.el.attr("onclick", "" + this.obj.onclick);
                this.el.addClass("" + this.obj.className);

                if (typeof this.obj.height != "undefined") {
                    mylog.log('this.obj.height--->' + this.obj.height);
                    this.el.css("height", this.obj.height + "px");
                }

                if (i % 2 == "0") {
                    mylog.log('zoj');
                    this.el.css({"float": "right"});
                } else {
                    mylog.log('fard');
                    this.el.css({"float": "left"});
                }


                if (typeof this.obj.width != "undefined") {

                    console.log('this.obj.minwidth ->' + this.obj.width);
                    this.el.css("width", this.obj.width + "px");


                }
                if (typeof this.obj.minHeight != "undefined") {
                    mylog.log('this.obj.minHeight--->' + this.obj.minHeight);
                    this.el.css("min-height", this.obj.minHeight + "px");
                }
                $(this.obj.appendEl).append(this.el);
                if (this.obj.model == "A") {

                    mylog.log('this.obj.model ->' + this.obj.model);

                    this.parentImg = $("<div></div>");
                    this.parentImg.attr("id", "parentImg_" + this.obj.baseId + i);
                    this.parentImg.addClass('parentImg');
                    this.el.append(this.parentImg);


                    this.img = $("<img>");
                    this.img.attr("onload", 'loadPic("img-' + this.obj.baseId + i + '")');
                    this.img.attr("src", "https://samyar.rasgames.ir/pannel/samyar/public/uploads/shares/contestimg/" + this.obj.img[i]);
                    this.img.attr("id", "img-" + this.obj.baseId + i);
                    this.img.addClass("img-video hidden");
                    this.parentImg.append(this.img);

                    this.elB = $("<div></div>");
                    this.elB.addClass("img-back");
                    this.elB.attr("style", "text-align: center;");
                    this.elB.html("<img class='' src='images/144.png' style='height: 100%;'>");
                    this.parentImg.append(this.elB);

                    this.elPlay = $("<img>");
                    this.elPlay.attr("src", "images/play.png");
                    this.elPlay.attr("id", "img-" + this.obj.baseId + i);
                    this.elPlay.addClass("img-play");
                    // this.parentImg.append(this.elPlay);


                    this.parentTitle = $("<div></div>");
                    this.parentTitle.attr("id", "parentTitle-" + this.obj.baseId + i);
                    this.parentTitle.addClass("parentTitle");
                    this.el.append(this.parentTitle);

                    this.elRate = $("<div></div>")
                    this.elRate.addClass("elRate");
                    this.elRate.attr("id", "elRate_" + this.obj.baseId + i)
                    // this.elRate.attr("style", "    width: 50% !important;")
                    this.parentTitle.append(this.elRate);
                    // mylog.log('this.obj.rate--->' + this.obj.rate[i]);
                    // var parseInt = parseInt(this.obj.rate[i]);
                    // mylog.log('parseInt--->' + parseInt);
                    $("#elRate_" + this.obj.baseId + i).rateYo({//http://rateyo.fundoocode.ninja/#options

                        starWidth: this.obj.starWidth + "px",
                        // normalFill: "#035faa",
                        ratedFill: "#ebbe0d",
                        "rating": parseInt(this.obj.rate[i]),
                        maxValue: 5,
                    });


                    this.elTitle = $("<div></div>");
                    this.elTitle.addClass("title-name");
                    var showTxt_22 = (this.obj.title[i].length > 25) ? (this.obj.title[i].substring(0, 25) + '...') : (this.obj.title[i])
                    this.elTitle.html('<span style="float: right; width: 70%">' + showTxt_22 + '</span> <img src="images/expert/play.png" style="float: left;width: 15%">');
                    // this.elTitle.html('&#1601;&#1740;&#1604;&#1605; &#1575;&#1586;: ' + this.obj.title[i].substring(0, 12) + '...');
                    this.parentTitle.append(this.elTitle);


                    // var pImg = $("<img>");
                    // pImg.attr("src", "images/expert/play.png");
                    // pImg.addClass("expertPlay_22");
                    // this.parentTitle.append(pImg);


                } else if (this.obj.model == "B") {
                    // console.log("base class=>"+this.obj.baseClass+',margin-right'+this.obj.marginRight);
                    this.el.attr("number", j);

                    $("." + this.obj.baseClass).css({
                        "margin-right": this.obj.marginRight + 'px',
                        "margin-top": this.obj.marginTop + 'px'
                    });

                    this.elpict = $("<div></div>");
                    this.elpict.css({
                        "margin-top": this.obj.height * (0.03) + 'px',
                        "margin-bottom": this.obj.height * (0.02) + 'px',
                        "height": this.obj.height * (0.05) + 'px'
                    });
                    this.el.append(this.elpict);

                    this.elwm = $("<img>");
                    this.elwm.addClass('mi-wm-25');
                    this.elwm.css({"height": this.obj.height * (0.05) + 'px'});
                    this.elwm.attr("src", "./images/samsungicon.png");
                    this.elpict.append(this.elwm);

                    this.elI = $("<div></div>");
                    this.elI.addClass("mi-thum-25");
                    //this.elI.css({"height":this.obj.height*(0.517)+'px','background-image':'url("./images/Samsung-50MU7980-Smart-LED-TV-50-Inch-3bc994.jpg")',"background-size":this.obj.height*(0.517)+'px'});
                    this.elI.css({
                        "height": this.obj.height * (0.517) + 'px',
                        "background-size": this.obj.height * (0.517) + 'px',
                        'width': this.obj.width + 'px'
                    });
                    this.el.append(this.elI);

                    this.elimage = $("<img>");
                    this.elimage.addClass("mi-img-25");
                    this.elimage.attr("id", "img-" + handelPage.page + "-" + j);
                    // this.elimage.attr("src","./images/Samsung-50MU7980-Smart-LED-TV-50-Inch-3bc994.jpg");
                    this.elimage.attr("src", this.obj.img[j]);
                    this.elI.append(this.elimage);

                    //////////////////////////////
                    var heightCbox = parseInt($(".mi-thum-25").css("height"));
                    $("#img-" + handelPage.page + "-" + j).load(function () {
                        var heightF = $(this).height();
                        var widthF = $(this).width();
                        //  console.log("heightCbox=>"+heightCbox+",heightF=>"+heightF);
                        // alert(heightF);
                        /*alert(heightF);
                        console.log(' this.page->'+  handelPage.page+',heightF->'+heightF+',topesh->'+$(this).css("top"));*/
                        $(this).css("top", (heightCbox - heightF) / 2 + 'px');

                        var theImage = new Image();
                        theImage.src = $(this).attr("src");
                        var imageWidth = theImage.width;
                        var imageHeight = theImage.height;

                        /*        var imageWidth = $(this).get(0).naturalWidth;
                                var imageHeight = $(this).get(0).naturalHeight;
        */

                        // console.log("image with=>"+imageWidth+",height->"+imageHeight+",id=>"+$(this).attr("id"));
                        if (imageWidth > imageHeight) {
                            //  console.log("width>=");
                            $(this).css({"width": "90%"});
                        } else {
                            //   console.log("height <");
                            $(this).css({"top": "5%", "height": "90%", "width": "auto"});
                        }

                    });

                    ////////////////////////////////


                    this.elp = $("<div></div>");
                    this.elp.addClass("mi-price-25 md-small-font");
                    this.elp.html(this.obj.title[j]);
                    this.elp.css({
                        "line-height": this.obj.height * (0.110) + 'px',
                        "height": this.obj.height * (0.110) + 'px'
                    });
                    if (this.obj.realPrice[j] != this.obj.price[j]) {

                    } else {
                        this.elp.css({
                            "margin-top": this.obj.height * (0.055) + 'px',
                            "margin-bottom": this.obj.height * (0.055) + 'px'
                        });
                    }
                    this.el.append(this.elp);
                    //console.log("fest prize->"+this.obj.festPrice[j]);

                    //if (this.obj.festPrice[j] != "") {
                    //console.log('this.obj.realPrice[j]->'+this.obj.realPrice[j]+',this.obj.price[j]=>'+this.obj.price[j]);
                    if (this.obj.realPrice[j] != this.obj.price[j]) {
                        this.elfest = $("<div></div>");
                        this.elfest.addClass("mi-fesprice-25 md-small-font");
                        this.elfest.html(this.obj.price[j] + ' &#1578;&#1608;&#1605;&#1575;&#1606;');
                        // (this.obj.festPrice[j] != "" ? this.elfest.html(this.obj.price[j] + ' &#1578;&#1608;&#1605;&#1575;&#1606;') : "");
                        this.elfest.css({
                            "line-height": this.obj.height * (0.110) + 'px',
                            "height": this.obj.height * (0.110) + 'px'
                        });
                        this.el.append(this.elfest);
                    }

                    this.elbot = $("<div></div>");
                    this.elbot.addClass("mi-bottom-25");
                    this.elbot.css({
                        "line-height": this.obj.height * (0.147) + 'px',
                        "height": this.obj.height * (0.147) + 'px'
                    });
                    this.el.append(this.elbot);


                    this.elt = $("<div></div>");
                    this.elt.addClass("mi-right-25 md-small-font");
                    this.elt.html("&#1602;&#1740;&#1605;&#1578;");
                    this.elt.css({
                        "line-height": this.obj.height * (0.147) + 'px',
                        "height": this.obj.height * (0.147) + 'px'
                    });
                    this.elbot.append(this.elt);

                    this.elt = $("<div></div>");
                    this.elt.addClass("mi-left-25 md-small-font");
                    this.elt.html(this.obj.realPrice[j] + '&#1578;&#1608;&#1605;&#1575;&#1606;');
                    this.elt.css({
                        "line-height": this.obj.height * (0.147) + 'px',
                        "height": this.obj.height * (0.147) + 'px'
                    });
                    this.elbot.append(this.elt);

                }

            }


        }

    },
    _scrollManage: function () {
        // console.log("manaaaaaaaaage scroll");
        var objThis = this;
        console.log(objThis)
        document.getElementById("bodyContent").onscroll = function (obj) {
            // console.log("on scroll");

            var scrollHeight = $(document).height();
            var plus = 0;
            if (window.JSInterface)
                plus = 24;
            var scrollPosition = handelPage.height + $(window).scrollTop() + parseInt(plus);
            //console.log((scrollHeight - scrollPosition) / scrollHeight);

            //  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            //  console.log('page number0>'+handelPage.page+',number e table->'+objThis.page);
            if (((scrollHeight - scrollPosition) / scrollHeight) < 0.001) {
                //alert("bottom table");
                // when scroll to bottom of the page
                //console.log("****************"+objThis.obj.endScrollFun);
                // console.log(objThis.obj.endScrollFun, objThis.page, handelPage.page);
                if (objThis.obj.endScrollFun && objThis.page == handelPage.page) {
                    console.log("end table bezan");
                    eval("" + objThis.obj.endScrollFun);
                }
            }
        };
        if ((window.JSInterface) && (parseFloat(managementRel.versionBuild()) < 4.4)) {
            $(document).on('scroll', function () {
                var scrollHeight = $(document).height();
                var plus = 0;
                if (window.JSInterface)
                    plus = 24;
                var scrollPosition = handelPage.height + $(window).scrollTop() + parseInt(plus);
                //console.log((scrollHeight - scrollPosition) / scrollHeight);

                //  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                //  console.log('page number0>'+handelPage.page+',number e table->'+objThis.page);
                if (((scrollHeight - scrollPosition) / scrollHeight) < 0.001) {
                    //alert("bottom table");
                    // when scroll to bottom of the page
                    //console.log("****************"+objThis.obj.endScrollFun);
                    // console.log('esme tabe e end e scroll->'+objThis.obj.endScrollFun);
                    if (objThis.obj.endScrollFun && objThis.page == handelPage.page) {
                        // console.log("end table bezan");
                        // alert("bottom table main");
                        eval("" + objThis.obj.endScrollFun);
                    }
                }
            })
        }
    }

}


mytest = function (obj) {


}

var loading = {};
loading.create = function () {

    this.el = $("<img>");
    this.el.attr("src", "images/loading.gif");
    this.el.attr("id", "loadId");
    this.el.attr("style", "width: 64px;height: 64px;display:none;z-index:9999999999999999;position: fixed;top:" + ((handelPage.height / 2) - (64 / 2)) + "px;left:" + ((handelPage.width / 2) - (64 / 2)) + "px")
    $("body").append(this.el);
}
loading.hide = function () {
    $("#loadId").css("display", "none");
}
loading.show = function () {
    $("#loadId").css("display", "block");
}


/***********************************CHAT**********************************/

/***********************************SLIDESHOW**********************************/

function iosView() {
    if (typeof webkit != "undefined") {
        $(".two-box-btn").css({"bottom": "0px"});
    }
}


$(document).ready(function () {
    $("#sidenav-overlay").click(function () {
        //alert("Sss");
    });
});

function loadPic(id) {
    $("#" + id).removeClass("hidden");
    $("#" + id).css({"opacity": "1", "z-index": "2"});
}

$(".drag-target").click(function () {
    //alert("Sss");
});
window.onscroll = function () {
    //  alert("winfow scroll");
};
$(document).on('scroll', function () {
    //alert("documnt scroll");
})
/*
window.onerror = function (message, url, lineNo){
   // alert("error");
   // console.log('Error========================>: ' + message + '\n' + 'Line Number: ' + lineNo+',url->'+url);
    return true;
}*/
document.addEventListener('focus', function (e) {

    // console.log("fuuuucl");
}, true);
