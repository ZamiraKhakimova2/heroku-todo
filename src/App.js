import {useDispatch, useSelector} from "react-redux";
import React  from 'react';
import {useEffect} from 'react';
import Header from './Header';
import {loadingTodos, deleteTodo} from "./actions";



function App() {
  const todo = useSelector(state => state.todos);

  const load = useSelector(state => state.load)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingTodos());
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }
  return (
      <div>
        <Header/>
        {load  ? 'LOADING' : (todo.map(todo => {
              return (
                  <div className='todo'>
                    <div className='like'>
                      ★
                    </div>
                    <div className='title'>
                      {todo.title}
                    </div>
                    <div>
                      <button className='btn' onClick={() =>
                          handleDelete(todo.id)}>
                        Удалить
                      </button>
                    </div>
                  </div>
              )

            })
        )
        }
      </div>
  );
}

export default App;