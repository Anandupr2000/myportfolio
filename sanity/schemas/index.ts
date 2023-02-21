import pageInfo from './pageInfo'
import basicInfo from './basicInfo'
import experience from './experience'
import education from './education'
import projects from './projects'
import skill from './skill'
import social from './social'
import { createSchema } from 'sanity'

export const schemaTypes = [pageInfo,basicInfo, experience,education, projects, skill, social]

// export default createSchema({
//     // name of schema
//     name:"default",
//     types:schemaTypes.concat(schemaTypes)
// })
