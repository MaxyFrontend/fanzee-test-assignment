type Genres = 'drama' | 'comedy' | 'thriller' | 'action' | string

type Movie = {
    id: number
    name: string
    description: string
    duration: string
    rating: string
    poster: string
    genre: Genres
}

type MoviesList = Movie[]

type MovieDetail = {
    id: number
    name: string
    description: string
    duration: string
    rating: string
    poster: string
    genre: string
    trivia: string[]
    actors: {
        name: string
        imdb_id: string
    }[]
}

export type { MoviesList as default, Movie, Genres, MovieDetail }
