import React,{useState} from 'react';
import txt from "../images/txt-file.png"






function TxtAll ({createPdf,isChecked ,date,uniqueId,type,month,page,imageUrl ,boosting,post,subject,round}) {

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

  const[hover,setHover]=useState('')


  return (
    <div>
      <img src={txt} alt={txt} onClick={handleDownload}  onMouseLeave={() => setHover('')} onMouseEnter={() => {setHover('Send to google Docs')}} className='w-10' style={{ cursor: "pointer"}}/>
    <p className=' absolute top-30 text-black bg-white pl-3 pr-3'>  {hover}</p>
    </div>
  );
}

export default  TxtAll;


