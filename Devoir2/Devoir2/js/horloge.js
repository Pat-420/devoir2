class Horloge
{

   constructor(obj)
  {
    var that = this;
    that.ticTac();

  }
  ticTac(){
  setInterval (function() {

              this.cible  = document.querySelector('#horloge');
              this.ticTac = new Date();
              this.h      = this.ticTac.getHours();
              this.m      = this.ticTac.getMinutes();
              this.s      = this.ticTac.getSeconds();
              if(this.h < 10){this.h = "0"+this.h;}
              if(this.m < 10){this.m = "0"+this.m;}
              if(this.s < 10){this.s = "0"+this.s;}
              cible.innerHTML = this.h + ':' + this.m +':' + this.s;
            }, 1000);
     }


 	    JouerSon()
 	  {       var select			 =  document.getElementById("select_son") ;
            var selection    =  select.options[select.selectedIndex].value;
            var son1 			   =  document.getElementById("son1") ;
            var son2 			   =  document.getElementById("son2") ;
            var mp31         =  son1.getAttribute('data-mp3');
            var mp32         =  son2.getAttribute('data-mp3');
            var lecteur      = new Audio();
  			  	if(selection == 0)	{lecteur.src  = mp31}else{lecteur.src = mp32}

  					lecteur.play();

    }

 	   ProgrammerNouvelleAlarme(obj)
    {

  					var that = this;
  					var h = obj.h;
  					var m = obj.m;
  					var s = obj.s;
  					var ms = ((h * 60 * 60) + (m * 60) + s) * 1000;

  					this.nouvelleAlarme =
  					 setTimeout(function(){
  						that.SonnerAlarm();
  					}, ms);

  		}

	SonnerAlarm(){
		var that = this;
		var interval = setInterval(function(){
			that.JouerSon();
		}, 600);
		setTimeout(function(){
			clearInterval(interval);
		}, 5000);
	}

     Arreter()
     {
          clearTimeout(this.nouvelleAlarme);
     }

}
    let horloge = new Horloge();

    var nouvelleAlarme_btn = document.querySelector('#btn_ajouterAlarme');



    nouvelleAlarme_btn.addEventListener('click', function(evt){
            var heure 			 =  document.getElementById("select_alarmeHeures") ;
            var minute 		   =  document.getElementById("select_alarmeMinutes");
            var seconde  		 =  document.getElementById("select_alarmeSecondes");
    				var h            =  heure.options[heure.selectedIndex].value;
    				var m            =  minute.options[minute.selectedIndex].value;
    				var s            =  seconde.options[seconde.selectedIndex].value;
            var data = {};
      			data["h"] = h;
      			data["m"] = m;
      			data["s"] = s;
    				horloge.ProgrammerNouvelleAlarme(data);
    			});
