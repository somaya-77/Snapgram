import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SignupValidation } from "@/lib/validation";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";
import { SignupValues } from "@/lib/validation/defaultValues";
import { useToast } from "@/hooks/use-toast";
import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queries";


const text_fields = [
  { name: "name", title: "Name", type: "text" },
  { name: "username", title: "Username", type: "text" },
  { name: "email", title: "Email", type: "email" },
  { name: "password", title: "Password", type: "password" },
]



const Signup = () => {
  const { toast } = useToast();
  const { mutateAsync: createUserAccount, isLoading: isCreatingUser } = useCreateUserAccount();
  const { mutateAsync: signInAccount, isLoading: isCreatingUser } = useSignInAccount();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: SignupValues,
  })

  // submit handler
  const onSubmit = async (values: z.infer<typeof SignupValidation>) => {
    const newUser = await createUserAccount(values)

    if (!newUser) {
      return toast({ title: 'Sign up failed. please try again.' })
    }

    const session = await signInAccount({
      email: values.email,
      password: values.password
    });

    if(!session) {
      return toast({ title: 'Sign up failed. please try again.' })
    }

      return session;
  }

  return (
    <Form {...form}>
      <div className="flex-center flex-col sm:w-420">
        <img src="/assets/images/logo.svg" />
        <h2 className="h3-bold pt-5 md:h2-bold">Create a new account</h2>
        <p className="text-light-3 small-medium md:base-regular">To use Snapgram, please enter your details</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-5">

          {text_fields.map((item, i) => {
            const { name, title, type } = item;

            return (
              <div key={i}>
                <FormField
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{title}</FormLabel>
                      <FormControl>
                        <Input type={type} className="shad-input"  {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )
          })}
          <Button type="submit" className="shad_button_primary">
            {isCreatingUser ? <div className="flex gap-2">
              <Loader /> Loading...
            </div> : "Sign up"}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account? <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">Log in</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default Signup;