import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const teachers = await prisma.teacher.findMany();
    return NextResponse.json(teachers);
  } catch (error) {
    return NextResponse.json({ message: "GET Server Error" }, { status: 500 });
  }
};

export const POST = async (Request) => {
  try {
    const body = await Request.json();
    const { name, email, phone, address } = body;
    const newTeacher = await prisma.teacher.create({
      data: {
        name,
        email,
        phone,
        address,
      },
    });
    return NextResponse.json(newTeacher);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }
  const teacher = await prisma.teacher.findUnique({
    where: {
      id,
    },
  });
  if (!teacher) {
    return NextResponse.json({ message: "Teacher not found" }, { status: 404 });
  }
  // Delete the contact
  await prisma.teacher.delete({
    where: {
      id,
    },
  });
  return NextResponse.json({ message: "Teacher deleted successfully" });
}
