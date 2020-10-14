import React, { useState, ChangeEvent, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  saveArticle: (article: IArticle | any) => void,
}

function ArticleForm(props: Props) {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'body') {
      setBody(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newArticle: IArticle = {
      id: uuidv4(),
      title,
      body,
      created: new Date(),
    };
    props.saveArticle(newArticle);
    setTitle('');
    setBody('');
  }

  return (
    <div className="card-header-title">
      <form className="is-full-width" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control is-expanded">
            <input className='input' type="text" name='title' value={title} onChange={handleChange} />
          </div>
        </div>
        <div className="field">
          <label className="label">Body</label>
          <div className='control is-expanded'>
            <input className="input" type="text" name='body' value={body} onChange={handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type='submit' className="button">
              Add article
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ArticleForm;
