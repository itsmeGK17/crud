import React, { useEffect, useState } from "react";
import { TextField, Button, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";
// import { blockInvalidChar } from "../App";
// import { blockInvalidChar } from './../App';

const TableForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
    gender: ""


  });
  const [allData, setAllData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
    gender: ""

  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setError({
      ...error,
      [name]: "",
    });
    errorHandler();
  };

  useEffect(() => {
    const getlocalstorage = JSON.parse(localStorage.getItem("listkey")) || []
    setAllData(getlocalstorage);
  }, []);

const blockInvalidChar = (e) => {
  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
}
  const handleSubmit = (e) => {
    e.preventDefault()

    const eregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setError(eregex)
    let regex = /^[a-zA-Z0-9]*$/
    setError(regex)


    let isValid = errorHandler();

    if (!isValid) {
      return;
    }
    if (editIndex === null) {

      const updatedData = [...allData, formData]
      setAllData(updatedData);

      localStorage.setItem("listkey", JSON.stringify(updatedData));
      toast.success("User Add Successfully", {
        position: "top-center",
        theme: "dark",
      })
    } else {
      const updatedData = [...allData];
      updatedData[editIndex] = formData;
      setAllData(updatedData);
      setEditIndex(null);

      toast.success("User Updated Successfully", {
        position: "top-center",
        theme: "colored",
        autoClose: 1500,
      })

      localStorage.setItem("listkey", JSON.stringify(updatedData));
      setFormData(updatedData);
    }
    setFormData({
      name: "",
      email: "",
      age: "",
      city: "",
      gender: ""
    });
  };



  const handleEdit = (index) => {
    const edituser = allData.find((element, id) => id === index);
    // console.log("2", edituser)
    setFormData(edituser);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const deleteData = allData.filter((element, id) => id !== index);
    setAllData(deleteData);
    toast.success("User Removed ", {
      position: "center",
      theme: "dark",
      autoClose: 1500,
    })
    localStorage.setItem("listkey", JSON.stringify(deleteData));
    setFormData(deleteData);
  };

  // const handleSave = () => {
  //   const saveData = allData.map((element,id) => element.id === id ? formData : element)
  //   setAllData(saveData)
  //   setEditIndex(null);

  // }

  const handleCancel = () => {
    setEditIndex(null);

    setFormData({
      name: "",
      email: "",
      age: "",
      city: "",
    });
    toast.success("User Not Updated", {
      position: "top-center",
      theme: "dark",
    })
  };

  const errorHandler = () => {

    if (!formData.name) {
      setError({ name: "Please Enter name" });
      return false;
    }
    if (!formData.email) {
      setError({ email: "Please Enter Email" });
      return false;
    }
    if (!formData.age) {
      setError({ age: "Please Enter Age" });
      return false;
    }
    if (!formData.city) {
      setError({ city: "Please Enter City" });
      return false;
    }
    if (!formData.gender) {
      setError({ gender: "Please Enter Gender" });
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="container mt-5">
        <h4 className="main">
          {editIndex === null ? "User form" : "Upadate User"}
        </h4>

        <form onSubmit={handleSubmit}>
          <TextField
            className="input"
            style={{ width: "300px", padding: "10px" }}
            type="text"
            variant="standard"
            value={formData.name}
            label="Name"
            name="name"
            placeholder="Enter Name"
            onChange={handleInput}
            error={!error.name}
            helperText={error.name}
          />


          <TextField
            style={{ width: "300px", padding: "10px" }}
            type="email"
            variant="standard"
            value={formData?.email}
            label="Email"
            name="email"
            placeholder="Enter email"
            onChange={handleInput}
            error={!error.email}
            helperText={error.email}
          />

          <TextField
            style={{ width: "300px", padding: "10px" }}
            type="number"
            variant="standard"
            value={formData?.age}
            label="Age"
            name="age"
            onKeyDown={blockInvalidChar}
            inputProps={{ min: 0, max: 3 }}
            placeholder="Enter age"
            onChange={handleInput}
            error={!error.age}
            helperText={error.age}
          />

          <TextField
            style={{ width: "300px", padding: "10px" }}
            type="text"
            variant="standard"
            value={formData?.city}
            label="City"
            name="city"
            placeholder="Enter City"
            onChange={handleInput}
            error={!error.city}
            helperText={error.city}
          />
          <FormControl >
            <FormControlLabel>Gender:</FormControlLabel>
            <RadioGroup
              row
              label="Gender"
              name='gender'
              value={formData.gender}
              onChange={handleInput}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <button type="submit" className="btn btn-primary">
            {editIndex === null ? "Submit" : "Update"}
          </button>
        </form>
      </div>

      <TableContainer component={Paper} sx={{ maxWidth: 900, margin: "auto", marginTop: 5 }}>
        <Table aria-label="customized table">
          <TableHead >
            <TableRow className="table-dark">
              <TableCell >ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allData.map((element, index) => (
              <TableRow key={element.index}>
                <TableCell align="center" scope="row">{index + 1}</TableCell>
                <TableCell align="center">{element.name}</TableCell>
                <TableCell align="center">{element.email}</TableCell>
                <TableCell align="center">{element.age}</TableCell>
                <TableCell align="center">{element.city}</TableCell>
                <TableCell align="center">{element.gender}</TableCell>
                <TableCell align="center">
                  {editIndex !== null ? (
                    <>
                      {/* <Button onClick={handleSave}>
                        <SaveIcon />
                      </Button> */}

                      <Button onClick={handleCancel}>
                        <CancelIcon />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => handleEdit(index)}>
                        <EditIcon />
                      </Button>
                      <Button onClick={() => handleDelete(index)}>
                        <DeleteIcon />
                      </Button>
                    </>
                  )}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ToastContainer
        position="top-center"

      />
      {/* 
      <div className="mt-5">
        <table className="table table-striped table-bordered" style={{maxWidth:"900px" , margin:"auto"}}>
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allData?.map((element, index) => (
              <tr key={index}>
                <td scope="row">{index + 1}</td>
                <td  scope="row">{element.name}</td>
                <td  scope="row">{element?.email}</td>
                <td  scope="row">{element?.age}</td>
                <td  scope="row">{element?.city}</td>
                <td>
                  {editIndex !== null ? (
                    <>
                      <Button onClick={handleCancel}>
                        <CancelIcon />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => handleEdit(index)}>
                        <EditIcon />
                      </Button>
                      <Button onClick={() => handleDelete(index)}>
                        <DeleteIcon />
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
};

export default TableForm;
