export const Service = ({ service }) => {
  const { img, title, detail } = service
  return (
    <div className='card bg-base-100 shadow-md'>
      <figure className='px-10 pt-10'>
        <img src={img} alt='thumbnail' className='rounded-xl' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{title}</h2>
        <p>{detail}</p>
      </div>
    </div>
  )
}
