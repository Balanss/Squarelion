import React from 'react';


 function Solo({ createPdf,isChecked ,date,uniqueId,type,month,page,imageUrl ,boosting,post,subject,round}) {


  const sendToZapier = async (payload) => {
    const zapierURL = import.meta.env.VITE_ZAP_SEND_PDF;
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



console.log(round[0])
  const handleDownload = async() => {


    // async function handleTest(){
    //   try {
    //     await Promise.all(
    //       round.map(async (data) => {
    //         await addDoc(collection(db, 'Testing'), data);
    //       })
    //     );
    //     console.log('Data sent to Firebase successfully.');
    //   } catch (error) {
    //     console.error('Error sending data to Firebase:', error);
    //   }
    // }
    

    const currentDate = new Date();

    // Get the current day, month, and year
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentYear = currentDate.getFullYear();

    const postDate = `${currentYear}-${currentMonth}-${currentDay}`;


    const leadData = {
    
      postID:uniqueId,
      //  channel: type,
      //  textContent: createPdf,
      //   month:month,
       name:page,
       postDate:postDate,
      //  images:imageUrl,
      //  boosting:boosting,
      //  subject:subject,
        post:round[0],
        post2:round[1],
        post3:round[2],
        post4:round[3],
        post5:round[4],
        post6:round[5],
        post7:round[6],
        post8:round[7],
        post9:round[8],
        post10:round[9],
        post11:round[10],
        post12:round[11],
        post13:round[12],
        post14:round[13],
        post15:round[14],
        post16:round[15],
        post17:round[16],
        post18:round[17],
        post19:round[18],
        post20:round[19],
        post21:round[20],
        post22:round[21],
        post23:round[22],
        post24:round[23],
        post25:round[24],
        post26:round[25],
        post27:round[26],
        post28:round[27],
        post29:round[28],
        post30:round[29],

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

<button disabled={isChecked === true? false : true} onClick={handleDownload} className="relative cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
{isChecked !== true? 'Waiting for Checkmark ' : 'Send To PDF'}
  </span>
</button> 

    </div>
  );
}

export default Solo;


