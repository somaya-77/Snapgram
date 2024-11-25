import { Client, Account,Databases, Storage, Avatars } from "appwrite";


export const appwriteConfig = {
    url: import.meta.env.VITE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageId: import.meta.env.VITE_STORAGE_ID,
    databaseId: import.meta.env.VITE_DATABASE_ID,
    saveCollectionId: import.meta.env.VITE_SAVES_COLLECTION_ID,
    userCollectionId: import.meta.env.VITE_USERS_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_POSTS_COLLECTION_ID,
}

console.log('Appwrite Config:', appwriteConfig);

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

