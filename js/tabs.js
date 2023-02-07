/******************************************************************** tabs **********************************************************************************************************/

function tabs(obj) {

    this.obj = obj;
    this._create();
}

tabs.prototype = {
    _create: function () {

        // console.log(this.obj.obj)
        for (var i = 0; i < this.obj.obj.length; i++) {
            this.el = $("<div></div>");
            this.el.addClass("" + this.obj.className);
            this.el.attr("id", "" + this.obj.baseId + i)

            if (typeof this.obj.onclick != "undefined")
                this.el.attr("onclick", "" + this.obj.onclick);

            this.el.html(this.obj.obj[i].name);
            if (this.obj.type == 1) {
                var img_1 = $("<img>");
                img_1.addClass(this.obj.imgClass);
                img_1.addClass("imgTab_1_17");
                img_1.attr("src", this.obj.obj[i].img_1);
                this.el.prepend(img_1)


                var img_2 = $("<img>");
                img_2.addClass(this.obj.imgClass);
                img_2.addClass("imgTab_2_17");
                img_2.attr("src", this.obj.obj[i].img_2);
                this.el.prepend(img_2)
            }


            $(this.obj.appendEl).append(this.el);

            this.HoverEl = $("<div></div>");
            this.HoverEl.addClass("" + this.obj.hover);

            this.el.append(this.HoverEl);


            if (i == 0) {
                $("#" + this.obj.baseId + i).addClass(this.obj.hoverShow)
            }
        }
    },

}

/*************************************************************** tabs content ***************************************************************************************************************/
function horizontalList(obj) {
    this.obj = obj;
    this.titleClass = "listTitle";
    this.elClass = "listItem"
    this.lineClass = "productLineSep";
    this.btmElClass = "btmElClass";
    this.title_1_Class = "title_1";
    this.titleImg = "titleImg_33"
    this._create();
}

horizontalList.prototype = {
    _create: function () {
        // console.log(JSON.stringify(this.obj.externalStyle))

        this.titleEl = $("<div></div>");
        this.titleEl.addClass("" + this.titleClass);

        this.title_1 = $("<div></div>")
        this.title_1.addClass(this.title_1_Class);
        this.title_1.html(this.obj.listTitle);
        this.titleEl.append(this.title_1);

        this.titleImg = $("<img>");
        this.titleImg.addClass(this.obj.titleIgClass)
        this.titleImg.attr("src", this.obj.titleIMG);
        this.titleEl.append(this.titleImg)

        if (typeof this.obj.externalStyle != "undefined")
            this.titleEl.attr("style", this.obj.externalStyle);

        $("" + this.obj.appendTitleEl).prepend(this.titleEl);

        if (this.obj.listData.length == 0) {
            this.emptyEl = $("<div></div>");
            this.emptyEl.addClass("emptyList");
            this.emptyEl.html("لیست محصولات خالی است");
            $("" + this.obj.appendEl).append(this.emptyEl)
            return false
        }

        // this.ElChild = $("<div></div>");
        // this.ElChild.addClass("" + this.listScroll);
        // $("" + this.obj.appendEl).append(this.ElChild)

        for (var i = 0; i < this.obj.listData.length; i++) {
            this.el = $("<div></div>");
            this.el.addClass("" + this.elClass);
            this.el.attr("id", "listItem_" + this.obj.brandIndex + "_" + this.obj.subBrandIndex + "_" + i);

            if (typeof this.obj.elStyle != "undefined")
                this.el.attr("style", (this.obj.elStyle));

            if (typeof this.obj.onclick != "undefined")
                this.el.attr("onclick", "" + this.obj.onclick);

            $("" + this.obj.appendEl).append(this.el)

            this.elImg = $("<img>");
            this.elImg.addClass("listItemImg");
            this.elImg.attr("src", "" + this.obj.listData[i].image);
            // this.elImg.attr("src", 'images/products/macro.png');
            this.el.append(this.elImg)

            this.line = $("<div></div>");
            this.line.addClass("" + this.lineClass);
            this.el.append(this.line)

            this.eltitle = $("<div></div>");
            this.eltitle.addClass("" + this.obj.elTitle);
            if (this.obj.listData[i].name.length > 11) {
                this.eltitle.addClass("lisTitleTop_0");
            } else {
                this.eltitle.addClass("lisTitleTop_1");
            }
            this.eltitle.html("" + this.obj.listData[i].name);
            this.el.append(this.eltitle)

            this.btmEl = $("<div></div>");
            this.btmEl.addClass("" + this.btmElClass);
            this.el.append(this.btmEl)
        }
    }
}

