import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (_request: any, { params }: any) => {
  try {
    const { id } = params;
    const contact = await prisma.contact.findUnique({
      where: {
        id,
      },
    });
    if (!contact) {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(contact);
  } catch (error) {
    return NextResponse.json({ message: "GET Server Error" }, { status: 500 });
  }
};

export const PATCH = async (request: { json: () => any }, { params }: any) => {
  try {
    const body = await request.json();
    const { name, email, phone, address } = body;
    const { id } = params;

    const updatedContact = await prisma.contact.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        phone,
        address,
      },
    });
    if (!updatedContact) {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedContact);
  } catch (error) {
    return NextResponse.json({ message: "Update Error" }, { status: 500 });
  }
};


export const DELETE = async (_request: any , {params}: any) =>{
    try{

        const { id } = params;  
        await prisma.contact.delete({
            where: {
                id
            }
        });
        return NextResponse.json({ message: "Contact deleted successfully" });
    } catch (error) {
        return NextResponse.json({ message: "DELETE Server Error" }, { status: 500 });
    }
}

