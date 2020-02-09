import React from 'react'

export default function RolesInfo(props) {
    const { name, id, colour, users } = props.role;
    var style = {
      color: colour,
    };

  return (
        <tr>
          <td>{id}</td>
          <td><input type="text" value={name} style={style} onChange={() => {}}/></td>
          <td>
            {users.map(user => {
                  return (
                        <div className="tag" key={user.id}>
                        {user.name}
                        </div>
                  )
              })}
            </td>
      </tr>
  )
}
