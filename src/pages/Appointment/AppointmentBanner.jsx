import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ appointmentDate, setAppointmentDate }) => {

  const handleDayClick = (day) => {
    setAppointmentDate(day)
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-16">
        <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt='banner' />
        <div className='shadow-lg p-4 rounded-lg'>
          <DayPicker
            mode='single'
            selected={appointmentDate}
            onDayClick={handleDayClick}
          // footer={footer}
          >
          </DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;