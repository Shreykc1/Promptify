"use client"
import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link";

const PromptCard = ({ post , handleTagClick, handleEdit, handleDelete }) => {
    const [isCopied, setIsCopied] = useState("");
    const { data: session } = useSession();
    const pathName = usePathname();


    const handleCopy = () =>{
        setIsCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setIsCopied(""),5000)
    }

  return (
    <div className="prompt_card">
        <div className="flex justify-between items-start gap-5 ">
            <Link  href={`/profile/${post.creator._id}`} className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
                <Image
                src={post.creator.image}
                alt="creator"
                width={40}
                height={40}
                className="rounded-full object-contain"
                />

                <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-300 tracking-wider font-satoshi">{post.creator.username}</h3>
                    <p className="text-sm text-gray-400">{post.creator.email}</p>
                </div>

            </Link>

            <div className="copy_btn" onClick={handleCopy}>
                <Image
                    src={isCopied === post.prompt
                        ? '/assets/icons/tick.svg'
                        : '/assets/icons/copy.svg'
                    }
                    width={15}
                    height={15}
                />
            </div>
        </div>
        <p className="my-4 text-sm tracking-wider font-neue">{post.prompt}</p>
        <p className="text-blue-300 text-md font-satoshi cursor-pointer"
            onClick={() => handleTagClick && handleTagClick(post.tag)}
        >#{post.tag}</p>

        {session?.user.id === post.creator._id && pathName ===  '/profile' && (
            <div className="mt-5 flex-center border-t border-gray-400 pt-3 gap-5">
                {/* TODO: Change to Icons and show text on hover  */}
                <p className="text-sm textgray-100 cursor-pointer" onClick={handleEdit}>
                    Edit
                </p>
                <p className="text-sm text-gray-100 cursor-pointer" onClick={handleDelete}>
                    Delete
                </p>
            </div>
        )}
    </div>
  )
}

export default PromptCard
