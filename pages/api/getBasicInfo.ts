import { BasicInfo } from '@/typings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

const query = groq`
*[_type=="basicInfo"][0]
`;
type Data = {
    basicInfo: BasicInfo
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    // const pageInfo: PageInfo = await sanityClient.fetch(query) // not working ...🤔
    const basicInfo: BasicInfo = await sanityClient.fetch(query)

    // console.log(basicInfo)
    // console.log(res)
    res.status(200).json({ basicInfo  })
}