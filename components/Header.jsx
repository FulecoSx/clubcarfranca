

export default function Header() {
  return (
    <header className='border-b border-red-600'>
      <div className='max-w-7xl mx-auto px-6 py-5 flex items-center justify-between'>
        <div>
          <h1 className='text-4xl font-black text-red-600'>
            ClubCarFranca
          </h1>

          <p className='opacity-70'>
            Veículos usados premium
          </p>
        </div>

        <div className='flex gap-4'>
          <a
            href='/admin'
            className='bg-black text-white px-5 py-3 rounded-2xl font-bold border'
          >
            ADM
          </a>
        </div>
      </div>
    </header>
  )
}
