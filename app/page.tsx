import Image from "next/image";
import Link from "next/link";

import PatientForm from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

export default function Home({searchParams}: SearchParamProps ) {

  const isAdmin = searchParams.admin === 'true';

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image 
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
          />
          <PatientForm />
          <div className="text-14-reglar mt-12 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              ©2024 Your Health App. All rights reserved.
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  )
}
