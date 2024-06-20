import ProfileImg from '../assets/profile.jpg'
import BottomBarIcon from './bottomBarIcon';
import ProfileComponent from './profileComponent';

function BottomBar(){

    return(
        <div className="w-screen h-12 absolute bottom-0 backdrop-filter backdrop-blur-lg flex items-center p-3">
            <BottomBarIcon associatedComponent={<ProfileComponent/>} logoPath={ProfileImg} />
        </div>
    )
}

export default BottomBar;
