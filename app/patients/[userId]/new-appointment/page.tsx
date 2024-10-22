import Image from "next/image";

// youtube mint 2:40

export default function NewAppointment() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          {/* <PatientForm /> */}
            <p className="justify-items-end text-dark-600 xl:text-left">
              ©2024 Your Health App. All rights reserved.
            </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        alt="appointment"
        width={1000}
        height={1000}
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  )
}
