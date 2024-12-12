import Head from 'next/head';
import Image from 'next/image';

const users = [
  { name: 'Pat Black', accessStatus: 'Admin', email: 'bill.berry@example.com', age: 28 },
  { name: 'Angel Jones', accessStatus: 'Admin', email: 'glen.ramirez@example.com', age: 36 },
  { name: 'Max Edwards', accessStatus: 'Employee', email: 'renee.hughes@example.com', age: 27 },
  { name: 'Bruce Fox', accessStatus: 'Employee', email: 'craig.kelley@example.com', age: 43 },
  { name: 'Devon Fisher', accessStatus: 'Employee', email: 'joy.ramos@example.com', age: 32 },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PT.TEKNO JAYA</title>
      </Head>
      <aside className="sidebar">
        <div className="logo-container">
          <Image src="/logo23.png" alt="PT.TEKNO JAYA Logo" width={50} height={50} />
          <h2>PT.TEKNO JAYA</h2>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Inventory</li>
            <li>All Account</li>
            <li>Transactions</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>All User</h1>
        <button className="add-button">Add</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Access Status</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.accessStatus}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button className="edit-button">✏️</button>
                  <button className="delete-button">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <style jsx>{`
        .container {
          display: flex;
        }
        .sidebar {
          width: 200px;
          background-color: #f4f4f4;
          padding: 20px;
        }
        .logo-container {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .logo-container h2 {
          margin-left: 10px;
        }
        .sidebar nav ul {
          list-style: none;
          padding: 0;
        }
        .sidebar nav ul li {
          margin-bottom: 10px;
        }
        .main-content {
          flex: 1;
          padding: 20px;
        }
        .add-button {
          margin-bottom: 20px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        th {
          background-color: #f2f2f2;
        }
        .edit-button, .delete-button {
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
}
