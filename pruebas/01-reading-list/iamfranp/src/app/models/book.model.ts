export interface Book{
    title: string,
    pages: number,
    genre: string, //TODO change to enum
    cover: string,
    synopsis: string,
    year: number,
    ISBN: string,
    inReadingList: boolean,
    author: {
             name: string,
             otherBooks: string[]
              }
}