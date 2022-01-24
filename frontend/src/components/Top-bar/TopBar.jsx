// import {useState} from 'react';
import {Search} from '@material-ui/icons';
import './TopBar.css';

export default function TopBar() {
    //const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    return (
        <div>
            <div className="Header">
                <div className="header-left">
                    {/* <Menu fontSize="large" className="menuButton"
                        onClick={() => setSidebarIsOpen(true)}
                    /> */}
                    <div className='appName'>Alumni Connects</div>
                </div> 
                {/* <div className="header-center">
                    <Search/>
                    <input class="header-search-input-box" type='text'/>
                </div>    */}
                <div className="header-right">
                    <img src="/assets/person/noAvatar.png"
                         alt=""
                         id="header-user-img"
                    />
                </div>
            </div>
            {/* <aside className={sidebarIsOpen ? 'open' : ''}>
                <div id="sidebar-close-line">
                    <strong>My Followings</strong>
                    <button
                        onClick={() => setSidebarIsOpen(false)}
                        className="close-sidebar"
                        type="button"
                    >
                        close
                    </button>
                    <div className="Followings">

                    </div>
                </div> 
               
            </aside> */}
        </div>
    )
}
