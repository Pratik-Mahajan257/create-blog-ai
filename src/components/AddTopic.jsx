import React, { useState } from 'react';
import Modal from 'react-modal';

const AddTopic = ({ isOpen, onClose, onSubmit }) => {
  const [topicName, setTopicName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [keywordList, setKeywordList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topicName !== '' && keywords !== '') {
      onSubmit({ topicName, keywords });
      setTopicName('');
      setKeywords('');
      setKeywordList([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && keywords.length > 0) {
      e.preventDefault();
      const word = keywords.slice(keywords.lastIndexOf(',') + 1).trim();
      if (word !== '') {
        setKeywords(keywords + ',' + ' ');
      }
    }
  };

  return (
    <Modal
      className="space-y-5 border-[#fe5829] rounded-lg shadow-2xl shadow-[#fe5829] border-4 bg-white mt-[20px] w-1/2 ml-[400px] p-5 flex flex-col"
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <h2 className="text-[#fe5829] font-secondary font-bold uppercase">Add Topic</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-6 justify-start items-start mb-5">
          <label htmlFor="topicName">Topic Name <span className='text-red-500 '>*</span> :</label>
          <textarea
            className="bg-transparent border-black border pb-4 w-full border-dotted outline-none"
            id="topicName"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            rows="3"
            cols="50"
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                e.preventDefault();
                setTopicName(topicName);
              }
            }}
          ></textarea>
        </div>
        <div className="flex flex-col  justify-start items-start gap-y-6 ">
          <label htmlFor="keywords">Keywords  
          <span className="font-thin text-sm"> (press enter to separate keywords)</span> <span className='text-red-500 '>*</span> :
          </label>
          
          <textarea
            className="bg-transparent border-black border pb-4 w-full border-dotted outline-none"
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            rows="3"
            cols="50"
            onKeyDown={handleKeyDown}
          ></textarea>

          
        </div>
        <button
          className={`flex text-white justify-center mt-8 py-2 items-center ${
            topicName === '' || keywords === '' ? 'bg-gray-400' : 'bg-[#fe5829]'
          }`}
          type="submit"
          disabled={topicName === '' || keywords === ''}
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddTopic;
