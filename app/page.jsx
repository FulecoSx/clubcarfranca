'use client'

import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import Filters from '../components/Filters'
import CarCard from '../components/CarCard'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [cars, setCars] = useState([])

  const [filters, setFilters] = useState({
    search: '',
    brand: '',
    fuel: '',
    transmission: '',
    body: '',
    year: '',
  })

  const years = []

  for (let year = 1990; year <= 2027; year++) {
    years.push(year)
  }

  useEffect(() => {
    fetchCars()
  }, [])

  async function fetchCars() {
    const { data, error } = await supabase
      .from('car')
      .select('*')
      .order('id', { ascending: false })

    if (error) {
      console.log(error)
    } else {
      setCars(data || [])
    }
  }

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      return (
        `${car.brand} ${car.model}`
          .toLowerCase()
          .includes(filters.search.toLowerCase()) &&
        (filters.brand === '' ||
          car.brand === filters.brand) &&
        (filters.fuel === '' ||
          car.fuel === filters.fuel) &&
        (filters.transmission === '' ||
          car.transmission ===
            filters.transmission) &&
        (filters.body === '' ||
          car.body === filters.body) &&
        (filters.year === '' ||
          String(car.year) === filters.year)
      )
    })
  }, [cars, filters])

  return (
    <main className='min-h-screen bg-black text-white'>
      <Header />

      <section className='max-w-7xl mx-auto px-6 py-20'>
        <div className='bg-zinc-900 rounded-[2rem] p-10 border border-red-600/20'>
          <h1 className='text-5xl font-black max-w-3xl leading-tight'>
            Os melhores carros usados de Franca
          </h1>

          <p className='mt-5 text-zinc-400 text-lg max-w-2xl'>
            Plataforma premium para venda de veículos
            com painel ADM, filtros inteligentes
            e integração com Supabase.
          </p>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 pb-10'>
        <Filters
          filters={filters}
          setFilters={setFilters}
          years={years}
        />
      </section>

      <section className='max-w-7xl mx-auto px-6 pb-20'>
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-4xl font-black'>
            Veículos em estoque
          </h2>

          <span className='bg-red-600 px-5 py-3 rounded-full font-bold'>
            {filteredCars.length} veículos
          </span>
        </div>

        {filteredCars.length === 0 ? (
          <div className='bg-zinc-900 border border-red-600/20 rounded-[2rem] p-10 text-center'>
            <h3 className='text-3xl font-black'>
              Nenhum veículo encontrado
            </h3>

            <p className='text-zinc-400 mt-3'>
              Tente alterar os filtros.
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}