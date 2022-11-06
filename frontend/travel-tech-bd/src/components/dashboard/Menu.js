import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    const [tabIndex, setTabIndex] = React.useState({
        show_passengers: false,
        show_reports: false,
        show_staff: false,
        show_db: false,
    })
    return (
        <div className='flex h-screen fixed'>
            <div className='min-w-[317px] bg-slate-500 h-screen mt-[-11px]'>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                <ul className='font-bold m-7 text-xl'>
                    <li>
                        <div className='flex justify-between m-3 items-center' onClick={() => setTabIndex({ ...tabIndex, show_passengers: !tabIndex.show_passengers })}>
                            <span>Records</span>
                            {tabIndex.show_passengers ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>}
                        </div>
                        {tabIndex.show_passengers ? <ul className='font-medium ml-5'>
                            <li className='hover:text-blue-500 cursor-pointer m-1'>Add Record</li>
                            <li className='hover:text-blue-500 cursor-pointer m-1'>List Record</li>
                            {/* <li className='hover:text-blue-500 cursor-pointer m-1'>Justify</li> */}
                        </ul> : null}
                    </li>
                    <li>
                        <div className='flex justify-between m-3 items-center' onClick={() => setTabIndex({ ...tabIndex, show_reports: !tabIndex.show_reports })}>
                            <span>Reports</span>
                            {tabIndex.show_reports ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>}
                        </div>
                        {tabIndex.show_reports ? <ul className='font-medium ml-5'>
                            <li className='hover:text-blue-500 cursor-pointer m-1'>Provider Reports</li>
                            <li className='hover:text-blue-500 cursor-pointer m-1'>Clients Reports</li>
                            <li className='hover:text-blue-500 cursor-pointer m-1'>Service Reports</li>
                        </ul> : null}
                    </li>
                    <li>
                        <div className='flex justify-between m-3 items-center' onClick={() => setTabIndex({ ...tabIndex, show_staff: !tabIndex.show_staff })}>
                            <span>Staff</span>
                            {tabIndex.show_staff ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>}
                        </div>
                        {tabIndex.show_staff ? <ul className='font-medium ml-5'>
                            <li className='hover:text-blue-500 cursor-pointer m-1'>Add Staff</li>
                            <li className='hover:text-blue-500 cursor-pointer m-1'>List Staff</li>
                            {/* <li className='hover:text-blue-500 cursor-pointer m-1'>Justify</li> */}
                        </ul> : null}
                    </li>
                    <li>
                        <div className='flex justify-between m-3 items-center' onClick={() => setTabIndex({ ...tabIndex, show_db: !tabIndex.show_db })}>
                            <span>DB</span>
                            {tabIndex.show_db ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>}
                        </div>
                        {tabIndex.show_db ? <ul className='font-medium ml-5'>
                            <li className='hover:text-blue-500 cursor-pointer m-1'>Passenger</li>
                            <li className='hover:text-blue-500 cursor-pointer m-1'>Clients</li>
                            <li className='hover:text-blue-500 cursor-pointer m-1'>Service Provider</li>
                        </ul> : null}
                    </li>
                </ul>
            </div>
            {/* <div className='bg-orange-400 relative' style={{marginLeft: "260px"}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> */}
        </div>
    )
}

export default Menu