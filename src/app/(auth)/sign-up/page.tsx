"user client"


import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils";
import { ArrowRight, Variable } from "lucide-react"
import Link from "next/link"

const Page = () => {
    return <>
    <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex  w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            
            <div className='flex-col items-center space-y-2 text-center'>
                Digital <span className='text-blue-600 font-bold'>Hippo</span>
                <h1 className='text=2xl font-bold'>Create an account</h1>
                <Link className={buttonVariants({variant:'link', className:'gap-2'})} href='/sign-in'>Already have an account? Sign-in <ArrowRight className='h-4 w-4'/></Link>
            </div>

            <div className='grid gap-6'>
                <form>
                    <div className='grid gap-2'>
                        <div className='grid gap-1 py-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input className={cn({'focus-visible:ring-red-500':true})} placeholder="you@example.com"/>
                        </div>

                        <div className='grid gap-1 py-2'>
                            <Label htmlFor='Password'>Password</Label>
                            <Input className={cn({'focus-visible:ring-red-500':true})} placeholder="password"/>
                        </div>
                        <Button>Sign up</Button>
                    </div>
                </form>
            </div>


        </div>
    </div>
    </>
}

export default Page