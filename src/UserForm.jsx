import { useState } from "react";
import { useUsers } from "./context/UserContext";

export default function UserForm({ closeForm, onSuccess }) {
  const { users, setUsers } = useUsers();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleAddUser = () => {
    if (!name || !email || !phone || !company || !city || !location) {
      setError("All fields are required");
      return;
    }

    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    if (!email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    if (phone.length !== 10) {
      setError("Phone number must be 10 digits");
      return;
    }

    setError("");

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      company: { name: company },
      address: { city },
    };

    setUsers([...users, newUser]);
    onSuccess(); // ✅ SHOW SUCCESS UI
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div
        data-aos="zoom-in"
        className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl"
      >
        <h3
          data-aos="fade-down"
          className="text-2xl font-semibold text-center mb-6"
        >
          Add New Member
        </h3>

        {error && (
          <p
            data-aos="fade-in"
            className="text-red-500 text-sm text-center mb-4"
          >
            {error}
          </p>
        )}

        <div className="space-y-4">
          {[
            { label: "Name", value: name, set: setName },
            { label: "Email", value: email, set: setEmail },
            { label: "Phone", value: phone, set: setPhone },
            { label: "Company", value: company, set: setCompany },
            { label: "City", value: city, set: setCity },
            { label: "Location", value: location, set: setLocation },
          ].map((field, index) => (
            <div key={index} data-aos="fade-up">
              <label className="block text-sm font-medium mb-1">
                {field.label}
              </label>
              <input
                type="text"
                value={field.value}
                onChange={(e) => field.set(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={closeForm}
            className="w-full border rounded-lg py-2 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleAddUser}
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
          >
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
}
