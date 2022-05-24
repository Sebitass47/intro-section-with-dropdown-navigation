import { useState } from 'react'
import arrowDown from './svg/icon-arrow-down.svg'
import arrowUp from './svg/icon-arrow-up.svg'
import calendar from './svg/icon-calendar.svg'
import planning from './svg/icon-planning.svg'
import todo from './svg/icon-todo.svg'
import reminders from './svg/icon-reminders.svg'

const NavLinks = () => {
    const [featuresVisible, setFeaturesVisible] = useState(false)
    const [companyVisible, setCompanyVisible] = useState(false)

    const showFeatures = () => {
        setFeaturesVisible(!featuresVisible)
    }

    const showCompany = () => {
        setCompanyVisible(!companyVisible)
    }


    return(
        <div className="navlinks">
            <ul>
                <li className="navlink" onClick={showFeatures}>
                    Features <img src={featuresVisible ? arrowUp: arrowDown} className="arrow" alt='arrow'/>
                </li>
                    {featuresVisible ? 
                    <div className='drop-list features'>
                        <p><img src={todo} alt='todo-icon' className='list-icons'/>Todo List</p>
                        <p><img src={calendar} alt='calendar-icon' className='list-icons'/>Calendar</p>
                        <p><img src={reminders} alt='reminders-icon' className='list-icons'/>Reminders</p>
                        <p><img src={planning} alt='planning-icon' className='list-icons'/>Planning</p>
                    </div>: null}

                <li className="navlink " onClick={showCompany}>
                    Company <img src={companyVisible ? arrowUp: arrowDown} className="arrow" alt='arrow'/>
                    
                </li>
                    {companyVisible ? 
                    <div className='drop-list company'>
                        <p>History</p>
                        <p>Our Team</p>
                        <p>Blog</p>
                    </div>: null}
                <li className="navlink"><a href='#'>Carers</a></li>
                <li className="navlink"><a href='#'>About</a></li>
            </ul>
        </div>
        
    )
}

export default NavLinks