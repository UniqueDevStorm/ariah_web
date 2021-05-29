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
                <Link href='https://discord.gg/CfXfrqSX'>
                    <a href=''>
                        <div>

                        </div>
                    </a>
                </Link>
            </div>
        </nav>
    )
}