import Message from "@/Models/message";
import { NextResponse } from 'next/server'
import { connectToDB } from "@/utils/db";

export const POST = async (req, res) => {
    const {  email, message } = await req.json();

    try {
        await connectToDB();
        const newMessage = new Message({
            email,
            message
        })
        await newMessage.save();

        return NextResponse.json({ message: 'Message submitted!', success: true, message: newMessage }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Internal Server Error', success: false, error }, { status: 500 })
    }
}