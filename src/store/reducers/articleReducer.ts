import initialArticles from "../initialArticles";
import * as actionTypes from '../actions/actionTypes';


const articles = (state: ArticleState = initialArticles, action: ArticleAction) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.article]
      };
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: Array<IArticle> = state.articles.filter((article: IArticle) => article.id !== action.article.id);
      return {
        ...state,
        articles: updatedArticles,
      };
    default:
      return state;
  }
};

export default articles;
