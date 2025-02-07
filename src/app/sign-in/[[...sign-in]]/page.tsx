
'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'
import { SiNike } from "react-icons/si";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SignInPageone() {
  return (
    <div className="flex flex-col mx-2 md:mx-0 items-center py-28 md:py-40 px-6">
      <div className="pb-3 sm:pb-2">
        <SiNike className="text-black" size={60} />
      </div>
      <h2 className="sm:w-auto md:w-60 text-center font-bold pb-3 sm:text-2xl">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>
      <SignIn.Root>
        <Clerk.Loading>
          {isGlobalLoading => (
            <SignIn.Step name='start'>
              <div className="flex flex-col sm:w-96">
                <Clerk.Field name='identifier' className='space-y-10'>
                  <Clerk.Input type='email' required asChild>
                    <Input 
                      className="sm:w-full border-black rounded-md mb-5 px-3 py-6 border placeholder:text-text-secondary-gray " 
                      placeholder="Email Address" 
                    />
                  </Clerk.Input>
                </Clerk.Field>

                <Clerk.Field name='password' className='space-y-6'>
                  <Clerk.Input type='password' required asChild>
                    <Input 
                      className="sm:w-full border-black rounded-md mb-5 px-3 py-6  placeholder:text-text-secondary-gray " 
                      placeholder="Password" 
                    />
                  </Clerk.Input>
                </Clerk.Field>
                <SignIn.Action submit asChild>
                  <Button 
                    disabled={isGlobalLoading} 
                    className="bg-white text-black rounded-full py-5 hover:bg-black hover:text-white border-black border transition duration-200 sm:w-full "
                  >
                    <Clerk.Loading>
                      {isLoading => isLoading ? <></> : 'SIGN IN'}
                    </Clerk.Loading>
                  </Button>
                </SignIn.Action>

                <p className="text-center py-3 sm:text-sm">
                  <span className="text-[#8D8D8D]">Not a Member? </span>
                  <Link className="underline" href="/sign-up">
                    Join Us.
                  </Link>
                </p>
              </div>
            </SignIn.Step>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  )
}