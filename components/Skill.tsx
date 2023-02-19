import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    directionLeft?: boolean
    skill : Skill
}
function Skill({ directionLeft, skill }: Props) {
    return (
        <div className='relative group flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{once:false,}}
                className="w-16 h-16 md:w-20 md:h-20 border hover:border-[3px] border-gray-600 object-cover 
                rounded-full 2xl:w-24 2xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
                // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEX/////yyv/yir/yyz/zC//yy7/yy3/yin/zDD1ggv/pg//pxP/pAz0gAr/qRfzfgv/1FL/qADvdAj7nwv/3FT/pwD/8Lr0oDbubgD/rAD9ow/5nQ76tTzzmjL/uz//+vL/5r3/8t3/+er/tCT/ziP1lxD/8cTwkA/3kgD/0SL77NL8wyb/uDL/68j/v1H/vkT/3J3/5LL/x2T/z3//2T3/+Nz/1jP/3qf/2kr2igz5thb/14z/x1n/3KL/2JX/xGz/tiz/5HH/4Gr/vlr/6p//4IP/56j/0YL/44L/88z/6JT/2nH/26n/3k//v2Hxqjr+qjH527rzvmmZurbuAAAM9klEQVR4nO2daXvaSBaFI/alwNFguUfgRhtu26wG0sGWbSBJz7iXTC/5/z9mqkosWqokILUIHs7nfND7nFO37q0q4nfvzjrrrLPOOuuss5JlPTw/WLI/gqdmo36/P5rJ/gx+Go/qSO2x7A/hpnbdU9+Q/SWcZOtVDFjVX2V/CicN9JWH2ost+1v46HVNWNfnsr+Fj57VNWG9fZpbxmJLqL/J/hgesoeVDWFF78r+HA7qtqv10zZxsNwC1ivtEzRxrPsI6+rk9Lb9V9VPWHdM2R/EWsY0QFitD2V/EWsZLwELYe92ag243Q4S1rXJifVulhMirDonZqKphgjr6ui0ercHPexh9cQa8KkeBqxWlye1J470CGBVf5b9VSzlRAHr2uiEejdbrYYBT8zEgU4ArFacgewPY6aZTgCEJk5kfxgzPeskwFMycXuEUQ0InMoUZQ81IiA00ZT9bWxkjSpEwGqVPgpbD/MjusYZLKtkwGpFpZyAP/SXzrL/IPY7D5fpVMmAUORrjPGyDgCoL49lAPGOMIiAFZ143dbWQKVSAVpb9KceJmOq0QBhOSVNUQ86AoSI+nHk1JioVEBoYnSKsoYeIEQcHkW1sUd0wGpVi15jvOobQlolSpcsh86HTAz3blZbq6yl9Y/BxIEaRwi3/RDEs74BhCYeww3ALJ6wqk0D/9x2Kj4B5wgO5aZ6PCFYmv5//qYGCLUjMHEYTwgX28K37XfboBJAPIJrHCemkiJAmERz+6+fAxailZj6owBbSwCEJm57l4FTCQnsOkXaP139JmUa68aFdAWxvcaYqBFCdbejgKtPj4+Pn37jxkHXWKendEOxvsboOiAMCPl3WYlXl6VcPl+6/JkrDFFzOuGWY/WOyJhEAAFE3OEo4OpDJl8qlbIfP/PmiWqh0gh9IJrXgJtLEAGEhMHthKSry0yuhJTNCV+KxheQDAiTiBpwY6FFASGilmTi1WXOAyzl74XH1BpVkgERIlyJYxU0o4BQavwofPUhuwKEhFeCwDYa9MmE4ZKJtr3rShMKgDBgwii8iWiplCvd/yKKbC3TIRKGAWHvYplqo4EQm2FAAOJuxbcRLeVyuc5/xLF5eiX23RHAShMshi0oCAkigKAxpDbgvohCwFzxs+hS80ZqaQiAzcbNzYoQmwiCIp/nvEMOBgBzyqXgidKYEDyMAkLCVvnpBkEiQhAGBNqQbE0wokiPgtsaexQlJAI2n8rl2zVimA+VU2IDDjf6EGDu409iCQlHGARAbGF5hYhWIkEOwcSry0IYMNf5r1jCbsRCMmDzDhE+3dIJ1ejJYjSiiPB3sYQzrZIMWIFlpox1ixGJMY2OwqEquib8JLaYvum7ADYbTx4hNrFFMTF0shquoispl2JPdl70ZEBIuLJwYyKJEARPFokRzeXyykex24Wj7QLYfKqVdzDRPwqTIwpHxEJHaDE11GRAZOFFOWgiGVHfukOJaB6qI7Qz/Vmt7AC4XoVJJoLNySotokj3v4okHOs7AG5X4cbEFrmcrkdhakSxh5ciCed6EmDIQmTiLd1E72Q1JqJQSk4k4VRLAqyELNyYSCSsD97FRxQq0xG4XWyPMOiAjWYQEJtI3THaKKLRVs0HCBeiwN7bGoFEB/2FNGklNhqa6Z/oiYD5e4GdaXd1hEEFhBYGVyFUjWpio9G6e4mPKC41AjtT00kCbDbuyhHdkneMZqN1cx1bZDwV/xBH+FVNBGxFAWvk3g0Dvs/nEwALhaLAznQOkgCbdzUCIslEFNHr96UkBwuFQuZ/ws5M8REGHRA0V4MvJaeNRiSi+R0AC9kPwoqpPVTjAAGyMFxI1zsGNrERimhikSlgwo6wU2G7r9EBkYWkVRhYic29I4oJhfXe3chlYMjCxhNhFW52jK2Je0QUqfOrqDF/nGThDZlvuxKbe0cUE34WVUzDd/IBoUIa3uzJJu4VUSTlURThSwwhup9okcuMz0SICLVXRBFhR9R2EVNoUEapq3Bj4k1rBbhHRIUWU7qFAIQHX5KJt/gmY8+IQsDMvaDO1EqyMBbQMxEy7hnRQjabvRd0m2/qVMBkC2u12i1GvNs3olCdRzGED3RCXEhjViECRCbe3j7tG1EkpSOGcEpNKerXIoNvGBDn9Hb/iEJlxLxXMP4MP47xW9iKW4U1rIvy7dNf+0cUKn8v5FTYHlII0SokDb5hQKi/DogoVEHMe4Vun24hbWoKAv7rh8sdBt4oIFyHQt4rmJFnhmsLAXnwjQLuMtETALNZMe8VvlJKKR4qdnDw3z+8Lx0ImBVzkDEH5PE33sLvjygupiLGfIOyWaA6Q1+FLCKKJOK9gjEktqV43KMWUiYRxV2NgFNh8hEGiLWQTURhLVU6v/MvNV1SocFnLtR+jVVEFUgo4L2CSdjvV0cSnCOqIEIBxZRwhLE6dKFYyC6iSALeK0wiKfUAaVMTw4hiE/lvF+2wh+uTT3LLXVsTMogokoArNjIgzcINIJOIKkqG/3sFSwMEQFoh9QG+zzEARKWGN+FAJwHCQkoafFlHFBF+5E34qpMAyYWUdUQ9RN7bReBnhNsbJOJ1IfOI4oXIu5j6fxyyveVsESzkEFGoLO8fXviPMLaXgKSpyR9RZg6i7YLzqbDvp6A+wEY5Qsglongdcn6vMHCiv3xpEm58+UQUqcj5im1zhOEHjLbcvCKKCDm/V5iDMCCpkHKLKBLfgwxjGv1pD7SwRgFkHlFcargWU8O7HA0ARvo1f0TZAyp83yt4RxhBwFatRgNkH1FEyPW9goX+exIQJAwVUr4RRYRci6kJQBgwVEg5VtG1uL5XmGuhX5+FW25/RLk4iEzkuV0s1KiFNZERxYQ8i2k7QvhEBOQXUTRd8OxMdS1sIQWQSxVd6f4TP0A7tAiDq1BIRFFKOb5XGKihMnNDAuSz0W9V7PDbEGfBZRiwUEQV9dYhz/cKz4HNotm8IQByjigEzHB8r7AAQcLtTrF18Ee+Ec0gQm6dqTEElMFXYESh+L1XsNqUVbiN6I8CADPFP3iVmoETALyLAIqIKCLkdsU21v2Am35NbEQRIbf/X+HV19E0NhYKjigi5PVewZj6AdcniKIjigh5vVcwJpp/FV7IiSguppx6b7ut+VehpIhiQk7vFSzdF1Jvp5AQUUzIqZgOfIAteRGFUj7wea+wLaWrG185EcWlhs92sVC3FtbkRRTHlE8xHWmBVSgrorj35tOZOtpm8JUZUewhlx9e2MBvocSIolLD5b3C+gijAS2syYwoLjU8totV341/uSU1opliscjlIONZW1t4UZYaUQiY4XLFtghbKCmiRUzIoTM1vmymJtkRhepweN7mHWGgn/3IjiiUUnzPvtQMluvjJ9kRxeLwXsHUvVVYlh9RJA7vFXDf3UCDr+yIYnEopm/r46cURBSVGuanwvgIY1VIpUcUF1PWYz46wmh4FsqPKCJk/l7BcnDLfeEBynYQEjJ/rzDQ0CpMSUQxIuvtYrayMBURxYSsi+lUw1NTOiKKO1PWxXSoIQvTElG0IbJ+SesAuFOkJqK41LAFNPAqTEtEPUS2hF0AB9/0RBTHlO12MdaghemJKC41bK/Y5uAuVRFFhGxPhaeNp1RFFBKyfa9gfLlLVUQRIdv3Ctb1RbocRGJ6xdb9O32AxUeWnek/f6crolhM3yv8M+rlVi9GUwPYc02GhO/Mvuv9r0cpAez03KXJeMqfDRFjOgCVojuk/YGa75A1b/dKKQDMKBm3P+fzVKE7cXvSARWlp3/j9/cvB5N+TzJgb7nY8U9DHibDHMHlKKvZhv65Q9YFJiJ7vuwFCAUCFt3lq4j/KMqetn2MwgAh3/WbqP9mtzt1e6WcUEAl03PfBP6BXW85CgP0FiDXAkPQGHUAYgC9AiOY753XAfgYOQJm3NFMzp/xtlAHkOULCAPqulMpf/EYq/sNMvIEVIq95VTwXz4Myhi/IMYMF0BcYBamTD4k+9V1CwoXByGfw72D2UX2c7vHARAWmOGrbLa18HJUWAJ6I5LUBRiUYQ7dnsIOEC3AicAOZifNhi78fEaAvEekw2S/9t389wNmikJGpMNkweUIGb4PEI4QzoOcDmYXdf/s974LEHYw4kakg2SYE5fOmASICozIEekwGQ9Ll1Jv4gFXI1KqDVzJmPfdAxyUNCIdpsF0GS058YBoRBJyBsNIxqDt9jo7A+IR6dsR8WGNvwRKThygkpE9Ih0m+6G97QDogLjATEzZX3uYrDe9l+ggGpHGx1BAyep+wx0AHTBVI9JBMgYvuJMjA6IR6e0IF2BQ9mzpZqKIXgejp25EOkjG87UbRvRGpGMtMFF1n91e0EdUYEYpHZEO02DoX45oATqcrnHlCZ1zrPq4Ys+9lnjIy03218XSxXJG85MoMFEZljmfTt9m3VPL51lnnXXWWWedJV3/Byyb3bsUi1o5AAAAAElFTkSuQmCC"
                src={urlFor(skill.image).url()}
            />
            <div className='absolute opacity-0 flex flex-col items-center justify-center
            group-hover:opacity-80 group-hover:bg-white group-hover:rounded-full
            w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 z-0'>
                <p className="text-md md:text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
            </div>
        </div>
    )
}

export default Skill