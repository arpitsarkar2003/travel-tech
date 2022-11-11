// import React from 'react';
// import { Select } from 'antd';
// import { v4 as uuidv4 } from 'uuid';


// const RecordForm = ({obj, index, recordList, setRecordList, removeForm}) => {

//     // const [instance, setInstance] = React.useState({
//     //     record_date: "",
//     //     client: "",
//     //     service: "",
//     //     ref_no: "",
//     //     passenger: "",
//     //     desc: "",
//     //     travel_date: "",
//     //     provider: "",
//     //     status: "",
//     //     net_fare: 0,
//     //     service_charge: 0,
//     //     discount: 0,
//     //     total_fare: 0
//     // })



//     // React.useEffect(()=>{
//     //     addData(obj.id, instance);
//     // }, []);

//     return (
//     <div key={obj.id} className='border'>
//         {/* <div>
//             <label>Record Date: </label>
//             <input placeholder='DD/MM/YYYY' type='date' 
//             value={instance.data?.record_date} 
//             // onChange={(e) => console.log(e.target.value.toString()) }
//             onChange={(e) => setInstance({...instance, record_date: e.target.value.toString()})}
//             />
//             <button className='border' onClick={() => removeForm(obj.id)}>Remove</button>
//         </div> */}

//         <div>
//             <label>Client</label>
//             <input className='border' placeholder="Client Name" 
//             value={recordList[index].data?.client} onChange={(e) => setRecordList({...recordList[index], client: e.target.value})}
//             // value={instance?.client} 
//             />
//         </div>
//         {/* <div>
//             <label>Service</label>
//             <input className='border' placeholder="Service Name" value={instance?.service} onChange={(e) => setInstance({...instance, service: e.target.value})} />
//         </div>
//         <div>
//             <label>Ref no.</label>
//             <input className='border' placeholder="Reference No." value={instance?.ref_no} onChange={(e) => setInstance({...instance, ref_no: e.target.value})} />
//         </div>
//         <div>
//             <label>Passenger</label>
//             <input className='border' placeholder="Passenger Name" value={instance?.passenger} onChange={(e) => setInstance({...instance, passenger: e.target.value})}/>
//         </div>
//         <div>
//             <label>Description</label>
//             <input className='border' placeholder="description" value={instance?.desc} onChange={(e) => setInstance({...instance, desc: e.target.value})} />
//         </div>
//         <div>
//             <label>Travel Date:</label>
//             <input placeholder='DD/MM/YYYY' type='date' 
//             value={instance?.travel_date} 
//             // onChange={(e) => console.log(e.target.value.toString()) }
//             onChange={(e) => setInstance({...instance, travel_date: e.target.value.toString()})}
//              />
//         </div> */}
//         {/* <div>
//             <label>Provider</label>

//             <input className='border' placeholder="Provider Name" value={instance?.provider} onChange={(e) => setInstance({...instance, provider: e.target.value})}/>
//         </div>
//         <div>
//             <label>Status</label>
//             <input className='border' placeholder="" value={instance?.net_fare} onChange={(e) => setInstance({...instance, status: e.target.value})}/>
//         </div>


//         <div>
//             <label>Net Fare</label>
//             <input className='border' type="number" placeholder="" value={instance?.net_fare} onChange={(e) => setInstance({...instance, net_fare: e.target.value})} />
//         </div>
//         <div>
//             <label>Service Charge</label>
//             <input className='border' type="number" placeholder="" value={instance?.service_charge} onChange={(e) => setInstance({...instance, service_charge: e.target.value})}/>
//         </div>
//         <div>
//             <label>Discount</label>
//             <input className='border' type="number" placeholder="" value={instance?.discount} onChange={(e) => setInstance({...instance, discount: e.target.value})}/>
//         </div>
//         <div> */}
//             {/* <label>Total fare</label>
//             <input className='border' type="number" readOnly placeholder='' value={instance?.total_fare} 
//             // onChange={(e) => setInstance({...instance, total_fare: e.target.value})}
//             />
//         </div> */}
//     </div>
//     )
// }


// function User() {
//     const [recordList, setRecordList] = React.useState([{
//         id: uuidv4(),
//         data: {
//             record_date: "",
//             client: "",
//             service: "",
//             ref_no: "",
//             passenger: "",
//             desc: "",
//             travel_date: "",
//             provider: "",
//             status: "",
//             net_fare: 0,
//             service_charge: 0,
//             discount: 0,
//             total_fare: 0
//         }
//     }]);

//     React.useEffect((e) => {
//     }, [recordList]);

//     // const [backendList, setBackendList] = React.useState([]);

//     const addForm = () => {
//         setRecordList([...recordList, 
//             {
//                 id: uuidv4(),
//                 data: {
//                     record_date: "",
//                     client: "",
//                     service: "",
//                     ref_no: "",
//                     passenger: "",
//                     desc: "",
//                     travel_date: "",
//                     provider: "",
//                     status: "",
//                     net_fare: 0,
//                     service_charge: 0,
//                     discount: 0,
//                     total_fare: 0
//                 }
//             }
//         ])
//     }



//     const removeForm = (uuid) => {
//         setRecordList(recordList.filter((every) =>
//             every.id !== uuid));
//         // console.log(recordList.filter((every) =>
//         //     every.id !== uuid));
//     }

