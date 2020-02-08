import React from 'react'

export function UserNameCol(props) {
    const { name, id, roles } = props.user;

    return (
        <div>
            <tr>
		        <td>{id}</td>
		        <td><input type="text" value={name}/></td>
		        <td>
			        <RoleInput roles={roles}/> 
		        </td>
	</tr>
        </div>
    )
}

const RoleInput = (props) => {
    const { roles } = props
    return (
    <div className="tag" backgroundColour="'#6798d0'">{roles}</div>
    )
}