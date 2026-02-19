import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={cn("w-full max-w-3xl mx-auto px-4 relative z-10",className)}>{children}</div>
  )
}

export default Container