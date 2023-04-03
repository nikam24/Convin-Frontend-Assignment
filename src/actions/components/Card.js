import React from 'react'
import { useSelector } from "react-redux";
import { useState } from 'react';
import CardItem from './CardItem';

export default function Card(props) {
    const [showModal, setShowModal] = useState(false);
    const state = useSelector((state) => state);
    const cards = useSelector((state) => state.cards);
    console.log(state);
    console.log(cards);
  
    return (
        <>
            <div className='bg-blue-400 h-[90vh] mb-2 grid grid-cols-4 gap-4 p-8'>
                {cards.map((element) => (
                    (element.category === props.filter || props.filter === "All")? <CardItem key={element.id} cardTitle={element.title} link={element.link} category={element.category} id={element.id}/>: false
                ))}
            </div>
        </>
    )
}
