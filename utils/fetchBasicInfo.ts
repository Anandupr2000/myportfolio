import { BasicInfo } from "../typings"
import axios from "axios"
export const fetchBasicInfo = async () => {
    // try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBasicInfo`)
        // const data = await res.json()
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBasicInfo`)
        const data = await res.data
        // type checking
        const basicInfo: BasicInfo = data.basicInfo
        // console.log(basicInfo)
        return basicInfo
    // } catch (error) {
    //     console.log("error @ fetchBasicInfo")
    //     console.log(error);
    //     return :BasicInfo;
    // }
}