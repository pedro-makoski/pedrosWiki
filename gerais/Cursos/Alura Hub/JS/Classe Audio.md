```js
const musicaFocus = new Audio('./sons/luna-rise-part-one.mp3');
musicaFocus.loop = true;

musicaFocoInput.addEventListener("change", () => {
	if(musicaFocus.paused) {
		musicaFocus.play()
	} else {
		musicaFocus.pause()
	}
}
```
A classe áudio permite instanciar um arquivo de áudio, sem necessariamente carrega-lo. Então o loop define se ele deve repetir toda hora que acabar o áudio. O evento change, para quando o checkbox ser alterado. O .paused verifica se o áudio está pausado. o .play faz com que o áudio toque, e o .pause que áudio seja pausado. 
Também tem o .currentTime que retorna ou define tempo atual do áudio. E também tem o .volume que retorna ou define o volume do áudio.