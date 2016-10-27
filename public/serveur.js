var express = require('express');
var app = express();

app.use(express.static('/public'));
// app.get('/',function(req,res){
// 	console.log("hello");
// 	res.send("The rock'n'roll");
// })
//req:la requête du visiteur  res:la réponse à renvoyer (la page HTML et les informations d'en-tête)
app.listen(9000,function(){
		console.log("hihihi");
});

