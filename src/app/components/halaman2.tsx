import Head from 'next/head';
import Image from 'next/image';

const usersData = [
  { name: 'Pat Black', accessStatus: 'Admin', email: 'bill.berry@example.com', age: 28 },
  { name: 'Angel Jones', accessStatus: 'Admin', email: 'glen.ramirez@example.com', age: 36 },
  { name: 'Max Edwards', accessStatus: 'Employee', email: 'renee.hughes@example.com', age: 27 },
  { name: 'Bruce Fox', accessStatus: 'Employee', email: 'craig.kelley@example.com', age: 43 },
  { name: 'Devon Fisher', accessStatus: 'Employee', email: 'joy.ramos@example.com', age: 32 },
];

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <Head>
        <title>PT. TEKNO JAYA</title>
      </Head>
      <aside style={{ width: '200px', padding: '20px', background: '#f4f4f4' }}>
        <div style={{ marginBottom: '20px' }}>
          <Image src="/teknolojaya.png" alt="PT. TEKNO JAYA Logo" width={100} height={100} />
          <h2>PT. TEKNO JAYA</h2>
        </div>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Inventory</a></li>
            <li><a href="#">All Account</a></li>
            <li><a href="#">Transactions</a></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        <h1>All User</h1>
        <button style={{ marginBottom: '20px' }}>Add</button>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
            {usersData.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.accessStatus}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button style={{ marginRight: '5px' }}>✏️</button>
                  <button>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
