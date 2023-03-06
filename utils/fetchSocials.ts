import { Social } from "../typings"
import axios from "axios"

export const fetchSocials = async () => {
    // try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
        // const data = await res.json()
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
        const data = await res.data
        // type checking
        const socials: Social[] = data.socials

        return socials
    // } catch (error) {
    //     console.log(error)
    //     return []
    // }

}