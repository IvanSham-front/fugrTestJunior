import { SAVE_URL, ISaveUrl} from "./booksUrlTypes";

export const saveUrl = (url: string): ISaveUrl => {
  return {
    type: SAVE_URL,
    url,
  }
}