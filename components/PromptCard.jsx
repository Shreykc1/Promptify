"use client"
import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import ReadMoreText from "@utils/Readmore"

const PromptCard = ({ post , handleTagClick, handleEdit, handleDelete }) => {
    const [isCopied, setIsCopied] = useState("");
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();


    const handleCopy = () =>{
        setIsCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setIsCopied(""),5000)
    }

    const handleProfileClick = () => {
        if (post.creator._id === session?.user.id) return router.push("/profile");
        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
      };

  return (
    <div className="prompt_card">
        <div className="flex justify-between items-start gap-5 ">
            <div
            className="flex flex-1 justify-start items-center gap-3 cursor-pointer"
            onClick={handleProfileClick}
            >
                <Image
                src={post.creator.image}
                alt="creator"
                width={40}
                height={40}
                className="rounded-full object-contain"
                />

                <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-300 tracking-wider font-neue">{post.creator.username}</h3>
                    <p className="text-sm text-gray-400">{post.creator.email}</p>
                </div>

            </div>

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
        {/* <p className="my-4 text-sm tracking-wider font-neue">{post.prompt}</p> */}
        <ReadMoreText text={post.prompt} />
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
