let menu = document.querySelector('#menu-icon');
let sidenavbar = document.querySelector('.side-navbar');
let content = document.querySelector('.content');
 
menu.onclick = () => {
    sidenavbar.classList.toggle('active');
    content.classList.toggle('active');
}
//เพิ่มjsของเราตั้งแต่ตรงนี้นะ
document.getElementById("confirmButton").addEventListener("click", function() {
    alert("ทำการยืนยันแล้ว!");
  });
  
// ฟังก์ชันเพื่อเปิดโมดัล
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// ฟังก์ชันเพื่อปิดโมดัล
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// เพิ่มเหตุการณ์คลิกให้กับปุ่มปิดในโมดัล
document.querySelectorAll(".modal .close").forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
        var modal = closeBtn.closest(".modal");
        closeModal(modal.id);
    });
});

// เพิ่มเหตุการณ์ click ให้กับปุ่มยืนยันในโมดัล
document.getElementById("confirmModalButton").addEventListener("click", function() {
    // กระบวนการหลังจากคลิกที่ปุ่ม "ยืนยัน" ในโมดัล
    alert("คุณได้ยืนยันแล้ว!"); // หรืออื่น ๆ ตามที่คุณต้องการทำ
    closeModal('myModal'); // ปิดโมดัลหลังจากคลิกปุ่ม "ยืนยัน"
});

// เพิ่มเหตุการณ์ click ให้กับปุ่มปิดในโมดัล
document.querySelector('.modal .close').addEventListener('click', function() {
    closeModal('myModal');
    modal.style.display = "none";
});

