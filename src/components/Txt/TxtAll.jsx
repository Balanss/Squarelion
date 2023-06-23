import React from 'react';
import txt from "../images/txt-file.png"

function convertToTextFile(filter) {


    let text = '';
    filter.forEach((filter) => {
        text += `Count: ${filter.count}\n`;
      text += `Subject: ${filter.objective}\n`;
      text += `Answer: ${filter.answer}\n`;
      text += `Channel: ${filter.type}\n`;
      text += `Date: ${filter.date}\n\n`;
    });

  const element = document.createElement('a');
  const file = new Blob([text], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'converted_text.txt';
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
      <img src={txt} alt={txt} onClick={handleDownload} style={{width: "100px", height: "100px", cursor: "pointer"}}/>
    </div>
  );
}

export default  TxtAll;


