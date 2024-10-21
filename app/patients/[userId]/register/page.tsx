import RegisterFrom from '@/components/forms/RegisterFrom'
import { getUser } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = async ({ params: {userId}}: SearchParamProps) => {

  const user = await getUser(userId)

  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
        <Image 
          src="/assets/icons/logo-full.svg"
          alt="patient"
          width={1000}
          height={1000}
          // icon size
          // className="mb-19 h-10 w-fit"
        />

        <RegisterFrom
          user={user}
        />

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
  </div>
  )
}

export default Register