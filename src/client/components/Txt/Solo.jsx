import React from 'react';

function convertToTextFile({ createPdf, pdfCount, pdfDate, pdfObject, pdfChannels }) {
  let text = `Count: ${pdfCount}\n`;
  text += `Subject: ${pdfObject}\n`;
  text += `Answer: ${createPdf}\n`;
  text += `Channel: ${pdfChannels}\n`;
  text += `Date: ${pdfDate}\n\n`;

  const element = document.createElement('a');
  const file = new Blob([text], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'converted_text.txt';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function Solo({ createPdf, pdfCount, pdfDate, pdfObject, pdfChannels }) {
  const handleDownload = () => {
    convertToTextFile({ createPdf, pdfCount, pdfDate, pdfObject, pdfChannels });
  };

  return (
    <div style={{marginTop:'40px'}}>
      <button className='download-solo' onClick={handleDownload}>Download Text File</button>
    </div>
  );
}

export default Solo;
