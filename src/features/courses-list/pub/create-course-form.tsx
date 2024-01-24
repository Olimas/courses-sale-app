'use client'

import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@/shared/ui/utils'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { createCourseAction } from '@/features/courses-list/actions'
import { Button } from '@/shared/ui/button'

interface ICreateCourseFormProps {
  className: string
  revalidatePagePath: string
}

const createCourseFormSchema = z.object({
  name: z.string(),
  description: z.string(),
})

export function CreateCourseForm(props: ICreateCourseFormProps) {
  const { className, revalidatePagePath } = props

  const [isCreateTransition, startCreateTransition] = useTransition()
  const form = useForm({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const handleFormSubmit = (data: CreateCourseListElementCommand) => {
    startCreateTransition(async () => {
      await createCourseAction(data, revalidatePagePath)
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className={cn(className, 'space-y-8')}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder='название...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder='описание...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={isCreateTransition}>
          Добавить
        </Button>
      </form>
    </Form>
  )
}
