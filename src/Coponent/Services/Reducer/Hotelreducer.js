const initialState = JSON.parse(localStorage.getItem('datas')) || {
    Customers: [],
    Customer: null
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDCUS":
            const newStudents = [...state.Customers, action.payload];
            localStorage.setItem('datas', JSON.stringify({ ...state, Customers: newStudents }));
            return {
                ...state,
                Customers: newStudents
            };

        case "GETCUS":
            return state;

        case "SINGLECUS":
            return {
                ...state,
                Customer: state.Customers.find(stu => stu.id === action.payload)
            };

        case "UPDATECUS":
            const updatedStudents = state.students.map(stu =>
                stu.id === action.payload.id ? action.payload : stu
            );
            localStorage.setItem('datas', JSON.stringify({ ...state, Customers: updatedStudents, student: null }));
            return {
                ...state,
                Customers: updatedStudents,
                Customer: null
            };

        case "DELETECUS":
            const filteredStudents = state.Customers.filter(stu => stu.id !== action.payload);
            localStorage.setItem('datas', JSON.stringify({ ...state, Customers: filteredStudents }));
            return {
                ...state,
                Customers: filteredStudents
            };

        default:
            return state;
    }
};

export default studentReducer;
