import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <div>
            <NextSeo
                title='Team Ariah'
                description='팀 Ariah 메인 페이지입니다.'
            />
            <div className='sm:pl-72 sm:pt-52 pt-24 pl-12'>
                <h1 className='sm:text-6xl text-3xl text-black font-bold'>Team Ariah</h1>
                <h1 className='sm:text-2xl text-2xl text-blue-500 font-light'>유저가 만드는 공간</h1>
                <h1 className='sm:text-2xl text-xl text-blue-500 font-light'>Team Ariah</h1>
            </div>
        </div>
    )
}