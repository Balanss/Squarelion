import React from 'react';
import txt from "../images/txt-file.png"

function convertToTextFile(filter) {


  let htmlContent = '';
filter.forEach((filter) => {
  htmlContent += `<p>Count: ${filter.count}</p>`;
  htmlContent += `<p>Subject: ${filter.objective}</p>`;
  htmlContent += `<p>Answer: ${filter.answer}</p>`;
  htmlContent += `<p>Channel: ${filter.type}</p>`;
  htmlContent += `<p>Date: ${filter.date}</p><br>`;
});

const element = document.createElement('a');
const file = new Blob([htmlContent], { type: 'text/html' });
element.href = URL.createObjectURL(file);
element.download = 'converted_text.html';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);

}

function TxtAll ({filter}) {


  const handleDownload = () => {
    
    convertToTextFile(filter);
  };



  return (
    <div>
      <img src={txt} alt={txt} onClick={handleDownload} className='w-20' style={{ cursor: "pointer"}}/>
    </div>
  );
}

export default  TxtAll;


