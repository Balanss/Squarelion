import React from 'react';

function convertToTextFile({ createPdf, pdfCount, pdfDate, pdfObject, pdfChannels, isChecked }) {
  let htmlContent = '';
  htmlContent +=  `Count: ${pdfCount}\n`;
   htmlContent +=  `Subject: ${pdfObject}\n`;
   htmlContent +=  `Answer: ${createPdf}\n`;
   htmlContent +=  `Channel: ${pdfChannels}\n`;
   htmlContent +=  `Date: ${pdfDate}\n\n`;

  
  const element = document.createElement('a');
  const file = new Blob([htmlContent], { type: 'text/html' });
  element.href = URL.createObjectURL(file);
  element.download = 'converted_text.html';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function Solo({ createPdf, pdfCount, pdfDate, pdfObject, pdfChannels,isChecked }) {
  const handleDownload = () => {
    convertToTextFile({ createPdf, pdfCount, pdfDate, pdfObject, pdfChannels });
  };

 

  return (
    <div style={{marginTop:'40px'}}>
   
      <button  disabled={isChecked === true? false : true}  className='download-solo pb-10 mb-10' onClick={handleDownload}>Download Text File</button>
    </div>
  );
}

export default Solo;
