import React from 'react'
import Header from '../../header/Header'
import Post from '../../posts/Post'
import SideBar from '../../SideBar/SideBar'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="home">
            <Post/>
            <SideBar/>
            </div>
        </div>
    )
}

export default Home
