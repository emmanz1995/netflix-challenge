import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'

function HomeScreen() {
    return (
        <div className="home-screen">
            <Nav />

            {/* Banner */}
            <Banner />

            {/* Row */}
        </div>
    )
}

export default HomeScreen