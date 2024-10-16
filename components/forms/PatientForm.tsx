"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"

export enum FormFieldTypes {
  INPUT = "input",
  TEXT_AREA = "textarea",
  PHONE_INPUT = "phoneinput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datepicker",
  SELECT = "select",
  SKELETON = "skeleton",
}
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
      <section className="mb-12 space-y-4">
        <h1 className="header">Welcome to Your Health</h1>
        <p className="text-dark-700">Please enter your details to continue</p>
      </section>
      <CustomFormField
        fieldType={FormFieldTypes.INPUT}
        control={form.control}
        name="name"
        label="Full Name"
        placeholder="Enter your full name"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
      />
      <CustomFormField
        fieldType={FormFieldTypes.INPUT}
        control={form.control}
        name="email"
        label="Email"
        placeholder="Enter your email"
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
      />
      <CustomFormField
        fieldType={FormFieldTypes.PHONE_INPUT}
        control={form.control}
        name="phone"
        label="Phone Number"
        placeholder="Enter your phone number"
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default PatientForm