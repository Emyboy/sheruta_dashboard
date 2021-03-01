import React from 'react'
import { connect } from 'react-redux';
import Layout from '../../components/Layout'
import Title from '../../components/Title/Title'
import EachConversation from './EachConversation';

const mapState = state => ({
    auth: state.auth
})

export default connect(
    mapState
)(props => {
    return (
        <Layout
            currentPage='messages'
        >
            <div className='m-1'>
                {/* <Title title='Messages' /> */}

                <div className="chat-wappers">
                    <div className="app" style={{ height: '76vh' }}>
                        <div className="row app-one">
                            <div className="col-md-4 side">

                                <div className="side-one">
                                    <div className="row heading bg-light">
                                        <div className="col-sm-9 col-9 heading-avatar">
                                            <div className="heading-avatar-icon">
                                                <img src="assets/dist/img/user-1.jpg" alt="" />
                                            </div>
                                        </div>

                                        <div className="col-sm-3 col-3 heading-compose  text-right">
                                            <i className="fa fa-comments-o fa-2x" aria-hidden="true"></i>
                                        </div>
                                    </div>

                                    <div className="row searchBox">
                                        <div className="col-sm-12 searchBox-inner bg-white">
                                            <div className="form-group has-feedback">
                                                <input id="searchText" type="text" className="form-control" name="searchText" placeholder="Search" />
                                                <span className="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sideBar">

                                        {
                                            props.auth.user.conversations.map((val,i) => {
                                                return <EachConversation key={i} data={val} />
                                            })
                                        }

                                    </div>
                                </div>

                                <div className="side-two">

                                    <div className="row newMessage-heading theme-bg">
                                        <div className="row newMessage-main">
                                            <div className="col-sm-2 col-2 newMessage-back">
                                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                            </div>
                                            <div className="col-sm-10 col-10 newMessage-title">
                                                New Chat
											</div>
                                        </div>
                                    </div>

                                    <div className="row composeBox">
                                        <div className="col-sm-12 composeBox-inner">
                                            <div className="form-group has-feedback">
                                                <input id="composeText" type="text" className="form-control" name="searchText" placeholder="Search People" />
                                                <span className="glyphicon glyphicon-search form-control-feedback"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row compose-sideBar">
                                        <div className="row sideBar-body">
                                            <div className="box sideBar-body">
                                                <div className="ground-list ground-list-hove bb-1">
                                                    <div className="media media-single">
                                                        <a href="#">
                                                            <img className="avatar avatar-lg" src="assets/dist/img/user-1.jpg" alt="..." />
                                                        </a>

                                                        <div className="media-body">
                                                            <h6><a href="#">Hossein Shams</a> <span className="time-meta pull-right">18:18</span></h6>
                                                            <small className="cl-success">Online</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box sideBar-body">
                                                <div className="ground-list ground-list-hove bb-1">
                                                    <div className="media media-single">
                                                        <a href="#">
                                                            <img className="avatar avatar-lg" src="assets/dist/img/user-2.jpg" alt="..." />
                                                        </a>

                                                        <div className="media-body">
                                                            <h6><a href="#">Alisha L. Burchell</a> <span className="time-meta pull-right">10:18</span></h6>
                                                            <small className="cl-success">Online</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box sideBar-body">
                                                <div className="ground-list ground-list-hove bb-1">
                                                    <div className="media media-single">
                                                        <a href="#">
                                                            <img className="avatar avatar-lg" src="assets/dist/img/user-3.jpg" alt="..." />
                                                        </a>

                                                        <div className="media-body">
                                                            <h6><a href="#">Daniel N. Anderson</a> <span className="time-meta pull-right">20:18</span></h6>
                                                            <small className="cl-warning">Busy</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box sideBar-body">
                                                <div className="ground-list ground-list-hove bb-1">
                                                    <div className="media media-single">
                                                        <a href="#">
                                                            <img className="avatar avatar-lg" src="assets/dist/img/user-4.jpg" alt="..." />
                                                        </a>

                                                        <div className="media-body">
                                                            <h6><a href="#">Kristina R. Noto</a> <span className="time-meta pull-right">18:18</span></h6>
                                                            <small className="cl-success">Online</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box sideBar-body">
                                                <div className="ground-list ground-list-hove bb-1">
                                                    <div className="media media-single">
                                                        <a href="#">
                                                            <img className="avatar avatar-lg" src="assets/dist/img/user-5.jpg" alt="..." />
                                                        </a>

                                                        <div className="media-body">
                                                            <h6><a href="#">Larry C. Cramer</a> <span className="time-meta pull-right">18:18</span></h6>
                                                            <small className="cl-primary">Away</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box sideBar-body">
                                                <div className="ground-list ground-list-hove bb-1">
                                                    <div className="media media-single">
                                                        <a href="#">
                                                            <img className="avatar avatar-lg" src="assets/dist/img/user-6.jpg" alt="..." />
                                                        </a>

                                                        <div className="media-body">
                                                            <h6><a href="#">Sharon C. Mason</a> <span className="time-meta pull-right">20:20</span></h6>
                                                            <small className="cl-warning">Busy</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box sideBar-body">
                                                <div className="ground-list ground-list-hove bb-1">
                                                    <div className="media media-single">
                                                        <a href="#">
                                                            <img className="avatar avatar-lg" src="assets/dist/img/user-7.jpg" alt="..." />
                                                        </a>

                                                        <div className="media-body">
                                                            <h6><a href="#">Michael P. Fowler</a> <span className="time-meta pull-right">07:10</span></h6>
                                                            <small className="cl-danger">Offline</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box sideBar-body">
                                                <div className="ground-list ground-list-hove bb-1">
                                                    <div className="media media-single">
                                                        <a href="#">
                                                            <img className="avatar avatar-lg" src="assets/dist/img/user-8.jpg" alt="..." />
                                                        </a>

                                                        <div className="media-body">
                                                            <h6><a href="#">Nancy T. Clayton</a> <span className="time-meta pull-right">17:12</span></h6>
                                                            <small className="cl-success">Online</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box sideBar-body">
                                                <div className="ground-list ground-list-hove bb-1">
                                                    <div className="media media-single">
                                                        <a href="#">
                                                            <img className="avatar avatar-lg" src="assets/dist/img/user-1.jpg" alt="..." />
                                                        </a>

                                                        <div className="media-body">
                                                            <h6><a href="#">Hossein Shams</a> <span className="time-meta pull-right">12:10</span></h6>
                                                            <small className="cl-success">Online</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-8 conversation bl-1">

                                <div className="row heading bg-light">

                                    <div className="col-sm-2 col-md-1 col-3 heading-avatar">
                                        <div className="heading-avatar-icon">
                                            <img src="assets/dist/img/user-7.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-sm-8 col-8 heading-name">
                                        <a className="heading-name-meta">John Doe
									  </a>
                                        <span className="heading-online cl-success">Online</span>
                                    </div>

                                    <div className="col-sm-2 col-4  heading-dot pull-right">
                                        <div className="btn-group fl-right">
                                            <button type="button" className="btn-trans" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fa-2x ti-more"></i>
                                            </button>
                                            <div className="dropdown-menu pull-right animated flipInX">
                                                <a href="#">Add User</a>
                                                <a href="#">Profile</a>
                                                <a href="#">Settings</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row message animated slideInLeft" id="conversation">
                                    <ul className="chat-list padd-20">
                                        <li>
                                            <div className="chat-img"><img src="assets/dist/img/user-6.jpg" alt="user" /></div>
                                            <div className="chat-content">
                                                <h5 className="mrg-bot-5">James Anderson</h5>
                                                <div className="chating-box bg-light">Lorem Ipsum is simply dummy text of the printing &amp; type setting industry.</div>
                                            </div>
                                            <div className="time-meta">10:56 am</div>
                                        </li>

                                        <li>
                                            <div className="chat-img"><img src="assets/dist/img/user-6.jpg" alt="user" /></div>
                                            <div className="chat-content">
                                                <h5 className="mrg-bot-5">Bianca Doe</h5>
                                                <div className="chating-box bg-light">It’s Great opportunity to work.</div>
                                            </div>
                                            <div className="time-meta">10:57 am</div>
                                        </li>

                                        <li className="reverse">
                                            <div className="chat-time">10:57 am</div>
                                            <div className="chat-content">
                                                <h5 className="mrg-bot-5">Steave Doe</h5>
                                                <div className="chating-box cl-white bg-success">It’s Great opportunity to work.</div>
                                            </div>
                                            <div className="chat-img"><img src="assets/dist/img/user-7.jpg" alt="user" /></div>
                                        </li>

                                        <li className="reverse">
                                            <div className="time-meta">10:57 am</div>
                                            <div className="chat-content">
                                                <h5 className="mrg-bot-5">Steave Doe</h5>
                                                <div className="chating-box cl-white bg-success">It’s Great opportunity to work.</div>
                                            </div>
                                            <div className="chat-img"><img src="assets/dist/img/user-7.jpg" alt="user" /></div>
                                        </li>

                                        <li>
                                            <div className="chat-img"><img src="assets/dist/img/user-6.jpg" alt="user" /></div>
                                            <div className="chat-content">
                                                <h5 className="mrg-bot-5">Angelina Rhodes</h5>
                                                <div className="chating-box bg-light bg-success">Well we have good budget for the project</div>
                                            </div>
                                            <div className="time-meta">11:00 am</div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="row reply bg-light">

                                    <div className="col-sm-1 col-xs-1 reply-emojis">
                                        <i className="fa fa-smile-o fa-2x"></i>
                                    </div>

                                    <div className="col-sm-9 col-xs-9 reply-main">
                                        <textarea className="form-control" rows="1" id="comment" placeholder="Reply Comments"></textarea>
                                    </div>

                                    <div className="col-sm-1 col-xs-1 reply-recording">
                                        <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
                                    </div>

                                    <div className="col-sm-1 col-xs-1 reply-send">
                                        <i className="fa fa-send fa-2x" aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
});
