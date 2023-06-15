import React, { useState } from 'react';
import AddTopic from './AddTopic';
import { AiOutlineRight, AiOutlineDelete } from 'react-icons/ai';


const Topics = () => {
  const [topics, setTopics] = useState([
    { id: 1,  topic: 'React Hooks', keywords: ['React', 'Hooks'] },

  ]);
  const [isAddTopicOpen, setIsAddTopicOpen] = useState(false);

  const openAddTopicModal = () => {
    setIsAddTopicOpen(true);
  };

  const closeAddTopicModal = () => {
    setIsAddTopicOpen(false);
  };

  const addTopic = (newTopic) => {
    const updatedTopics = [
      {
        id: Date.now(),
        
        topic: newTopic.topicName,
        keywords: newTopic.keywords.split(',').map((keyword) => keyword.trim()),
      },
      ...topics,
    ];
    setTopics(updatedTopics);
    closeAddTopicModal();
  };

  const deleteTopic = (id) => {
    const updatedTopics = topics.filter((topic) => topic.id !== id);
    setTopics(updatedTopics);
  };

const generateColorClass = (index) => {
  const colors = [
    { bg: 'bg-fuchsia-100 ', text: 'text-fuchsia-800 ', border : 'border-fuchsia-800 ' },
    { bg: 'bg-blue-100', text: 'text-blue-800', border : 'border-blue-800'},
    { bg: 'bg-green-100', text: 'text-green-800',  border: 'border-green-800' },
    { bg: 'bg-pink-100', text: 'text-pink-800',border: 'border-pink-800' },
  ];
  return colors[index % colors.length];
};


  return (
  
      <div className=' ml-5 mt-5 w-full  '>
      <h1 className='text-3xl font-primary font-extrabold '>Categories</h1>
      <div className='gap-x-20  text-xl relative flex items-center  font-bold mt-10 ml-14 font-primary mb-20   '>
        <p>All</p>
        <p>Custom</p>
        <p>ICP</p>
        <div className='border-b-4 rounded-sm border-[#fe5829]  w-[150px]   flex items-center justify-center  '>
        <p className='text-[#fe5829]   '>Misson</p>
        </div>
        <p>Product</p>

        <button onClick={openAddTopicModal} className='flex text-white justify-end absolute right-10 px-5 py-2  items-center bg-[#fe5829]'>
           Add Topic <AiOutlineRight className='ml-2 font-bold'/>
        </button>

      </div>
    
      
      <AddTopic isOpen={isAddTopicOpen} onClose={closeAddTopicModal} onSubmit={addTopic} />
      <h2 className='mx-10 bg-slate-200 pl-5 py-2 border border-slate-400 font-primary font-bold text-lg  '>Recommended Topics</h2>
      {topics.map((topic) => (
        
        <div className='' key={topic.id}>
        
        <div className='flex justify-center items-start flex-col mx-10 pt-5  border border-slate-400 '>
            
           
          <h4 className='font-primary font-bold text-lg ml-5 mb-3  '>{topic.topic}</h4>
    <ul className="flex flex-row ml-5 space-x-5 justify-center items-center mt-2">
{topic.keywords.map((keyword, index) => {
  const colorClass = generateColorClass(index);
  return (
    <li key={index}>
      <span
        className={`keyword ${colorClass.bg} ${colorClass.text} ${colorClass.border} border-2 text-sm font-bold font-secondary px-5 py-1 rounded-lg `}
        
      >
        {keyword}
      </span>
    </li>
  );
})}
</ul>
        <div className=' w-full flex justify-end items-center '>

          <button className='mr-4 text-xl mb-1 text-[#fe5829]' onClick={() => deleteTopic(topic.id)}><AiOutlineDelete /></button>
        </div>
        

         <button className='flex text-white justify-end absolute right-10 px-5 py-2 mb-7 mr-5 items-center bg-[#fe5829]'>
          <a href="http://192.168.1.108:8888/">Write</a>  <AiOutlineRight className='ml-2 font-bold'/>
        </button>
       
        </div>
          
        </div>
      ))}
    </div>
   
  );
};

export default Topics;
