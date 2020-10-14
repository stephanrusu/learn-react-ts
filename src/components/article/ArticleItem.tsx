import React from 'react';

type Props = {
  article: IArticle,
  deleteArticle: (article: IArticle) => void,
}

function ArticleItem(props: Props) {

  const removeArticle = () => {
    props.deleteArticle(props.article);
  }

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          {props.article.title}
        </p>
      </header>
      <div className="card-content px-4 py-4">
        <div className="content">
          <p>
            {props.article.body}
          </p>
          <small>{`${props.article.created}`}</small>
        </div>
      </div>
      <footer className="card-footer px-4 py-4">
        <button type='button' className="button" onClick={removeArticle}>Delete</button>
      </footer>
    </div>
  )
};

export default ArticleItem;
