import {Dispatch, FC, SetStateAction, useCallback, useEffect} from 'react';
import SearchImg from '@/components/icons/Search.svg'
import Field from "@/components/UI/Field";
import {useDebounce} from "@/hooks/useDebounce";
import CrossImg from '@/components/icons/CrossMini.svg'

interface ISearchLine {
    defaultValue: any
    value: any
    setValue: any
    searchQuery: string
    setSearchQuery: Dispatch<SetStateAction<string>>
    placeholder: string
    typeSort: any
    className?: string
}

const SearchLine: FC<ISearchLine> = ({
                                         searchQuery,
                                         defaultValue,
                                         setSearchQuery,
                                         value,
                                         setValue,
                                         placeholder,
                                         typeSort,
                                         className
                                     }) => {

    const debounceSearch = useDebounce(searchQuery, 500)

    const searchHandle = () => {
        if (searchQuery !== '') {
            const filterUsers = value.filter((item: any) => item[`${typeSort}`].toLowerCase().indexOf(debounceSearch.toLowerCase()) != -1);
            setValue(filterUsers)
        }
    }

    useEffect(() => {
        searchHandle()
    }, [debounceSearch])

    useEffect(() => {
        if (searchQuery === '') {
            setValue(defaultValue)
        }
    }, [searchQuery])

    return (
        <div className={`flex py-1.5 px-2 border border-solid border-table-item items-center ${className} `}>
            <Field value={searchQuery}
                   setValue={setSearchQuery}
                   className={'w-72'}
                   placeholder={placeholder}
            />
            {searchQuery === '' ?
                <SearchImg onClick={() => searchHandle()} alt={'Картинка'} className={'cursor-pointer'}/> :
                <CrossImg onClick={() => setSearchQuery('')} alt={'Картинка'}
                          className={'cursor-pointer fill-arrow-pg'}/>}
        </div>
    );
}

export default SearchLine;