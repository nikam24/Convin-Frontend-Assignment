import { add, remove, edit } from "../actionTypes/actionType";

const addCard = () => {
    return {
        type: add,
    };
};

const removeCard = () => {
    return { 
        type: remove,
    };
};

const changesIntoCard = () => {
    return {
        type: edit,
    };
};

export { addCard, removeCard, changesIntoCard };