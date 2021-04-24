import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FloatingBtn from '../../components/FloatingBtn/FloatingBtn'
import Layout from '../../components/Layout'
import Title from '../../components/Title/Title'
import EachBlog from './EachBlog'

const Blog = (props) => {
    return (
        <Layout>
            <Title title='Blog Posts' />
            <div className='container'>
                <div className='row'>
                    <EachBlog />
                    <EachBlog />
                    <EachBlog />
                    <EachBlog />
                </div>
            </div>
            <Link to='/blog/new'>
                <FloatingBtn text='+' />
            </Link>
        </Layout>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
