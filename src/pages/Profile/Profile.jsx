import React from 'react'
import { connect } from 'react-redux';
import Layout from '../../components/Layout'
import Title from '../../components/Title/Title'

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps
)(props => {
    const { agent, user } = props.auth;
    return (
        <Layout
            currentPage='profile'
        >
            <Title title='Profile' />
            <div className='container'>
                <div className="row" style={{ justifyContent: 'center' }}>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-img-overlap">
                                <a href="#" className="user-icon user-card-mail"><i className="ti-email"></i></a>
                                <a href="#" className="user-icon user-card-phone"><i className="ti-mobile"></i></a>
                                <img className="card-img-top" height='150' src="https://img.freepik.com/free-vector/green-background-with-halftone-effect-squares_23-2148661430.jpg?size=626&ext=jpg" alt="Card image cap" />
                            </div>
                            <div className="card-block padd-0 translateY-50 text-center">
                                <div className="card-avatar style-2" style={{ width: '100px' }}>
                                    <img style={{ height: 'inherit' }} src={agent.logo_url} className="img-circle img-responsive" alt="" />
                                </div>
                                <h5 className="font-normal mrg-bot-0 font-18 card-title">{agent.name}</h5>
                                <p className="card-small-text">{user.email}</p>
                            </div>
                            <div className="bottom">
                                <ul className="social-detail">
                                    <li>140<span>Article</span></li>
                                    <li>5782<span>Followers</span></li>
                                    <li>172<span>Following</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h4 className="box-title">About Me</h4>
                            </div>
                            <div className="card-body">
                                <strong><i className="fa fa-book margin-r-5"></i> Education</strong>

                                <p className="text-muted">
                                    B.S. in Computer Science from the University of Tennessee at Knoxville
						  </p>

                                <hr />

                                <strong><i className="fa fa-map-marker margin-r-5"></i> Location</strong>

                                <p className="text-muted">Malibu, California</p>

                                <hr />

                                <strong><i className="fa fa-pencil margin-r-5"></i> Skills</strong>

                                <p>
                                    <span className="label label-danger">UI Design</span>
                                    <span className="label label-success">Coding</span>
                                    <span className="label label-info">Javascript</span>
                                    <span className="label label-warning">PHP</span>
                                    <span className="label label-primary">Node.js</span>
                                </p>

                                <hr />

                                <strong><i className="fa fa-file-text-o margin-r-5"></i> Notes</strong>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Layout>)
});
