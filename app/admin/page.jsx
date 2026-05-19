'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function AdminPage() {
  const [logged, setLogged] = useState(false)

  const [login, setLogin] = useState({
    user: '',
    password: '',
  })

  const [cars, setCars] = useState([])

  const [editingId, setEditingId] =
    useState(null)

  const [form, setForm] = useState({
    brand: '',
    model: '',
    price: '',
    year: '',
    km: '',
    fuel: '',
    transmission: '',
    body: '',
    image: '',
    description: '',
    seller: '',
    whatsapp: '',
  })

  useEffect(() => {
    fetchCars()
  }, [])

  async function fetchCars() {
    const { data } = await supabase
      .from('car')
      .select('*')
      .order('id', { ascending: false })

    setCars(data || [])
  }

  function handleLogin() {
    if (
      login.user === 'cubicar' &&
      login.password === 'sistema@1940'
    ) {
      setLogged(true)
    } else {
      alert('Login inválido')
    }
  }

  async function addCar() {
    if (editingId) {
      const { error } = await supabase
        .from('car')
        .update({
          brand: form.brand,
          model: form.model,
          price: form.price,
          year: form.year,
          km: form.km,
          fuel: form.fuel,
          transmission:
            form.transmission,
          body: form.body,
          image: form.image,
          description:
            form.description,
          seller: form.seller,
          whatsapp: form.whatsapp,
        })
        .eq('id', editingId)

      if (error) {
        console.log(error)
        alert('Erro ao atualizar')
        return
      }

      alert('Veículo atualizado')
      setEditingId(null)
    } else {
      const { error } = await supabase
        .from('car')
        .insert([
          {
            brand: form.brand,
            model: form.model,
            price: form.price,
            year: form.year,
            km: form.km,
            fuel: form.fuel,
            transmission:
              form.transmission,
            body: form.body,
            image: form.image,
            description:
              form.description,
            seller: form.seller,
            whatsapp:
              form.whatsapp,
          },
        ])

      if (error) {
        console.log(error)
        alert('Erro ao adicionar')
        return
      }

      alert('Veículo adicionado')
    }

    setForm({
      brand: '',
      model: '',
      price: '',
      year: '',
      km: '',
      fuel: '',
      transmission: '',
      body: '',
      image: '',
      description: '',
      seller: '',
      whatsapp: '',
    })

    fetchCars()
  }

  async function deleteCar(id) {
    const confirmDelete = confirm(
      'Excluir veículo?'
    )

    if (!confirmDelete) return

    await supabase
      .from('car')
      .delete()
      .eq('id', id)

    fetchCars()
  }

  function editCar(car) {
    setForm({
      brand: car.brand || '',
      model: car.model || '',
      price: car.price || '',
      year: car.year || '',
      km: car.km || '',
      fuel: car.fuel || '',
      transmission:
        car.transmission || '',
      body: car.body || '',
      image: car.image || '',
      description:
        car.description || '',
      seller: car.seller || '',
      whatsapp: car.whatsapp || '',
    })

    setEditingId(car.id)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!logged) {
    return (
      <main className='min-h-screen flex items-center justify-center bg-black text-white px-6'>
        <div className='bg-zinc-900 w-full max-w-md rounded-[2rem] p-10 border border-red-600/20'>
          <h1 className='text-4xl font-black mb-8 text-center'>
            Painel ADM
          </h1>

          <div className='space-y-4'>
            <input
              type='text'
              placeholder='Usuário'
              value={login.user}
              onChange={(e) =>
                setLogin({
                  ...login,
                  user: e.target.value,
                })
              }
              className='w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
            />

            <input
              type='password'
              placeholder='Senha'
              value={login.password}
              onChange={(e) =>
                setLogin({
                  ...login,
                  password:
                    e.target.value,
                })
              }
              className='w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
            />

            <button
              onClick={handleLogin}
              className='w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold'
            >
              Entrar
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='min-h-screen bg-black text-white px-6 py-10'>
      <div className='max-w-5xl mx-auto bg-zinc-900 rounded-[2rem] p-10 border border-red-600/20'>
        <div className='flex items-center justify-between mb-10'>
          <h1 className='text-4xl font-black'>
            Painel Administrativo
          </h1>

          <a
            href='/'
            className='bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-2xl font-bold'
          >
            Voltar ao Site
          </a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <input
            placeholder='Marca'
            value={form.brand}
            onChange={(e) =>
              setForm({
                ...form,
                brand: e.target.value,
              })
            }
            className='bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
          />

          <input
            placeholder='Modelo'
            value={form.model}
            onChange={(e) =>
              setForm({
                ...form,
                model: e.target.value,
              })
            }
            className='bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
          />

          <input
            placeholder='Preço'
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
            className='bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
          />

          <input
            placeholder='Ano'
            value={form.year}
            onChange={(e) =>
              setForm({
                ...form,
                year: e.target.value,
              })
            }
            className='bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
          />

          <input
            placeholder='KM'
            value={form.km}
            onChange={(e) =>
              setForm({
                ...form,
                km: e.target.value,
              })
            }
            className='bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
          />

          <select
            value={form.seller}
            onChange={(e) => {
              const seller =
                e.target.value

              if (seller === 'Danilo') {
                setForm({
                  ...form,
                  seller: 'Danilo',
                  whatsapp:
                    '5516991165875',
                })
              }

              if (
                seller === 'Jonhatan'
              ) {
                setForm({
                  ...form,
                  seller: 'Jonhatan',
                  whatsapp:
                    '5516988346788',
                })
              }
            }}
            className='bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
          >
            <option value=''>
              Selecione o vendedor
            </option>

            <option value='Danilo'>
              Danilo
            </option>

            <option value='Jonhatan'>
              Jonhatan
            </option>
          </select>

          <select
            value={form.fuel}
            onChange={(e) =>
              setForm({
                ...form,
                fuel: e.target.value,
              })
            }
            className='bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
          >
            <option value=''>
              Combustível
            </option>

            <option value='Flex'>
              Flex
            </option>

            <option value='Gasolina'>
              Gasolina
            </option>

            <option value='Diesel'>
              Diesel
            </option>

            <option value='Elétrico'>
              Elétrico
            </option>

            <option value='Híbrido'>
              Híbrido
            </option>
          </select>

          <select
            value={form.transmission}
            onChange={(e) =>
              setForm({
                ...form,
                transmission:
                  e.target.value,
              })
            }
            className='bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
          >
            <option value=''>
              Câmbio
            </option>

            <option value='Manual'>
              Manual
            </option>

            <option value='Automático'>
              Automático
            </option>

            <option value='CVT'>
              CVT
            </option>
          </select>

          <select
            value={form.body}
            onChange={(e) =>
              setForm({
                ...form,
                body: e.target.value,
              })
            }
            className='bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
          >
            <option value=''>
              Carroceria
            </option>

            <option value='Sedan'>
              Sedan
            </option>

            <option value='Hatch'>
              Hatch
            </option>

            <option value='SUV'>
              SUV
            </option>

            <option value='Picape'>
              Picape
            </option>
          </select>

          <input
            placeholder='URL da imagem'
            value={form.image}
            onChange={(e) =>
              setForm({
                ...form,
                image: e.target.value,
              })
            }
            className='md:col-span-2 bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none'
          />

          <textarea
            placeholder='Descrição'
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description:
                  e.target.value,
              })
            }
            className='md:col-span-2 bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none min-h-[140px]'
          />
        </div>

        <button
          onClick={addCar}
          className='mt-8 w-full bg-red-600 hover:bg-red-700 transition py-5 rounded-2xl font-black text-lg'
        >
          {editingId
            ? 'Salvar Alterações'
            : 'Adicionar Veículo'}
        </button>

        <div className='mt-16'>
          <h2 className='text-3xl font-black mb-8'>
            Veículos cadastrados
          </h2>

          <div className='space-y-5'>
            {cars.map((car) => (
              <div
                key={car.id}
                className='bg-black border border-zinc-800 rounded-2xl p-5 flex flex-col md:flex-row gap-5 md:items-center md:justify-between'
              >
                <div className='flex gap-5 items-center'>
                  <img
                    src={car.image}
                    alt={car.model}
                    className='w-32 h-24 object-cover rounded-xl'
                  />

                  <div>
                    <h3 className='text-2xl font-black'>
                      {car.brand}{' '}
                      {car.model}
                    </h3>

                    <p className='text-red-500 font-bold'>
                      {car.price}
                    </p>

                    <p className='text-zinc-400'>
                      {car.year} •{' '}
                      {car.km}
                    </p>

                    <p className='text-zinc-500 text-sm mt-1'>
                      Vendedor:{' '}
                      {car.seller}
                    </p>
                  </div>
                </div>

                <div className='flex gap-3'>
                  <button
                    onClick={() =>
                      editCar(car)
                    }
                    className='bg-yellow-500 text-black px-5 py-3 rounded-xl font-bold'
                  >
                    Editar
                  </button>

                  <button
                    onClick={() =>
                      deleteCar(car.id)
                    }
                    className='bg-red-600 px-5 py-3 rounded-xl font-bold'
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}