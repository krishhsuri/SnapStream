'use client'
import { getFolderInfo } from '@/actions/workspace'
import React from 'react'
import { FolderProps } from '@/types/index.type'
import { userQueryData } from '@/hooks/useQuerydata'

type Props = {
  folderId: string
}

const FolderInfo = ({ folderId }: Props) => {
  const { data } = userQueryData(['folder-info'], () => getFolderInfo(folderId))

  const { data: folder } = data as FolderProps


  return (
    <div className="flex items-center">
      <h2 className="text[#BdBdBd] text-2xl">{folder.name}</h2>
    </div>
  )
}

export default FolderInfo