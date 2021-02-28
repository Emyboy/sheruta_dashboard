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
                <div class="row" style={{ justifyContent: 'center' }}>
                    <div class="col-md-9">
                        <div class="card">
                            <div class="card-img-overlap">
                                <a href="#" class="user-icon user-card-mail"><i class="ti-email"></i></a>
                                <a href="#" class="user-icon user-card-phone"><i class="ti-mobile"></i></a>
                                <img class="card-img-top" height='150' src="https://img.freepik.com/free-vector/green-background-with-halftone-effect-squares_23-2148661430.jpg?size=626&ext=jpg" alt="Card image cap" />
                            </div>
                            <div class="card-block padd-0 translateY-50 text-center">
                                <div class="card-avatar style-2" style={{ width: '100px' }}>
                                    <img style={{ height: 'inherit' }} src={agent.logo_url} class="img-circle img-responsive" alt="" />
                                </div>
                                <h5 class="font-normal mrg-bot-0 font-18 card-title">{agent.name}</h5>
                                <p class="card-small-text">{user.email}</p>
                            </div>
                            <div class="bottom">
                                <ul class="social-detail">
                                    <li>140<span>Article</span></li>
                                    <li>5782<span>Followers</span></li>
                                    <li>172<span>Following</span></li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h4 class="box-title">About Me</h4>
                            </div>
                            <div class="card-body">
                                <strong><i class="fa fa-book margin-r-5"></i> Education</strong>

                                <p class="text-muted">
                                    B.S. in Computer Science from the University of Tennessee at Knoxville
						  </p>

                                <hr />

                                <strong><i class="fa fa-map-marker margin-r-5"></i> Location</strong>

                                <p class="text-muted">Malibu, California</p>

                                <hr />

                                <strong><i class="fa fa-pencil margin-r-5"></i> Skills</strong>

                                <p>
                                    <span class="label label-danger">UI Design</span>
                                    <span class="label label-success">Coding</span>
                                    <span class="label label-info">Javascript</span>
                                    <span class="label label-warning">PHP</span>
                                    <span class="label label-primary">Node.js</span>
                                </p>

                                <hr />

                                <strong><i class="fa fa-file-text-o margin-r-5"></i> Notes</strong>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Layout>)
});
