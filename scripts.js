function toggleSubMenu() {
    const submenu = document.getElementById('explore-menu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}
// // Dynamic color change for "NEW" indicator
// document.addEventListener('DOMContentLoaded', () => {
//     const newIndicators = document.querySelectorAll('.new-indicator');
//     newIndicators.forEach(indicator => {
//         setTimeout(() => {
//             indicator.style.color = 'green';
//         }, 2000); // Change color after 2 seconds
//     });
// });
// Dynamic color change for "NEW" indicator
document.addEventListener('DOMContentLoaded', () => {
    const newIndicators = document.querySelectorAll('.new-indicator');
    setInterval(() => {
        newIndicators.forEach(indicator => {
            indicator.style.color = indicator.style.color === 'red' ? 'green' : 'red';
        });
    }, 100); // Change color every 2 seconds
});
