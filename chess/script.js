"use strict";

let chessTable = document.getElementById("chess");
let tb = "";

for (let i = 0; i < 8; i++) {
  tb += `<tr>`;
  for (let j = 0; j < 8; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        tb += `<td class="bg-white"></td>`;
      }
      if (j % 2 != 0) {
        tb += `<td class="bg-dark"></td>`;
      }
    } else {
      if (j % 2 != 0) {
        tb += `<td class="bg-white"></td>`;
      }
      if (j % 2 == 0) {
        tb += `<td class="bg-dark"></td>`;
      }
    }
  }
  tb += `</tr>`;
}

chessTable.innerHTML = tb;
