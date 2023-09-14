import React from 'react';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import userImg from "../../../../../assets/user.png"

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

    return (
        <section className="text-center w-full h-full">
            {/* Navigation bar */}
            <nav className="text-center p-4 ">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-semibold">User Dashboard</h1>
                </div>
            </nav>

            {/* Content */}
            <div className="container mx-auto mt-8">
                <div className="bg-white/20 backdrop-blur-xl p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 ">All Users</h2>
                    <div className="overflow-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="">
                                    <th className="px-4 py-2">userID</th>
                                    <th className="px-4 py-2">Image</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, idx) => (
                                    <tr key={user._id} className="hover:bg-white/40">
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