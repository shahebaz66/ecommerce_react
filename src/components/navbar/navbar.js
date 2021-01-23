import './navbar.css'
import ImageIcon from '@material-ui/icons/Image';
import ChatIcon from '@material-ui/icons/Chat';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
function navbar(props){
    return(
        <div className="navbarr">
            <div className="navitem">LoGoS</div>
            <div className="navend">
                <div className="navenditem"><IconButton><NotificationsActiveIcon color="inherit"  fontSize="default"/></IconButton></div>
                <div className="navenditem"><IconButton><AccountCircleIcon  fontSize="default"/></IconButton></div>
            </div>
            <div className="icons">
                <div className="iconsitems"><IconButton><ImageIcon  fontSize="large"/></IconButton></div>
                <div className="iconsitems"><IconButton><SearchIcon fontSize="large"/></IconButton></div>
                <div className="iconsitems"><IconButton><AddBoxIcon fontSize="large"/></IconButton></div>
                <div className="iconsitems"> <IconButton><ChatIcon fontSize="large"/></IconButton></div>
                <div className="iconsitems"><IconButton><AccountBoxIcon fontSize="large"/></IconButton></div>
            </div>
        </div>
        )
}

export default navbar