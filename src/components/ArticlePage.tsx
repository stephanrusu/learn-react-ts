import React from 'react';
import ArticleContainer from './article/ArticleContainer';
import ReturnHome from './common/ReturnHome';

function ArticlePage() {
  return (
    <div className="columns is-centered">
      <div className="column">
        <ReturnHome />
        <ArticleContainer />
      </div>
    </div>
  )
};

export default ArticlePage;
