import { Skill } from "../typings"
export const fetchSkills = async () => {
    // try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
        const data = await res.json()
        // type checking
        const skills: Skill[] = data.skills

        return skills
    // } catch (error) {
    //     console.log(error)
    //     return []
    // }
}