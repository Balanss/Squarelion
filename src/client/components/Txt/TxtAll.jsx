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

  const sortedRounds = round.sort((a, b) => a.order - b.order);

  console.log(round.filter((item) => item.order === '1'));



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
       name:page,
       postDate:postDate,
        post:round.filter((item) => item.order === '1'),
        post1:round.filter((item) => item.order === '2'),
        post2:round.filter((item) => item.order === '3'),
        post3:round.filter((item) => item.order === '4'),
        post4:round.filter((item) => item.order === '5'),
        post5:round.filter((item) => item.order === '6'),
        post6:round.filter((item) => item.order === '7'),
        post7:round.filter((item) => item.order === '8'),
        post8:round.filter((item) => item.order === '9'),
        post9:round.filter((item) => item.order === '10'),
        post10:round.filter((item) => item.order === '11'),
        post11:round.filter((item) => item.order === '12'),
        post12:round.filter((item) => item.order === '13'),
        post13:round.filter((item) => item.order === '14'),
        post14:round.filter((item) => item.order === '15'),
        post15:round.filter((item) => item.order === '16'),
        post16:round.filter((item) => item.order === '17'),
        post17:round.filter((item) => item.order === '18'),
        post18:round.filter((item) => item.order === '19'),
        post19:round.filter((item) => item.order === '20'),
        post20:round.filter((item) => item.order === '21'),
        post21:round.filter((item) => item.order === '22'),
        post22:round.filter((item) => item.order === '23'),
        post23:round.filter((item) => item.order === '24'),
        post24:round.filter((item) => item.order === '25'),
        post25:round.filter((item) => item.order === '26'),
        post26:round.filter((item) => item.order === '27'),
        post27:round.filter((item) => item.order === '28'),
        post28:round.filter((item) => item.order === '29'),
        post29:round.filter((item) => item.order === '30'),
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


