var t=document.querySelectorAll(".population"),e=0;t.forEach(function(t){e+=parseInt(t.textContent.replace(/,/g,""))});var o=e/t.length;document.querySelector(".total-population").textContent=e.toLocaleString(),document.querySelector(".average-population").textContent=o.toLocaleString();
//# sourceMappingURL=index.d8949f86.js.map
