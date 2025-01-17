import { Section } from "lucide-react"
import Link from "next/link"

const ProducReel =() => {
    return(
        <section className='py-12'>
            <div className='md:flex md:items-center md:justify-between mb-4'>
                <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
                    <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>Brand New</h1>
                </div>

                <div>
                    <Link href='/' className='hidden text-sm font-medium text-blue-600 hover-blue-500 md:block'>Shop the collection &rarr;</Link>
                </div>
            </div>

            <div className='relative'>
                <div className='mt-6 flex items-center w-full'>
                    <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
                        
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ProducReel