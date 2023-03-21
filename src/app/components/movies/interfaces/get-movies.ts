export interface GetMovies {
  id:number,
  description:string,
  idCategory:number,
  categoryName:string
}

export interface GetCategory {
  id:number,
  description:string,
}

export interface FilterMovie {
  idCategory:number
}
