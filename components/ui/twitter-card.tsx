import { Heart, MessageCircle, Repeat, Share } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button" 
import { cn } from "@/lib/utils"

interface TwitterCardProps {
  name: string
  handle: string
  content: string
  timestamp: string
  likes?: number
  retweets?: number
  replies?: number
  profileImage?: string
  verified?: boolean
  className?: string
}

export default function TwitterCard({
  name = "Jane Doe",
  handle = "janedoe",
  content = "Just setting up my Twitter clone with Next.js and Tailwind CSS. This looks pretty good!",
  timestamp = "2:30 PM · May 18, 2025",
  likes = 42,
  retweets = 5,
  replies = 3,
  profileImage = "/placeholder.svg?height=48&width=48",
  verified = true,
  className,
}: TwitterCardProps) {
  return (
    <div className={cn("max-w-xl rounded-xl border bg-white p-4 shadow-sm", className)}>
      <div className="flex items-start gap-3">
        <Avatar className="h-12 w-12 rounded-full">
          <AvatarImage src={profileImage || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="font-bold">{name}</span>
            {verified && (
              <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            )}
            <span className="text-gray-500">@{handle}</span>
          </div>

          <p className="mt-1 text-[15px] leading-normal">{content}</p>

          <div className="mt-2 text-sm text-gray-500">{timestamp}</div>

          <div className="mt-3 flex justify-between max-w-[80%]">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
              <MessageCircle className="h-4 w-4" />
              {replies > 0 && <span className="text-sm">{replies}</span>}
            </button>

            <button className="flex items-center gap-1 text-gray-500 hover:text-green-500">
              <Repeat className="h-4 w-4" />
              {retweets > 0 && <span className="text-sm">{retweets}</span>}
            </button>

            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
              <Heart className="h-4 w-4" />
              {likes > 0 && <span className="text-sm">{likes}</span>}
            </button>

            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
              <Share className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between border-t pt-3">
        <div className="flex items-center">
          <svg className="h-5 w-5 text-[#1DA1F2]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
        <span className="text-xs text-gray-500">View on X</span>
      </div>
    </div>
  )
}
