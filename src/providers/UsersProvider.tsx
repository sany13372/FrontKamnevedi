import {createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react'
import {IUser} from "@/types/all.interface";


export interface IUsersContext {
    users: IUser[];
    setUsers: (user: IUser[]) => void
    selectUser: IUser
    setSelectUser: (selectUser: IUser) => void
    isReminds: boolean
    setIsReminds: (reminds: boolean) => void

}

export const usersDefault = [
    {
        firstName: 'Ben',
        lastName: 'Paulson',
        status: 'Shortlisted',
        score: 231,
        rank: 1
    },
    {
        firstName: 'Andrew',
        lastName: 'Miller',
        status: 'New',
        score: 224,
        rank: 2
    },
    {
        firstName: 'Jason',
        lastName: 'Blumenthal',
        status: 'Completed',
        score: 199,
        rank: 6
    },
    {
        firstName: 'Liam',
        lastName: 'Blanc',
        status: 'Completed',
        score: 147,
        rank: 7
    },
    {
        firstName: 'Mindy',
        lastName: 'Kailing',
        status: 'On hold',
        score: 126,
        rank: 8
    },
    {
        firstName: 'Fred',
        lastName: 'Asher',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        firstName: 'Drew',
        lastName: 'Seymour',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        firstName: 'Ivana',
        lastName: 'Johnson',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        firstName: 'Ephriam',
        lastName: 'Halliday',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        firstName: 'George',
        lastName: 'Miller',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        firstName: 'Samantha',
        lastName: 'Cooper',
        status: 'Pending',
        score: null,
        rank: null
    },
    {
        firstName: 'Kayvon',
        lastName: 'Beykpour',
        status: 'Abandoned',
        score: null,
        rank: null
    },
    {
        firstName: 'Chadwick',
        lastName: 'Hart',
        status: 'Abandoned',
        score: null,
        rank: null
    },
    {
        firstName: 'Vlad',
        lastName: 'Tolstoy',
        status: 'Rejected',
        score: null,
        rank: null
    },
    {
        firstName: 'Pierre',
        lastName: 'Osborne',
        status: 'Refused',
        score: null,
        rank: null
    },
    {
        firstName: 'Wendy',
        lastName: 'Bentham',
        status: 'Refused',
        score: null,
        rank: null
    },
    {
        firstName: 'William',
        lastName: 'Higgins',
        status: 'Refused',
        score: null,
        rank: null
    },]
export const UsersContext = createContext<IUsersContext>({} as IUsersContext)

const UserProvider: FC<PropsWithChildren> = ({children}) => {


    const [users, setUsers] = useState<IUser[]>([])
    const [selectUser, setSelectUser] = useState<IUser>({} as IUser)
    const [isReminds, setIsReminds] = useState<boolean>(false)

    useEffect(() => {
        setUsers(usersDefault)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const values = useMemo(() => ({users, setUsers, selectUser, setSelectUser,isReminds,setIsReminds}), [users, selectUser,isReminds])

    return <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
}

export default UserProvider
export const useUsers = () => useContext(UsersContext)