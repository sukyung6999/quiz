import { RESERVATION_LIST } from "./reservation.js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
*/
window.addEventListener("DOMContentLoaded", function()
{
  const btn = document.getElementById('reservation-number');
  btn.addEventListener("click", function() {
    console.log('22');
  });
  
  function userInfo () {
    // 이름 가져오기
    let userName = document.getElementsByName('user-name').value;
    // 연락처 가져오기
    let userPhone = document.getElementsByName('user-phone').value;
    console.log(userName, userPhone);
  }
  function changeColor(newColor) {
    const elem = document.getElementById('para');
    elem.style.color = newColor;
  }
  
  // 1. 이름 & 번호가 있는지 확인 
  // 2. 이름 & 번호가 짝을 이루는지 확인
  // 3. 그 외
  
})

