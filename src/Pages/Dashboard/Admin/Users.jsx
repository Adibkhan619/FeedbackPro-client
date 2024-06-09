import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { HiTrash } from "react-icons/hi";
import {  FaAward,  FaClipboardList, } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from "react-helmet";
AOS.init();


const Users = () => {
    const [role, setRole] = useState(false);
    // const [filterUser, setFilterUser] = useState(users)
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    title: `${user.displayName || user.name} is an Admin Now!`,
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `,
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `,
                    },
                });
            }
        });
    };

    const handleMakeSurveyor = (user) => {
        axiosSecure.patch(`/users/surveyor/${user._id}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    title: `${
                        user.displayName || user.name
                    } is a Surveyor Now!`,
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `,
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `,
                    },
                });
            }
        });
    };

    const filteredUsers = users.filter((user) => user.role == role);

    const handleRole = (e) => {
        setRole(e.target.value);
        console.log(role);
    };

    return (
        <div>
            <div  data-aos="fade-up" data-aos-duration="1500" className=" mx-5 p-5">
            <Helmet>
                <title>Feedback Pro | Dashboard</title>
            </Helmet>
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold  my-5 ">
                        Total Users: {users.length}
                    </h1>
                    <div className="flex items-center gap-5">
                        <p className="text-2xl font-bold">Sort by Category</p>
                        <select
                        onChange={handleRole}
                        className="select select-bordered w-full max-w-xs"
                    >
                        <option value="">All</option>
                        <option value="admin">Admin</option>
                        <option value="surveyor">Surveyor</option>
                        <option value="user">User</option>
                        <option value="pro-user">Pro User</option>
                    </select>
                    </div>
                    
                </div>

                <div className="overflow-x-auto ">
                    <table className="table ">
                        {/* head */}
                        <thead className="rounded-xl ">
                            <tr className="rounded-xl">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {!role
                                ? users.map((user, idx) => (
                                      <tr key={user._id}>
                                          <th>{idx + 1}</th>
                                          <td>{user.name}</td>
                                          <td>{user.email}</td>
                                          <td>{user.role}</td>

                                          <td>
                                              {user.role === "surveyor" ||
                                              user.role === "admin" ? (
                                                  " "
                                              ) : (
                                                  <button
                                                      onClick={() =>
                                                          handleMakeSurveyor(
                                                              user
                                                          )
                                                      }
                                                      className="btn bg-base-200"
                                                  >
                                                      {" "}
                                                      Make Surveyor
                                                      <FaClipboardList className="text-xl  " />
                                                  </button>
                                              )}
                                          </td>
                                          <td>
                                              {user.role === "admin" ? (
                                                  " "
                                              ) : (
                                                  <button
                                                      onClick={() =>
                                                          handleMakeAdmin(user)
                                                      }
                                                      className="btn  text-black bg-sky-200"
                                                  >
                                                      {" "}
                                                      Make Admin
                                                      <FaAward className="text-xl  " />
                                                  </button>
                                              )}
                                          </td>
                                      </tr>
                                  ))
                                : filteredUsers.map((user, idx) => (
                                      <tr key={user._id}>
                                          <th>{idx + 1}</th>
                                          <td>{user.name}</td>
                                          <td>{user.email}</td>
                                          <td>{user.role}</td>

                                          <td>
                                              {user.role === "surveyor" ||
                                              user.role === "admin" ? (
                                                  " "
                                              ) : (
                                                  <button
                                                      onClick={() =>
                                                          handleMakeSurveyor(
                                                              user
                                                          )
                                                      }
                                                      className="btn bg-base-200"
                                                  >
                                                      {" "}
                                                      Make Surveyor
                                                      <FaClipboardList className="text-xl  " />
                                                  </button>
                                              )}
                                          </td>
                                          <td>
                                              {user.role === "admin" ? (
                                                  " "
                                              ) : (
                                                  <button
                                                      onClick={() =>
                                                          handleMakeAdmin(user)
                                                      }
                                                      className="btn text-black bg-sky-200 "
                                                  >
                                                      {" "}
                                                      Make Admin
                                                      <FaAward className="text-xl text-base-300 " />
                                                  </button>
                                              )}
                                          </td>
                                      </tr>
                                  ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
