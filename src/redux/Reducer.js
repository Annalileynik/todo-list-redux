

const initialState ={
    todoList:[
        {
            id:"234",
            title: "Learn JS",
            isDone: false
        },
        {
            id:"2134",
            title: "Learn React",
            isDone: false
        },
        {
            id:"323234",
            title: "Learn Express",
            isDone: false
        },
        {
            id:"232234",
            title: "Get Job",
            isDone: true
        }
    ],
    appName:"Todo"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TASK":
            return {...state, todoList:[...state.todoList, action.payload]};

            case "DELETE_TASK":
                const newTodoList = state.todoList.filter((el)=>el.id!==action.payload.id)
            return {...state, todoList:newTodoList};

            case "UPDATE_TASK":
                const updateTodoList = state.todoList.map(todo=>todo.id === action.payload.id
                    ? {...todo, title:action.payload.newTitle}
                    : todo)
            return {...state, todoList:updateTodoList};

        default: return state
    }
}
export default reducer;