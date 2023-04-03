import React from 'react';
import { useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "react-modal";
import Form from './Form';

export default function CardItem(props) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formShow, setFormShow] = useState(false);

  const handleRemoveCard = () => {
    console.log("Hi");
    dispatch({
      type: 'remove',
      payload: {
        id: props.id
      }
    });
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleFormShow = () => {
    console.log("I was clicked", formShow);
    if(formShow){
      setFormShow(false);
    }
    else{
      setFormShow(true);
    }
  };

  return (
    <>
      {formShow && <Form showModal={formShow} setShowModal={setFormShow} title={"Edit Card"} id={props.id} category={props.category} link={props.link} />}
      {showModal && 
          <Modal isOpen={showModal} onRequestClose={handleCloseModal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, content: { backgroundColor: 'white' } }} >
            {(props.category === "Video")? <iframe className='w-full h-full' src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : <iframe title="mp3" className='border rounded-xl h-full w-full mt-10' src={props.link} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>}
            
          </Modal>
      }

      <div className='flex flex-row space-x-0'>

        <div className='bg-yellow-200 shadow-2xl h-min rounded-xl mt-4 mb-4 p-4 flex flex-col items-center justify-center' onClick={handleClick}>

          <div className='flex flex-row justify-between space-x-4'>
            <h1 className='text-2xl font-semibold font-serif'>{props.cardTitle}</h1>
            <div className=''>{(props.category === 'Video') ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
              </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursoro">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
              </svg>
            }</div>
          </div>
          <a href={props.link}>Link</a>

        </div>

        <button className="bg-transparent h-8 w-8 mt-2 text-black  text-2xl hover:text-white" onClick={handleRemoveCard}>
          ×
        </button>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="relative top-10 right-[26px] w-5 h-5 hover:cursor-pointer hover:text-white"onClick={handleFormShow} >
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
        </svg>


      </div>
    </>
  )
}
