import React from 'react';
import AddTodo from './Containers/AddTodo'
import VisibleTodoList from './Containers/VisibleTodoList'
import Footer from './component/Footer'

export class TodoApp extends React.Component{
    render() { 
        return ( 
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}
export default TodoApp;