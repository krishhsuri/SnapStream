'use client'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { getVideoComments } from '@/actions/user'
import { VideoCommentProps } from '@/types/index.type'
import { userQueryData } from '@/hooks/useQuerydata'
import CommentForm from '@/components/forms/comment-form'
import CommentCard from '../comment-card'

type Props = {
  author: string
  videoId: string
}

const Activities = ({ author, videoId }: Props) => {
  const { data } = userQueryData(['video-comments'], () =>
    getVideoComments(videoId)
  )

  const { data: comments } = data as VideoCommentProps


  return (
    <TabsContent
      value="Activity"
      className="rounded-xl flex flex-col gap-y-5"
    >
      <CommentForm
        author={author}
        videoId={videoId}
      />
      {comments?.map((comment) => (
        <CommentCard
          comment={comment.comment}
          key={comment.id}
          author={{
            image: comment.User?.image!,
            firstname: comment.User?.firstname!,
            lastname: comment.User?.lastname!,
          }}
          videoId={videoId}
          reply={comment.reply}
          commentId={comment.id}
          createdAt={comment.createdAt}
        />
      ))}
    </TabsContent>
  )
}

export default Activities