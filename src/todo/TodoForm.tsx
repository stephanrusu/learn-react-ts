import React, { useState, ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
  addTodo: AddTodo
}

function TodoForm(props: TodoFormProps) {
  const [todoText, setTodoText] = useState<string>('');
  const [errorText, setErrorText] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
    if (e.target.value.trim() !== '') {
      setErrorText(false);
    } else {
      setErrorText(true);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todoText.trim() !== '') {
      props.addTodo(todoText);
      setTodoText('');
    } else {
      setErrorText(true);
    }
  }

  return (
    <div className="card-header-title">
      <form className="is-full-width" onSubmit={handleSubmit}>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <input className={`input ${errorText ? 'is-danger' : ''}`} type="text" placeholder="What do you need to do?"value={todoText} onChange={handleChange} />
            {
              errorText && <p className="help is-danger">This field is required</p>
            }
          </div>
          <div className="control">
            <button type='submit' className="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TodoForm;
