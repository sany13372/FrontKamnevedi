export const filtersArray = (arr1: any, arr2: string[]) => {

    const s = new Set(arr2);
    const newArr = arr1.filter((e:any) => !s.has(e.id))

    return newArr
}