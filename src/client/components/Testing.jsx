import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



export default function Testing() {

  const [editorValue, setEditorValue] = useState('');

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };
  
  
  return (
    <div>
    <ReactQuill
      value={editorValue}
      onChange={handleEditorChange}
      style={{color:'black'}}
    />
  </div>
  );
  
}
