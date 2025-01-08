const pdfjsLib = require('pdfjs-dist');

async function extractTextFromPDF(pdfPath) {
    const pdf = await pdfjsLib.getDocument(pdfPath).promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map(item => item.str).join(' ');
    }
    return text;
}

extractTextFromPDF('/Users/johnnytan/Documents/Dell Hack2Hire/RAG Feeding/SQL Database Operations.pdf').then(text => {
    console.log(text);
});

