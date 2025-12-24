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

export default function UserCard({ user }) {
  const avatar = avatars[user.id % avatars.length];
  const headerColor = headerColors[user.id % headerColors.length];

  return (
    <Link to={`/user/${user.id}`}>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden relative " data-aos="fade-up">

       
        <div className={`${headerColor} h-24 flex items-center justify-center`}>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
            {user.name}
          </h3>
        </div>

        
        <div className="absolute top-16 left-1/2 -translate-x-1/2">
          <img
            src={avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
          />
        </div>

        <div className="pt-14 pb-6 px-4 text-center">
          <p className="text-sm text-gray-600 break-all">
            {user.email}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            {user.phone}
          </p>

          <p className="text-sm font-medium text-gray-800 mt-2">
            {user.company?.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
  