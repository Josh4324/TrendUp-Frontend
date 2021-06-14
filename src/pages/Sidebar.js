import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
    return (
        <div>
            <div className="nav-wrap">
                <ul className="mb-1">
                    <li><Link to="/dashboard" onClick={() => props.setView("dashboard")}
                            className="nav-content-bttn nav-content-bttn-current h-auto pt-2 pb-2"><i
                                className="feather-home"></i><span>Dashboard</span></Link></li>
                    <li><Link to={props.link} className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-image"></i><span>My page</span></Link></li>
                    <li  onClick={() => props.setView("postview")}><Link to="#" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-file"></i><span>My Posts</span></Link></li>
                    <li  onClick={() => props.setView("supporter")}><Link to="#" className="nav-content-bttn h-auto pt-2 pb-2"><i
                                className="feather-heart"></i><span>Supporters</span></Link></li>
                     <li onClick={() => props.setView("wallet")}><Link href="#" class="nav-content-bttn h-auto pt-2 pb-2"><i
                                    class="feather-shopping-bag"></i><span>Wallet</span></Link></li>
                    <li onClick={() => props.setView("settings")}><Link href="settings.html" class="nav-content-bttn h-auto pt-2 pb-2"><i
                                class="feather-message-square"></i><span>Account Settings</span></Link></li>
                    <li onClick={(evt) => 
                    {
                        evt.preventDefault();
                        props.logout()
                    }}><Link href="#" class="nav-content-bttn h-auto pt-2 pb-2"><i
                    class="feather-power"></i><span>Logout</span></Link></li>
                </ul>
            </div>
        </div>
    )
}
