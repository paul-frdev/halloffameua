'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserSubscribeProps, userSubscribeSchema } from '@/schemas/subscribe.schema'

export const useSubscribeForm = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const methods = useForm<UserSubscribeProps>({
    resolver: zodResolver(userSubscribeSchema),
    mode: 'onChange',
  });


  const onHandleSubmit = methods.handleSubmit(
    async (values: UserSubscribeProps) => {
      console.log(values);
    }
  )
  
  return {
    methods,
    onHandleSubmit,
    loading,
  }

}
