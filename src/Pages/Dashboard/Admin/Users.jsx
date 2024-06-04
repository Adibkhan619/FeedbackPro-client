import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { HiTrash } from "react-icons/hi";
import {  FaRegIdBadge, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

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
            <div className="border mx-24 p-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl  my-5 ">
                        Total Users: {users.length}
                    </h1>
                    <select
                        onChange={handleRole}
                        className="select select-bordered w-full max-w-xs"
                    >
                        <option value="">All</option>
                        <option value="admin">Admin</option>
                        <option value="surveyor">Surveyor</option>
                        <option value="user">User</option>
                        <option value="proUser">Pro User</option>
                    </select>
                </div>

                <div className="overflow-x-auto ">
                    <table className="table ">
                        {/* head */}
                        <thead className="rounded-xl ">
                            <tr className="bg-orange-200 rounded-xl">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                                <th></th>
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
                                                      className="btn bg-orange-200"
                                                  >
                                                      {" "}
                                                      Make Surveyor
                                                      <FaUsers className="text-2xl text-white  " />
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
                                                      className="btn bg-orange-200"
                                                  >
                                                      {" "}
                                                      Make Admin
                                                      <FaRegIdBadge className="text-2xl text-white  " />
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
                                                      className="btn bg-orange-200"
                                                  >
                                                      {" "}
                                                      Make Surveyor
                                                      <FaUsers className="text-2xl text-white  " />
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
                                                      className="btn bg-orange-200"
                                                  >
                                                      {" "}
                                                      Make Admin
                                                      <FaRegIdBadge className="text-2xl text-white  " />
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
