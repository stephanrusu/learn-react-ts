import React from 'react';
import ArticleForm from './ArticleForm';
import { addArticle, removeArticle } from '../../store/actions/articleActions';
import { Dispatch } from 'redux';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ArticleList from './ArticleList';

function ArticleContainer() {
  const articles: Array<IArticle> = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = (article: IArticle) => {
    console.info(article);
    return dispatch(addArticle(article));
  }

  const deleteArticle = (article: IArticle) => {
    console.info(article);
    return dispatch(removeArticle(article))
  };

  return (
    <div className="card">
      <header className="card-header">
        <ArticleForm saveArticle={saveArticle} />
      </header>
      <div className="card-content">
        <ArticleList list={articles} deleteArticle={deleteArticle} />
      </div>
    </div>
  )
};

export default ArticleContainer;
