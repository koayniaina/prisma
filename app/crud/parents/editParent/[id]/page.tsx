
import EditForm from "@/components/Parent/EditForm";


const getParentById = async (id: string) => {
  try {
        const res = await fetch(`http://localhost:3000/api/parents/${id}`, {
            cache: "no-store",
        });
 
        if (!res.ok) {
            throw new Error("Failed to fetch parent");
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

export default async function EditParentPage({ params }: PageProps) {
  const { id } = params;

  const contact = await getParentById (id);

  if (!contact) {
    return <div>Failed to load contact.</div>;
  }

  const { name, phone, address, email } = contact;

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
