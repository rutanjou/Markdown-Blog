(function(){
	"use strict";
	var app = {
		urlalice:"http://192.168.1.40:1337/alice.md",
		urljson:"http://192.168.1.40:1337/menu.json",
		init:function(){
			$.ajax(app.urlalice)
			.done(app.ajaxDone)
			.fail()
			.always();
			$.ajax(app.urljson)
			.done(app.getjson)
			.fail()
			.always();


		},
	
		ajaxDone:function(alice){
			var converter = new showdown.Converter();
			var html = converter.makeHtml(alice);
			$("#md").html(html);
		},
		getjson:function(menu){
			var url = "http://192.168.1.40:1337";
			var menus = menu.menu;
			for(var i=0; i<menus.length;i++){
				$("#menu").append("<li>" + "<a href=>"+ url + menus[i].path  + menus[i].title + "</li>" );
			}

		
		}
        


    };

    $(document).ready(function(){
    	app.init();	

    });
})();