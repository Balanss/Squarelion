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
    
      postID:round[0].unid,
       channel: type,
       name:page,
       postDate:postDate,
        post:round.find((item) => item.order === '0'),
        post2:round.find((item) => item.order === '1'),
        post3:round.find((item) => item.order === '2'),
        post4:round.find((item) => item.order === '3'),
        post5:round.find((item) => item.order === '4'),
        post6:round.find((item) => item.order === '5'),
        post7:round.find((item) => item.order === '6'),
        post8:round.find((item) => item.order === '7'),
        post9:round.find((item) => item.order === '8'),
        post10:round.find((item) => item.order === '9'),
        post11:round.find((item) => item.order === '10'),
        post12:round.find((item) => item.order === '11'),
        post13:round.find((item) => item.order === '12'),
        post14:round.find((item) => item.order === '13'),
        post15:round.find((item) => item.order === '14'),
        post16:round.find((item) => item.order === '15'),
        post17:round.find((item) => item.order === '16'),
        post18:round.find((item) => item.order === '17'),
        post19:round.find((item) => item.order === '18'),
        post20:round.find((item) => item.order === '29'),
        post21:round.find((item) => item.order === '20'),
        post22:round.find((item) => item.order === '21'),
        post23:round.find((item) => item.order === '22'),
        post24:round.find((item) => item.order === '23'),
        post25:round.find((item) => item.order === '24'),
        post26:round.find((item) => item.order === '25'),
        post27:round.find((item) => item.order === '26'),
        post28:round.find((item) => item.order === '27'),
        post29:round.find((item) => item.order === '28'),
        post30:round.find((item) => item.order === '29'),
     };
 
     try {
        sendToZapier(leadData);
        setHover('Send to Google Docs complete!!')
        setTimeout(() => {
          setHover('')
        }, 2000);
       // Additional code to execute after sending data to Zapier, if needed
     } catch (error) {
       console.log(error);
       tHover('Error sending to Google Docs')
        setTimeout(() => {
          setHover('')
        }
        , 2000);
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


