import React from 'react';
import ArticleItem from './ArticleItem';

type Props = {
  list: any,
  deleteArticle: (article: IArticle) => void,
}

function ArticleList(props: Props) {
  return (
    <div>
      {props.list.articles.map((article: IArticle) => (
        <ArticleItem
          key={article.id}
          article={article}
          deleteArticle={props.deleteArticle}
        />
      ))}
    </div>
  )
};

export default ArticleList;
