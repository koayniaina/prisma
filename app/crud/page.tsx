import ListeStudent from "@/components/Student/ListForm";
import React from "react";

export default function CrudLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ListeStudent />
      {children}
    </div>
  );
}
