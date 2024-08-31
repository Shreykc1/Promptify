import Link from "next/link"

const Form = ({
    type, post, setPost, submitting, handleSubmit
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col font-neue">
        <h1 className="head_text mt-10 text-left font-neue">{type} Post</h1>
        <p className="desc text-left max-w-md">
            {type} and share amazing prompts with the world, and let your imagination
            run wild with any AI-powered platform.
        </p>

        <form
         onSubmit={handleSubmit}
         className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
         >
            <label className="font-neue font-semibold text-base">
                <span>Your AI Prompt</span>
                <textarea value={post.prompt}
                onChange={(e)=> setPost({...post,
                    prompt: e.target.value
                })}
                placeholder="Write your prompt here..."
                required
                className="form_textarea"
                >

                </textarea>
            </label>

            <label className="font-neue font-semibold text-base">
                <span>Tag {` `}
                    <span className="font-normal text-sm tracking-wider">(#coding, #react, #jailbreak, #study)</span>
                </span>
                <input value={post.tag}
                onChange={(e)=> setPost({...post,
                    tag: e.target.value
                })}
                placeholder="Write a single tag..."
                required
                className="form_input"
                >

                </input>
            </label>

                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="white_outline_btn">
                        Cancel
                    </Link>

                    <button type="submit"
                    disabled={submitting}
                    className="white_btn"
                    >
                        {submitting ? `${type}...` : type }
                    </button>
                </div>
        </form>
    </section>
  )
}

export default Form
