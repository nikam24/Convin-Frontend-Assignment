import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useState } from "react";

export default function Form(props) {
  const [selectedValue, setSelectedValue] = useState('Video');
  const [cardTitle, setTitle] = useState('');
  const [contentLink, setLink] = useState('');
  const state = useSelector((state) => state);
  console.log("store", state);
  const dispatch = useDispatch();

  const handleAddCard = () => {
    props.setShowModal(false)
    dispatch({
      type: 'add',
      payload: {
        id: state.cards.length + 1,
        category: selectedValue,
        title: cardTitle, 
        link: contentLink
      }
    });
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleEditCard = () => {
    props.setShowModal(false)
    console.log("Edit in progress....");
    dispatch({
      type: "edit",
      payload: {
        id: props.id,
        category: selectedValue,
        title: cardTitle,
        link: contentLink
      }
    });
  };

  return (
    <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {props.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto text-[18px]">
                <div action="#">
    <label htmlFor="Types">Choose Card Type : </label>
    <select name="watches" id="Types" className='border border-black' onChange={handleSelectChange}>
      <option value="Video" defaultValue={"Video"}>Video</option>
      <option value="Mp3">Mp3</option>
    </select>
    <br/><br/>
    <p>Enter Card Title : </p>
    <input type="text" placeholder=" Card Title" onChange={(event) => setTitle(event.target.value)}/>
    <br />
    <p className="my-2">Paste Link : </p>
    <input type="text" placeholder=" Embeded Link" onChange={(event) => setLink(event.target.value)}/>
  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    Close
                  </button>

                  { (props.title === "Add New Card")? 
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleAddCard}
                      >
                        Create
                      </button> : 
                  
                      <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleEditCard}
                      >
                        Edit
                      </button>
                  }

                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  );
}