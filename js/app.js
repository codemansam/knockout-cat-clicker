var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/tabby.jpg')
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big')
	this.nickName = ko.observable('Newborn');

	this.incrementCounter = function () {
	this.clickCount(this.clickCount() +1);
	};

	this.changeNickName = ko.computed(function() {
		if (this.clickCount <= 10) {
			return this.nickName('Infant');
		}
	}, this);
}

ko.applyBindings(new ViewModel())