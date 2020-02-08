import React from 'react'

export function RolesNameCol(props) {
    // console.log(props)
    const { name, id, colour, users } = props.role;
    var style = {
        color: colour,
      };
    return (
        <div>
            <tr>
		        <td>{id}</td>
		        <td><input type="text" value={name} style={style}/></td>
                {users.map(user => {
                    return (
                        <td>{user.name}</td>
                    )
                })}
	        </tr>
        </div>
    )
}

const RoleInput = (props) => {
    const { colour, name } = props
    return (
        <div color='blue'>{name}</div>
    // <div class="tag" backgroundColour="'#6798d0'">{roles}</div>
    )
}