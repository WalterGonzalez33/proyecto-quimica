// NO TOQUES NADA QUE LO RONPES

(function(){
	// propMovil

var propMovil ={
	botonAmburguer: document.querySelectorAll(".burgue-menu"),
	menuAbierto: false,
	listaMenu: document.getElementsByClassName("list-opcion"),
	linksMenu: document.querySelectorAll(".list-opcion ul li .movil")
}

// funciones del menu movil

var funcionMenuMovil={

	clickMenu: ()=>{

		for (let i = 0; i < propMovil.botonAmburguer.length; i++) {
			propMovil.botonAmburguer[i].addEventListener("click",funcionMenuMovil.abrirMenu)
			
		}
		
	},

	abrirMenu: ()=>{
		if (propMovil.menuAbierto == false) {

			for (let i = 0; i < propMovil.listaMenu.length; i++) {
				propMovil.listaMenu[i].style.left="0";
				
			}
			propMovil.menuAbierto = true;

			
		}else{
			for (let i = 0; i < propMovil.listaMenu.length; i++) {
				propMovil.listaMenu[i].style.left="-80%";
				
			}
			propMovil.menuAbierto=false;
		}
	},

	clickLink:()=>{
		for (let i = 0; i < propMovil.linksMenu.length; i++) {
			propMovil.linksMenu[i].addEventListener("click",()=>{
				for (let i = 0; i < propMovil.listaMenu.length; i++) {
					propMovil.listaMenu[i].style.left="-80%";
					
				}
			})
			
		}
	}
}

funcionMenuMovil.clickMenu()
funcionMenuMovil.clickLink()
}())