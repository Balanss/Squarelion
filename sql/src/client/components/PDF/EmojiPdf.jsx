/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import NotoColorEmoji from './NotoColorEmoji.ttf';

const EmojiPdf = ({ content }) => {
    const pdfRef = useRef(null);
  
    const generatePdf = () => {
      const pdf = new jsPDF();
  
      html2canvas(pdfRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 277); // Adjust the positioning and dimensions as needed
        pdf.save('emoji_pdf.pdf');
      });
    };
  
    return (
      <div>
        <h4 style={{color:'black'}}>Emoji PDF Generator</h4>
        <style>
        {`
       
          #pdf-content {
            font-family:  fontFamily: 'NotoColorEmoji';
            font-size: 12px;
            color: black;
          }
        `}
      </style>
        <div ref={pdfRef}>
          <p>{content}</p>
        </div>
        <button onClick={generatePdf}>Download PDF</button>
      </div>
    );
  };
  
  export default EmojiPdf;