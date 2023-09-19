import React from 'react';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import userImg from "../../../../../assets/1.png"
import MeetingPng from "../../../../../assets/icons/onlineMeeting.png"
import TotalUser from "../../../../../assets/icons/user.png"
import ActiveUser from "../../../../../assets/icons/sync.png"
import QualityMeeting from "../../../../../assets/icons/improvement.png"
import Swal from 'sweetalert2';

const UserManage = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            axiosSecure
                .get("https://galaxy-meeting.onrender.com/all-users")
                .then((res) => {
                    return res.data;
                }),
    });

    const handleRole = (email, role) => {
        fetch(
            `https://galaxy-meeting.onrender.com/users/role?email=${email}&role=${role}`,
            {
                method: "PATCH",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: 'Role changed successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <section className="text-center w-full h-full pb-12 px-4 lg:px-36">
            {/* Navigation bar */}
            <nav className="text-center p-4 ">
                <div className="container mx-auto">
                    <h1 className="text-4xl lg:text-6xl text-center font-semibold text-white">User Dashboard</h1>
                </div>
            </nav>

            {/* Content */}

            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-16 justify-center items-center px-10 py-10 lg:py-20'>
                <div className='bg-white px-8 py-12 mb-8 rounded-md shadow-md'>
                    <div className='grid grid-cols-2 '>
                        <div>
                            <h2 className='font-bold text-3xl mb-4'>100+</h2>
                            <p className='font-semibold text-lg'>Total Meetings</p>
                        </div>
                        <div className='w-16 ml-4'>
                            <img src={MeetingPng} alt="" />
                        </div>
                        <p className='col-span-2 font-semibold mt-4 text-green-500'>25.36% Since last month</p>
                    </div>
                </div>
                <div className='bg-white px-8 py-12 mb-8 rounded-md shadow-md'>
                    <div className='grid grid-cols-2 '>
                        <div>
                            <h2 className='font-bold text-3xl mb-4'>825</h2>
                            <p className='font-semibold text-lg'>Total Users</p>
                        </div>
                        <div className='w-16 ml-4'>
                            <img src={TotalUser} alt="" />
                        </div>
                        <p className='col-span-2 font-semibold mt-4 text-green-500'>25.36% Since last month</p>
                    </div>
                </div>
                <div className='bg-white px-8 py-12 mb-8 rounded-md shadow-md'>
                    <div className='grid grid-cols-2 '>
                        <div>
                            <h2 className='font-bold text-3xl mb-4'>25+</h2>
                            <p className='font-semibold text-lg'>Active Meetings</p>
                        </div>
                        <div className='w-16 ml-4'>
                            <img src={ActiveUser} alt="" />
                        </div>
                        <p className='col-span-2 font-semibold mt-4 text-green-500'>25.36% Since last month</p>
                    </div>
                </div>
                <div className='bg-white px-8 py-12 mb-8 rounded-md shadow-md'>
                    <div className='grid grid-cols-2 '>
                        <div>
                            <h2 className='font-bold text-3xl mb-4'>98%</h2>
                            <p className='font-semibold text-lg'>Good Meetings</p>
                        </div>
                        <div className='w-16 ml-4'>
                            <img src={QualityMeeting} alt="" />
                        </div>
                        <p className='col-span-2 font-semibold mt-4 text-green-500'>10% Since last month</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-8">
                <div className="bg-white/20 p-8 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-semibold mb-6 text-white">All Users</h2>
                    <div className="overflow-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="">
                                    <th className="px-4 py-2">userID</th>
                                    <th className="px-4 py-2">Image</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Current Role</th>
                                    <th className="px-4 py-2">Change Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, idx) => (
                                    <tr key={user._id} className="rounded-lg hover:bg-white/30">
                                        <td className="px-4 py-2">{idx}</td>
                                        <td className="px-4 py-2">
                                            <img
                                                src={` ${user.photo ? user.photo : userImg}`}
                                                alt={`Avatar`}
                                                className="h-10 w-10 rounded-full"
                                            />
                                        </td>
                                        <td className="px-4 py-2">{` ${user.username ? user.username : user.name}`}</td>
                                        <td className="px-4 py-2">{user.email}</td>
                                        <td className="px-4 py-2 capitalize">{user.role}</td>
                                        <td className="py-4 px-6">
                                            <button
                                                className={` py-2 px-4 rounded ${user.role === "admin"
                                                    ? " bg-gray-600 hover:bg-gray-400 text-gray-500"
                                                    : "bg-[#1D2E42] hover:bg-green-500 text-white"
                                                    }`}
                                                onClick={() => handleRole(user.email, "admin")}
                                            >
                                                Admin
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserManage;