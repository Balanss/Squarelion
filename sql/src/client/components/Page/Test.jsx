import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Test = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleQuillChange = (html) => {
    setEditorHtml(html);
  };
console.log(editorHtml);

  return (
    <div>
      <ReactQuill
        value={editorHtml}
        onChange={handleQuillChange}
        modules={{
          toolbar: [
            // Add desired formatting options here
            ['bold', 'italic', 'underline', 'strike'],
            ['link'],
          ],
        }}
      />
      <button onClick={() => setEditorHtml(editorHtml)}>Get Editor Value</button>
      {editorHtml}
    </div>
  );
};

export default Test;
