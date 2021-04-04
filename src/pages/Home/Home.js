import React from 'react'
import Layout from '../../components/Layout';

export default function Home() {
    return (
        <Layout
            currentPage='home'
        >
            <div className='container'>
                <div class="row">

                    <div class="col-md-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-right">
                                    <i class="fa fa-home icon ti-user blue-cl font-30"></i>
                                </div>
                                <div class="widget-detail">
                                    <h4 class="mb-1">372</h4>
                                    <span>Properties</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-right">
                                    <i class="fa fa-envelope ti-shopping-cart-full red-cl font-30"></i>
                                </div>
                                <div class="widget-detail">
                                    <h4 class="mb-1">158</h4>
                                    <span>Messages</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-right">
                                    <i class="fa fa-user icon ti-medall yellow-cl font-30"></i>
                                </div>
                                <div class="widget-detail">
                                    <h4 class="mb-1">33</h4>
                                    <span>Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="float-right">
                                    <i class="icon ti-briefcase green-cl font-30"></i>
                                </div>
                                <div class="widget-detail">
                                    <h4 class="mb-1">512</h4>
                                    <span>Delivery Processing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <h1>Home Page</h1>
            </div>
        </Layout>
    )
}
