/*----------    VARIABLES REFERENTES A LOS ELEMENTOS DEL HTML    ----------*/
var swi = document.getElementById('seleccion');
var cajachecks = document.getElementById('cbCaja');
var marcaTodos = document.getElementById('marcaTodos');
var buscarBoton = document.getElementById('buscarButton');
var tipoMovi = document.getElementById('tipoMovilidad');
/*-------------------------------------------------------------------------*/

/*----------    MAPA GLOBAL DE LA APLICACIÓN    ----------*/
var mapOptions = {
    center: new google.maps.LatLng(48.649455, 16.670139),
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var mapa = new google.maps.Map(document.getElementById("mapa_div"), mapOptions);
/*--------------------------------------------------------*/

/*----------    VARIABLES    ----------*/
var profesorado = "profesorado";
var grado_Medio = "grado medio";
var grado_Superior = "grado superior";

var paisesProfesorado = [];
var paisesGradoMedio = [];
var paisesGradoSuperior = [];

var ciclosProfesorado = [];
var ciclosGradoMedio = [];
var ciclosGradoSuperior = [];

var paises = [];
var ciclos = [];
var ciudades = [];
var marcadores = [];

var miToggle = function () { $("#cbCaja").toggle(1000); };
/*-------------------------------------------------*/


/*----------    FUNCIONES    ----------*/
//Funcion que rellena los paises y los ciclos a partir del json
//para crear los checkboxs para elegir la búsqueda
function cargaPagina() {
    rellenarPaisesCiclos();
    rellenarCiclos('Todos');
}

function rellenarPaisesCiclos() {
    var paisActual;
    var cicloActual;

    for (i = 0; i < contenido.length; i++) {
        paisActual = contenido[i].pais;
        if (paisesProfesorado.indexOf(paisActual) < 0 && contenido[i].tipo.toLowerCase() == profesorado) {
            paisesProfesorado.push(paisActual);
        } else {
            if (paisesGradoMedio.indexOf(paisActual) < 0 && contenido[i].tipo.toLowerCase() == grado_Medio) {
                paisesGradoMedio.push(paisActual);
            } else {
                if (paisesGradoSuperior.indexOf(paisActual) < 0 && contenido[i].tipo.toLowerCase() == grado_Superior) {
                    paisesGradoSuperior.push(paisActual);
                }
            }
        }
        if (paises.indexOf(paisActual) < 0) {
            paises.push(paisActual);
        }
        cicloActual = contenido[i].ciclo;
        if (ciclosProfesorado.indexOf(cicloActual) < 0 && contenido[i].tipo.toLowerCase() == profesorado) {
            ciclosProfesorado.push(cicloActual);
        } else {
            if (ciclosGradoMedio.indexOf(cicloActual) < 0 && contenido[i].tipo.toLowerCase() == grado_Medio) {
                ciclosGradoMedio.push(cicloActual);
            } else {
                if (ciclosGradoSuperior.indexOf(cicloActual) < 0 && contenido[i].tipo.toLowerCase() == grado_Superior) {
                    ciclosGradoSuperior.push(cicloActual);
                }
            }
        }
        if (ciclos.indexOf(cicloActual) < 0) {
            ciclos.push(cicloActual);
        }
    }
}

//Funcion para rellenar los paises según el valor del <select>
function rellenarPaises(valor) {
    borraCajaChecks();
    switch (valor) {
        case "profesorados":
            for (let p = 0; p < paisesProfesorado.length; p++) {
                let newCheck = document.createElement('input');
                newCheck.setAttribute('type', 'checkBox');
                newCheck.setAttribute("id", paisesProfesorado[p]);
                let elmnt = document.createElement("label");
                let textnode = document.createTextNode(paisesProfesorado[p]);
                let espacio = document.createElement('br');

                elmnt.setAttribute("for", paisesProfesorado[p]);
                elmnt.appendChild(newCheck);
                elmnt.appendChild(textnode);
                elmnt.appendChild(espacio);

                cajachecks.appendChild(elmnt);
            };
            break;
        case "gradoMedio":
            for (let p = 0; p < paisesGradoMedio.length; p++) {
                let newCheck = document.createElement('input');
                newCheck.setAttribute('type', 'checkBox');
                newCheck.setAttribute("id", paisesGradoMedio[p]);
                let elmnt = document.createElement("label");
                let textnode = document.createTextNode(paisesGradoMedio[p]);
                let espacio = document.createElement('br');

                elmnt.setAttribute("for", paisesGradoMedio[p]);
                elmnt.appendChild(newCheck);
                elmnt.appendChild(textnode);
                elmnt.appendChild(espacio);

                cajachecks.appendChild(elmnt);
            };
            break;
        case "gradoSuperior":
            for (let p = 0; p < paisesGradoSuperior.length; p++) {
                let newCheck = document.createElement('input');
                newCheck.setAttribute('type', 'checkBox');
                newCheck.setAttribute("id", paisesGradoSuperior[p]);
                let elmnt = document.createElement("label");
                let textnode = document.createTextNode(paisesGradoSuperior[p]);
                let espacio = document.createElement('br');

                elmnt.setAttribute("for", paisesGradoSuperior[p]);
                elmnt.appendChild(newCheck);
                elmnt.appendChild(textnode);
                elmnt.appendChild(espacio);

                cajachecks.appendChild(elmnt);
            };
            break;
        default:
            for (p = 0; p < paises.length; p++) {
                let newCheck = document.createElement('input');
                newCheck.setAttribute('type', 'checkBox');
                newCheck.setAttribute("id", paises[p]);
                let elmnt = document.createElement("label");
                let textnode = document.createTextNode(paises[p]);
                let espacio = document.createElement('br');

                elmnt.setAttribute("for", paises[p]);
                elmnt.appendChild(newCheck);
                elmnt.appendChild(textnode);
                elmnt.appendChild(espacio);

                cajachecks.appendChild(elmnt);
            };
    }
}

//Funcion para rellenar los ciclos según el valor del <select>
function rellenarCiclos(valor) {
    borraCajaChecks();
    switch (valor) {
        case "profesorados":
            for (let c = 0; c < ciclosProfesorado.length; c++) {
                let newCheck = document.createElement('input');
                newCheck.setAttribute('type', 'checkBox');
                newCheck.setAttribute("id", ciclosProfesorado[c]);
                let elmnt = document.createElement("label");
                let textnode = document.createTextNode(ciclosProfesorado[c]);
                let espacio = document.createElement('br');

                elmnt.setAttribute("for", ciclosProfesorado[c]);
                elmnt.appendChild(newCheck);
                elmnt.appendChild(textnode);
                elmnt.appendChild(espacio);

                cajachecks.appendChild(elmnt);
            };
            break;
        case "gradoMedio":
            for (let c = 0; c < ciclosGradoMedio.length; c++) {
                let newCheck = document.createElement('input');
                newCheck.setAttribute('type', 'checkBox');
                newCheck.setAttribute("id", ciclosGradoMedio[c]);
                let elmnt = document.createElement("label");
                let textnode = document.createTextNode(ciclosGradoMedio[c]);
                let espacio = document.createElement('br');

                elmnt.setAttribute("for", ciclosGradoMedio[c]);
                elmnt.appendChild(newCheck);
                elmnt.appendChild(textnode);
                elmnt.appendChild(espacio);

                cajachecks.appendChild(elmnt);
            };
            break;
        case "gradoSuperior":
            for (let c = 0; c < ciclosGradoSuperior.length; c++) {
                let newCheck = document.createElement('input');
                newCheck.setAttribute('type', 'checkBox');
                newCheck.setAttribute("id", ciclosGradoSuperior[c]);
                let elmnt = document.createElement("label");
                let textnode = document.createTextNode(ciclosGradoSuperior[c]);
                let espacio = document.createElement('br');

                elmnt.setAttribute("for", ciclosGradoSuperior[c]);
                elmnt.appendChild(newCheck);
                elmnt.appendChild(textnode);
                elmnt.appendChild(espacio);

                cajachecks.appendChild(elmnt);
            };
            break;
        default:
            for (let c = 0; c < ciclos.length; c++) {
                let newCheck = document.createElement('input');
                newCheck.setAttribute('type', 'checkBox');
                newCheck.setAttribute("id", ciclos[c]);
                let elmnt = document.createElement("label");
                let textnode = document.createTextNode(ciclos[c]);
                let espacio = document.createElement('br');

                elmnt.setAttribute("for", ciclos[c]);
                elmnt.appendChild(newCheck);
                elmnt.appendChild(textnode);
                elmnt.appendChild(espacio);

                cajachecks.appendChild(elmnt);
            };
    }
}

//Funcion para limpiar el div que contiene los checkbox
function borraCajaChecks() {
    for (var l = 0; l < cajachecks.childNodes.length; l++) {
        cajachecks.removeChild(cajachecks.firstChild);
        l--;
    }
}

//Funcion para limpiar los marcadores del mapa cuando se realiza una búsqueda nueva.
function borrarMarcadores() {
    for (var i = 0; i < marcadores.length; i++) {
        marcadores[i].setMap(null);
    }
    marcadores = new Array();
}

function comprobarChecks(){
    var cont = 0;
    for (let k = 0; k < cajachecks.childNodes.length; k++) {
        if(cajachecks.childNodes[k].firstChild.checked) cont++;
    }
    if(cajachecks.childNodes.length == cont){
        marcaTodos.checked = true;
    }
}
/*-------------------------------------*/


/*----------    EVENTOS    ----------*/
marcaTodos.addEventListener("click", function () {
    for (let k = 0; k < cajachecks.childNodes.length; k++) {
        cajachecks.childNodes[k].firstChild.checked = this.checked;
    }
})

swi.addEventListener('click', function () {
    if (this.checked) {
        //saco check de los paises
        miToggle();
        setTimeout(function () { rellenarPaises(tipoMovi.options[tipoMovi.selectedIndex].value); miToggle(); }, 1000);
        comprobarChecks();
    } else {
        //saco check de los ciclos 
        miToggle();
        setTimeout(function () { rellenarCiclos(tipoMovi.options[tipoMovi.selectedIndex].value); miToggle(); }, 1000);
        comprobarChecks();        
    }
});

buscarBoton.addEventListener("click", function () {
    borrarMarcadores();
    var tipo_mov = tipoMovi.options[tipoMovi.selectedIndex].text;
    var filtro;

    if (swi.checked) {
        filtro = "paises";
    } else {
        filtro = "ciclos";
    }

    var objetos_seleccionados = [];

    for (let g = 0; g < cajachecks.childNodes.length; g++) {
        if (cajachecks.childNodes[g].firstChild.checked) {
            objetos_seleccionados.push(cajachecks.childNodes[g].firstChild.id);
        }
    }

    for (i = 0; i < contenido.length; i++) {
        if (filtro == "paises") {
            if ((contenido[i].tipo == tipo_mov && objetos_seleccionados.indexOf(contenido[i].pais) >= 0) || (tipo_mov == "Todos" && objetos_seleccionados.indexOf(contenido[i].pais) >= 0)) {
                var geocoder = new google.maps.Geocoder();
                let city = contenido[i].ciudad;
                geocoder.geocode({ 'address': city }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var latitud = results[0].geometry.location.lat();
                        var longitud = results[0].geometry.location.lng();
                        var myLatlng = new google.maps.LatLng(latitud, longitud);
                        var marker = new google.maps.Marker({
                            position: myLatlng,
                            title: city,
                            animation: google.maps.Animation.DROP,
                        });
                        var ciclos_ciudad = "";
                        for (t = 0; t < contenido.length; t++) {
                            if (contenido[t].tipo != "Profesorado" && contenido[t].ciudad == city) {
                                ciclos_ciudad += contenido[t].ciclo + '<br>';
                            }
                        }
                        if (ciclos_ciudad == "") {
                            ciclos_ciudad = "En esta ciudad no han realizado Erasmus los alumnos.";
                        }
                        var contentString = '<div id="content">' +
                            '<div id="siteNotice">' +
                            '</div>' +
                            '<h1 id="firstHeading" class="firstHeading">' + city + '</h1>' +
                            '<div id="bodyContent">' +
                            '<h3><b>Ciclos</b></h3>' +
                            '<p>' + ciclos_ciudad + '</p>' +
                            '</div>' +
                            '</div>';

                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });
                        marker.setMap(mapa);
                        marker.addListener('click', function () {
                            if (marker.getAnimation() !== null) {
                                infowindow.close();
                                marker.setAnimation(null);
                            } else {
                                infowindow.open(mapa, marker);
                                marker.setAnimation(google.maps.Animation.BOUNCE);
                            }
                        });
                        marcadores.push(marker);
                    }
                });
            }
        }
        if (filtro == "ciclos") {
            if ((contenido[i].tipo == tipo_mov && objetos_seleccionados.indexOf(contenido[i].ciclo) >= 0) || (tipo_mov == "Todos" && objetos_seleccionados.indexOf(contenido[i].ciclo) >= 0)) {
                var geocoder = new google.maps.Geocoder();
                let city = contenido[i].ciudad;
                geocoder.geocode({ 'address': city }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var latitud = results[0].geometry.location.lat();
                        var longitud = results[0].geometry.location.lng();
                        var myLatlng = new google.maps.LatLng(latitud, longitud);
                        var marker = new google.maps.Marker({
                            position: myLatlng,
                            title: city,
                            animation: google.maps.Animation.DROP,
                        });
                        var ciclos_ciudad = "";
                        for (t = 0; t < contenido.length; t++) {
                            if (contenido[t].tipo != "Profesorado" && contenido[t].ciudad == city) {
                                ciclos_ciudad += contenido[t].ciclo + '<br>';
                            }
                        }
                        if (ciclos_ciudad == "") {
                            ciclos_ciudad = "En esta ciudad no han realizado Erasmus los alumnos.";
                        }
                        var contentString = '<div id="content">' +
                            '<div id="siteNotice">' +
                            '</div>' +
                            '<h1 id="firstHeading" class="firstHeading">' + city + '</h1>' +
                            '<div id="bodyContent">' +
                            '<h3><b>Ciclos</b></h3>' +
                            '<p>' + ciclos_ciudad + '</p>' +
                            '</div>' +
                            '</div>';
                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });
                        marker.setMap(mapa);
                        marker.addListener('click', function () {
                            if (marker.getAnimation() !== null) {
                                infowindow.close();
                                marker.setAnimation(null);
                            } else {
                                infowindow.open(mapa, marker);
                                marker.setAnimation(google.maps.Animation.BOUNCE);
                            }
                        });
                        marcadores.push(marker);
                    }
                });

            }
        }
    }
    comprobarChecks();    
})
/*----------------------------------*/
