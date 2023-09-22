
// import React, { useState, useEffect } from 'react';
// //import Sidebar from './Components/Sidebar/Sidebar';
// import MyTable from './Components/Users-Portal/Projectdetails/Project';
// import CreatePopup from './Components/Users-Portal/Popups/CreatePopup';
// import EditPopup from './Components/Users-Portal/Popups/EditPopup';
// //import FilterBar from './Components/Users-Portal/Filter/Filter';
// import axios from 'axios';
// import FilterComponent from './Components/Users-Portal/Filter/Filter';
// import SearchBarComponent from './Components/Users-Portal/Filter/Searchbar';
// import {  Button, Modal } from '@mui/material';
// //import './App.css';

// function Layout() {
//   const [data, setData] = useState([]); // Data from the backend
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [showCreatePopup, setShowCreatePopup] = useState(false);
//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const [isCreatePopupVisible, setCreatePopupVisible] = useState(false);
//   const [newRowData, setNewRowData] = useState(null);
//   const [rowData, setRowData] = useState([]);
//   // const [filteredData, setFilteredData] = useState([]);
//   const [techStackOptions, setTechStackOptions] = useState([]);
//   const [statusOptions, setStatusOptions] = useState([]);
//   const [techStackFilter, setTechStackFilter] = useState('');
//   const [statusFilter, setStatusFilter] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   // const [filters, setFilters] = useState({
//   //   projectName: '',
//   //   techStack: '',
//   //   status: '',
//   // });



//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     axios.get('http://localhost:8080/api/auth/fetchRows')
//       .then((response) => {
//         // Set the fetched data in the state
//         // console.log(response.data);
//         setRowData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);


//   const handleFilter = (techStack, status) => {
//     // Implement filtering logic based on techStack and status filters
//     // Update the filteredData state with the filtered results
//   };

//   const handleCancel = () => {
//     // Reset the filters and filteredData state
//   };

//   const handleSearch = (query) => {
//     // Implement searching logic based on the search query
//     // Update the filteredData state with the search results
//   };


//   const handleEditClick = (row) => {
//     setSelectedRow(row);
//     setShowEditPopup(true);
//   };



//   const handleCreateClick = () => {
//     setCreatePopupVisible(true);
//     // Reset the newRowData state (to start with empty fields)
//     setNewRowData({
//       projectName: '',
//       projectManagerName: '',
//       startTime: null,
//       endTime: null,
//       techStack: '',
//       status: null,
//     });
//   };

//   const handleClosePopup = () => {
//     // Hide the CreatePopup when closed
//     setCreatePopupVisible(false);
//   };

//   const handleSaveData = (data) => {
//     // Handle saving data to the database here (you can make an API call)
//     // Once saved, you can update the table or perform any necessary actions
//     console.log('Data to be saved:', data);
//     // For demonstration purposes, let's update the newRowData state
//     setNewRowData(data);
//   };

//   const handleCloseCreatePopup = () => {
//     setShowCreatePopup(false);
//   };

//   const handleCloseEditPopup = () => {
//     setShowEditPopup(false);
//     setSelectedRow(null);
//   };

//   const handleSaveCreatePopup = async (newRowData) => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/auth/createRow', newRowData);
//       // Check the response to ensure it contains the newly created data
//       console.log('Newly created data:', response.data);
//       // Handle the response and update your table accordingly
//       // For example, you can fetch updated data after creation and set it in the 'data' state.
//       const updatedData = await axios.get('http://localhost:8080/api/auth/fetchRows');
//       setData(updatedData.data);
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   const handleSaveEditPopup = async (editedRowData) => {
//     try {
//       // Make an HTTP PUT request to update the data on the backend
//       const response = await axios.put(
//         `http://localhost:8080/api/auth/projects/${editedRowData._id}`,
//         editedRowData
//       );
  
//       // Check if the update was successful
//       if (response.status === 200) {
//         // Update the 'data' state with the edited data
//         // Assuming 'data' is an array of rows, find the edited row and update it
//         const updatedData = data.map((row) =>
//           row._id === editedRowData._id ? editedRowData : row
//         );
  
//         // Set the updated data in the state
//         setData(updatedData);
  
//         // Close the edit popup
//         setShowEditPopup(false);
//       } else {
//         console.error('Failed to update data.');
//       }
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   };
  
//   // const handleFilterChange = (fieldName, value) => {
//   //   // Implement logic to update filter values
//   // };

//   // const handleFilterReset = () => {
//   //   // Implement logic to reset filters
//   // };

//   const handleDeleteClick = async (row) => {
//     try {
//       // Make an HTTP DELETE request to the delete API
//       await axios.delete(`http://localhost:8080/api/auth/delete/${row._id}`);
  
