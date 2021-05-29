import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div className='float-left'>
                <Link href='./'>
                    <a href='./'>
                        <div className='sm:pl-80 sm:pt-5 pl-12 pt-3'>
                            <h1 className='text-gray-700 text-2xl font-semibold'>Ariah</h1>
                        </div>
                    </a>
                </Link>
            </div>
            <div className='float-right'>
                <div>
                    <Link href='https://discord.gg/CfXfrqSX'>
                        <a href='https://discord.gg/CfXfrqSX' target='_blank'>
                            <h1 className='sm:text-xl text-lg font-thin sm:pr-80 sm:pt-5 pr-12 pt-5 text-gray-400'>디스코드</h1>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}