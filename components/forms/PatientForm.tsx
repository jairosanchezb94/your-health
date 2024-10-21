"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { SubmitButton } from "./SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"

export enum FormFieldTypes {
  INPUT = "input",
  TEXT_AREA = "textarea",
  PHONE_INPUT = "phoneinput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datepicker",
  SELECT = "select",
  SKELETON = "skeleton",
}
 
const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try {
      const userData = {
        name,
        email,
        phone
      }
      const user = await createUser(userData);

      if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error)
    } 
    setIsLoading(false);
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
      <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
    </form>
  </Form>
  )
}

export default PatientForm
