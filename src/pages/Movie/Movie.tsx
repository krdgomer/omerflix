import 'assets/style/Content.css'
import Iframe from 'react-iframe'


const Movie = (props: {}) =>{

    return(
        <div className='Content'>
            <Iframe 
            url="https://www.youtube.com/embed/mGbndoj-Dj8?si=6n0x0uBVMgJEnBDX"
            width="560px"
            height="315px" 
            />
        </div>
    )

}

export default Movie