import databiz from './svg/client-databiz.svg'
import audiophile from './svg/client-audiophile.svg'
import meet from './svg/client-meet.svg'
import maker from './svg/client-maker.svg'

const Information = () => {
    return (
        <div className='information'>
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. </p>
                <button className='coverpage-button'>Learn more</button>
                <div className='clients-logo-container'>
                    <img className='client-logo' src={databiz} alt='databiz'/>
                    <img className='client-logo' src={audiophile} alt='audiophile'/>
                    <img className='client-logo' src={meet} alt='meet'/>
                    <img className='client-logo' src={maker} alt='maker'/>
                </div>
            </div>
    )
}

export default Information