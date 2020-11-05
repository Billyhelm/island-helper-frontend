import React, { Component } from 'react'
import Navbar from './Navbar'
import DisplayContainer from './DisplayContainer'

const villagersURL = 'http://localhost:3000/villagers'
const fishURL = 'http://localhost:3000/fish'
const bugsURL = 'http://localhost:3000/bugs'

class MainContainer extends Component{

    state = {
        villagers: [],
        fish: [],
        bugs: []
      }
    
    componentDidMount(){
        fetch(villagersURL)
        .then(res => res.json())
        .then(villagers => {
            this.setState({
                villagers
            })
        })
        fetch(fishURL)
        .then(res => res.json())
        .then(fish => {
            this.setState({
                fish
            })
        })
        fetch(bugsURL)
        .then(res => res.json())
        .then(bugs => {
            this.setState({
                bugs
            })
        })
    }

    render () {
        return (
        <div className='section' >
            <Navbar />
            <DisplayContainer />
        </div>
    )
    }
    
}

export default MainContainer