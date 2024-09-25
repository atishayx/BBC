document.getElementById('download-jpg').addEventListener('click', function () {
    html2canvas(document.getElementById('html-content')).then(canvas => {
        let link = document.createElement('a');
        link.download = 'html-content.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
    });
});
