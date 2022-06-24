import { client } from '../api/axios';
import { fetchBooks, nextPageBook, fetchBooksIsLoading, fetchBooksIsFalse} from './books/booksActions';
import { saveUrl } from './booksUrl/booksUrlActions';
import { fetchSelectedBook, fetchSelectedBookIsFalse, fetchSelectedBookIsLoading } from './selectedBook/selectedBookActions';

const API_KEY = process.env.REACT_APP_API_KEY

export const getBooks = (searchWords:string, categories: string, sorting: string) => {
  
  const createUrl = () => {
    let url = `?q=${searchWords}`
    if (categories !== 'all') {
      url += `&subject:${categories}`
    }
    url += `&orderBy=${sorting}&startIndex=0&maxResults=30&key=${API_KEY}`
    return url
  }
  
  return (dispatch:any) => {
    const url = createUrl()
    dispatch(saveUrl(url));
    dispatch(fetchBooksIsLoading(false))
    client.get(url)
    .then(response => {
      dispatch(fetchBooks(response.data.items, response.data.totalItems))
      dispatch(fetchBooksIsLoading(true))
    })
    .catch(error => {
      console.log(error)
      dispatch(fetchBooksIsFalse(true))
    })
  }
}

export const getNextPage = (url:string) => {
  let startIndex = url.slice(url.search('startIndex='), url.search('&max'));
  let page = + startIndex.split('=')[1]
  const nextPageUrl = url.replace(`startIndex=${page}`, `startIndex=${page+30}`)
  
  return(dispatch:any) => {
    dispatch(fetchSelectedBookIsLoading(false))
    dispatch(saveUrl(nextPageUrl));
    client.get(nextPageUrl)
    .then(response => {
      dispatch(nextPageBook(response.data.items))
    })
    .catch(error => {
      console.log(error)
      dispatch(fetchBooksIsFalse(true))
    })
  }
} 


export const getSelectBook = (id:string) => {
  return(dispatch: any) => {
    dispatch(fetchSelectedBookIsLoading(false))
    client.get(id)
    .then(response => {
      dispatch(fetchSelectedBook(response.data.volumeInfo))
      dispatch(fetchSelectedBookIsLoading(true))
    })
    .catch(error => {
      dispatch(fetchSelectedBookIsFalse(true))
      console.log(error)
    })
  }
}