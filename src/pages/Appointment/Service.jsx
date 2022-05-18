const Service = ({ service, setTreatment }) => {
  const { name, slots } = service

  return (
    <div className='p-8 grid justify-items-center gap-y-2 shadow-md rounded-lg'>

      <p className='text-lg font-medium text-primary'>{name}</p>
      <p>{slots.length
        ? <span>{slots[0]}</span>
        : <span className='text-red-500'>no slots available</span>}</p>
      <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
      <label htmlFor="booking-modal"
        className="btn modal-button bg-gradient-to-r from-secondary to-primary text-white border-0"
        onClick={() => setTreatment(service)}
        disabled={!slots.length}>
        book appointment
      </label>
    </div>
  );
};

export default Service;