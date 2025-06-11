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