//       // Handle the successful deletion and update your table accordingly
//       // You can refresh the data or remove the deleted row from the state.
//       // For example, you can fetch updated data after deletion and set it in the 'data' state.
//       const updatedData = await axios.get('http://localhost:8080/api/auth/fetchRows');
//       setData(updatedData.data);
//     } catch (error) {
//       console.log('Error deleting data:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch tech stack options from the backend API
//     fetch('/api/auth/techStackOptions') // Replace with your actual API endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the tech stack options state with the fetched data
//         setTechStackOptions(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching tech stack options:', error);
//       });
//   }, []);
//   // Static data
//   const projectData = [
//     {
//       projectName: 'Project 1',
//       projectManagerName: 'Manager A',
//       startTime: '2023-01-01',
//       endTime: '2023-02-01',
//       techStack: 'Tech Stack A',
//       status: 'completed',
//     },
//     {
//       projectName: 'Project 2',
//       projectManagerName: 'Manager B',
//       startTime: '2023-02-15',
//       endTime: '2023-03-15',
//       techStack: 'Tech Stack B',
//       status: 'inprogress',
//     },
//     // Add more project objects as needed
//   ];
  
 

//   // Combine static data with dynamic data
//   //const combinedData = [...staticData, ...data];

//   return (
//     <div className="" style={{ padding: "20px 15px", display: "flex", flexDirection: "column", gap: "10px" }}>
//       <div
//         style={{
//           background: "#fff",
//           padding: "10px 5px",
//           borderRadius: "8px",
//           boxShadow: "1px 1px 16px #00000020",
//           display: "flex",
//           justifyContent: "space-between", // Aligns the button to the right
//           alignItems: "center", // Aligns items vertically in the center
//           gap: "5px", // Set the desired space between elements
//         }}
//       >
//         <FilterComponent
//           techStackOptions={techStackOptions}
//           statusOptions={statusOptions}
//           onFilter={handleFilter}
//           onCancel={handleCancel}
//         />
//         <SearchBarComponent onSearch={handleSearch} />
//         <Button variant='contained' onClick={() => { handleCreateClick() }}>
//           Create
//         </Button>
//       </div>


//       <MyTable
//         data={rowData}
//         onFilter={handleFilter} 
//         onCancel={handleCancel}
//         onSearch={handleSearch}
//         techStackOptions={techStackOptions} // Pass tech stack options as a prop
//         statusOptions={statusOptions}
//         // filters={filters}
//         onEditClick={handleEditClick}
//         onDeleteClick={handleDeleteClick} // Pass the delete handler to the Table component
//       />
//       {showCreatePopup && (
//         <CreatePopup onSave={handleSaveCreatePopup} onClose={handleCloseCreatePopup} />
//       )}
      

//       {showEditPopup && selectedRow && (
//               <Modal
//                   open={showEditPopup}
//                   onClose={() => handleCloseEditPopup}
//                   aria-labelledby="modal-modal-title"
//                   aria-describedby="modal-modal-description"
//               >
//                   <div style={{
//                       height: "100vh",
//                       width: "100vw",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center"
//                   }} >
//                       <EditPopup
//                           data={selectedRow}
//                           onSave={handleSaveEditPopup}
//                           onClose={handleCloseEditPopup}
//                       />
//                   </div>
//               </Modal>

//           )}


//           {isCreatePopupVisible && (
//               <Modal
//                   open={isCreatePopupVisible}
//                   onClose={() => handleClosePopup}
//                   aria-labelledby="modal-modal-title"
//                   aria-describedby="modal-modal-description"
//               >
//                   <div style={{
//                       height: "100vh",
//                       width: "100vw",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center"
//                   }} >
//                       <CreatePopup
//                           onSave={handleSaveData}
//                           onClose={handleClosePopup}
//                           initialData={newRowData}
//                       />
//                   </div>
//               </Modal>

//       )}
//     </div>
//   );
// }

// export default Layout;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterComponent from '../Components/Users-Portal/Filter/Filter';
import SearchBarComponent from '../Components/Users-Portal/Filter/Searchbar';
import { Button, Modal } from '@mui/material';
import MyTable from '../Components/Users-Portal/Projectdetails/Project';
import CreatePopup from '../Components/Users-Portal/Popups/CreatePopup';
import EditPopup from '../Components/Users-Portal/Popups/EditPopup';
//import ParentComponent from '../Components/Users-Portal/Services/Fil-sear';