//     return (
//         <>
//         {/* <div className='flex w-full justify-center' > */}
//             {/* <button className='border px-5 py-2 ' onClick={() => addForm()}>Add New Client</button> */}
//             {/* <button onClick={() => setRecordList() }></button> */}
//         {/* </div> */}
//         {
//             recordList.map((each, index)=> (
//                 // record_form(each)
//                 <RecordForm obj={each} 
//                 index={index}
//                 recordList={recordList}
//                 setRecordList={setRecordList}
//                 removeForm={removeForm}/>
//             ))
//         }

//         </>
//     )
// }

// export default User











// import React from 'react'

// function User() {
//     const [inputFields, setInputFields] = React.useState([
//         { name: '', salary: '' }
//     ]);
//     const addFields = () => {
//         let newField = { name: '', salary: '' }

//         setInputFields([...inputFields, newField])
//     }
//     const submit = (e) => {
//         e.preventDefault();
//         console.log(inputFields)
//     }
//     const removeFields = (index) => {
//         let data = [...inputFields];
//         data.splice(index, 0)
//     setInputFields(data)
//     }
//     return (
//         <div> <form onSubmit={submit}>
//             {inputFields.map((input, index) => {
//                 return (
//                     <div key={index}>
//                         <input
//                             name='name'
//                             placeholder='Name'
//                         />
//                         <input
//                             name='salary'
//                             placeholder='Salary'
//                         />
//                         <button onClick={addFields} >Add More</button>
//                         <button onClick={submit}>Submit</button>
//                         <button onClick={() => removeFields(index)}>Remove</button>
//                     </div>

//                 )
//             })}
//         </form></div>
//     )
// }

// export default User




import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function User() {
  const userTemplate = {
    // name: "",
    email: "",
    servicephone: "",
    record_date: "",
    client: "",
    service: "",
    ref_no: "",
    passenger: "",
    desc: "",
    travel_date: "",
    provider: "",
    status: "",
    net_fare: 0,
    service_charge: 0,
    discount: 0,
    total_fare: 0
  }
  const [users, setUsers] = React.useState([
    userTemplate
  ])
  const addUser = () => {
    setUsers([...users, userTemplate])
    console.log("hello")
  }
  const onchange = (e, index) => {
    const updatedUsers = users.map((user, i) => index === i ? Object.assign(user, { [e.target.name]: e.target.value }) : user
    );
    setUsers(updatedUsers)
  };
  const removeForm = (index,e) => {
    const removeUser = [...users];
    removeUser.splice(index, 1);
    setUsers(removeUser)
    e.preventDefault();
    
  };
  const [paymentStatus, setPaymentStatus] = React.useState('');

  const handleChange = (event) => {
    setPaymentStatus(event.target.value);
  };

  return (
    <div className=''>
      <button onClick={addUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add New User
      </button>
      <button className="bg-blue-500 mx-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add User to List
      </button>

      {users.map((user, index) => (
        <div className="w-screen m-5 max-w-xs flex-col " key={index}>
          <form className="bg-white shadow-md w-[120vh] rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 w-[25%]">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Record Date
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="record_date" name='record_date' onChange={(e) => onchange(e, index)} value={user.record_date} />
            </div>


            <div>
              <div className='flex justify-between'>
                <div className="mb-4 w-full mr-5">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    client
                  </label>
                  <input className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="client name" name='client' value={user.client} onChange={(e) => onchange(e, index)} />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    service
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="service" value={user.service} name='service' onChange={(e) => onchange(e, index)} />
                </div>
              </div>




              <div className='flex justify-between'>
                <div className="mb-4 w-full mr-5">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    ref_no
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ref_no" type="text" placeholder="ref_no" name='ref_no' onChange={(e) => onchange(e, index)} value={user.ref_no} />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    passenger
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="passenger" type="text" placeholder="passenger name" name='passenger' onChange={(e) => onchange(e, index)} value={user.passenger} />
                </div>
              </div>
              <div className="mb-4 w-full mr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Description
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="enter desc" name='desc' onChange={(e) => onchange(e, index)} value={user.desc} />
              </div>

              <div className='flex justify-between'>

                <div className="mb-4 w-[25%] mr-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Travel Date
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline opacity-70 " id="travel_date" type="date" placeholder="travel_date" name='travel_date' onChange={(e) => onchange(e, index)} value={user.travel_date} />
                </div>
                <div className="mb-4 w-full mr-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    provider
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="provider" type="text" placeholder="provider name" name='provider' onChange={(e) => onchange(e, index)} value={user.provider} />
                </div>
              </div>




              <div className='flex justify-between' >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    net_fare
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="net_fare" type="number" placeholder="net_fare" name='net_fare' onChange={(e) => onchange(e, index)} value={user.net_fare} />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    service_charge
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service_charge" type="number" placeholder="service_charge" name='service_charge' onChange={(e) => onchange(e, index)} value={user.service_charge} />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    discount
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="discount" type="number" placeholder="discount" name='discount' onChange={(e) => onchange(e, index)} value={user.discount} />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    total_fare
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="total_fare" type="number" placeholder="total_fare" name='total_fare' onChange={(e) => onchange(e, index)} value={user.total_fare} />
                </div>
              </div>
              {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  status
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" type="text" placeholder="status option" name='status' onChange={(e) => onchange(e, index)} value={user.status} />
              </div> */}
              <div>
                <FormControl className='w-[25%]'>
                  <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={paymentStatus}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="flex items-center justify-between">

              <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={(e) => removeForm(index, e)} >Delete</button>
            </div>

          </form>

        </div>
      ))}
    </div>
  )
}

export default User