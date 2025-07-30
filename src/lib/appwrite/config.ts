import { Client, Databases, Storage, Account, Avatars } from 'appwrite';

// Vite only exposes env variables that start with VITE_
export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
};

const client = new Client();
console.log(appwriteConfig)
// Endpoint is already set here by default
client.setProject(appwriteConfig.projectId);
console.log(client);
export const databases = new Databases(client);
export const sorage = new Storage(client);
export const account = new Account(client);
export const avatars = new Avatars(client);