import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  // form error messages
  user_name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  message: z.string().min(4, {
    message: "Message must be at least 4 characters.",
  }),
  user_email: z.string().email("Invalid email format"),
});

export function ContactForm() {
  // 1. Define your form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const formRef = useRef();

  // submit handler
  function onSubmit(values) {
    console.log(values);
    emailjs
      .sendForm("service_fow05uw", "template_uvfna3q", formRef.current, {
        publicKey: "pMQTsRwKmT5ezThl9",
      })
      .then(
        () => {
          toast.success("Message sent Successfully");
        },
        (error) => {
          toast.error("Error sending message", error.text);
        }
      );
    // After successful submission reset form
    if (form.formState.isSubmitted) {
      form.reset();
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          ref={formRef}
          className="space-y-7 pb-5"
        >
          <FormField
            control={form.control}
            name="user_name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="John Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="user_email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="jsmith@mytelco.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="resize-none"
                    rows="4"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="h-20 bg-primary-foreground rounded-md w-2/6"></div>
          <Button
            type="submit"
            className="w-full uppercase tracking-wide font-semibold font-sans px-7 py-4"
            disabled={form.formState.isSubmitting}
          >
            Send Message
          </Button>
        </form>
      </Form>
      <p className="text-customColors-hitgray text-sm">
        By clicking the button, you agree to our{" "}
        <span className="text-primary text-sm font-medium">Privacy Policy</span>
      </p>
    </>
  );
}
