// on veut creer une page qui se remplit toute seule a son chargement
// a l'aide d'une boucle, agrandire la balise <p>
//		exemple:
//			on va definir une string
//				var string = "bonsoir a toutes"
//			on va la repeter 100 fois dans notre <p>

/*ma proposition (c'est bon mais ça respecte pas la consigne)

$(document).ready(function(){

	$("#text").text("Répéter le texte 100fois:")

	for(var i = 0; i<100 ; i++)

	{
		$("#text").text($("#text").text() + " Bonsoir à toutes!")
	}

})

*/
//il faut faire ça pour réutiliser la variable:

$(document).ready(function(){

	var string = "Bonsoir à toutes,<br>" 

	for(var i = 0; i<100 ; i++)

	{
		$("#text").html($("#text").html() + string) // changer .text en .html pour que la var string prennent le <br> en compte
	}

// $(document).scroll(function(){   <--PERMET DE voir si l'utilisateur a scrollé
//		console.log("scroll")
//	})

$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) 
	{	    // when scroll to bottom of the page
	    for(var i = 0; i<10 ; i++)
	{
		$("#text").html($("#text").html() + string)
	}
										}
});


// quand l'utilisateur arrive en base de page,
// ajouter 10 string a la balise p
// pour un scroll infini

// comment detecter qu'on est en bas de page ?
// go google, ce quon veut faire s'appelle le "load scroll"

})

/* corrigé de nicolas:


$(document).ready(function () {
	var string = "bonjour a toutes<br/>"

	for (var compteur = 0; compteur < 100; compteur = compteur + 1) {
		$("#texte_infini").html( $("#texte_infini").html() + string)
	}

	$(document).scroll(function () {
		if ($(window).scrollTop() + 1 >= $(document).height() - $(window).height())
		{
			for (var compteur = 0; compteur < 10; compteur = compteur + 1) {
				$("#texte_infini").html( $("#texte_infini").html() + string)
			}			
		}
	})
})

*/