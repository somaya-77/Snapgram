export type INavLink = {
    imageUrl: string;
    route: string;
    label: string;
}

export type IUpdateUser = {
    userId: string;
    name: string;
    bio: string;
    imageId: string;
    ImageUrl: URL | string;
    file: File[];
}

export type INewPost = {
    userId: string;
    caption: string;
    file: File[];
    location?: string;
    tags?: string;
}

export type IUser = {
    id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    bio: string;
}

export type INewUser = {
    name: string;
    username: string;
    email: string;
    password: string;
}