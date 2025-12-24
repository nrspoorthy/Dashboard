import { useState } from "react";
import { useUsers } from "./context/UserContext";

export default function UserForm({ closeForm }) {
  const { users, setUsers } = useUsers();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddUser = () => {
    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      company: { name: "New Company" },
      address: { city: "N/A", geo: { lat: "0", lng: "0" } },
    };

    setUsers([...users, newUser]);

    setName("");
    setEmail("");
    setPhone("");
    closeForm();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md">
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Add New Member
        </h3>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={closeForm}
            className="w-full border rounded-lg py-3 text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            onClick={handleAddUser}
            className="w-full bg-blue-600 text-white rounded-lg py-3 text-sm sm:text-base hover:bg-blue-700 transition"
          >
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
}
