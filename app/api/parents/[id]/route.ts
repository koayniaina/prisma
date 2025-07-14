import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (_request: any, { params }: any) => {
  try {
    const { id } = params;
    const parent = await prisma.parent.findUnique({
      where: {
        id,
      },
    });
    if (!parent) {
      return NextResponse.json(
        { message: "Parent not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(parent);
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

    await prisma.parent.update({
      where: { id },
      data: { name, email, phone, address },
    });
    return NextResponse.json({ message: "Contact updated" }, { status: 200 });
}

