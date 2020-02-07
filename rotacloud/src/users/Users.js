import React from 'react';

class Users extends React.Component {

    render() {
        const { users } = this.props;
        console.log(users)
        return (
            users.map(user => {
                console.log(user.roles)
                return (
                <div key={user.id}>
                     <h2>{user.name}</h2>
                 </div>

                )
            })
        )
    }
}

export default Users;