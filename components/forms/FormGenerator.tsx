import { strict } from 'assert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ErrorMessage } from '@hookform/error-message'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type Props = {
  type: 'text' | 'email' | 'password'
  inputType: 'select' | 'input' | 'textarea'
  options?: { value: string; label: string; id: string }[]
  label?: string
  placeholder: string
  register: UseFormRegister<any>
  name: string
  errors: FieldErrors<FieldValues>
  lines?: number
  form?: string
  defaultValue?: string
  inputClass?: string;
  labelClass?: string;
  errorClass?: string;
}

const FormGenerator = ({
  errors,
  inputType,
  name,
  placeholder,
  defaultValue,
  register,
  type,
  form,
  label,
  lines,
  options,
  inputClass,
  labelClass,
  errorClass
}: Props) => {
  switch (inputType) {
    case 'input':
    default:
      return (
        <Label
          className={cn(`w-full flex flex-col gap-2`, labelClass)}
          htmlFor={`input-${label}`}
        >
          {label && label}
          <Input
            className={cn(``, inputClass, errors.root?.message ? 'border-errorInput' : 'border-white')}
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            form={form}
            defaultValue={defaultValue}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className={cn(`text-error mt-2`, errorClass)}>
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
      )
    case 'select':
      return (
        <Label className='w-full' htmlFor={`select-${label}`}>
          {label && label}
          <select
            form={form}
            id={`select-${label}`}
            {...register(name)}
          >
            {options?.length &&
              options.map((option) => (
                <option
                  value={option.value}
                  key={option.id}
                >
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className={cn(`text-red-400 mt-2`, errorClass)}>
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
      )
    case 'textarea':
      return (
        <Label
          className="w-full flex flex-col gap-2"
          htmlFor={`input-${label}`}
        >
          {label && label}
          <Textarea
            form={form}
            id={`input-${label}`}
            placeholder={placeholder}
            {...register(name)}
            rows={lines}
            defaultValue={defaultValue}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className={cn(`text-red-400 mt-2`, errorClass)}>
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
      )
      defualt: return <></>
  }
}

export default FormGenerator