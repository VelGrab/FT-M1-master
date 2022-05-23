'use strict'

function BinarioADecimal(num) {  
 
  let decimal = 0
 
  for (var i = 0; i < num.length; i++){
   decimal += Math.pow(2, num.length - i - 1) * num[i];
 }
   return decimal
 
 }
 
 function DecimalABinario(num) {
   // tu codigo aca
   let x = num
   let array = []
   
   while(x / 2 > 0) {
     array.unshift(x % 2)
     x = Math.floor(x / 2)
   }
 
   return array.join('')
 }


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}