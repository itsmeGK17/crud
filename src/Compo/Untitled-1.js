// import React, { useEffect, useState } from "react";
// import { TextField, Button } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const TableForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     city: "",
//   });
//   const [allData, setAllData] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("listkey")) || [];
//     setAllData(storedData);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("listkey", JSON.stringify(allData));
//   }, [allData]);

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editIndex === null) {
//       setAllData([...allData, formData]);
//     } else {
//       const updatedData = [...allData];
//       updatedData[editIndex] = formData;
//       setAllData(updatedData);
//       setEditIndex(null);
//     }
//     setFormData({
//       name: "",
//       email: "",
//       age: "",
//       city: "",
//     });
//   };

//   const handleEdit = (index) => {
//     const edituser = allData.find((element, id) => id === index);
//     setFormData(edituser);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const deleteData = allData.filter((element, id) => id !== index);
//     setAllData(deleteData);
//   };

//   return (
//     <>
//       <div className="container mt-5">
//         <h4 className="text-center">User form</h4>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             style={{ width: "300px", padding: "10px" }}
//             type="text"
//             variant="standard"
//             value={formData.name}
//             label="Name"
//             name="name"
//             placeholder="Enter Name"
//             onChange={handleInput}
//             required
//           />
//           {/* Other TextFields */}
//           <button type="submit" className="btn btn-primary">
//             {editIndex === null ? "Submit" : "Update"}
//           </button>
//         </form>
//       </div>
//       <div className="mt-5">
//         <table className="table table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//               <th>City</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allData?.map((element, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{element.name}</td>
//                 {/* Other td elements */}
//                 <td>
//                   <Button onClick={() => handleEdit(index)}>
//                     <EditIcon />
//                   </Button>
//                   <Button onClick={() => handleDelete(index)}>
//                     <DeleteIcon />
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default TableForm;
