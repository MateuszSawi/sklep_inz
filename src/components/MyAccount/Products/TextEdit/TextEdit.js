import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // include styles
import styles from './TextEdit.module.scss';

function TextEdit({ name, description_html, onChange }) {
  // Handler for text editor change
  const handleEditorChange = (content) => {
    onChange(content);
  };

  return (
    <ReactQuill 
      theme="snow" 
      value={description_html}
      onChange={handleEditorChange} 
      // style={{width: '400px', height: '200px', marginBottom: '20px'}}
      className={styles.textEditor}
    />
  );
}

export default TextEdit;
