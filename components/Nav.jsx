"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
     const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropDown, setToggleDropDown] = useState(false)
    useEffect(()=>{
        const setProvidersFn = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        setProvidersFn();
    },[])


  return (
    <nav className="flex-between w-full pt-3 mt-7">
        <Link href="/" className="flex gap-2 flex-center">
            <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="object-contain"
            />

            <p className="logo_text">Promptify</p>
        </Link>

        {/* FOR DESKTOP DEVICES */}
        <div className="sm:flex hidden">
            { session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    <Link className="white_btn" href="/create-prompt">
                        Create Post
                    </Link>

                    <button type="button" onClick={signOut} className="white_outline_btn">
                        Sign Out
                    </button>

                    <Link href="/profile">
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="user_profile"
                        />
                    </Link>

                </div>
            ) :
                <>
                    { providers &&
                        Object.values(providers).map((provider)=>(
                            <button type="button" key={provider.id} onClick={() => signIn(provider.id)} className="white_btn">
                                Sign In
                            </button>
                        ))
                    }
                </>
            }
        </div>

            {/* FOR MOBILE DEVICES  */}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="user_profile"
                            onClick={()=> setToggleDropDown((prev) => !prev)}
                        />

                        {toggleDropDown && (
                            <div className="dropdown">
                                <Link
                                 href="/profile"
                                 className="dropdown_link"
                                 onClick={()=> setToggleDropDown(false)}
                                 >
                                    My Profile
                                </Link>
                                <Link
                                 href="/create-prompt"
                                 className="dropdown_link"
                                 onClick={()=> setToggleDropDown(false)}
                                 >
                                    Create Prompt
                                </Link>

                                <button
                                type="button"
                                onClick={()=>{
                                    setToggleDropDown(false);
                                    signOut();
                                }}
                                className="mt-5 w-full white_btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ):(
                    <>
                    { providers &&
                        Object.values(providers).map((provider)=>(
                            <button type="button" key={provider.id} onClick={() => signIn(provider.id)} className="white_btn">
                                Sign In
                            </button>
                        ))
                    }
                </>
                )}
            </div>

    </nav>
  )
}

export default Nav
