"use server"
import { connectToDB } from "../mongoose";
import User from "../models/user.model";
import { User as UserType } from "../../types/user.type";

export const createUser = async ({userId, username, name, email, image}: UserType): Promise<void> => {
    try {
        await connectToDB();
        const newUser = await User.create({id:userId, username: username?.toLowerCase(), name, email, image});
        return newUser;
    } catch (error : any) {
        throw new Error(`Failed to create user: ${error.message}`)
    }
}
