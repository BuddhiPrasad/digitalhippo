import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProducReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { BadgeDollarSign, Divide, EarthLock, Icon, Map, Plane } from "lucide-react";
import Link from "next/link";


const perks =[
  {
    name:'Ultimate Flexibility',
    Icon: EarthLock,
    Description :'You’re in control, with free cancellation and payment options to satisfy any plan or budget.',
  },
  {
    name:'Memorable Experiences',
    Icon: Map,
    Description :'Browse and book tours and activities so incredible, you’ll want to tell your friends.',
  },
  {
    name:'Quality at Our Core',
    Icon: BadgeDollarSign,
    Description :'High quality standards. Millions of reviews. A Tripadvisor company.'
  },
  {
    name:'Award-Winning Support',
    Icon: Plane,
    Description :'New price? New plan? No problem. We’re here to help, 24/7.'
  }
]

export default function Home() {
  return (
    <>
   <MaxWidthWrapper>
    <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Customize & Book Amazing <span className='text-blue-600'>Holiday Packages</span>.</h1>
      <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Obsessed with the item of empowering the travelers with best reaction deals,traveltrix.we are an online marketplace that connects traveler themes to multiple local traveltrix has been able to cater to the needs</p>
      <div className='flex flex-col sm:flex-row gap-4 mt-6'>
        <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
        <Button variant='ghost'>Our quality promis &rarr;</Button>
      </div>
    </div>

    <ProducReel/>
    
    </MaxWidthWrapper>


    <section className='border-t border-gray-200 bg-gray-50'>
      
      <MaxWidthWrapper className='py-10'>
        <div className='text-center flex flex-col items-center'>
          <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Why book with DigitalHippo?</h1>
        </div>

        <div className='py-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0'>
        {perks.map((perks) =>(
          <div key={perks.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
            <div className='md:flex-shrink-0 flex justify-center'>
              <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                {<perks.Icon className='w-1/3 h-1/3'/> }
              </div>
            </div>

            <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
              <h3 className='text-base font-medium text-gray-900'>{perks.name}</h3>
              <p className='mt-3 text-sm text-muted-foreground'>{perks.Description}</p>
            </div>
          </div>
        ))}    
        </div>
      </MaxWidthWrapper>
    </section>            
    </>
  );
}
