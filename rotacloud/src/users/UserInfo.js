import React from 'react'

export default function UserInfo(props) {
    const { name, id, roles } = props.user;
    return (
         <tr>
            <td>{id}</td>
            <td><input type="text" value={name} onChange={() => {}}/></td>
            <td>
                {/* if the user has roles then display the roles (map over the roles array and display each one as requested), otherwise don't show anything */}
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
