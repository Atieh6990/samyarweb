/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var starObj;
function starModule(obj) {


	mylog.log('obj------------->' + obj);
	this.data = [];
	for (var i in obj) {
		this.data[i] = obj[i];
	}
	mylog.log('this.data[i] ---> ' + this.data[i]);
	starObj = this;

}
starModule.prototype = {
	xPos: -1, isStarActive: 0,
	_init: function (apppendTo, videoRate, videoID, isRate, rateUser) {
		starObj.data.appendTo = apppendTo;
		starObj.data.isRate = isRate;
		starObj.data.videoRate = videoRate;
		starObj.data.videoID = videoID;
		starObj.data.rateUser = rateUser;
		starObj._manage();
		this.isStarActive = 1;
		mylog.log('append----> ' + starObj.data.appendTo);
		mylog.log('starObj.data.videoID----> ' + starObj.data.videoID);
		mylog.log('starObj.data.videoRate----> ' + starObj.data.videoRate);
		mylog.log('starObj.data.rateUser ----> ' + starObj.data.rateUser);
	},
	_manage: function () {

		//this._parse(data2);
		this._create();
		this._giveStar();
	},
	_parse: function () {


	},
	_create: function () {
		this.starBackDiv = $("<div></div>");
		this.starBackDiv.addClass("star-BackMainDiv");
		// this.starBackDiv.css("left", this.data.left);
		// this.starBackDiv.css("top", this.data.top);
		$('#parentStar').append(this.starBackDiv);



		this.el = $("<div></div>");
		this.el.css("clear", "both");
		$(this.starBackDiv).append(this.el);
		this.el = $("<div></div>");
		this.el.addClass("star-rateText");
		this.el.text("به این فیلم امتیاز دهید");
		$(this.starBackDiv).append(this.el);
		this.el = $("<div></div>");
		this.el.css("clear", "both");
		$(this.starBackDiv).append(this.el);
		this.el = $("<div></div>");
		this.el.addClass("star-mainHolder");
		$(this.starBackDiv).append(this.el);
		this.el = $("<div></div>");
		this.el.addClass("star-parent");
		$(".star-mainHolder").append(this.el);
		this.el = $("<div></div>");
		this.el.addClass("star-starItemHolder");
		$(".star-parent").append(this.el);
		this.el = $("<div></div>");
		this.el.addClass("star-holdstars");
		$(".star-starItemHolder").append(this.el);
		for (var i = 0; i < 5; i++) {

			this.el = $("<div></div>");
			this.el.addClass("star-imageHolder");
			this.el.attr("id", "star-imageBox-" + i);
			$(".star-parent").append(this.el);
			this.el = $("<img>");
			this.el = $("<img>");
			this.el.addClass("star-offImage");
			var rightDistance = 0;
			var leftDistance = 0;
			switch (i) {
			case 0:
				rightDistance = 15;
				leftDistance = -37;
				break;
			case 1:
				rightDistance = 12;
				leftDistance = -33;
				break;
			case 2:
				rightDistance = 8;
				leftDistance = -29;
				break;
			case 3:
				rightDistance = 4;
				leftDistance = -26;
				break;
			case 4:
				rightDistance = -1;
				leftDistance = -21;
				break;
			}
			this.el.css("right", rightDistance + 'px');
			this.el.attr("id", "star-offImg-" + i);
			//this.el.attr("src", "images/rate-0.png");
			$("#star-imageBox-" + i).append(this.el);
			this.el = $("<img>");
			this.el = $("<img>");
			this.el.addClass("star-onImage");
			this.el.attr("id", "star-onImg-" + i);
			this.el.css("right", rightDistance + 'px');
			// this.el.attr("src", "images/rate.png");
			$("#star-imageBox-" + i).append(this.el);
		}


		//  alert('is rate--->' + starObj.data.isRate);
		if (starObj.data.isRate == "0") {
			//  alert('rate 0');

			$(".star-parent").rateYo({//http://rateyo.fundoocode.ninja/#options

				starWidth: "20px",
				spacing: "5px",
				fullStar: true,
				//normalFill: "#0054a6",
				ratedFill: "#f39c12",
				//rating: this.data.rateUser,
				maxValue: 5,
				/* "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>"+
				 "<path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379"+
				 " 4.246-3.611-2.625-3.612 2.625"+
				 " 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833"+
				 " 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388"+
				 " 7.416 5.388-2.833-8.718"+
				 " 7.417-5.389h-9.167l-2.833-8.718z'></path>"+
				 "</svg>",*/


				onSet: function (rating, rateYoInstance) {

					alert("Rating: " + parseInt(rating));
					var data = {
						userID: managementRel.getCookie("id"),
						vidID: pageTwentyTwo.TwentyTwoObj['id'][pageTwentyTwo.index[2]],
						rate: parseInt(rating),
					};
					ajax("POST", dir, starObj._manageRate, "act=contest&type=rate" + setParamsAjax(data));

				}


			});
		} else {
			// alert('rate 1');
			$(".star-parent").rateYo({//http://rateyo.fundoocode.ninja/#options

				starWidth: "20px",
				spacing: "5px",
				ratedFill: "#f39c12",
				fullStar: true,
				readOnly: true,
				rating: this.data.rateUser,
				maxValue: 5,
				/* "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>"+
				 "<path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379"+
				 " 4.246-3.611-2.625-3.612 2.625"+
				 " 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833"+
				 " 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388"+
				 " 7.416 5.388-2.833-8.718"+
				 " 7.417-5.389h-9.167l-2.833-8.718z'></path>"+
				 "</svg>",*/


				//  onSet: function (rating, rateYoInstance) {

				// alert("Rating: " + parseInt(rating));


				// }

			});
			$('.star-rateText').empty();
			var data = {
				userID: managementRel.getCookie("id"),
				vidID: pageTwentyTwo.TwentyTwoObj['id'][pageTwentyTwo.index[2]],
				rate: this.data.rateUser,
			};
			ajax("POST", dir, starObj._manageRate, "act=contest&type=rate" + setParamsAjax(data));

		}
		this.el = $("<div></div>");
		this.el.addClass("star-message");
		$(this.starBackDiv).append(this.el);
	},
	_manageRate: function (data) {

		// console.log('obj rateeee---->' + data);

		$('.star-message').empty();
		var obj = jQuery.parseJSON(data);
		mylog.log('obj rateeee---->' + obj);
		if (obj['status'] == "ok") {
			$('.star-message').html(obj['description2']);
		} else {

		}

	},
	_return: function () {
		clearTimeout(starObj.timeOutStar);
		$(".star-BackMainDiv").remove();
		this.isStarActive = 0;
		return true;
	},
	_right: function () {
		//'alert("this.data.starRat-->" + this.data.videoRate);
		if (this.data.videoRate < 5) {
			this.data.videoRate++;
			// rating('#three-box-rate', this.data.videoRate);
		}
		$(".star-holdstars").rateYo("option", "rating", parseInt(this.data.videoRate));
		this._giveStar();
	},
	_left: function () {
		//'alert("this.data.starRat-->" + this.data.videoRate);
		if (parseInt(this.data.videoRate) > 0) {
			this.data.videoRate--;
			// rating('#three-box-rate', this.data.videoRate);
		}
		$(".star-holdstars").rateYo("option", "rating", parseInt(this.data.videoRate));
		this._giveStar();
	},
	_giveStar: function () {
		// alert(parseInt(this.data.videoRate));

		for (var i = 0; i < 5; i++) {

			if (i < parseInt(this.data.videoRate)) {

				$("#star-onImg-" + i).css("display", "block");
				$("#star-offImg-" + i).css("display", "none");
				$("#star-starIcon-" + i).css("display", "block");
			} else {

				$("#star-onImg-" + i).css("display", "none");
				$("#star-offImg-" + i).css("display", "block");
				$("#star-starIcon-" + i).css("display", "none");
			}

		}

//        $(".star-starIcon").css("display", "none");
//
//        $("#star-starIcon-" + (parseInt(this.data.videoRate) - parseInt(1))).css("display", "block");
		//        console.log("-->" + (parseInt(this.data.videoRate) - parseInt(1)));


	},
	_enter: function () {
		if (parseInt(this.data.videoRate) != 0) {
			starObj = this;
			//ajax("POST", urlNow + "/?act=contest&type=rate&userID=" + managementRel.getCookie("id") + "&vidID=" + pageTwentyTwo.TwentyTwoObj['id'][pageTwentyTwo.index[2]] + "&rate=" + parseInt(this.data.videoRate), this._sucessRate);
		}
	},
	_sucessRate: function (data) {
		mylog.log(data);
		this.objRa = jQuery.parseJSON(data);
		this.statusRa = this.objRa['status'];
		if (this.statusRa == "ok") {
			this.descriptionRa = this.objRa['description'];
			this.user_score = this.objRa['user_score'];
			this.user_rank = this.objRa['user_rank'];
			this.score_changed = this.objRa['score_changed'];
			starObj._manageError(this.descriptionRa);
		}
		this.error = this.objRa['code'];
		if (this.error == "52" || this.error == "53") {
			this.score_changed = this.objRa['score_changed'];
			this.score = this.objRa['user_score'];
			//   mylog.alert('changed->' + this.score_changed + ',score->' + this.score);
			changeTotallScore(this.score_changed, this.score);
		}
	},
	_manageError: function (message) {
		//  alert(message);
		clearTimeout(starObj.timeOutStar);
		$(".star-message").html("");
		$(".star-message").html(message);
		starObj.timeOutStar = setTimeout(function () {
			$(".star-message").html("");
			starObj._return();
		}, 5000)
	},
}
