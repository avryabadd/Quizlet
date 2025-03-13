document.addEventListener('DOMContentLoaded', () => {
    const btnLoginSwap = document.querySelector('#btnSwapLogin');

    if (btnLoginSwap) {
        btnLoginSwap.addEventListener('click', () => {
            window.location.href = '../index.html';
       });
    }
});