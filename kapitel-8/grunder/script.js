// var dag = "fredag";
// alert(dag);
// console.log("Idag är det " + dag);

// Var är du född?
// var stad = prompt("Var är du född?");
// console.log("Du är född i " + stad);

// Vi gör en enkel captcha
// var gissning = prompt("Är det ok att fuska på prov?");
// if (gissning == "nej") {
//     alert("Du är en människa");
// } else {
//     alert("Du är en robot");
// }

// Spamcheck med två slumpade tal
// var slumptal1 = Math.round(Math.random() * 100);
// var slumptal2 = Math.round(Math.random() * 100);
// var facit = slumptal1 + slumptal2;

// // Fråga användaren vad är ?? + ??
// var gissning = prompt("Vad är " + slumptal1 + " + " + slumptal2 + "?");
// if (gissning == facit) {
//     document.writeln("<h1>Du är en människa! 😁</h1>");
// } else {
//     document.writeln("<h1>Du är en robot! 💻</h1>");
// }

// Uppgift: skapa en miniräknare
// Läs in två tal
// Skriv ut valfri matematisk operation: + - / *
// var tal1 = prompt("Ange ett tal1");
// var tal2 = prompt("Ange ett tal2");
// var summa = Number(tal1) + Number(tal2);
// document.writeln("Summan är " + summa);

// Uppgift: skatteuträkning
// Läs in: inkomst, tex 30.000:-
// läs in: skatt, tex 30%
// Skriv ut: "Din inkomst efter skatt är xxx med yy% i skatt."
var brutto = prompt("Vad är din lön före skatt?");
var skatt = prompt("Vad är din skatt?");
var inkomst = Number(brutto) * (100 - Number(skatt)) / 100;
document.writeln("Din inkomst efter skatt är " + inkomst + " med " + skatt + "% i skatt.")