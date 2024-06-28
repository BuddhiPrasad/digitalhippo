import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icon } from "lucide-react"
import NavItems from "./NavItems"
import { Button, buttonVariants } from "./ui/button"

const Navbar =() =>{



    return(
        <div className='sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all '>
                <MaxWidthWrapper>
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center'>
                            {/* TODO ; Mobile  */}

                            <div className='flex lg:ml-0'>
                                <Link href='/' className='flex'>
                                    Digital <span className='text-blue-600 font-bold'>Hippo</span>
                                </Link>
                            </div>

                            <div className='h-full flex items-center space-x-4 ml-auto'>
                                <Link href='/packages'>Packages</Link>
                                <Link href='/destinations'>Destinations</Link>
                                <Link href='/aboutus'>About us</Link>
                                <Link href='/contactUs'>Contact Us</Link>
                                
                            </div>

                            <div className='h-full flex items-center space-x-4 ml-auto'>
                                <Link href='/' className={buttonVariants({variant:'ghost'})}>Log in &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            
        </div>
    )
}

export default Navbar