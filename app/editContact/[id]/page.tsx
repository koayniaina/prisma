// 'use client';
import EditForms from "@/components/EditForms";

const getContactById = async (id: string) => {
  try {
        const res = await fetch(`http://localhost:3000/api/contacts/${id}`, {
            cache: "no-store",
        });
 
        if (!res.ok) {
            throw new Error("Failed to fetch contact");
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

export default async function EditContactPage({ params }: PageProps) {
  const { id } = params;

  const contact = await getContactById(id);

  if (!contact) {
    return <div>Failed to load contact.</div>;
  }

  const { name, phone, address, email } = contact;

  return (
    <div>
      <EditForms
        id={id}
        name={name}
        phone={phone}
        address={address}
        email={email}
      />
    </div>
  );
}
