const betet = document.querySelector('#betet');
const tokesites_szam = document.querySelector('#tokesites_szam');
const nevleges = document.querySelector('#nevleges');
const Actual = document.querySelector('#Actual');
const calcButton = document.querySelector('#calcButton');

calcButton.addEventListener('click', ()=>{
    console.log("test :)");
    const betetszam = betet.value;
    const tokesitesszam = tokesites_szam.value;
    const nevlegesszam = nevleges.value;

    let Elteproginfocalculusegyketto = (nevlegesszam/(100 * tokesitesszam))+1;
    Elteproginfocalculusegyketto = Math.pow(Elteproginfocalculusegyketto,tokesitesszam) - 1;
    Elteproginfocalculusegyketto = Elteproginfocalculusegyketto * betetszam;

    Actual.value = Elteproginfocalculusegyketto;

});