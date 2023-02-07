pageFour = {zoomage: ''};

pageFour.init = function (data) {
    menu.titleBar("", "");
    $("#four-detailNews-box").empty();
    //console.log(data);
    menu.manageTopScreen();
    pageFour.parser(data);
    pageFour.create();
}
tk3 = 'E7B91';
pageFour.parser = function (data) {

    this.id = [];
    this.short_txt = [];
    this.long_txt = [];
    this.title = [];
    this.pic = [];
    this.start_time = [];

    var obj = jQuery.parseJSON(data);
    if (obj['status'] == "ok") {
        this.detail = obj["detail"];
        this.id = this.detail["id"];
        this.short_txt = this.detail["short_txt"];
        this.long_txt = this.detail["long_txt"];
        this.title = this.detail["title"];
        this.pic = dirImg + this.detail["pic"];
        this.start_time = this.detail["start_time"];
    }
};
pageFour.create = function () {
    $("#four-detailNews-box").empty();
    this.conetent = "";
    this.conetent += "<div class='four-box-time'> <img class='floatLeft' style='height: 100%;' src='images/3-5.png'>  <div class='floatLeft four-time'>" + pageFour.start_time + "</div> </div>";
    this.conetent += "<div class='border-blue'></div>";
    this.conetent += "<div class='four-box-title'>" + pageFour.title + "</div>";
    this.conetent += "<div style='clear:both'></div>";
    this.conetent += "<div class='border-blue'></div>";
    //this.conetent += "<div class='four-box-shortTxt'>" + pageFour.short_txt + "</div>";
    if (!((this.detail["is_vid"]) && (this.detail["is_vid"] == 1))) {
        this.conetent += "<img onclick='pageFour.clickImg()' class='four-box-img materialboxed' src='" + pageFour.pic + "'>";
        // this.conetent += "<div id='container_4' class='four-box-img'></div>";
    }

    this.conetent += "<div class='four-box-longTxt'>" + pageFour.long_txt + "</div>";
    this.conetent += "<div style='clear:both'></div>";
    $("#four-detailNews-box").append(this.conetent);
    // $('.materialboxed').materialbox();
    //

    // pageFour.makeZoom(pageFour.pic)

};
pageFour.return = function () {
    pageFour.zoomage = ""
    $("#four-detailNews-box").empty();

};

pageFour.clickImg = function () {
    pageFour.zoomLayer = "";
    // this.zoomLayer += "<div style='position:fixed;opacity: 1; width: 100%; height:100%; left: 0px; top: 0px;background-color: #292929;display: flex;justify-content: center;align-items: center' > <img style=' z-index: 1000; max-width: 90%' src='" + pageFour.pic + "'> </div>"
    this.zoomLayer += "<div onclick='pageFour.closeZoom()' id='container_4' > </div>"
    $("#four-detailNews-box").append(this.zoomLayer);

    pageFour.makeZoom(pageFour.pic)
}
pageFour.closeZoom = function(){
    $( "#container_4" ).remove()
    pageFour.zoomLayer = '';
    pageFour.zoomage = "";
}
pageFour.makeZoom = function (URL) {
    pageFour.zoomage = new Zoomage({
        // container: document.querySelector('.four-box-img'),
        container: document.querySelector('#container_4'),
        maxZoom: 5,
        minZoom: 0.1,
        enableGestureRotate: true,
        enableDesktop: true,
        dbclickZoomThreshold: 0.2,
        onDrag: function (data) {
            // console.log("[Drag Position X] " + data.x, "[Drag Position Y] " + data.y);
        },
        onZoom: function (data) {
            // console.log("[Zoom Scale] " + data.zoom, "\n[Image Width] " + data.scale.width, "\n[Image Height] " + data.scale.height);
        },
        onRotate: function (data) {
            // console.log("[Rotate Degree] " + data.rotate);
        }
    });

    // load and display the image;
    pageFour.zoomage.load(URL);
}
