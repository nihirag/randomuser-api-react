import React, { Component } from 'react'
import Person from './Person'
export default class PersonList extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }


    componentDidMount() {

        fetch(`https://randomuser.me/api/?results=50`)
            .then(results => {
                return results.json();
            })
            .then(data => {
                const users = data.results
                const userList = []

                users.forEach(user => {
                    let newUser = {
                        image: user.picture.large,
                        title: user.name.title,
                        name: user.name.first + " " + user.name.last,
                        email: user.email
                    }
                    userList.push(newUser)
                })
                this.setState({
                    users: userList
                })

            })

    }
    render() {
        return (
            <div className='person-list'>
                {this.state.users.map(user => <Person image={user.image} title={user.title} name={user.name} email={user.email} />)}
            </div>
        )
    }
}
