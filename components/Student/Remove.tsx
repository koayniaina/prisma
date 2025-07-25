"use client";
 
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
 
interface RemoveProps {
    id: string | number;
}

export default function RemoveBtn({ id }: RemoveProps) {
    const router = useRouter();
    const removeProduct= async () => {
        // const confirmed = confirm("Are you sure?");
 
        try {
            const res = await fetch(`http://localhost:3000/api/students?id=${id}`, {
                method: "DELETE",
            });
 
            if (res.ok) {
                router.refresh();
            }
        } catch (error) {
           toast.error('Error deleting contact: ' + error);
        }
    };

    return (
        <div className="text-red-500 cursor-pointer" onClick={removeProduct}>
            <span className="material-symbols-outlined">delete</span>
        </div>
    );
}