/**************************************************************** cat list *******************************************************************************/
function catList(obj) {
    this.obj = obj;
    this.itemWidth = this.obj.itemWidth;
    this.font_0 = "HitemFont_0"
    this.font_1 = "HitemFont_1"
    this._create();
}


catList.prototype = {
    _create: function () {
        for (var i = 0; i < this.obj.data.detail.length; i++) {
            var HEl = $("<div></div>");
            HEl.attr("style", "width:" + this.itemWidth)
            HEl.attr("id", "HEl_" + i)
            HEl.addClass('' + this.obj.itemClass);
            HEl.attr("onclick", "" + this.obj.onclick);
            $("" + this.obj.appendItem).append(HEl);

            if (i == 0) {
                HEl.addClass("" + this.obj.hover);
            }

            var IMG = $("<img>");
            // IMG.attr("src","images/products/mahsolat.png");
            IMG.attr("src", this.obj.data.detail[i].image);
            IMG.addClass('' + this.obj.imgClass);
            HEl.append(IMG);

            var txt = $('<div></div>')
            txt.addClass('' + this.obj.txtClass);
            if (this.obj.data.detail[i].name.length > 7) {
                txt.addClass('' + this.font_1);
            } else {
                txt.addClass("" + this.font_0);
            }
            var cnt = (this.obj.data.detail[i].count != null) ? (this.obj.data.detail[i].count) : (0)
            if (cnt == 0) {
                txt.html(this.obj.data.detail[i].name)
            } else {
                txt.html(this.obj.data.detail[i].name + '/' + cnt)
            }
            HEl.append(txt);
        }
    }
}

/****************************************************************** content list *******************************************************************************/

function contentList(obj) {

    this.obj = obj;
    // console.log(this.obj)
    this.font_0 = "HitemFont_0";
    this.innerClss = "CElIn";
    this.alignClas = "alignItems"
    this.defualtImg = "https://samyar.rasgames.ir/pannel/samyar/public/uploads/shares/avatar/defaultpic.png"

    var tmpLen;
    if (this.obj.type == 0) {
        tmpLen = this.obj.data.detail.length
    } else if (this.obj.type == 1) {
        tmpLen = this.obj.data.length
    } else if (this.obj.type == 2) {
        tmpLen = this.obj.data.lists.news.length
    } else if (this.obj.type == 3) {
        tmpLen = this.obj.data.image.length
    } else if (this.obj.type == 4) {
        tmpLen = this.obj.data.image.length
    } else if (this.obj.type == 5) {
        tmpLen = this.obj.data.length
    }

    this.len = tmpLen
    this._create();
    this._scrollManage();

}

