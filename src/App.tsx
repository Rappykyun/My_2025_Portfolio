export default function App() {
  const users = [
    {
      name: "Albenzar Sagad",
      email: "albenzar@gmail.com",
    },
    {
      name: "Stephen Jake Apostol",
      email: "stephen@gmail.com",
    },
    {
      name: "Archie Lacurom",
      email: "archie@gmail.com",
    },
  ];
  type UserCardProps = {
    name: string;
    email: string;
  };
  function UserCard({ name, email }: UserCardProps) {
    return (
      <div className="flex flex-col gap-2 p-4 bg-gray-200 rounded-md max-w-sm">
        <h2>{name}</h2>
        <p>Email: {email}</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Users List</h1>
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <UserCard key={user.email} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  );
}

