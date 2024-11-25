import * as z from "zod";

export const SignupValidation = z.object({
    username: z.string().min(2),
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
});


// post form 

export const PostFormValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
});

