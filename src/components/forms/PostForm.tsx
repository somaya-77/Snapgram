import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { PostFormValidation } from "@/lib/validation";
import FileUploader from "../shared/FileUploader";
import { Models } from "appwrite";

type PostFormProps = {
    post?: Models.Document;
}
const PostForm = ({post}: PostFormProps) => {

    const form = useForm<z.infer<typeof PostFormValidation>>({
        resolver: zodResolver(PostFormValidation),
        defaultValues: {
            caption: post ? post?.caption : "",
            file: [],
            location:  post ? post?.location : "",
            tags:  post ? post?.tags.join(',') : "",
        },
    })

    const onSubmit = async (values: z.infer<typeof PostFormValidation>) => {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full max-w-5xl">
                <FormField
                    control={form.control}
                    name="caption"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Caption</FormLabel>
                            <FormControl>
                                <Input className="shad-textarea custom-scrollbar" {...field} />
                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Add Photos</FormLabel>
                            <FormControl>
                                <FileUploader />
                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Add Location</FormLabel>
                            <FormControl>
                                <Input type='text' className="shad-input"  {...field} />

                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Add Tags (separated by comma " , ")</FormLabel>
                            <FormControl>
                                <Input type='text' className="shad-input" placeholder="Art, Expression, Learn"  {...field} />

                            </FormControl>
                            <FormMessage className="shad-form_message" />
                        </FormItem>
                    )}
                />
                <div className="flex gap-4 items-center justify-end">
                    <Button type="button" className="shad_button_dark_4">Cancel</Button>
                    <Button type="submit" className="shad_button_primary whitespace-nowrap">Submit</Button>
                </div>
            </form>
        </Form>
    )
}

export default PostForm
