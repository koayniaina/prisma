import Remove from "@/components/Student/Remove";
import Link from "next/link";
import {
  Key,
} from "react";
import toast , { Toaster }  from "react-hot-toast";


async function fetchData() {
  const response = await fetch("http://localhost:3000/api/students/", {
    cache: "no-store",
  });
  if (!response.ok) {
     toast.error(`Failed to fetch contacts: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

export default async function Home() {
  const contacts = await fetchData();
  return (
    <div >
      <Link href="/crud/students/addStudent">Add Student</Link>
      <Toaster position="top-right" />
      <table className="table">
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead> */}
        <tbody>
          {contacts
            .filter(
              (contact: {
                id: Key | null | undefined;
              }) => contact.id !== null && contact.id !== undefined
            )
            .map(
              (contact: {
                _id: any;
                id: string | number;
                name: string;
                email: string;
                phone: string;
                address: string;
              }) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.address}</td>
                  <td>
                    <Remove id={contact.id} />
                    <Link href={`/crud/students/editStudent/${contact.id}`} className="text-blue-500 hover:underline">
                      <span className="material-symbols-outlined">edit</span>
                    </Link>
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
}
