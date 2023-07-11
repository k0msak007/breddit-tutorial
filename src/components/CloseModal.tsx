"use client"

import React, {FC} from 'react'
import { Button } from './ui/Button'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface CloseModalProps {}

const CloseModal: FC<CloseModalProps> = ({}) => {
    const router = useRouter()

  return (
    <Button onClick={() => router.back()} variant="subtle" className='h-6 w-6 p-0 rounded-md' aria-label='close modal'>
        <X className='w-4 h-4' />
    </Button>
  )
}

export default CloseModal