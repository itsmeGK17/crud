import React from "react";
import { useSelector } from "react-redux"

const UserList = () => {
    const users = useSelector((state) => state.users);

    return (
        <div className="container">
            <h1>Redux CRUD</h1>

            <div>
                <button className="btn btn-primary">Add user</button>
            </div>

            <div >
                <table className="table-stipend" >
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(({ id, name, email, age, city }, i) => (
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{age}</td>
                                <td>{city}</td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
                                    <button className="btn btn-info">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default UserList