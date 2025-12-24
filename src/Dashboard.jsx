import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import UserForm from "./UserForm";
import { useUsers } from "./context/UserContext";

export default function Dashboard() {
  const { users, setUsers } = useUsers();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif">
          User Dashboard
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border rounded-lg w-full sm:w-64"
          />

          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
          >
            + Add User
          </button>
        </div>
      </div>

      {showForm && <UserForm closeForm={() => setShowForm(false)} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.length === 0 ? (
          <p className="text-gray-500">No users found</p>
        ) : (
          filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </div>
    </div>
  );
}