contentList.prototype = {

    _create: function () {
        for (var i = 0; i < this.len; i++) {
            var CEl = $("<div></div>");
            if (this.obj.type == 0) {
                CEl.attr("id", "CEl_" + i);
            } else if (this.obj.type == 1) {
                CEl.attr("id", "CEl_" + this.obj.data[i].id);
            } else if (this.obj.type == 2) {
                CEl.attr("id", "thirtyfour-list-" + i);
            } else if (this.obj.type == 3) {
                CEl.attr("id", "nine-subcat-" + i);
            } else if (this.obj.type == 4) {
                CEl.attr("id", "seventeen-list-" + i);
            } else if (this.obj.type == 5) {
                // console.log('counter',this.obj.counter)
                CEl.attr("id", "ten-subcat-" + (parseInt(i + this.obj.counter)));
                CEl.attr("ids", this.obj.data[i].id);
                CEl.attr("title", this.obj.data[i].name);
            }

            CEl.addClass('' + this.obj.itemClass);
            CEl.attr("style", "height:" + this.obj.itemHeight);
            CEl.attr("onclick", "" + this.obj.onclick);
            $("" + this.obj.appendItem).append(CEl);

            var CElIn = $('<div></div>');
            CElIn.addClass("" + this.innerClss);
            CEl.append(CElIn)

            var IMG = $('<img>');
            if (this.obj.type == 0) {
                var urlImg = ((this.obj.data.detail[i].image == null) || (this.obj.data.detail[i].image == "")) ? ("images/144.png") : (this.obj.data.detail[i].image);
            } else if (this.obj.type == 1) {
                var urlImg = ((this.obj.data[i].thumbnail == null) || (this.obj.data[i].thumbnail == "")) ? ("images/144.png") : (this.obj.data[i].thumbnail);
            } else if (this.obj.type == 2) {
                var urlImg = ((this.obj.data.lists.news[i].pic == null) || (this.obj.data.lists.news[i].pic == "")) ? ("images/144.png") : (this.obj.data.lists.news[i].pic);
            } else if (this.obj.type == 3) {
                var urlImg = ((this.obj.data.image[i] == null) || (this.obj.data.image[i] == "")) ? ("images/144.png") : (this.obj.data.image[i]);
            } else if (this.obj.type == 4) {
                var urlImg = ((this.obj.data.image[i] == null) || (this.obj.data.image[i] == "")) ? (this.defualtImg) : (this.obj.data.image[i]);
            } else if (this.obj.type == 5) {
                var urlImg = (this.obj.data[i].img);
            }

            IMG.attr("src", urlImg);
            IMG.addClass('' + this.obj.imgClass);
            CElIn.append(IMG)

            var txt = $('<div></div>');
            txt.addClass(this.obj.txtClass)
            if (this.obj.type == 1) {
                txt.addClass(this.alignClas)
            }
            txt.addClass(this.font_0)

            if (this.obj.type == 0) {
                txt.html(this.obj.data.detail[i].name)
            } else if (this.obj.type == 1) {
                var model = $("<div></div>");
                model.addClass(this.obj.modelClass)
                txt.append(model);

                var modelTitle = $('<div></div>');
                modelTitle.addClass(this.obj.modelTitleClass);
                modelTitle.html("مدل :");
                model.append(modelTitle);

                var modelName = $("<div></div>");
                modelName.addClass(this.obj.modelNameClass);
                var showName = (this.obj.data[i].title.length > 15) ? (this.obj.data[i].title.substring(0, 15)) : (this.obj.data[i].title);
                modelName.html("<b>" + showName + "</b>");
                model.append(modelName)

                var price = $("<div></div>");
                price.addClass(this.obj.modelClass)
                txt.append(price);

                var priceTitle = $('<div></div>');
                priceTitle.addClass(this.obj.modelTitleClass);
                priceTitle.html("قیمت :");
                price.append(priceTitle);

                var priceName = $("<div></div>");
                priceName.addClass(this.obj.modelPrice);
                priceName.html("<b>" + this.obj.data[i].price_final + "تومان" + "</b>")
                price.append(priceName);
                // txt.html(this.obj.data[i].short_desc)
            } else if (this.obj.type == 2) {
                var showTxt = $("<div></div>");
                showTxt.addClass(this.obj.txtTitleClass)
                showTxt.attr("style", "height:70%")
                txt.append(showTxt);

                var show = (this.obj.data.lists.news[i].title.length > 60) ? (this.obj.data.lists.news[i].title.substring(0, 60) + "...") : (this.obj.data.lists.news[i].title)
                showTxt.html(show)

                var shoeDate = $("<div></div>");
                shoeDate.addClass(this.obj.txtTitleClass)
                shoeDate.attr("style", "height:30%;color: #939393;")
                txt.append(shoeDate);
                shoeDate.html(this.obj.data.lists.news[i].start_time)
            }
            if (this.obj.type == 3) {
                txt.html(this.obj.data.name[i])
            } else if (this.obj.type == 4) {
                txt.html(this.obj.data.title[i] + "<br>" + this.obj.data.score[i])
            } else if (this.obj.type == 5) {
                txt.html(this.obj.data[i].name)
            }

            CElIn.append(txt)

            var side = $('<div></div>');
            side.addClass('' + this.obj.sideClass);
            side.addClass(this.font_0);

            if (this.obj.type == 4) {
                var newClass = (i == 0) ? ("firstRate_17") : ((i == 1) ? ("secondRate_17") : ((i == 2) ? ("thirdRate_17") : ("")))
                side.addClass(newClass);

                if (i <= 2) {
                    var cupImg = $('<img>');
                    cupImg.addClass("cupImg_17");
                    cupImg.attr("src", "images/rate/nafare-aval.png");
                    side.append(cupImg)
                }

            }

            var sideTxt;
            if ((this.obj.type == 0 || this.obj.type == 2 || this.obj.type == 3)) {
                sideTxt = (i + 1)
            } else if (this.obj.type == 1) {
                sideTxt = (this.obj.productCounterFrom + i)
            } else if (this.obj.type == 4) {
                if (i > 2)
                    sideTxt = this.obj.data.rank[i]
            }
            side.html(sideTxt);
            CEl.append(side)
        }
    },
    _scrollManage: function () {
        // alert('_scrollManage')
        var objThis = this;
        // $("." + objThis.obj.scrollElClass).scroll(function () {
        //     console.log("scroll top", $(this).scrollTop(), 'innerHeight', $(this).innerHeight(), "scrollHeiht", $(this)[0].scrollHeight)
        //     alert("scroll top" + $(this).scrollTop() + 'innerHeight' + $(this).innerHeight() + "scrollHeiht" + $(this)[0].scrollHeight)
        // })


        $("." + objThis.obj.scrollElClass).scroll(function () {
            // alert($(document).height() + " **** " + $(window).scrollTop() + " **** " + $(window).height())
            // console.log($(""+objThis.obj.appendItem).css('padding-bottom').split('px'))
            var btn = parseInt($("" + objThis.obj.appendItem).css('padding-bottom').split('px')[0])
            // console.log(btn)
            if ($(this).scrollTop() + $(this).innerHeight() + btn >= $(this)[0].scrollHeight) {
                // alert("end")
                eval("" + objThis.obj.endScrollFun);
            }
        });
    }
}

