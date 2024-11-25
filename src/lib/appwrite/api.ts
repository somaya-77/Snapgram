import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account, appwriteConfig, avatars, databases } from "./config";

export const createUserAccount = async (user: INewUser) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            email: newAccount.email,
            name: newAccount.name,
            username: user.username,
            imageUrl: avatarUrl,

        })

        return newUser;

    } catch (error) {
        console.log('error: ', error);
        return error;
    }
}


export const saveUserToDB = async (user:
    {
        accountId: string;
        email: string;
        name: string;
        username?: string;
        imageUrl: string | URL;
    }

) => {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        )
        return newUser;
    } catch (error) {
        console.log(error)
    }
}

export const signInAccount = async (user: {email: string, password: string}) => {
    try{
        const session = await account.createEmailPasswordSession(user.email, user.password);

        return session;
    }catch(error) {
        console.log(error)
    }

}