// 'use client';

import EditForm from "@/components/Student/EditForm";


const getStudentById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/students/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch teachers");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
interface PageProps {
  params: {
    id: string;
  };
}

export default async function EditStudentPage({ params }: PageProps) {
  const { id } = params;

  const student = await getStudentById(id);

  if (!student) {
    return <div>Failed to load teacher.</div>;
  }

  const { name, phone, address, email } = student;

  return (
    <div>
      <EditForm
        id={id}
        name={name}
        phone={phone}
        address={address}
        email={email}
      />
    </div>
  );
}
