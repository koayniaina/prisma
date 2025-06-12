import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";



export const GET = async () =>{
    try{
        const contacts = await prisma.contact.findMany();
        return NextResponse.json(contacts);
    }catch(error){
        return NextResponse.json({message:'GET Server Error'}, {status:500});
    }
}


export const POST = async ( Request) =>{
    try{
        const body = await Request.json();
        const { name, email, phone, address } = body;
        const newContact = await prisma.contact.create({
            data: {
                name,
                email,
                phone,
                address
            }
        })
        return NextResponse.json(newContact);
    }catch(error){
        return NextResponse.json({message:'Internal Server Error'} , {status:500});
    }
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    const contact = await prisma.contact.findUnique({
        where: {
            id
        }
    });
    if (!contact) {
        return NextResponse.json({ message: "Contact not found" }, { status: 404 });
    }
    // Delete the contact
    await prisma.contact.delete({
        where: {
            id
        }
    });
    return NextResponse.json({ message: "Contact deleted successfully" });
}