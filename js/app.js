var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/tabby.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
	this.level = ko.observable('Newborn');
	this.nickname = ko.observableArray(['Boris', 'Jack off', 'Ronald', 'Dirty John', 'Pickler']);

	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Newborn';
		} else if (clicks < 50) {
			title = 'Infant';
		} else if (clicks < 100) {
			title = 'Child';
		} else if (clicks < 200) {
			title = 'Teen';
		} else if (clicks < 500) {
			title = 'Adult';
		} else {
			title = 'Ninja';
		}
		return title;
	}, this);
};

var ViewModel = function() {

	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function () {
		this.currentCat().clickCount(this.currentCat().clickCount() +1);
	};
	
};

ko.applyBindings(new ViewModel());