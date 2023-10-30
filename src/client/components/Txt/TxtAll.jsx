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

  // const sortedRounds = round.sort((a, b) => a.x.order - b.x.order);

  // const posts = sortedRounds.map((r, i) => ({
  //   [`post${i + 1}`]: r,
  // }));



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
      ...Array.from({ length: round.length }, (_, i) => {
        const order = round[i].order;
        const postKey = order === 0 ? 'post' : `post${order}`;
        return { [postKey]: round[i] };
      }).reduce((acc, val) => ({ ...acc, ...val }), {}),
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
       setHover('Error sending to Google Docs')
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
    <p className=' absolute top-30 text-black bg-white pl-3 pr-3 text-sm'> {hover}</p>
    </div>
  );
}

export default  TxtAll;


