import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";



export const GET = async () =>{
    try{
        const parents = await prisma.parent.findMany();
        return NextResponse.json(parents);
    }catch(error){
        return NextResponse.json({message:'GET Server Error'}, {status:500});
    }
}


export const POST = async ( Request) =>{
    try{
        const body = await Request.json();
        const { name, email, phone, address } = body;
        const newParent = await prisma.parent.create({
            data: {
                name,
                email,
                phone,
                address
            }
        })
        return NextResponse.json(newParent);
    }catch(error){
        return NextResponse.json({message:'Internal Server Error'} , {status:500});
    }
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    const parent = await prisma.parent.findUnique({
        where: {
            id
        }
    });
    if (!contact) {
        return NextResponse.json({ message: "Parent not found" }, { status: 404 });
    }
    // Delete the contact
    await prisma.parent.delete({
        where: {
            id
        }
    });
    return NextResponse.json({ message: "Parent deleted successfully" });
}