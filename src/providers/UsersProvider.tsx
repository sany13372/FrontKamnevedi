import {createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react'
import {IUser} from "@/types/all.interface";


export interface IUsersContext {
    users: IUser[];
    setUsers: (user: IUser[]) => void
    usersPaginate: IUser[];
    setUsersPaginate: (user: IUser[]) => void
    selectUser: IUser
    setSelectUser: (selectUser: IUser) => void
    isReminds: boolean
    setIsReminds: (reminds: boolean) => void

}

export const usersDefault: IUser[] = [
    {
        id: '1',
        firstName: 'Ben',
        lastName: 'Paulson',
        status: 'Shortlisted',
        score: 231,
        rank: 1
    },
    {
        id: '2',
        firstName: 'Andrew',
        lastName: 'Miller',
        status: 'New',
        score: 224,
        rank: 2
    },
    {
        id: '3',
        firstName: 'Jason',
        lastName: 'Blumenthal',
        status: 'Completed',
        score: 199,
        rank: 6
    },
    {
        id: '4',
        firstName: 'Liam',
        lastName: 'Blanc',
        status: 'Completed',
        score: 147,
        rank: 7
    },
    {
        id: '5',
        firstName: 'Mindy',
        lastName: 'Kailing',
        status: 'On hold',
        score: 126,
        rank: 8
    },
    {
        id: '6',
        firstName: 'Fred',
        lastName: 'Asher',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        id: '7',
        firstName: 'Drew',
        lastName: 'Seymour',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        id: '8',
        firstName: 'Ivana',
        lastName: 'Johnson',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        id: '9',
        firstName: 'Ephriam',
        lastName: 'Halliday',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        id: '10',
        firstName: 'George',
        lastName: 'Miller',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        id: '11',
        firstName: 'Samantha',
        lastName: 'Cooper',
        status: 'Pending',
        score: null,
        rank: null
    },
    {
        id: '12',
        firstName: 'Kayvon',
        lastName: 'Beykpour',
        status: 'Abandoned',
        score: null,
        rank: null
    },
    {
        id: '13',
        firstName: 'Chadwick',
        lastName: 'Hart',
        status: 'Abandoned',
        score: null,
        rank: null
    },
    {
        id: '14',
        firstName: 'Vlad',
        lastName: 'Tolstoy',
        status: 'Rejected',
        score: null,
        rank: null
    },
    {
        id: '15',
        firstName: 'Pierre',
        lastName: 'Osborne',
        status: 'Refused',
        score: null,
        rank: null
    },
    {
        id: '16',
        firstName: 'Wendy',
        lastName: 'Bentham',
        status: 'Refused',
        score: null,
        rank: null
    },
    {
        id: '17',
        firstName: 'William',
        lastName: 'Higgins',
        status: 'Refused',
        score: null,
        rank: null
    },
    {
        id: '18',
        firstName: 'Ben',
        lastName: 'Paulson',
        status: 'Shortlisted',
        score: 231,
        rank: 1
    },
    {
        id: '19',
        firstName: 'Andrew',
        lastName: 'Miller',
        status: 'New',
        score: 224,
        rank: 2
    },
    {
        id: '20',
        firstName: 'Jason',
        lastName: 'Blumenthal',
        status: 'Completed',
        score: 199,
        rank: 6
    },
    {
        id: '21',
        firstName: 'Liam',
        lastName: 'Blanc',
        status: 'Completed',
        score: 147,
        rank: 7
    },
    {
        id: '22',
        firstName: 'Mindy',
        lastName: 'Kailing',
        status: 'On hold',
        score: 126,
        rank: 8
    },
    {
        id: '23',
        firstName: 'Fred',
        lastName: 'Asher',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        id: '24',
        firstName: 'Drew',
        lastName: 'Seymour',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        id: '25',
        firstName: 'Ivana',
        lastName: 'Johnson',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        id: '26',
        firstName: 'Ephriam',
        lastName: 'Halliday',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        id: '27',
        firstName: 'George',
        lastName: 'Miller',
        status: 'Invited',
        score: null,
        rank: null
    },
    {
        id: '28',
        firstName: 'Samantha',
        lastName: 'Cooper',
        status: 'Pending',
        score: null,
        rank: null
    },
    {
        id: '29',
        firstName: 'Kayvon',
        lastName: 'Beykpour',
        status: 'Abandoned',
        score: null,
        rank: null
    },
    {
        id: '30',
        firstName: 'Chadwick',
        lastName: 'Hart',
        status: 'Abandoned',
        score: null,
        rank: null
    },
    {
        id: '31',
        firstName: 'Vlad',
        lastName: 'Tolstoy',
        status: 'Rejected',
        score: null,
        rank: null
    },
    {
        id: '32',
        firstName: 'Pierre',
        lastName: 'Osborne',
        status: 'Refused',
        score: null,
        rank: null
    },
    {
        id: '33',
        firstName: 'Wendy',
        lastName: 'Bentham',
        status: 'Refused',
        score: null,
        rank: null
    },
    {
        id: '34',
        firstName: 'William',
        lastName: 'Higgins',
        status: 'Refused',
        score: null,
        rank: null
    },
]
export const UsersContext = createContext<IUsersContext>({} as IUsersContext)

const UserProvider: FC<PropsWithChildren> = ({children}) => {


    const [users, setUsers] = useState<IUser[]>([])
    const [usersPaginate, setUsersPaginate] = useState<IUser[]>([])
    const [selectUser, setSelectUser] = useState<IUser>({} as IUser)
    const [isReminds, setIsReminds] = useState<boolean>(false)

    const values = useMemo(() => ({
        users,
        setUsers,
        selectUser,
        setSelectUser,
        isReminds,
        setIsReminds,
        usersPaginate,
        setUsersPaginate
    }), [users, selectUser, isReminds, usersPaginate])

    return <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
}

export default UserProvider
export const useUsers = () => useContext(UsersContext)