/****************************************************************** past exam list *******************************************************************************/
function pastExamList(obj) {
    this.obj = obj;
    this.len = 10
    this._create();
}

pastExamList.prototype = {
    _create: function () {

        for (var i = 0; i < this.obj.data.name.length; i++) {
            var CEl = $("<div></div>");
            CEl.addClass('' + this.obj.itemClass);
            CEl.attr("style", "width:" + this.obj.itemWidth);
            CEl.attr("onclick", "" + this.obj.onclick);
            CEl.attr("id", this.obj.id + i);
            $("." + this.obj.appendName).append(CEl)

            var examDet = $("<div></div>")
            examDet.addClass('' + this.obj.examDet);
            CEl.append(examDet)

            var tag = $("<div></div>")
            tag.addClass('' + this.obj.tagClass);
            CEl.append(tag)

            var elem_1 = $("<div></div>");
            elem_1.addClass(this.obj.examElemClass);
            elem_1.addClass(this.obj.examElem_1);
            elem_1.html(this.obj.data.name[i])
            examDet.append(elem_1)

            // var elem_2 = $("<div></div>");
            // elem_2.addClass(this.obj.examElemClass);
            // elem_2.addClass(this.obj.examElem_2);
            // elem_2.html("زمان  " + this.obj.data.duration[i])
            // examDet.append(elem_2)

        }
    }
}

