import { ID } from 'appwrite';
import { account } from './config';
import type { AppNewUser } from "@/types";
import { databases } from './config';

export async function createUser(user: AppNewUser) {
    try {
        const response = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
            user.username
        );

        // await saveUserToCollection(response.$id, user);

        return response;
    } catch (error) {
        console.error("Error creating user:", error);

        return false;
    }
}

async function saveUserToCollection(userId: string, user: AppNewUser) {
    try {
        await databases.createDocument(
            'users_db', // replace with your database ID
            'users',    // replace with your collection ID
            userId,
            {
                email: user.email,
                name: user.name,
                username: user.username
            }
        );
    } catch (error) {
        console.error("Error saving user to collection:", error);
        throw error;
    }
}