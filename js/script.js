const checkbox = document.getElementById('showTextCheckbox');
const textFr = document.querySelectorAll('#textFr');
const textEn = document.querySelectorAll('#textEn');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        textFr.forEach(function (textFr) {
            textFr.style.display = 'block';
        });
        textEn.forEach(function (textEn) {
            textEn.style.display = 'none';
        });
    } else {
        textEn.forEach(function (textEn) {
            textEn.style.display = 'block';
        });
        textFr.forEach(function (textFr) {
            textFr.style.display = 'none';
        });
    }
});