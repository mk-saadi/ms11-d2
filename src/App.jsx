import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
    const [users, setUsers] = useState([]);

    const handleAddUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };

        console.log(user);

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    alert("user inserted successfully");
                    form.reset();
                }
            });
    };

    return (
        <>
            <h1>crud server boiiii</h1>
            <form onSubmit={handleAddUser}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                />
                <br />
                <input
                    type="submit"
                    value="Add User"
                />
            </form>
            <br />
            <br />
            <br />
            <Link to="/users">
                <button>users</button>
            </Link>
        </>
    );
}

export default App;
