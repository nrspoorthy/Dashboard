import { useEffect, useState } from "react";
import Slider from "react-slick";
import UserCard from "./UserCard";
import UserForm from "./UserForm";
import { useUsers } from "./context/UserContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import Success from "./Success";

export default function Dashboard() {
  const { users, setUsers } = useUsers();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
  }, [setUsers]);

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

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  arrows: true,

  
  slidesToShow: 4,
  slidesToScroll: 1,
  rows: 2,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        rows: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        rows: 2, 
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2, 
      },
    },
  ],
};


  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 mb-6"
        >
          + Add User
        </button>

        {showForm && (
          <UserForm
            closeForm={() => setShowForm(false)}
            onSuccess={() => {
              setShowForm(false);
              setShowSuccess(true);
            }}
          />
        )}

        {filteredUsers.length === 0 ? (
          <p className="text-gray-500">No users found</p>
        ) : (
          <Slider {...sliderSettings}>
            {filteredUsers.map((user) => (
              <div key={user.id} className="px-2 py-3">
                <UserCard user={user} />
              </div>
            ))}
          </Slider>
        )}

        {showSuccess && (
          <Success onClose={() => setShowSuccess(false)} />
        )}
      </div>
    </>
  );
}
