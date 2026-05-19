export default function Filters({
  filters,
  setFilters,
  years,
}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4'>
      <input
        placeholder='Pesquisar'
        value={filters.search}
        onChange={(e) =>
          setFilters({
            ...filters,
            search: e.target.value,
          })
        }
        className='bg-zinc-900 rounded-2xl px-4 py-4 text-white'
      />

      <select
        value={filters.brand}
        onChange={(e) =>
          setFilters({
            ...filters,
            brand: e.target.value,
          })
        }
        className='bg-zinc-900 rounded-2xl px-4 py-4 text-white'
      >
        <option value=''>Marca</option>

        <option value='Chevrolet'>
          Chevrolet
        </option>

        <option value='Fiat'>
          Fiat
        </option>

        <option value='Volkswagen'>
          Volkswagen
        </option>

        <option value='Toyota'>
          Toyota
        </option>

        <option value='Honda'>
          Honda
        </option>

        <option value='Hyundai'>
          Hyundai
        </option>

        <option value='BMW'>
          BMW
        </option>

        <option value='Audi'>
          Audi
        </option>

        <option value='Jeep'>
          Jeep
        </option>

        <option value='Ford'>
          Ford
        </option>
      </select>

      <select
        value={filters.fuel}
        onChange={(e) =>
          setFilters({
            ...filters,
            fuel: e.target.value,
          })
        }
        className='bg-zinc-900 rounded-2xl px-4 py-4 text-white'
      >
        <option value=''>Combustível</option>

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
        value={filters.transmission}
        onChange={(e) =>
          setFilters({
            ...filters,
            transmission: e.target.value,
          })
        }
        className='bg-zinc-900 rounded-2xl px-4 py-4 text-white'
      >
        <option value=''>Câmbio</option>

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
        value={filters.body}
        onChange={(e) =>
          setFilters({
            ...filters,
            body: e.target.value,
          })
        }
        className='bg-zinc-900 rounded-2xl px-4 py-4 text-white'
      >
        <option value=''>Carroceria</option>

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

      <select
        value={filters.year}
        onChange={(e) =>
          setFilters({
            ...filters,
            year: e.target.value,
          })
        }
        className='bg-zinc-900 rounded-2xl px-4 py-4 text-white'
      >
        <option value=''>Ano</option>

        {years.map((year) => (
          <option
            key={year}
            value={year}
          >
            {year}
          </option>
        ))}
      </select>
    </div>
  )
}