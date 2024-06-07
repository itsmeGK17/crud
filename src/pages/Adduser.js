import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../toolkit/UserSlice"

const Adduser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState(null);

    const dispatch = useDispatch()


    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleAge = (e) => setAge(e.target.value);
    const handleCity = (e) => setCity(e.target.value);


    const usersData = useSelector((state) => state.users);
    const handleAddUser = () => {
        if (name && email && age && city) {
            dispatch(
                addUser({
                    id:usersData+1, 
                    name,
                    email,
                    age,
                    city
                })
            );

            setError(null);

        } else {
            setError("Fill in all fields");
        }

        setName("");
        setEmail("");
        setCity("")
        setAge("")
    };
    
    return (
        <div className="container">
                <h1>Add user</h1>
            <div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="enter name"
                        onChange={handleName}
                        value={name}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="enter email"
                        onChange={handleEmail}
                        value={email}
                    />
                    <input
                        type="number"
                        placeholder="enter age"
                        onChange={handleAge}
                        value={age}
                    />
                    <input
                        type="text"
                        placeholder="enter city"
                        onChange={handleCity}
                        value={city}
                    />
                    <button onClick={handleAddUser} className="btn btn-primary">Add user</button>
                </div>
            </div>
        </div>
    );
};

export default Adduser;
