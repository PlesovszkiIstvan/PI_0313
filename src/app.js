/*
* File: app.js
* Author: Plesovszki István
* Copyright: 2023, Plesovszki István
* Group: Szoft I-2 N
* Date: 2023-03-23
* Github: https://github.com/PlesovszkiIstvan/
* Licenc: GNU GPL
*/

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