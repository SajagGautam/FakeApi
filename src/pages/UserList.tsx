
import { useGetUsersQuery } from "../api/authApi";

const UserList= () => {
  const { data: users, error, isLoading } = useGetUsersQuery(null);

  if (isLoading) return <p className="text-center">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">Error fetching users!</p>;

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">👥 Users</h2>
      <div className="grid grid-cols-3 gap-4">
        {users?.map((user: any) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
