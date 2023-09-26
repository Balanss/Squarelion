import React from 'react';


 function Solo({ createPdf,isChecked ,date,uniqueId,type,month,page,imageUrl ,boosting,post,subject,setIsChecked}) {


  const sendToZapier = async (payload) => {
    const zapierURL = import.meta.env.VITE_ZAP_SOLO_PDF;
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
       subject:subject,
        post:post,
     };
 
     try {
        sendToZapier(leadData);
       // Additional code to execute after sending data to Zapier, if needed
     } catch (error) {
       console.log(error);
     }

     setTimeout(() => {
      setIsChecked(false)
    } , 1000);

  };

 

  return (
    <div style={{marginTop:'40px'}}>

<button disabled={isChecked === true? false : true} onClick={handleDownload} className="relative cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
{isChecked !== true? 'Waiting for Checkmark ' : 'Send To Google Docs'}
  </span>
</button> 

    </div>
  );
}

export default Solo;


