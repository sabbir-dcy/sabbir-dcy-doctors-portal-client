import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';
import Footer from '../../components/Footer'

const Appointment = () => {
  const [appointmentDate, setAppointmentDate] = useState(new Date())
  return (
    <>
      <AppointmentBanner setAppointmentDate={setAppointmentDate} appointmentDate={appointmentDate}></AppointmentBanner>
      <AvailableAppointments appointmentDate={appointmentDate}></AvailableAppointments>
      <Footer></Footer>
    </>
  );
};

export default Appointment;