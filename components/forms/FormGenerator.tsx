'use client'

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
        <Label className={cn(
          "flex w-full",
          "text-gray-700 font-semibold mb-2",
          "transition-all duration-300 ease-in-out",
          "group",
          labelClass
        )} htmlFor={`select-${label}`}>
          {label && (
            <span className="mb-1 group-hover:text-blue-600 transition-colors duration-300">
              {label}
            </span>
          )}
          <div className="relative">
            <select
              className={cn(
                "w-full px-4 py-2 pr-20",
                "bg-white border border-none outline-none rounded-md shadow-sm",
                "appearance-none cursor-pointer",
                "transition-all duration-300 ease-in-out",
                inputClass
              )}
              form={form}
              id={`select-${label}`}
              {...register(name)}
            >
              {options?.length &&
                options.map((option) => (
                  <option
                    value={option.value}
                    key={option.id}
                    className="py-1"
                  >
                    {option.label}
                  </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
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