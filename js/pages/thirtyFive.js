thirtyFive = {
    title: "",
    fileUrl: '',
}


thirtyFive.init = function () {
    $('.pageTTParent_35').attr("style", "height:" + (window.innerHeight - $(".menu-bar").height()) + "px !important")
}

thirtyFive.fillParams = function (data) {
    thirtyFive.title = data.title
    thirtyFive.fileUrl = data.fileUrl

    $('#video2').attr('src', thirtyFive.fileUrl);
    $('#video2').attr('onclick', "thirtyFive.openVideo()");
    $("#title_35").html( thirtyFive.title)

    // console.log( thirtyFive.title , thirtyFive.fileUrl)
}
thirtyFive.openVideo = function(){
    if(parseFloat(managementRel.versionBuild())<4.4) {
        managementRel.playVideo(thirtyFive.fileUrl,'g');
    }
}
thirtyFive.return = function () {
    thirtyFive.clearPage();
};

thirtyFive.clearPage = function(){
    $('#video2').attr('src', "");
    $("#title_35").html("");
}
