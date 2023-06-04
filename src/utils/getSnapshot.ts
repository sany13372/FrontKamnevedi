export const getSnapshot = (setValue:any,size:number,val1:boolean,val2:boolean) => {
    if (window.innerWidth <size) {
        setValue(val1)
    } else {
        setValue(val2)
    }
}