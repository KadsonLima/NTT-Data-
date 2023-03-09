import { MovieFinder } from "../../components/movieFinder"
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import "./styles.scss"
import MovieDetails from "../../components/movieDetails";


export const Home = () =>{
    

    return (
        <>
        <Header/>
         <div className="home">
            <MovieFinder/>
            <MovieDetails/>
        </div>
        <Footer/>
        </>
    )

   
    
}
