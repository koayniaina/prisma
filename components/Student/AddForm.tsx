"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const router = useRouter();

  async function handleContact(e: { preventDefault: () => void }) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/contacts/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, email, phone, address }),
      });
      if (res.ok) {
        router.push("/crud");
      } else {
        throw new Error("Faild to create contact");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={handleContact}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          required
        />
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}