/****************************************************************** future exam list *******************************************************************************/
function futureExamList(obj) {

    this.obj = obj;
    this.len = this.obj.data.length
    this._create();
}

futureExamList.prototype = {

    _create: function () {
        // console.log("futureExamList",this.obj.id)
        for (var i = 0; i < this.len; i++) {

            var CEl = $("<div></div>");
            CEl.addClass('' + this.obj.itemClass);
            CEl.attr("style", "height:" + this.obj.itemHeight);
            CEl.attr("id", this.obj.id + i);
            CEl.attr("onclick", "" + this.obj.onclick);
            $("" + this.obj.appendItem).append(CEl);

            var txt = $('<div></div>');
            txt.addClass(this.obj.txtClass)
            txt.html(this.obj.data[i].name)
            CEl.append(txt)

            var side = $('<div></div>');
            side.addClass('' + this.obj.sideClass);
            CEl.append(side)
        }
    },
}

/****************************************************************** frequently Questions list *******************************************************************************/
function frequentlyQuestionsList(obj) {
    this.obj = obj;
    this.len = 10
    this._create();
}

frequentlyQuestionsList.prototype = {
    _create: function () {
        for (var i = 0; i < this.len; i++) {
            var CEl = $("<div></div>");
            CEl.addClass('' + this.obj.itemClass);
            CEl.attr("style", "width:" + this.obj.itemWidth);
            CEl.attr("id", "frequentlyQuestionsItem_" + i);
            $("." + this.obj.appendName).append(CEl)


            var examDet = $("<div></div>")
            examDet.addClass('' + this.obj.FrequentlyQuestionsTitle);
            examDet.html("سوال شماره  2")
            CEl.append(examDet)

            var IMG = $('<img>');
            IMG.attr("src", "images/exams/soalat-kilidy_detail.png");
            IMG.attr('style', "width:20%");
            examDet.append(IMG)

            var examTxt = $("<div></div>")
            examTxt.addClass('' + this.obj.FrequentlyQuestionsTxt);
            examTxt.html("می‌دانم که امروز دیگر در غرب «پایان کمونیسم» حرف تازه‌ای به حساب نمی‌آید، عبارتی است  ")
            CEl.append(examTxt)
        }
    },
}

/****************************************************************** question Options ****************************************************************************************/

function questionOption(obj) {
    this.obj = obj;
    this.len = this.obj.obj.length
    this._create();
}

questionOption.prototype = {
    _create: function () {

        for (var i = 0; i < this.len; i++) {
            var CEl = $("<div></div>");
            CEl.addClass('' + this.obj.className);
            CEl.attr("onclick", "" + this.obj.onclick);
            CEl.attr("id", this.obj.baseId + i);
            $(this.obj.appendEl).append(CEl);

            var CElIn = $('<div></div>');
            CElIn.addClass("" + this.obj.innerClss);
            CElIn.attr("id", this.obj.baseInnerId + i);

            if (this.obj.userAnsId == this.obj.truAnsId) {
                var userAns = "";
                var trueAns = (i == this.obj.truAnsId) ? ('<img src="images/exams/correct-answer.png" style="width: 9%;">') : ("");
            } else {
                var userAns = (i == this.obj.userAnsId) ? ('<img src="images/exams/falst-answer.png" style="width: 9%;">') : ("");
                var trueAns = (i == this.obj.truAnsId) ? ('<img src="images/exams/correct-answer.png" style="width: 9%;">') : ("");
            }

            var showTxt = userAns + trueAns + this.obj.obj[i]

            CElIn.html(showTxt)
            CEl.append(CElIn)

            var side = $('<div></div>');
            side.addClass('' + this.obj.sideClass);
            side.attr("id", this.obj.sideBaseId + i);
            side.attr("style", "height:" + $("#" + this.obj.baseId + i + "").height() + "px");
            CEl.append(side)
        }
    }
}


