/* import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const people = ['innova', 'Xenia', 'Avanza', 'Ferarri']

export default function MyCombobox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson} as='div' className='relative'>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} className='bg-white h-9 focus-visible:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500 text-xs p-3 outline-none border-slate-400 border-2' />
      <Combobox.Options className=' absolute top-full bg-red-200 w-full flex flex-col'>
        {filteredPeople.map((person) => (
          <Combobox.Option key={person} value={person} className='bg-white shadow-lg p-3 capitalize hover:text-green-700 hover:bg-green-200 hover:font-semibold text-xs'>
            {person}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}
 */