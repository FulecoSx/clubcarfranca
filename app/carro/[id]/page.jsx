import { supabase } from '../../../lib/supabase'
import Link from 'next/link'

export default async function CarPage({ params }) {
  const { id } = await params

  const { data: car, error } = await supabase
    .from('car')
    .select('*')
    .eq('id', Number(id))
    .single()

  if (error || !car) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-black">
          Veículo não encontrado
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white relative">

      {/* BOTÕES FLUTUANTES (INSTAGRAM + FACEBOOK) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/clubcar.multimarcas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-pink-600 hover:bg-pink-700 rounded-full shadow-lg transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" viewBox="0 0 24 24">
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/clubcar.mutiimarcas/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114 6h2v3h-2c-.5 0-1 .5-1 1v2h3l-.5 3H13v7A10 10 0 0022 12z"/>
          </svg>
        </a>

      </div>

      {/* CONTEÚDO */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* VOLTAR */}
        <Link
          href="/"
          className="inline-block mb-8 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-2xl font-bold"
        >
          ← Voltar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* IMAGEM */}
          <div>
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-[500px] object-cover rounded-[2rem]"
            />
          </div>

          {/* INFO */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8">

            <div className="flex items-start justify-between gap-5">
              <div>
                <h1 className="text-5xl font-black">
                  {car.brand} {car.model}
                </h1>

                <p className="text-red-500 text-4xl font-black mt-4">
                  {car.price}
                </p>
              </div>

              <div className="bg-red-600 px-5 py-3 rounded-2xl font-bold">
                {car.year}
              </div>
            </div>

            {/* GRID INFO */}
            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-black rounded-2xl p-5">
                <p className="text-zinc-500 text-sm">Quilometragem</p>
                <p className="font-black text-2xl mt-2">{car.km}</p>
              </div>

              <div className="bg-black rounded-2xl p-5">
                <p className="text-zinc-500 text-sm">Combustível</p>
                <p className="font-black text-2xl mt-2">{car.fuel}</p>
              </div>

              <div className="bg-black rounded-2xl p-5">
                <p className="text-zinc-500 text-sm">Câmbio</p>
                <p className="font-black text-2xl mt-2">{car.transmission}</p>
              </div>

              <div className="bg-black rounded-2xl p-5">
                <p className="text-zinc-500 text-sm">Carroceria</p>
                <p className="font-black text-2xl mt-2">{car.body}</p>
              </div>

            </div>

            {/* DESCRIÇÃO */}
            <div className="mt-10">
              <h2 className="text-3xl font-black mb-4">
                Descrição
              </h2>

              <p className="text-zinc-400 leading-relaxed text-lg">
                {car.description}
              </p>
            </div>

            {/* VENDEDOR */}
            <div className="mt-10">

              <p className="text-zinc-500">Vendedor</p>
              <p className="text-2xl font-black mt-1">
                {car.seller}
              </p>

              {/* REDES SOCIAIS DO CARRO (OPCIONAL) */}
              <div className="mt-6 flex gap-4 items-center">

                {car.instagram && (
                  <a
                    href={car.instagram}
                    target="_blank"
                    className="p-3 bg-pink-600 hover:bg-pink-700 rounded-full transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
                      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10z"/>
                    </svg>
                  </a>
                )}

                {car.facebook && (
                  <a
                    href={car.facebook}
                    target="_blank"
                    className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
                      <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114 6h2v3h-2c-.5 0-1 .5-1 1v2h3l-.5 3H13v7A10 10 0 0022 12z"/>
                    </svg>
                  </a>
                )}

              </div>

            </div>

            {/* WHATSAPP */}
            <div className="mt-10">
              <a
                href={`https://wa.me/${car.whatsapp}?text=Olá ${car.seller}, tenho interesse no veículo ${car.brand} ${car.model}`}
                target="_blank"
                className="bg-green-600 hover:bg-green-700 transition px-8 py-5 rounded-2xl font-black text-lg inline-block"
              >
                Chamar no WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}