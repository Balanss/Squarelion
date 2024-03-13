import React,{useState} from 'react';
import txt from "../images/txt-file.png"






function TxtAll ({createPdf,isChecked ,date,uniqueId,type,month,page,imageUrl ,boosting,post,subject,round}) {



 

  const handleDownload = async() => {
 const currentDate = new Date();

    // Get the current day, month, and year
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentYear = currentDate.getFullYear();

    const postDate = `${currentYear}-${currentMonth}-${currentDay}`;


    const data = {
    
      postID:round[0].unid,
       channel: type,
       name:page,
       postDate:postDate,
        post: round.find((item) => item.order === 0 || item.order === '0'),
        post2:round.find((item) => item.order === 1 || item.order === '1'),
        post3:round.find((item) => item.order === 2 || item.order === '2'),
        post4:round.find((item) => item.order === 3 || item.order === '3'),
        post5:round.find((item) => item.order === 4 || item.order === '4'),
        post6:round.find((item) => item.order === 5 || item.order === '5'),
        post7:round.find((item) => item.order === 6 || item.order === '6'),
        post8:round.find((item) => item.order === 7 || item.order === '7'),
        post9:round.find((item) => item.order === 8 || item.order === '8'),
        post10:round.find((item) => item.order === 9 || item.order === '9'),
        post11:round.find((item) => item.order === 10 || item.order === '10'),
        post12:round.find((item) => item.order === 11 || item.order === '11'),
        post13:round.find((item) => item.order === 12 || item.order === '12'),
        post14:round.find((item) => item.order === 13 || item.order === '13'),
        post15:round.find((item) => item.order === 14 || item.order === '14'),
        post16:round.find((item) => item.order === 15 || item.order === '15'),
        post17:round.find((item) => item.order === 16 || item.order === '16'),
        post18:round.find((item) => item.order === 17 || item.order === '17'),
        post19:round.find((item) => item.order === 18 || item.order === '18'),
        post20:round.find((item) => item.order === 19 || item.order === '19'),
        post21:round.find((item) => item.order === 20 || item.order === '20'),
        post22:round.find((item) => item.order === 21 || item.order === '21'),
        post23:round.find((item) => item.order === 22 || item.order === '22'),
        post24:round.find((item) => item.order === 23 || item.order === '23'),
        post25:round.find((item) => item.order === 24 || item.order === '24'),
        post26:round.find((item) => item.order === 25 || item.order === '25'),
        post27:round.find((item) => item.order === 26 || item.order === '26'),
        post28:round.find((item) => item.order === 27 || item.order === '27'),
        post29:round.find((item) => item.order === 28 || item.order === '28'),
        post30:round.find((item) => item.order === 29 || item.order === '29'),
     };
 
     try {
      const response = await fetch('https://hook.us1.make.com/wu309nh29f99wf07kdjdns97h6o2dv7h', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data),

    });
    const text = await response.text();
    console.log(text);
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
    <p className=' absolute top-30 text-black bg-white pl-3 pr-3'>  {hover}</p>
    </div>
  );
}

export default  TxtAll;


