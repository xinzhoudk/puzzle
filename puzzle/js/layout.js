window.layOutImages = function() {
	var imageArray = [
		{name: 'Image1', url: 'http://farm5.staticflickr.com/4010/4578838483_f9c66aece1_z.jpg' },
		{name: 'Image2', url: 'http://farm8.staticflickr.com/7214/7030801869_0dbf5fa4a3_z.jpg' }
	];
	imageArray.each(function(item, index){
		var list = new Element ('li', {'class':'item container'}).set('html','<div class="preview"><img src="'+ item.url +'" width="100" height="100" title="'+ item.name +'" alt="'+ item.name +'" /></div><p>'+ item.name +'</p>').inject($('list'),'bottom'); 
	});
}

window.addEvent('domready', function() {
	layOutImages();
	$('showMore').addEvent('click', function(){
		layOutImages();
	});
});
