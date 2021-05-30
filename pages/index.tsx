import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <div>
            <NextSeo
                title='Team Ariah'
                description='팀 Ariah 메인 페이지입니다.'
            />
            <div className='sm:pl-52 sm:pt-52'>
                <h1 className='sm:text-6xl text-gray-300'>Team Ariah.</h1>
                <h1 className='sm:text-2xl text-blue-400'>유저가 만드는 공간</h1>
                <h1 className='sm:text-2xl text-blue-400'>Team Ariah</h1>
            </div>
        </div>
    )
}