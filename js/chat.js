

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Messenger = function () {
    function Messenger() {
        _classCallCheck(this, Messenger);

        this.messageList = [];
        this.deletedList = [];

        this.me = 1; // completely arbitrary id
        this.them = 5; // and another one

        this.onRecieve = function (message) {
            return console.log('Recieved: ' + message.text);
        };
        this.onSend = function (message) {
            return console.log('Sent: ' + message.text);
        };
        this.onDelete = function (message) {
            return console.log('Deleted: ' + message.text);
        };
    }

    Messenger.prototype.send = function send() {
        var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        text = this.filter(text);

        if (this.validate(text)) {
            var message = {
                user: this.me,
                text: text,
                time: new Date().getTime()
            };

            this.messageList.push(message);

            this.onSend(message);
        }
    };

    Messenger.prototype.recieve = function recieve() {
        var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        text = this.filter(text);

        if (this.validate(text)) {
            var message = {
                user: this.them,
                text: text,
                time: new Date().getTime()
            };

            this.messageList.push(message);

            this.onRecieve(message);
        }
    };

    Messenger.prototype.delete = function _delete(index) {
        index = index || this.messageLength - 1;

        var deleted = this.messageLength.pop();

        this.deletedList.push(deleted);
        this.onDelete(deleted);
    };

    Messenger.prototype.filter = function filter(input) {
        var output = input.replace('bad input', 'good output'); // such amazing filter there right?
        return output;
    };

    Messenger.prototype.validate = function validate(input) {
        return !!input.length; // an amazing example of validation I swear.
    };

    return Messenger;
}();

var BuildHTML = function () {
    function BuildHTML() {
        _classCallCheck(this, BuildHTML);

        this.messageWrapper = 'message-wrapper';
        this.circleWrapper = 'circle-wrapper';
        this.textWrapper = 'text-wrapper';

        this.meClass = 'me';
        this.themClass = 'them';
        
        this.meAvatar ="";
        this.themAvatar ="";
    }

    BuildHTML.prototype._build = function _build(text, who) {
        return '<div class="' + this.messageWrapper + ' ' + this[who + 'Class'] + '">\n              <div class="' + this.circleWrapper + ' animated bounceIn"><img style="width: 100%;" src="'+this[who + 'Avatar']+'"> </div>\n              <div class="animated fadeIn ' + this.textWrapper + '">'+text+'</div>\n            </div>';
    };

    BuildHTML.prototype.me = function me(text) {
        return this._build(text, 'me');
    };

    BuildHTML.prototype.them = function them(text) {
        return this._build(text, 'them');
    };

    return BuildHTML;
}();


$(document).ready(function () {




});






















function chat(obj) {
    this.data = [];
    for (var i in obj) {
        this.data[i] = obj[i];
    }
    this.$input = $(this.data.input)
    this.$send = $(this.data.send)
    this.$content = $(this.data.content)
    this.$inner = $(this.data.inner)
    this._init();
}
chat.prototype = {

    _init: function () {
        this.messenger = new Messenger();
        this.buildHTML = new BuildHTML();
        
        this.messenger.onSend = this._buildSent;
        this.messenger.onRecieve = this._buildRecieved;
        //alert(this.$content)
    },

    _safeText: function () {
        chat.$content.find('.message-wrapper').last().find('.text-wrapper').text(text);
    },
    _animateText: function () {
        setTimeout(function () {
            this.$content.find('.message-wrapper').last().find('.text-wrapper').addClass('animated fadeIn');
        }, 350);
    },
    _scrollBottom: function () {
        //  $("#inner").scrollTop($(this.$content).outerHeight(true));
        $(chat.$inner).animate({
            scrollTop: $(chat.$content).outerHeight(true)
        }, {
            queue: false,
            duration: 'ease'
        });
    },
    _buildSent: function (message) {
        mylog.log('**sending: ', message.text);

        alert(this.$content)

        this.$content.append(new BuildHTML().me(message.text));
        this._safeText(message.text);
        this._animateText();

        this._scrollBottom();
    },
    _buildRecieved: function (message) {
        //alert(chat.$content)
        mylog.log('**recieving: ', message.text);

        this.$content.append(new BuildHTML().them(message.text));
        this._safeText(message.text);
        this._animateText();

        this._scrollBottom();
    },
    _sendMessage: function () {

        this.text = this.$input.val();
        this.messenger.send(this.text);

        this.$input.val('');
        this.$input.focus();
    },

};


$(document).ready(function () {



});


