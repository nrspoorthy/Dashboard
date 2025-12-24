import { useParams } from "react-router-dom";
import { useUsers } from "./context/UserContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const avatars = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/18.jpg",
];

const headerColors = [
  "bg-teal-500",
  "bg-sky-500",
  "bg-indigo-500",
  "bg-orange-400",
  "bg-emerald-500",
];

export default function UserDetails() {
  const { id } = useParams();
  const { users, setUsers } = useUsers();
  const [loading, setLoading] = useState(true);

  const avatar = avatars[id % avatars.length];
  const headerColor = headerColors[id % headerColors.length];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading Details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="max-w-lg mx-auto">
        <Link
          to="/"
          className="inline-block mb-6 text-sm font-medium text-sky-600 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className={`${headerColor} h-32 flex justify-center items-end`}>
            <img
              src={avatar}
              alt={users.name}
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg -mb-14 object-cover"
            />
          </div>

          <div className="pt-16 pb-8 px-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              {users.name}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              {users.company?.name}
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <p className="break-all">
                Email: {users.email}
              </p>

              <p>
                Phone: {users.phone}
              </p>

              <p>
                <span className="font-medium text-gray-800">City:</span>{" "}
                {users.address?.city}
              </p>

              <p>
                <span className="font-medium text-gray-800">Geo:</span>{" "}
                {users.address?.geo?.lat}, {users.address?.geo?.lng}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
