import React, { useEffect, useState } from 'react';

const Text = ({ inputValue }) => {
    const [oneWord,setOneWord] = useState("");
    const [aa,setAa] = useState("");
    let arr = inputValue.split('');

    const handleOneWord = () => {
              
    };

    useEffect(() => {
        handleOneWord();
    }, []);

  return (
    <p>{oneWord}</p>
  )
}

export default Text