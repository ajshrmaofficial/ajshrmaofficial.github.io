import ProfileImg from '../assets/profile.jpg'
import TempSettingIcon from '../assets/favicon.png'
import BottomBarIcon from './bottomBarIcon';
import Profile from './profile';
import Settings from './settings';

function BottomBar(){

    return(
        <div className="w-screen h-12 absolute bottom-0 backdrop-filter backdrop-blur-lg flex items-center p-3 gap-32">
            <BottomBarIcon associatedComponent={<Profile key={1}/>} logoPath={ProfileImg} />
            <BottomBarIcon associatedComponent={<Settings key={2}/>} logoPath={TempSettingIcon} />
        </div>
    )
}

export default BottomBar;
