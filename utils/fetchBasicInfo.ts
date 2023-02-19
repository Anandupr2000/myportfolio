import {BasicInfo} from "../typings"
export const fetchBasicInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBasicInfo`)
    const data = await res.json()
    // type checking
    const basicInfo:BasicInfo = data.basicInfo
    // console.log(basicInfo)
    return basicInfo
}