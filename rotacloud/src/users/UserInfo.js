import React from 'react'

export default function UserInfo(props) {
    // const {user} = props
    const { name, id, roles } = props.user;
    return (
         <tr>
            <td>{id}</td>
            <td><input type="text" value={name} onChange={() => {}}/></td>
            <td>
                {roles ? (
                  roles.map((role, idx) => {
                      const style = {
                          backgroundColor: role.roleColor,
                      }
                    return (
                        <div className="tag" key={idx} style={style}>
                            {role.roleName} 
                        </div>
                    )
                  })) : (<div> </div>)
                }
            </td>
        </tr>
    )
}
