import Link from "next/link";
import Logo from "@assets/Logo.png";

export default function Navbar() {
    return (
        <nav>
            <div className='float-left'>
                <Link href='./'>
                    <a href='./'>
                        <div className='sm:pl-20 sm:pt-5 pl-8 pt-3'>
                            <img src={Logo} alt='Logo' width={100} />
                        </div>
                    </a>
                </Link>
            </div>
            <div className='float-right'>
                <div>
                    <Link href='https://discord.gg/CfXfrqSX'>
                        <a href='https://discord.gg/CfXfrqSX'>
                            <h1 className='text-xl font-thin pr-10 pt-5 text-gray-400'>디스코드</h1>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}