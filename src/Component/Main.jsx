import Topbar from './Topbar';
import './Main.css';

const Main = () => {
    return (
        <div>
            <Topbar fixed="top" />
            <div className='mainContent'> 
                <img src="./main1.jpg" className="main1"/>
                <p className = 'mainP' >2023 - 우수동아리</p>
                <img src="./main2.jpg" className="main2"/>
            </div>
            
        </div>
    )
}

export default Main;