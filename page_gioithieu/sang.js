// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   /* Loop through a collection of all HTML elements: */
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     /*search for elements with a certain atrribute:*/
//     file = elmnt.getAttribute("include-html");
//     if (file) {
//       /* Make an HTTP request using the attribute value as the file name: */
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4) {
//           if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//           if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//           /* Remove the attribute, and call this function once more: */
//           elmnt.removeAttribute("include-html");
//           includeHTML();
//         }
//       }
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       /* Exit the function: */
//       return;
//     }
//   }
// }

let header_element1 = document.querySelector("#head");
let button = document.querySelector(".hello");

window.addEventListener("scroll", function () {
  const x = window.scrollX;
  const y = window.scrollY;

  if (this.window.innerWidth >= 1026) {
      if (Math.round(y) > 50) {
          header_element1.classList.add("close");
          button.style.display = "flex";
      } else {
          header_element1.classList.remove("close");
          button.style.display = "none";
      }
  } else {
      if (Math.round(y) > 10) {
          header_element1.classList.add("close_mobile");
          button.style.display = "flex";
      } else {
          header_element1.classList.remove("close_mobile");
          button.style.display = "none";
      }
  }
});


function increaseFontSize() {
  var textElements = document.querySelectorAll(".main-content-text");
  textElements.forEach(function (element) {
      var currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
      var newSize = (parseFloat(currentSize) + 1) + 'px';
      element.style.fontSize = newSize;
  });
}

function decreaseFontSize() {
  var textElements = document.querySelectorAll(".main-content-text");
  textElements.forEach(function (element) {
      var currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
      var newSize = (parseFloat(currentSize) - 1) + 'px';
      element.style.fontSize = newSize;
  });
}

// Xem thêm lịch
let isHidden = true;
function showMoreSchedule(){
    const items = document.querySelectorAll('.row-calen');
    const showMoreBtn = document.querySelector('.btn');

    items.forEach((item, index) => {
      if (isHidden || index < 5) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });

    isHidden = !isHidden // Đảo ngược trạng thái

    if (isHidden) {
      showMoreBtn.textContent = 'XEM THÊM';
    } else {
      showMoreBtn.textContent = 'THU GỌN';
    }
}

// Pop Up use Bootstrap
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

