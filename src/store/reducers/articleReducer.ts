import intialState from "../initialState";
import * as actionTypes from '../actions/actionTypes';
import { v4 as uuidv4 } from 'uuid';

const articleReducer = (state: InitialState = intialState, action: ArticleAction) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: uuidv4(),
        title: action.article.title,
        body: action.article.body
      };

      return {
        ...state,
        articles: [...state.articles, newArticle]
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

export default articleReducer;
