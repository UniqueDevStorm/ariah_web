import Navbar from "@components/Navbar";
import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <div>
            <NextSeo
                title='Team Ariah'
                description='팀 Ariah 메인 페이지입니다.'
            />
            <Navbar />
        </div>
    )
}