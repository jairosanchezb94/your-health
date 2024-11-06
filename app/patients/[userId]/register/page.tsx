import Image from 'next/image'
import React from 'react'

import RegisterFrom from '@/components/forms/RegisterFrom'
import { getUser } from '@/lib/actions/patient.actions'


const Register = async ({ params: {userId}}: SearchParamProps) => {

  const user = await getUser(userId)

  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container">
      <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
        <div className="flex justify-center">
          <Image 
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={200}
            height={200}
          />
        </div>

        <RegisterFrom
          user={user}
        />
        <p className="copyright py-10">
          ©2024 Your Health App. All rights reserved.
        </p>
      </div>
    </section>
  </div>
  )
}

export default Register
