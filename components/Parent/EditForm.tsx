"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type EditFormsProps = {
  id: string;
  name: string;
  phone: string;
  address: string;
  email: string;
};

export default function EditForms({
  id,
  name,
  phone,
  address,
  email,
}: EditFormsProps) {
  const [newName, setNewName] = useState(name);
  const [newPhone, setNewPhone] = useState(phone);
  const [newAddress, setNewAddress] = useState(address);
  const [newEmail, setNewEmail] = useState(email);

  const router = useRouter();

  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
  
      const res = await fetch(
        `http://localhost:3000/api/parents/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newName,
            newPhone,
            newAddress,
            newEmail,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push('/crud');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
      />

      <input
        onChange={(e) => setNewEmail(e.target.value)}
        value={newEmail}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <input
        onChange={(e) => setNewPhone(e.target.value)}
        value={newPhone}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Phone"
      />

      <input
        onChange={(e) => setNewAddress(e.target.value)}
        value={newAddress}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}
