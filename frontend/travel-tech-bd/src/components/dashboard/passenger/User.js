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
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { InputAdornment, OutlinedInput, TextField } from '@mui/material';
import ResponsiveDialog from './ResponsiveDialog';

function User() {
  const userTemplate = () => ({
    // name: "",
    record_date: "",
    client: "",
    service: "",
    ref_no: "",
    passenger: "",
    desc: "",
    travel_date: "",
    provider: "",
    status: "due",
    net_fare: 0,
    service_charge: 0,
    discount: 0,
    total_fare: 0
  })
  const [users, setUsers] = React.useState([
    userTemplate()
  ])
  const addUser = () => {
    setUsers([...users, userTemplate()])
    // console.log("hello")
  }
  const onchange = (e, index) => {
    const updatedUsers = users.map((user, i) => index === i ? Object.assign(user, { [e.target.name]: e.target.value }) : user
    );
    setUsers(updatedUsers)
  };
  const removeForm = (index, e) => {
    const removeUser = [...users];
    removeUser.splice(index, 1);
    setUsers(removeUser)
    e.preventDefault();

  };

  const onKeyPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey) {
       e.preventDefault();
       addUser();
   }
   
 };

  const colorThemeStatus = (xstatus) => {
    if (xstatus === "due") {
      return " bg-orange-200";
    } else if (xstatus === "partial_paid") {
      return " bg-yellow-100";
    } else if (xstatus === "paid") {
      return " bg-green-100";
    } else if (xstatus === "refund") {
      return " bg-purple-100";
    } else {
      return "";
    }
  }

  return (
    <div className='' onKeyDown={onKeyPress}>
      <button onClick={addUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add New User
      </button>

      <form>

      {users.map((user, index) => (
        <div className="w-screen m-5 max-w-xs flex-col" key={index}>
          <div className={"snap-center shadow-md w-[120vh] rounded px-8 pt-6 pb-8 mb-4" + colorThemeStatus(user.status)}>

            <div className='flex justify-between'>
              <div className="mb-4 w-[25%]">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Record Date
                </label>
                <input className="opacity-70 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="record_date" name='record_date' onChange={(e) => onchange(e, index)} value={user.record_date} autoFocus/>
              </div>
              <div className='' >
                {/* <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={paymentStatus}
                    onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </FormControl> */}
                <div className='flex justify-between' >
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Payment Status
                  </label>
                  <div className='ml-2' >
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <select name="status" className={"form-select font-bold   appearance-none opacity-70     block     arrowkey     px-5     py-2     text-sm     font-normal     text-gray-700     bg-white bg-clip-padding bg-no-repeat     border border-solid border-gray-300     rounded     transition     ease-in-out     m-0     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "} onChange={(e) => onchange(e, index)} >
                  <option selected={user.status === "due" ? true : false} className={"" + colorThemeStatus("due")} value="due">Due</option>
                  {/* <option selected={user.status === "partial_paid" ? true : false} className={colorThemeStatus("partial_paid")}  value="partial_paid">Partial Paid</option> */}
                  <option selected={user.status === "paid" ? true : false} className={colorThemeStatus("paid")} value="paid">Paid</option>
                  {/* <option selected={user.status === "refund" ? true : false} className={colorThemeStatus("refund")}  value="refund">Refund</option> */}
                </select>


              </div>
              <div className="mb-4 w-[25%] mr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Travel Date
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline opacity-70 " id="travel_date" type="date" placeholder="travel_date" name='travel_date' onChange={(e) => onchange(e, index)} value={user.travel_date} />
              </div>
            </div>

            <div>
              <div className='flex justify-between'>
                <div className="mb-4 w-full mr-5">
                  <TextField
                    required
                    className='opacity-70 bg-white w-[100%]'
                    id="outlined-required"
                    label="Client Name"
                    name='client'
                    value={user.client} onChange={(e) => onchange(e, index)}
                  />
                </div>
                <div className="mb-4 w-full">

                  <TextField
                    required
                    id="outlined-required"
                    label="Service"
                    className='opacity-70 bg-white w-[100%]'
                    value={user.service} name='service' onChange={(e) => onchange(e, index)}
                  />
                </div>
              </div>

              <div className='flex justify-between'>
                <div className="mb-4 w-full mr-5">
                  <TextField
                    required
                    id="outlined-required"
                    label="Reference No."
                    className='opacity-70 bg-white w-[100%]'
                    name='ref_no' onChange={(e) => onchange(e, index)} value={user.ref_no}
                  />
                </div>
                <div className="mb-4 w-full">
                  <TextField
                    required
                    id="outlined-required"
                    className='opacity-70 bg-white w-[100%]'
                    label="Passenger Name"
                    name='passenger' onChange={(e) => onchange(e, index)} value={user.passenger}
                  />
                </div>
              </div>
              <div className="mb-4 w-full mr-2">
                <TextField
                  required
                  fullWidth
                  className='opacity-70 bg-white w-[100%]'
                  id="outlined-required"
                  label="Description"
                  name='desc' onChange={(e) => onchange(e, index)} value={user.desc} />
              </div>

              <div className='flex'>


                <div className="mb-4 w-full mr-2">
                  <TextField
                    required
                    className='opacity-70 bg-white w-[100%]'
                    id="outlined-required"
                    label="Provider"
                    name='provider' onChange={(e) => onchange(e, index)} value={user.provider} />
                </div>
                <div className="mb-4 mr-2">
                  <FormControl >
                    <InputLabel htmlFor="outlined-adornment-amount">Net fare</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={user.net_fare}
                      name='net_fare'
                      className='opacity-70 bg-white w-[100%]'
                      onChange={(e) => onchange(e, index)}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Net Fare"
                      type='number'
                    />
                  </FormControl>
                </div>
              </div>




              <div className='flex justify-between' >

                <div className="mb-4">
                  <FormControl className="w-[100%]" >
                    <InputLabel fullWidth htmlFor="outlined-adornment-amount">Service</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={user.service_charge}
                      name='service_charge'
                      fullWidth
                      className='opacity-70 bg-white w-[100%]'
                      onChange={(e) => onchange(e, index)}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Amount"
                      type='number'
                    />
                  </FormControl>
                </div>
                <div className="mb-4">
                  <FormControl className="w-[100%]" >
                    <InputLabel htmlFor="outlined-adornment-amount">Discount</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={user.discount}
                      name='discount'
                      className='opacity-70 bg-white w-[100%]'
                      onChange={(e) => onchange(e, index)}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Amount"
                      type='number'
                    /> </FormControl>
                </div>
                <div className="mb-4">
                  <FormControl className="w-[100%]" >
                    <InputLabel htmlFor="outlined-adornment-amount">Total Fare</InputLabel>
                    <OutlinedInput
                      readOnly
                      id="outlined-adornment-amount"
                      value={user.total_fare}
                      name='total_fare'
                      className='opacity-70 bg-white w-[100%]'
                      onChange={(e) => onchange(e, index)}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      label="Amount"
                      type='number'
                    /> </FormControl>
                </div>
              </div>
              {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  status
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" type="text" placeholder="status option" name='status' onChange={(e) => onchange(e, index)} value={user.status} />
              </div> */}

            </div>
            <div className="flex items-center justify-between">
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button' onClick={(e) => removeForm(index, e)} >Delete</button>
            </div>

          </div>

        </div>
      ))}
      <div className='flex'>
        <ResponsiveDialog users={users} />
        <button className={users.length > 0 ? "m-5 bg-slate-300 hover:bg-slate-500 mx-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" : "hidden"} type="button">
          Cancel
        </button>

      </div>
      </form>

    </div>
  )
}

export default User