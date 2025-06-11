import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

async function fetchData() {
  const response = await fetch("http://localhost:3000/api/contacts/", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

export default async function Home() {
  const posts = await fetchData();
  return (
    <div className="overflow-x-auto bg-base-100">
      <table className="table">
        
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(
            (post: {
              id: Key | null | undefined;
              name: string;
              email: string;
              phone: string;
              address: string;
            }) => (
              <tr key={post.id}>
                {/* <th>{post.id}</th> */}
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.phone}</td>
                <td>{post.address}</td>
                <td>
                  <Link href={"#"} className="text-red-500 hover:underline">
                    <span className="material-symbols-outlined">delete</span>
                  </Link>
                  <Link
                    href={`/posts/${post.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    <span className="material-symbols-outlined">
                      edit_square
                    </span>
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
