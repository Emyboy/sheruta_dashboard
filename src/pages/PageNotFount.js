import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div className="row">
            <div className="col-md-12 col-lg-12">
                <section className="error-page text-center">
                    <h1 className="theme-cl">404</h1>
                    <h3 className="theme-cl">Opps! Page Not Found</h3>
                    <p>The page you are looking for can't be found.</p>
                    <Link to='/' className="btn cl-white no-br theme-bg">Go To Home Page</Link>
                </section>
            </div> 
        </div>
    )
}
