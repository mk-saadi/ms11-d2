import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const deleteUsers = (_id) => {
        console.log(_id);
        fetch(`http://localhost:3000/users/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("Deleted successfully");

                    const remaining = users.filter((user) => user._id !== _id);
                    setUsers(remaining);
                }
            });
    };

    return (
        <div>
            <h2>users: {users.length}</h2>

            <div>
                {users.map((user) => (
                    <p
                        key={user._id}
                        style={{
                            backgroundColor: "#211025",
                            padding: "5px 10px",
                            textAlign: "left",
                        }}
                    >
                        <span
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "10px",
                            }}
                        >
                            {user._id}
                            <br />
                            {user.name} : {user.email}
                            {"   "}
                            <span>
                                <Link
                                    to={`/update/${user._id}`}
                                    style={{ padding: "0px 5px" }}
                                >
                                    <button title="update">U</button>
                                </Link>
                                <button
                                    onClick={() => deleteUsers(user._id)}
                                    title="delete"
                                >
                                    X
                                </button>
                            </span>
                        </span>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Users;
