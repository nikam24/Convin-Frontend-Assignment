import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { removeCard, changesIntoCard } from './actions/cardAction';
import Card from './actions/components/Card';
import { useState } from 'react';
import Form from './actions/components/Form';
import Footer from './actions/components/Footer';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");
  
  const state = useSelector((state) => state);
  console.log("store", state);

  const handleShowModal = () => {
    if(showModal){
      setShowModal(false);
    }
    else{
      setShowModal(true);
    }
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      {showModal && <Form showModal={showModal} setShowModal={setShowModal} title={"Add New Card"} />}
      <div className='m-2 flex flex-row items-center justify-center space-x-2'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleShowModal}>
        ➕ Add Card
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg> 
  <span className=''>Sort by : </span>
        </button>
        <select className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" name="watches" id="Types" onChange={handleSelectChange}>
        <option value="All" defaultValue={"All"}>  All</option>
      <option value="Video">Video</option>
      <option value="Mp3">Mp3</option>
    </select>
      </div>
      <Card filter={filter} />
      <Footer />
    </>
  );
}

export default App;