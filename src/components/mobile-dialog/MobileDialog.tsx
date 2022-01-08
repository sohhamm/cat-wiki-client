import * as React from 'react'
import {Dialog, DialogOverlay, DialogContent} from '@reach/dialog'
import '@reach/dialog/styles.css'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'
import '@reach/combobox/styles.css'
import {MdSearch, MdOutlineClose} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

interface MobileDialogProps {
  showDialog: boolean
  open: () => void
  close: () => void
  searchResults: Array<any> | null
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export default function MobileDialog({
  showDialog,
  open,
  close,
  searchResults,
  searchText,
  setSearchText,
}: MobileDialogProps) {
  let navigate = useNavigate()
  return (
    <Dialog
      isOpen={showDialog}
      onDismiss={close}
      className="w-[100vw] h-[100vh] bg-white m-0"
      aria-label="search cats"
    >
      <MdOutlineClose
        style={{color: '#291507'}}
        onClick={close}
        size={25}
        className="mb-[30px] ml-auto"
      />
      <Combobox aria-label="Cats">
        <label className="relative">
          <ComboboxInput
            type="text"
            className="relative rounded-[59px] placeholder:font-brand tracking-wide py-2 placeholder:text-[#291507] text-[#291507] pl-4 text-[15px] placeholder:font-medium font-medium my-4 w-[100%] border-[1px] border-[#291507]"
            placeholder={'Enter your breed'}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <i className="absolute right-5 -bottom-[2px]">
            <MdSearch style={{color: '#291507'}} size={25} />
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
    </Dialog>
  )
}
