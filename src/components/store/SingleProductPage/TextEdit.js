import React, { useState, useEffect, useRef } from 'react';


function TextEdit(props) {

  const editorRef = useRef();
  const [isBold, setIsBold] = useState(false);
  const [isList, setIsList] = useState(false);

  const applyStyle = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
    updateButtonState();
  };

  const updateButtonState = () => {
    setIsBold(document.queryCommandState('bold'));
    setIsList(document.queryCommandState('insertUnorderedList'));
  };

  return (
    <div>
      <button 
        onClick={() => applyStyle('bold')} 
        style={{ backgroundColor: isBold ? 'green' : 'gray' }}
      >
        Pogrubienie
      </button>
      <button 
        onClick={() => applyStyle('insertUnorderedList')} 
        style={{ backgroundColor: isList ? 'green' : 'gray' }}
      >
        Lista
      </button>
      <div 
        ref={editorRef} 
        contentEditable 
        dangerouslySetInnerHTML={{ __html: props.description_html }}
        style={{ border: '1px solid black', minHeight: '100px' }} 
        onKeyUp={updateButtonState} // Aktualizuj stan po każdej zmianie w edytorze
      ></div>
    </div>
  );
}

export default TextEdit;
