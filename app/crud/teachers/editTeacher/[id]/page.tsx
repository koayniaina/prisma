// 'use client';

import EditForm from "@/components/Teacher/EditForm";

const getTeacherById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/teachers/${id}`, {
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

export default async function EditTeacherPage({ params }: PageProps) {
  const { id } = params;

  const teacher = await getTeacherById(id);

  if (!teacher) {
    return <div>Failed to load teacher.</div>;
  }

  const { name, phone, address, email } = teacher;

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
