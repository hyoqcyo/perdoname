const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Enserio agradezco cada vez que hago algo mal pueda mirar adelante , se agradece, de a poco voy logrando cambiar esas cosa que la agobian y no la dejan avanzar, estoy escribiendo el code de esta pagina muy rapido asi que si falla losiento  ;C, creo que esto talvez es lo mas bonito o no bonito pk no se mx de informatica pero lo intento , nadie te habia escrito una pagina web en code ,,,, esto e unico para usted :C, hasta le puse su color que me dijo que era favorito, que es el azul m jjjj, realmente solo voy poco mas lento no implica que no lo haga ;ccccc tambien estoy intentano ser mas compresivo con el tema suyo ya que se que anda mas sensible y asi ;c en fin eso , perdon , t amo mx gracia por soportarme .c')

});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})