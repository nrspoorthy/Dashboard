import { useParams, Link, useNavigate } from "react-router-dom";
import { useUsers } from "./context/UserContext";
import Navbar from "./Navbar";

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
  const navigate = useNavigate();
  const { users, setUsers } = useUsers();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-600">
        User not found
      </div>
    );
  }

  const avatar = avatars[id % avatars.length];
  const headerColor = headerColors[id % headerColors.length];



  return (
    <>
      <Navbar showSearch={false} />



      <div className="min-h-[calc(100vh-64px)] bg-gray-100 px-4 py-8">
        <div className="max-w-md mx-auto">
          <Link
            to="/"
            className="text-sky-600 text-sm hover:underline"
          >
            ← Back
          </Link>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-4">
            {/* Header */}
            <div
              className={`${headerColor} h-28 flex justify-center items-end`}
            >
              <img
                src={avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-md -mb-12"
              />
            </div>

            {/* Content */}
            <div className="pt-14 pb-6 px-6 text-center">
              <h2 className="text-lg sm:text-xl font-semibold">
                {user.name}
              </h2>
              <p className="text-gray-500 text-sm">
                {user.company?.name}
              </p>

              <div className="mt-5 space-y-2 text-sm text-gray-600 text-left">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {user.email}
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  {user.phone}
                </p>
                <p>
                  <span className="font-medium">City:</span>{" "}
                  {user.address?.city}
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
