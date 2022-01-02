import * as React from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox'
import '@reach/combobox/styles.css'
import {MdSearch} from 'react-icons/md'

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
  console.log(searchResults, 'combobox')
  return (
    <Combobox aria-label="Cats">
      <ComboboxInput
        type="text"
        className="relative rounded-[59px] h-16 placeholder:font-brand  placeholder:text-[18px] placeholder:text-[#291507] placeholder:pl-9 min-w-[400px]"
        placeholder="Enter your breed"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <i className="relative bottom-11 left-[11.5em]">
        <MdSearch style={{color: '#291507'}} />
      </i>
      {searchResults && (
        <ComboboxPopover className="shadow-popup">
          {searchResults.length > 0 ? (
            <ComboboxList>
              {searchResults.map(cat => {
                return <ComboboxOption key={cat.id} value={cat.name} />
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
