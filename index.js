function captureImage() {
    const resumeElement = document.getElementById('id');
    html2canvas(resumeElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16 
        });
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgHeight * pdfWidth) / imgWidth;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf'); 
    });
}
