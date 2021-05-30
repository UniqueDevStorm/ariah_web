import Link from "next/link";

export default function Header() {
    return (
        <nav className='w-full flex py-3 px-12 sm:px-80 sm:py-5'>
            <div>
                <Link href='./'>
                    <a href='./'>
                        <h1 className='text-gray-700 text-2xl font-semibold'>Ariah</h1>
                    </a>
                </Link>
            </div>
            <div className="flex-grow"/>
            <div>
                <Link href='https://discord.gg/4bvNzCRe'>
                    <a href='https://discord.gg/4bvNzCRe' target='_blank'>
                        <h1 className='transition duration-500 hover:text-black sm:text-xl text-lg font-thin text-gray-400'>디스코드</h1>
                    </a>
                </Link>
            </div>
        </nav>
    )
}