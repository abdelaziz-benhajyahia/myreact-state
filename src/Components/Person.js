import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props)
        this.person = {
            fullName: "Abdelaziz",
            bio: "This is Abdelaziz BIO",
            profession: "This is Abdelaziz profession",
            imgSrc: "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
         }
         this.state= {count: 0}
    }

//  Clock Function
    componentDidMount(){
        setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count +  1
            }))
        }, 1000)
    }

// Clock back to 0
    componentWillUnmount(){
        clearInterval(this.state)
    }

    render() {
        return (
        <div>
        <h3>Counter: {this.state.count}</h3>
        <img src={this.person.imgSrc} alt='PersonPic' />
        <h2>{this.person.fullName}</h2>
        <h2>{this.person.bio}</h2>
        <h2>{this.person.profession}</h2>
        </div>
        )
    }
}
