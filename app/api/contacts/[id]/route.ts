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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
    const { id } = params;
    const { newName: name, newEmail: email, newPhone: phone, newAddress: address } = await request.json();

    await prisma.contact.update({
      where: { id },
      data: { name, email, phone, address },
    });
    return NextResponse.json({ message: "Contact updated" }, { status: 200 });
}

