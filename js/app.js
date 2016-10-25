(function(){
	"use strict";
	var app = {
		url:"http://192.168.1.40:1337/alice.md",
		init:function(){
			$.ajax(app.url)
			.done(app.ajaxDone)
			.fail()
			.always();
		},
	
		ajaxDone:function(alice){
			var converter = new showdown.Converter();
			var html = converter.makeHtml(alice);
			$("#md").html(html);
		}
		
		//ajaxDone:function(response){
        


    };

    $(document).ready(function(){
    	app.init();	

    });
})();