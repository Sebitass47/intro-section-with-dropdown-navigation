import './CoverPage.css'
import useScreenSize from '../../hooks/useScreenSize'
import Information from './Information'

const CoverPage = () => {
    
    const width = useScreenSize()
    const mobile = 'image-hero-mobile.png'
    const desktop = 'image-hero-desktop.png'

    return(
        <div className="coverpage">
            <Information/>
            <div className="img-container">
                <img src={width < 700 ? mobile : desktop} alt='Hombre sosteniendo una computadora'/>
            </div>
        </div>
    )
}

export default CoverPage