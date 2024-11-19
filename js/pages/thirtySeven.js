thirtySeven = {
    pageHeight: '', menuObj: '', encodeToken: '',sendDataObj:''
};

thirtySeven.init = function () {

    // console.log((pageTwo.token))

    thirtySeven.sendDataObj = {
        tk:encode_utf8(pageTwo.token),
        pic:managementRel.getCookie("avatar"),
        name:managementRel.getCookie("name"),
        family:managementRel.getCookie("family"),
        isStore:pageTwo.isStore,
    }

    // console.log(thirtySeven.sendDataObj)


    thirtySeven.pageHeight = window.innerHeight
    // thirtySeven.menuObj = $(".menu-bar")
    // thirtySeven.menuObj.css('display', 'none')
    $('#thirtySeven').css('margin-top', '0')


    const iframe = document.createElement('object');
    // iframe.data = 'https://samyar.rasgames.ir/web/vam30?tk=' + encode_utf8(pageTwo.token) + '&pic=' + managementRel.getCookie("avatar") + '&name=' + managementRel.getCookie("name") + '&family=' + managementRel.getCookie("family") + ''; // لینک مورد نظر
    iframe.data = 'https://samyar.rasgames.ir/web/vam30?sendDataObj=' + encodeURIComponent(JSON.stringify(thirtySeven.sendDataObj)) + ''; // لینک مورد نظر
    iframe.style.width = '100%';
    iframe.style.height = thirtySeven.pageHeight + 'px';
    iframe.style.border = 'none';
    document.getElementById('clubParent').innerHTML = '';
    document.getElementById('clubParent').appendChild(iframe);

}


thirtySeven.return = function () {


}


// thirtySeven.sendEvent = function () {
//     const message = {
//         type: 'MY_EVENT',
//         data: {key: 'value'}
//     };
//     // window.parent.postMessage(message, '*');
//     document.getElementById("myObject").contentWindow.postMessage(message, '*');
//     // window.parent.postMessage("callMyFunction", '*');
// }
