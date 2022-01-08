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
import {useWindowSize} from '../../hooks/use-window-size'

const MobileDialog = React.lazy(() => import('../mobile-dialog/MobileDialog'))

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
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const navigate = useNavigate()
  const {width} = useWindowSize()

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

  if (width < 640)
    return (
      <>
        <button
          className="rounded-[59px] relative bg-white py-1 font-brand tracking-wide text-[#291507] text-[13px] font-medium w-[96px]"
          onClick={() => setShowDialog(true)}
        >
          <span className="mr-[20px]">Search</span>
          <i className="absolute right-2 top-2">
            <MdSearch
              style={{color: '#291507'}}
              size={20}
              // style={{color: 'white'}}
            />
          </i>
        </button>
        <React.Suspense fallback={'loading...'}>
          <MobileDialog
            showDialog={showDialog}
            open={open}
            close={close}
            searchResults={searchResults}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </React.Suspense>
      </>
    )

  return (
    <Combobox aria-label="Cats">
      <label className="relative">
        <ComboboxInput
          type="text"
          className="relative rounded-[59px] py-1 md:py-3 placeholder:font-brand placeholder:tracking-wide  placeholder:py-4 placeholder:text-[#291507] placeholder:pl-4 md:placeholder:pl-9 placeholder:text-[12px] placeholder:font-medium  md:placeholder:text-inherit placeholder:my-4 w-[96px] md:w-96"
          placeholder={width < 640 ? 'Search' : 'Enter your breed'}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <i className="absolute right-1 bottom-1">
          <MdSearch
            // style={{color: 'white'}}
            style={{color: '#291507'}}
          />
        </i>
      </label>
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
