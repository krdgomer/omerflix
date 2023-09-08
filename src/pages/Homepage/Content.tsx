import 'assets/style/Content.css'
import Cards from 'components/Cards'
import { Col,Row } from 'antd'
import movieData from 'data/movies.json'


interface movie {

    title: string
    genres: string[]
    src: string
    key: string
    year: string
    rating: string
}

function createMovieElement(title:string,genres:string[],src:string,year: string,rating: string): JSX.Element{
    return(
        <Col span={6}>
            <Cards
            coverImage={<img src={src} alt=''></img>}
            key={title} 
            title={title}
            genres={genres}
            year={year}
            rating={rating}            
            />
        </Col>
    )
}

const moviesList: movie[] = movieData


export default function Content(props: {currGenre: string}){

    function showMovies(){

        if(props.currGenre==="a0"){
            const movies: JSX.Element[] = moviesList.map((movie)=> {return createMovieElement(movie.title,movie.genres,movie.src,movie.year,movie.rating)})
            return movies

        }
        else{
            const currMoviesList: movie[] = moviesList.filter((movie)=> {return movie.genres.includes(props.currGenre)})
            const movies: JSX.Element[] = currMoviesList.map((movie)=> {return createMovieElement(movie.title,movie.genres,movie.src,movie.year,movie.rating)})
            return movies
        }



    }

    return(
        <div className='Content'>
            <br />
            <Row justify="space-evenly" gutter={[8,24]}>
                {showMovies()}
            </Row>

            
        </div>
        
        
    )

    
}