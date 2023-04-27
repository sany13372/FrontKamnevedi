import {IUser} from "@/types/all.interface";

interface IInitialState {
    users:IUser[]
    selectedUsers:IUser[]
}

export const enum REDUCER_ACTION_TYPE{
    setUsers,
    selectUser,
    removeUser
}

type ReducerAction = {
    type:REDUCER_ACTION_TYPE
    payload:any | IUser
}
export const initialState:IInitialState = {
    users:[
        {
            firstName:'Ben',
            lastName:'Paulson',
            status:'Shortlisted',
            score:231,
            rank:1
        },
        {
            firstName:'Andrew',
            lastName:'Miller',
            status:'New',
            score:224,
            rank:2
        },
        {
            firstName:'Jason',
            lastName:'Blumenthal',
            status:'Completed',
            score:199,
            rank:6
        },
        {
            firstName:'Liam',
            lastName:'Blanc',
            status:'Completed',
            score:147,
            rank:7
        },
        {
            firstName:'Mindy',
            lastName:'Kailing',
            status:'On hold',
            score:126,
            rank:8
        },
        {
            firstName:'Fred',
            lastName:'Asher',
            status:'Invited',
            score:null,
            rank:null
        },
        {
            firstName:'Drew',
            lastName:'Seymour',
            status:'Invited',
            score:null,
            rank:null
        },
        {
            firstName:'Ivana',
            lastName:'Johnson',
            status:'Invited',
            score:null,
            rank:null
        },
        {
            firstName:'Ephriam',
            lastName:'Halliday',
            status:'Invited',
            score:null,
            rank:null
        },
        {
            firstName:'George',
            lastName:'Miller',
            status:'Invited',
            score:null,
            rank:null
        },
        {
            firstName:'Samantha',
            lastName:'Cooper',
            status:'Pending',
            score:null,
            rank:null
        },
        {
            firstName:'Kayvon',
            lastName:'Beykpour',
            status:'Abandoned',
            score:null,
            rank:null
        },
        {
            firstName:'Chadwick',
            lastName:'Hart',
            status:'Abandoned',
            score:null,
            rank:null
        },
        {
            firstName:'Vlad',
            lastName:'Tolstoy',
            status:'Rejected',
            score:null,
            rank:null
        },
        {
            firstName:'Pierre',
            lastName:'Osborne',
            status:'Refused',
            score:null,
            rank:null
        },
        {
            firstName:'Wendy',
            lastName:'Bentham',
            status:'Refused',
            score:null,
            rank:null
        },
        {
            firstName:'William',
            lastName:'Higgins',
            status:'Refused',
            score:null,
            rank:null
        },
    ],
    selectedUsers:[]
}
export const reducer = (state:IInitialState,action:ReducerAction):IInitialState => {
    switch (action.type){
        case REDUCER_ACTION_TYPE.setUsers:
            return{...state,users:action.payload}
        case REDUCER_ACTION_TYPE.selectUser:
           // state.selectedUsers.push(action.payload)
            return{...state,selectedUsers:[...state.selectedUsers,action.payload]}
        case REDUCER_ACTION_TYPE.removeUser:
            return{...state,selectedUsers:state.selectedUsers.filter((user:IUser) => user.firstName !== action.payload)}
    }
}