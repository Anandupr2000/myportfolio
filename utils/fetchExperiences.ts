import { Experience } from "../typings"
import axios from "axios"
export const fetchExperiences = async () => {
    // try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
        let data = undefined;
        let experiences: Experience[] = [];
        // console.log(res)
        // data = await res.json()
        // data = await res.json()
        data = await res.data
        if (data.length > 0) {
            // type checking
            experiences = data.experiences
        }

        return experiences
    // } 
    // catch (error) {
    //     console.log(error)
    //     return []
    // }
}