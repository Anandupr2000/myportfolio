import {Project} from "../typings"
import axios from "axios"

export const fetchProjects = async () => {
    // try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
        // const data = await res.json()
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
        const data = await res.data
        // type checking
        const projects:Project[] = data.projects
    
        return projects
    // } catch (error) {
    //     console.log(error)
    //     return []
    // }
}