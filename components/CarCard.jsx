import Link from 'next/link'

export default function CarCard({ car }) {
  return (
    <Link href={`/carro/${car.id}`}>
      <div className='bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-red-600 hover:scale-[1.01] transition duration-300 cursor-pointer'>
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className='w-full h-64 object-cover'
        />

        <div className='p-6'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <h2 className='text-2xl font-black text-white'>
                {car.brand} {car.model}
              </h2>

              <p className='text-red-500 text-3xl font-black mt-2'>
                {car.price}
              </p>
            </div>

            <div className='bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-sm'>
              {car.year}
            </div>
          </div>

          <div className='grid grid-cols-2 gap-3 mt-6 text-sm'>
            <div className='bg-black rounded-xl p-4'>
              <p className='text-zinc-500'>
                KM
              </p>

              <p className='font-bold text-white mt-1'>
                {car.km}
              </p>
            </div>

            <div className='bg-black rounded-xl p-4'>
              <p className='text-zinc-500'>
                Combustível
              </p>

              <p className='font-bold text-white mt-1'>
                {car.fuel}
              </p>
            </div>

            <div className='bg-black rounded-xl p-4'>
              <p className='text-zinc-500'>
                Câmbio
              </p>

              <p className='font-bold text-white mt-1'>
                {car.transmission}
              </p>
            </div>

            <div className='bg-black rounded-xl p-4'>
              <p className='text-zinc-500'>
                Carroceria
              </p>

              <p className='font-bold text-white mt-1'>
                {car.body}
              </p>
            </div>
          </div>

          <div className='mt-6'>
            <p className='text-zinc-400 line-clamp-3 leading-relaxed'>
              {car.description}
            </p>
          </div>

          <div className='mt-6 flex items-center justify-between'>
            <div>
              <p className='text-zinc-500 text-sm'>
                Vendedor
              </p>

              <p className='font-bold text-white'>
                {car.seller}
              </p>
            </div>

            <div className='bg-red-600 hover:bg-red-700 transition px-6 py-4 rounded-2xl font-bold text-white'>
              Ver veículo
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}