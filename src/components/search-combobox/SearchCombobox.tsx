import * as React from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'
import '@reach/combobox/styles.css'
import {MdSearch} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import {incrementSearchCount} from '../../data/data'

interface SearchComboboxProps {
  searchResults: Array<any> | null
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchCombobox({
  searchResults,
  searchText,
  setSearchText,
}: SearchComboboxProps) {
  const [lastSearched, setLastSearched] = React.useState<string | null>(null)
  const navigate = useNavigate()

  console.log(searchResults)

  // * feature for storing most popular breeds in this site, server is maintaining the count for every successful(single match) search and then increments it
  React.useEffect(() => {
    if (!searchResults) return
    if (searchResults.length > 1 || searchResults.length === 0) return
    if (lastSearched && lastSearched.includes(searchText.toLowerCase())) return
    incrementSearchCount(searchResults[0].id).then(res =>
      setLastSearched(res.name),
    )
  }, [searchResults])

  React.useEffect(() => {
    if (searchText.length === 0) setLastSearched(null)
  }, [searchText])

  return (
    <Combobox aria-label="Cats">
      <ComboboxInput
        type="text"
        className="relative rounded-[59px] h-16 placeholder:font-brand placeholder:align-text-top  placeholder:text-[18px] placeholder:text-[#291507] placeholder:pl-9 w-96"
        placeholder="Enter your breed"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <i className="absolute bottom-5 right-8">
        <MdSearch style={{color: '#291507'}} />
      </i>
      {searchResults && (
        <ComboboxPopover className="shadow-popup max-h-[220px] overflow-y-scroll rounded-[24px] mt-5">
          {searchResults.length > 0 ? (
            <ComboboxList>
              {searchResults.map(cat => {
                return (
                  <ComboboxOption
                    key={cat.id}
                    value={cat.name}
                    onClick={() => navigate(`/breeds/${cat.id}`)}
                  />
                )
              })}
            </ComboboxList>
          ) : (
            <span className="block m-[8px]">No results found</span>
          )}
        </ComboboxPopover>
      )}
    </Combobox>
  )
}
