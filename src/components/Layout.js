import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const EachNav = ({
    name,
    to,
    badge,
    active,
    icon
}) => {
    return <li className={`nav-item ${active ? 'active' : null}`} data-toggle="tooltip" data-placement="right" title={name} data-original-title={name}>
        <Link className="nav-link" to={to}>
            <i className={icon}></i>
            <span className="nav-link-text">{name}</span>
            <span className="pull-right-container">
                {badge ? <small className="label pull-right bg-green">new</small> : null}
            </span>
        </Link>
    </li>
}

export default function Layout(props) {
    const {
        currentPage
    } = props;

    useEffect(() => {
        document.querySelector('body').classList.add('fixed-nav')
        document.querySelector('body').classList.add('sticky-footer')
    },[])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">

                <header className="header-logo">
                    <a className="nav-link text-center mr-lg-3 hidden-xs" id="sidenavToggler"><i className="ti-align-left"></i></a>
                    <a className="navbar-brand" href="index.html">Sheruta NG</a>
                </header>

                <button className="mb-3 navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars ti-align-left"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">

                    <div className="navbar-side">
                        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                            <EachNav icon='ti ti-home' name='Home' to='/' active={currentPage === 'home'} />
                            <EachNav icon='ti ti-user' name='Profile' to='/profile' active={currentPage === 'profile'} />
                            <EachNav icon='ti ti-list' name='Properties' to='/properties' active={currentPage === 'properties'} />
                            <EachNav icon='ti ti-pencil' name='Blog' to='/blog' active={currentPage === 'blog'} />
                            <EachNav icon='ti ti-power-off' name='Logout' to='/login' active={currentPage === null} />
                        </ul>
                    </div>

                    <ul className="navbar-nav ml-left">
                        <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0 mr-lg-2">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">
                                            <i className="ti-search"></i>
                                        </button>
                                    </span>
                                    <input className="form-control" type="text" placeholder="Type In TO Search" />
                                </div>
                            </form>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mr-lg-3 a-topbar__nav a-nav" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-envelope ti-email"></i>
                                <span className="a-nav__link-badge a-badge a-badge--pink">3</span>
                                <span className="hidden-lg hidden-md mrg-l-10">New Notification</span>
                            </a>
                            <div className="dropdown-menu animated flipInX" aria-labelledby="messagesDropdown">
                                <div className="dropdown-header text-center pink-bg">
                                    <span className="a-dropdown__header-title">3 New</span>
                                    <span className="a-dropdown__header-subtitle">User Messages</span>
                                </div>
                                <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: "250px" }}><div className="ground-list ground-list-hove" id="message-box" style={{ overflow: 'hidden', width: 'auto', height: "250px" }}>
                                    <div className="ground ground-single-list">
                                        <a href="#">
                                            <img className="ground-avatar" src="assets/dist/img/user-1.jpg" alt="..." />
                                            <span className="profile-status bg-online pull-right"></span>
                                        </a>

                                        <div className="ground-content">
                                            <h6><a href="#">Maryam Amiri</a></h6>
                                            <small className="text-fade">Co-Founder</small>
                                        </div>

                                        <div className="ground-right">
                                            <span className="small">Online</span>
                                        </div>
                                    </div>

                                    <div className="ground ground-single-list">
                                        <a href="#">
                                            <img className="ground-avatar" src="assets/dist/img/user-2.jpg" alt="..." />
                                            <span className="profile-status bg-offline pull-right"></span>
                                        </a>

                                        <div className="ground-content">
                                            <h6><a href="#">Maryam Amiri</a></h6>
                                            <small className="text-fade">Co-Founder</small>
                                        </div>

                                        <div className="ground-right">
                                            <span className="small">10 Min Ago</span>
                                        </div>
                                    </div>

                                    <div className="ground ground-single-list">
                                        <a href="#">
                                            <img className="ground-avatar" src="assets/dist/img/user-3.jpg" alt="..." />
                                            <span className="profile-status bg-working pull-right"></span>
                                        </a>

                                        <div className="ground-content">
                                            <h6><a href="#">Maryam Amiri</a></h6>
                                            <small className="text-fade">Co-Founder</small>
                                        </div>

                                        <div className="ground-right">
                                            <span className="small">20 Min Ago</span>
                                        </div>
                                    </div>

                                    <div className="ground ground-single-list">
                                        <a href="#">
                                            <img className="ground-avatar" src="assets/dist/img/user-4.jpg" alt="..." />
                                            <span className="profile-status bg-busy pull-right"></span>
                                        </a>

                                        <div className="ground-content">
                                            <h6><a href="#">Maryam Amiri</a></h6>
                                            <small className="text-fade">Co-Founder</small>
                                        </div>

                                        <div className="ground-right">
                                            <span className="small">18 Min Ago</span>
                                        </div>
                                    </div>

                                    <div className="ground ground-single-list">
                                        <a href="#">
                                            <img className="ground-avatar" src="assets/dist/img/user-5.jpg" alt="..." />
                                            <span className="profile-status bg-online pull-right"></span>
                                        </a>

                                        <div className="ground-content">
                                            <h6><a href="#">Maryam Amiri</a></h6>
                                            <small className="text-fade">Co-Founder</small>
                                        </div>

                                        <div className="ground-right">
                                            <span className="small">Online</span>
                                        </div>
                                    </div>
                                </div><div className="slimScrollBar" style={{ background: "rgb(242, 247, 251)", width: '5px', position: 'absolute', top: '0px', opacity: ' 0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: "1px" }}></div><div className="slimScrollRail" style={{ width: '5px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: '90', right: "1px" }}></div></div>
                                <a className="dropdown-item view-all" href="#">View all Messages</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">

                            <a className="nav-link dropdown-toggle mr-lg-3 a-topbar__nav a-nav" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-bell ti-bell"></i>
                                <span className="a-nav__link-badge a-badge a-badge--accent a-animate-blink">6</span>
                                <span className="hidden-lg hidden-md mrg-l-10">New Notification</span>
                            </a>

                            <div className="dropdown-menu animated flipInX" aria-labelledby="alertsDropdown">
                                <div className="dropdown-header text-center accent-bg">
                                    <span className="a-dropdown__header-title">6 New</span>
                                    <span className="a-dropdown__header-subtitle">User Notifications</span>
                                </div>

                                <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '250px' }}><div className="ground-list ground-list-hove" id="notification-box" style={{ overflow: 'hidden', width: 'auto', height: '250px' }}>
                                    <div className="ground ground-single-list">
                                        <a href="#">
                                            <div className="btn-circle-40 btn-success"><i className="ti-calendar"></i></div>
                                        </a>

                                        <div className="ground-content">
                                            <h6><a href="#">Maryam Amiri</a></h6>
                                            <small className="text-fade">Check New Admin Dashboard..</small>
                                            <span className="small">Just Now</span>
                                        </div>
                                    </div>

                                    <div className="ground ground-single-list">
                                        <a href="#">
                                            <div className="btn-circle-40 btn-danger"><i className="ti-calendar"></i></div>
                                        </a>

                                        <div className="ground-content">
                                            <h6><a href="#">Maryam Amiri</a></h6>
                                            <small className="text-fade">You can Customize..</small>
                                            <span className="small">02 Min Ago</span>
                                        </div>
                                    </div>

                                    <div className="ground ground-single-list">
                                        <a href="#">
                                            <div className="btn-circle-40 btn-info"><i className="ti-calendar"></i></div>
                                        </a>

                                        <div className="ground-content">
                                            <h6><a href="#">Maryam Amiri</a></h6>
                                            <small className="text-fade">Need Responsive Business Tem...</small>
                                            <span className="small">10 Min Ago</span>
                                        </div>
                                    </div>

                                    <div className="ground ground-single-list">
                                        <a href="#">
                                            <div className="btn-circle-40 btn-warning"><i className="ti-calendar"></i></div>
                                        </a>

                                        <div className="ground-content">
                                            <h6><a href="#">Maryam Amiri</a></h6>
                                            <small className="text-fade">Next Meeting on Tuesday..</small>
                                            <span className="small">15 Min Ago</span>
                                        </div>
                                    </div>

                                    <div className="ground ground-single-list">
                                        <a href="#">
                                            <div className="btn-circle-40 btn-purple"><i className="ti-calendar"></i></div>
                                        </a>

                                        <div className="ground-content">
                                            <h6><a href="#">Maryam Amiri</a></h6>
                                            <small className="text-fade">You can Change Your Pass..</small>
                                            <span className="small">18 Min Ago</span>
                                        </div>
                                    </div>
                                </div><div className="slimScrollBar" style={{ background: "rgb(242, 247, 251)", width: '5px', position: 'absolute', top: '0px', opacity: '0.4', display: 'block', borderRadius: '7px', zIndex: '99', right: "1px" }}></div><div className="slimScrollRail" style={{ width: "5px", height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: "rgb(51, 51, 51)", opacity: "0.2", zIndex: '90', right: "1px" }}></div></div>
                                <a className="dropdown-item view-all" href="#">View all Notifications</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mr-lg-0 user-img a-topbar__nav a-nav" id="userDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/266/266749/aging-man.jpg?w=1155&h=1537" alt="user-img" width="36" className="img-circle" />
                            </a>

                            <ul className="dropdown-menu dropdown-user animated flipInX" aria-labelledby="userDropdown">
                                <li className="dropdown-header green-bg">
                                    <div className="header-user-pic">
                                        <img src="https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/266/266749/aging-man.jpg?w=1155&h=1537" alt="user-img" width="36" className="img-circle" />
                                    </div>
                                    <div className="header-user-det">
                                        <span className="a-dropdown__header-title">Daniel Dilver</span>
                                        <span className="a-dropdown__header-subtitle">UI / UX Expert</span>
                                    </div>
                                </li>
                                <li><a className="dropdown-item" href="#"><i className="ti-user"></i> My Profile</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti-wallet"></i> My Balance</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti-email"></i> Inbox</a></li>
                                <li><a className="dropdown-item" href="#"><i className="ti-settings"></i> Account Setting</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa fa-power-off"></i> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button className="w3-button w3-teal w3-xlarge w3-right" onclick={() => { }}><i className="spin fa fa-cog" aria-hidden="true"></i></button>
            </nav>

            <div className='content-wrapper'>
                {props.children}
            </div>

            <footer class="sticky-footer">
                <div class="container">
                    <div class="text-center">
                        <small class="font-15">Copyright © Sheruta NG</small>
                    </div>
                </div>
            </footer>
        </>
    )
}
