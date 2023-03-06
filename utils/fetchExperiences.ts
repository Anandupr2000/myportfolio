import { Experience } from "../typings"
export const fetchExperiences = async () => {
    // try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
        let data = undefined;
        let experiences: Experience[] = [];
        // console.log(res)
        data = await res.json()
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