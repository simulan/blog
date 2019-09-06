import { Action } from '@ngrx/store';
import { Article } from 'src/app/models/article';
import { AllArticleActions, GET_ARTICLES, GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR,
   CREATE_ARTICLE, CREATE_ARTICLE_ERROR, CREATE_ARTICLE_SUCCES as CREATE_ARTICLE_SUCCESS,
   DELETE_ARTICLE, DELETE_ARTICLE_ERROR, DELETE_ARTICLE_SUCCESS, UPDATE_ARTICLE,
   UPDATE_ARTICLE_SUCCESS, UPDATE_ARTICLE_ERROR } from '../actions/article.actions';

export interface ArticleState {
  articles: Article[];
  article: Article;
  loading;
  error: boolean;
}
export const initialState: ArticleState = {
  articles: [],
  article:  null,
  loading: false,
  error: false,
};

export function reducer(
  state = initialState,
  action: AllArticleActions): ArticleState {
    switch (action.type) {
      case GET_ARTICLES: {
        return { ...state, loading: true };
      }
      case GET_ARTICLES_SUCCESS: {
        return { ...state, loading: false,
          articles: action.payload
        };
      }
      case GET_ARTICLES_ERROR: {
        return { ...state, loading: false };
      }
      case CREATE_ARTICLE: {
        return { ...state, loading: true };
      }
      case CREATE_ARTICLE_SUCCESS: {
        return { ...state, loading: false,
          articles: [...state.articles, {...action.payload}]
        };
      }
      case CREATE_ARTICLE_ERROR: {
        return { ...state, loading: false };
      }
      case DELETE_ARTICLE: {
        return { ...state, loading: true };
      }
      case DELETE_ARTICLE_SUCCESS: {
        return { ...state, loading: false,
          articles: [...state.articles, {...action.payload}]
        };
      }
      case DELETE_ARTICLE_ERROR: {
        return { ...state, loading: false };
      }
      case UPDATE_ARTICLE: {
        return { ...state, loading: true };
      }
      case UPDATE_ARTICLE_SUCCESS: {
        return { ...state, loading: false,
          articles: [...state.articles, {...action.payload}]
        };
      }
      case UPDATE_ARTICLE_ERROR: {
        return { ...state, loading: false };
      }



    }
}

function modifyCustomerState(state: ArticleState, changes: Partial<Article>): ArticleState {
  return {
    ...state,
    loading: false,
    articles: state.articles.map(h => {
      if (h.id === changes.id) {
        return { ...h, ...changes };
      } else {
        return h;
      }
    })
  };
}
