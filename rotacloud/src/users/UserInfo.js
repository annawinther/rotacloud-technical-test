import React from 'react'
import {UserNameCol} from './UserNameCol'

export default function UserInfo(props) {
    const {user} = props
    // console.log("user", user)
    return (
      <div>
          <UserNameCol user={user} />
      </div>
    )
}
