/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Viekses Horn
      Date:   4/11/24

      Filename: project02-01.js
 */
      window.addEventListener("load", addEventListeners);

      function FahrenheitToCelsius(degree) {
          return (degree - 32) / 1.8;
      }
      
      function CelsiusToFahrenheit(degree) {
          return (degree * 1.8) + 32;
      }
      
      function addEventListeners() {
                  document.getElementById("cValue").addEventListener("blur", function() {
              let cDegree = parseInt(document.getElementById("cValue").value);
              document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
          });
      
                  document.getElementById("fValue").addEventListener("blur", function() {
              let fDegree = parseInt(document.getElementById("fValue").value);
              document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
          });
      }