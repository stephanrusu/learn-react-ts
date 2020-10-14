import * as actionTypes from './actionTypes';

export const addArticle = (article: IArticle) => {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  }

  actionDispatch(action);
}

export const removeArticle = (article: IArticle) => {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  }

  actionDispatch(action);
}

const actionDispatch = (action: ArticleAction) => {
  return (dispatch: DispatchType) => {
    dispatch(action);
  }
}