function Layout() {
  const [data, setData] = useState([]); // Data from the backend
  const [selectedRow, setSelectedRow] = useState(null);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [isCreatePopupVisible, setCreatePopupVisible] = useState(false);
  const [newRowData, setNewRowData] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [techStackOptions, setTechStackOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [techStackFilter, setTechStackFilter] = useState('');
const [statusFilter, setStatusFilter] = useState('');
const [searchQuery, setSearchQuery] = useState('');

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/auth/fetchRows');
        setRowData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setShowEditPopup(true);
  };

  const handleCreateClick = () => {
    setCreatePopupVisible(true);
    setNewRowData({
      projectName: '',
      projectManagerName: '',
      startTime: null,
      endTime: null,
      techStack: '',
      status: null,
    });
  };

  const handleClosePopup = () => {
    setCreatePopupVisible(false);
  };

  const handleSaveData = (data) => {
    console.log('Data to be saved:', data);
    setNewRowData(data);
  };

  const handleCloseCreatePopup = () => {
    setShowCreatePopup(false);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
    setSelectedRow(null);
  };

  const handleSaveCreatePopup = async (newRowData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/createRow', newRowData);
      console.log('Newly created data:', response.data);

      const updatedData = await axios.get('http://localhost:8080/api/auth/fetchRows');
      setData(updatedData.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  const [tableData, setTableData] = useState(/* Initialize with your table data */);

  // Function to update the table data when data is edited
  const updateTableData = (editedData) => {
    // Find the index of the edited data in the tableData array
    const dataIndex = tableData.findIndex(item => item._id === editedData._id);
    
    // Create a new array with the updated data
    const updatedTableData = [...tableData];
    updatedTableData[dataIndex] = editedData;

    // Update the state with the updated data
    setTableData(updatedTableData);
  };




  const handleSaveEditPopup = async (editedRowData) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/auth/projects/${editedRowData._id}`,
        editedRowData
      );

      if (response.status === 200) {
        const updatedData = data.map((row) =>
          row._id === editedRowData._id ? editedRowData : row
        );

        setData(updatedData);
        setShowEditPopup(false);
      } else {
        console.error('Failed to update data.');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  useEffect(() => {
    const fetchTechStackOptions = async () => {
      try {
        const response = await fetch('/api/auth/techStackOptions');
        const data = await response.json();
        setTechStackOptions(data);
      } catch (error) {
        console.error('Error fetching tech stack options:', error);
      }
    };

    fetchTechStackOptions();
  }, []);


  const handleFilter = (techStack, status) => {
    setTechStackFilter(techStack);
    setStatusFilter(status);
  };
  
  const handleCancel = () => {
    setTechStackFilter('');
    setStatusFilter('');
  };
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  
  return (
    <div className="" style={{ padding: "20px 15px", display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          background: "#fff",
          padding: "10px 5px",
          borderRadius: "8px",
          boxShadow: "1px 1px 16px #00000020",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5px",
        }}
      >
            {/* <ParentComponent tableData={tableData} updateTableData={updateTableData} /> */}
              <FilterComponent
                  techStackOptions={techStackOptions}
                  statusOptions={statusOptions}
                  onFilter={(techStack, status) => {
                      // Implement filtering logic here
                  }}
                  onCancel={() => {
                      // Implement cancel logic here
                  }}
                  initialStatus="inprogress" // Set the initial status here
              />

        <SearchBarComponent
          onSearch={(query) => {
            // Implement search logic here
          }}
        />
        <Button variant='contained' onClick={handleCreateClick}>
          Create
        </Button>
      </div>

   <MyTable
        data={rowData}
        onFilter={(techStack, status) => {
          // Implement filtering logic here
        }}
        onCancel={() => {
          // Implement cancel logic here
        }}
        onSearch={(query) => {
          // Implement search logic here
        }}
        techStackOptions={techStackOptions}
        statusOptions={statusOptions}
        onEditClick={handleEditClick}
        onDeleteClick={async (row) => {
          try {
            await axios.delete(`http://localhost:8080/api/auth/delete/${row._id}`);
            const updatedData = await axios.get('http://localhost:8080/api/auth/fetchRows');
            setData(updatedData.data);
          } catch (error) {
            console.log('Error deleting data:', error);
          }
        }}
      />

      {showCreatePopup && (
        <CreatePopup onSave={handleSaveCreatePopup} onClose={handleCloseCreatePopup} />
      )}

      {showEditPopup && selectedRow && (
        <Modal
          open={showEditPopup}
          onClose={handleCloseEditPopup}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }} >
            <EditPopup
              data={selectedRow}
              onSave={handleSaveEditPopup}
              onClose={handleCloseEditPopup}
            />
          </div>
        </Modal>
      )}

      {isCreatePopupVisible && (
        <Modal
          open={isCreatePopupVisible}
          onClose={handleClosePopup}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }} >
            <CreatePopup
              onSave={handleSaveData}
              onClose={handleClosePopup}
              initialData={newRowData}
            />
          </div>
        </Modal>
      )}

      {/* Include the ParentComponent and pass tableData and updateTableData as props */}
  
    </div>
  );
}

export default Layout;
