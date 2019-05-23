
function update_segundos(){
	segundos = document.getElementById("segundos");
	segundos_actuales = parseInt(segundos.innerHTML) + 1;
	segundos.innerHTML = segundos_actuales
	document.getElementById("progreso").setAttribute("style", `width: ${(segundos_actuales % 60)*100/60}%`);
}
setInterval(function(){update_segundos();}, 1000);
setTimeout(function(){ alert("Ya paso el primer minuto"); }, 60000);