/****************************************************************** specialist ****************************************************************************************/
function specialistList(obj) {
    this.obj = obj;
    this.len = this.obj.obj.length
    this._create();
}

specialistList.prototype = {
    _create: function () {
        for (var i = 0; i < this.len; i++) {
            console.log(this.obj.appendItem)
            var CEl = $("<div></div>");
            CEl.attr("id", this.obj.baseId + i);
            CEl.addClass('' + this.obj.itemClass);
            CEl.attr("style", "height:" + this.obj.itemHeight);
            CEl.attr("onclick", "" + this.obj.onclick);
            $("" + this.obj.appendItem).append(CEl);

            var CElIn = $('<div></div>');
            CElIn.addClass("" + this.obj.innerClass);
            CEl.append(CElIn);

            var showTxt = $("<div></div>")
            showTxt.addClass("" + this.obj.txtClass);
            showTxt.html(this.obj.obj[i])
            CElIn.append(showTxt);

            var IMG = $('<img>');
            IMG.attr("src", "images/expert/play.png");
            IMG.addClass('' + this.obj.imgClass);
            CElIn.append(IMG)

            var side = $('<div></div>');
            side.addClass('' + this.obj.sideClass);
            CEl.append(side);
        }

    }
}

/****************************************************************** sell list (with radio btn) ****************************************************************************************/
function sellList(obj) {
    this.obj = obj;
    this.len = this.obj.obj.title.length;
    if (this.obj.type == 1) {
        this.page = 18;
    } else if (this.obj.type == 2) {
        this.page = 30;
    }

    this._create();
    this._scrollManage();
}

sellList.prototype = {
    _create: function () {
        for (var i = 0; i < this.len; i++) {

            var CEl = $("<div></div>");
            CEl.attr("id", this.obj.baseId + this.obj.obj.id[i]);
            CEl.addClass('' + this.obj.itemClass);
            CEl.attr("style", "height:" + this.obj.itemHeight);
            CEl.attr("title", this.obj.obj.title[i]);
            CEl.attr("onclick", "" + this.obj.onclick);
            $("" + this.obj.appendItem).append(CEl);


            var CElIn = $('<div></div>');
            CElIn.addClass("" + this.obj.innerClass);
            CEl.append(CElIn);
            //
            var showTxt = $("<div></div>")
            showTxt.addClass("" + this.obj.txtClass);
            showTxt.html(this.obj.obj.title[i])
            CElIn.append(showTxt);
            //
            // var IMG = $('<img>');
            // IMG.attr("src", "images/expert/play.png");
            // IMG.addClass('' + this.obj.imgClass);
            // CElIn.append(IMG)
            //
            var side = $('<div></div>');
            side.addClass('' + this.obj.sideClass);
            CElIn.append(side);

            side.append("<input type='radio' class='mi-radio-" + this.page + "  with-gap' id='" + this.obj.radioID + i + "' name='filter-25' value='" + this.obj.obj.id[i] + "'> <label class='colorBlue' for='" + this.obj.radioID + i + "'></label>");

            var lineList = $("<div></div>");
            lineList.addClass(this.obj.lineClass);
            CEl.append(lineList)
        }
    },
    _scrollManage: function () {
        var objThis = this;
        $("." + objThis.obj.scrollElClass).scroll(function () {
            // console.log($(document).height() ,$(window).scrollTop(),$(window).height() )
            if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                // console.log("end")
                eval("" + objThis.obj.endScrollFun);
            }
        });
    }
}
