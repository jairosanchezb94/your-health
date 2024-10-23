import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment({params: {userId}}: SearchParamProps) {

  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
            <AppointmentForm
              type="create"
              userId={userId}
              patientId={patient.$id}
            />
            <p className="copyright mt-10 py-12">
              ©2024 Your Health App. All rights reserved.
            </p>
        </div>
      </section>
    </div>
  )
}
