// React
import { Carousel, Container, Row} from 'react-bootstrap';
import { Link } from "@inertiajs/react"


export default function Header() {

    return (
        <div className='hero-container'>
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <button className=' btn btn-primary '>
                   <Link href="/escape-rooms" className="btn btn-primary btn-lg" role="button">¡Comienza!</Link>
                </button>
            </div>
        </div>
    )
}