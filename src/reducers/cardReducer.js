const initialState = {
    cards: [
        {
            id: 1,
            category: "Video",
            title : "Learn React",
            link : "https://www.youtube.com/embed/DLX62G4lc44"
        },
        {
            id: 2,
            category: "Mp3",
            title : "Listen Music",
            link : "https://open.spotify.com/embed/track/3RiPr603aXAoi4GHyXx0uy?utm_source=generator"
        }
    ],
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            console.log("Came here")
            return {
                ...state,
                cards: [
                    ...state.cards,
                    action.payload
                ]
            };

         case 'remove':
            console.log("It is ", action.payload.id);
            return {
                ...state,
                cards: state.cards.filter((card) => card.id !== action.payload.id),
            };

        case 'edit':
            return {
                ...state,
                cards: state.cards.map((card) => card.id === action.payload.id ? { ...card, title: action.payload.title, link: action.payload.link, category: action.payload.category } : card)
            }

        default:
            return state;
    }
};

export default cardReducer;