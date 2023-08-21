import React from 'react';

function convertToTextFile({ createPdf, pdfCount, pdfDate, pdfObject, pdfChannels, isChecked }) {







//   let htmlContent = '';
//   htmlContent +=  `Count: ${pdfCount}\n`;
//    htmlContent +=  `Subject: ${pdfObject}\n`;
//    htmlContent +=  `Answer: ${createPdf}\n`;
//    htmlContent +=  `Channel: ${pdfChannels}\n`;
//    htmlContent +=  `Date: ${pdfDate}\n\n`;

  
//   const element = document.createElement('a');
//   const file = new Blob([htmlContent], { type: 'text/html' });
//   element.href = URL.createObjectURL(file);
//   element.download = 'converted_text.html';
//   document.body.appendChild(element);
//   element.click();
//   document.body.removeChild(element);
 }

 function Solo({ createPdf,isChecked ,date,uniqueId,type,month,page,imageUrl ,boosting}) {


  const sendToZapier = async (payload) => {
    const zapierURL = 'https://hooks.zapier.com/hooks/catch/15784808/39x8yf4/';
    try {
      const response = await fetch(zapierURL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(payload),
      });
      const resp = await response.json();
      console.log(resp);
    } catch (e) {
      console.log(e);
    }
  };




  const handleDownload = () => {


    const currentDate = new Date();

    // Get the current day, month, and year
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentYear = currentDate.getFullYear();

    const postDate = `${currentYear}-${currentMonth}-${currentDay}`;


    const leadData = {
    
      postID:uniqueId,
       channel: type,
       textContent: createPdf,
        month:month,
       name:page,
       postDate:postDate,
       images:imageUrl,
       boosting:boosting,
     };
 
     try {
        sendToZapier(leadData);
       // Additional code to execute after sending data to Zapier, if needed
     } catch (error) {
       console.log(error);
     }

  };

 

  return (
    <div style={{marginTop:'40px'}}>
   
      <button  disabled={isChecked === true? false : true}  className='download-solo pb-10 mb-10' onClick={handleDownload}>Send To PDF</button>
    </div>
  );
}

export default Solo;


//https://hooks.zapier.com/hooks/catch/15784808/39x8yf4/