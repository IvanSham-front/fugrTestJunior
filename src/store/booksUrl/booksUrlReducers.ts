import { SAVE_URL, ISaveUrl} from "./booksUrlTypes";

export const booksUrl = (state:string = '', action: ISaveUrl) => {
    switch(action.type) {
      case SAVE_URL: 
        return action.url 
        default: return state
    }
}