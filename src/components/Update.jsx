import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };

        console.log(updatedUser);

        fetch(`http://localhost:3000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("user updated successfully");
                }
            });
    };

    return (
        <div>
            <h2>Update information of {loadedUser.name}</h2>
            <h3>Email: {loadedUser.email}</h3>

            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    defaultValue={loadedUser?.name}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    defaultValue={loadedUser?.email}
                />
                <br />
                <input
                    type="submit"
                    value="U"
                    title="update"
                />
            </form>
        </div>
    );
};

export default Update;
