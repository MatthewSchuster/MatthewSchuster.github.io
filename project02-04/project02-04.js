/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Matthew Schuster
      Date:   10/19/2026

      Filename: project02-04.js
 */
 
 const CHICKEN_PRICE = 10.95, HALIBUT_PRICE = 13.95, BURGER_PRICE = 9.95,
 SAlMON_PRICE = 18.95, SALAD_PRICE = 7.95, SALES_TAX = .07;



// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;
 function calcTotal(){
   let cost = 0;
   let buyChicken = document.getElementById("chicken");
   let buyHalibut = document.getElementById("halibut");
   let buyBurger = document.getElementById("burger");
   let buySalmon = document.getElementById("salmon");
   let buySalad = document.getElementById("salad");
   let tax;
   let totalCost;
   
   if(buyChicken.checked)
      cost += CHICKEN_PRICE;

   if(buyHalibut.checked)
      cost += HALIBUT_PRICE;

   if(buyBurger.checked)
      cost += BURGER_PRICE;

   if(buySalmon.checked)
      cost += SAlMON_PRICE;

   if(buySalad.checked)
      cost += SALAD_PRICE;
tax = cost*SALES_TAX;
totalCost = cost + tax;
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost)
   document.getElementById("foodTax").innerHTML = formatCurrency(tax)
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost)
 }