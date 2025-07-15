import styles from "@/styles/Teacher.module.css"
import Link from "next/link";
import {
  Key,
} from "react";
import toast , { Toaster }  from "react-hot-toast";
import Remove from "./Remove";


async function fetchData() {
  const response = await fetch("http://localhost:3000/api/parents/", {
    cache: "no-store",
  });
  if (!response.ok) {
     toast.error(`Failed to fetch parents: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

export default async function Home() {
  const contacts = await fetchData();
  return (
    <div  >
      <Link href="/crud/parents/addCRUD" >Add Parent</Link>
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
              (parent: {
                id: Key | null | undefined;
              }) => parent.id !== null && parent.id !== undefined
            )
            .map(
              (parent: {
                _id: any;
                id: string | number;
                name: string;
                email: string;
                phone: string;
                address: string;
              }) => (
                <tr key={parent.id}>
                  <td>{parent.name}</td>
                  <td>{parent.email}</td>
                  <td>{parent.phone}</td>
                  <td>{parent.address}</td>
                  <td>
                    <Remove id={parent.id} />
                    <Link href={`/crud/parents/editCRUD/${parent.id}`} className="text-blue-500 hover:underline">
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
