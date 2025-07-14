import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";



export const GET = async () =>{
    try{
        const students = await prisma.student.findMany();
        return NextResponse.json(students);
    }catch(error){
        return NextResponse.json({message:'GET Server Error'}, {status:500});
    }
}


export const POST = async ( Request) =>{
    try{
        const body = await Request.json();
        const { name, email, phone, address } = body;
        const newStudent = await prisma.student.create({
            data: {
                name,
                email,
                phone,
                address
            }
        })
        return NextResponse.json(newStudent);
    }catch(error){
        return NextResponse.json({message:'Internal Server Error'} , {status:500});
    }
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    const contact = await prisma.student.findUnique({
        where: {
            id
        }
    });
    if (!contact) {
        return NextResponse.json({ message: "Contact not found" }, { status: 404 });
    }
    // Delete the contact
    await prisma.student.delete({
        where: {
            id
        }
    });
    return NextResponse.json({ message: "Student deleted successfully" });
}