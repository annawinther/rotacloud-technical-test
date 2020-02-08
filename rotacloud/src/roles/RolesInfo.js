import React from 'react'
import {RolesNameCol} from './RolesNameCol';

export default function RolesInfo(props) {
    const {role} = props
    // console.log('role', role)
    return (
      <div>
         <RolesNameCol role={role}/>
      </div>
    )
}
