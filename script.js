// Đợi phần nội dung DOM tải xong hoàn toàn
document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Chức năng bật/tắt Menu điều hướng trên thiết bị di động
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });

    // Tự động đóng menu di động khi nhấn vào bất kỳ liên kết nào
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navLinks.classList.remove('active');
        });
    });
});