'use client'
import React from 'react'
import { Container } from '../ui/container'
import Breadcrumbs from '../Breadcrumbs'
import { TypographyP } from '../ui/typographyP'

export const AboutUs = () => {
  return (
    <Container className=' flex-col justify-start items-start pt-16'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          {
            label: 'About us',
            href: `/home/about`,
            active: true,
          },
        ]}
      />
      <TypographyP className='leading-[140%] pt-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae ut diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae ut diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae ut diam amet diam.

        Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae ut diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras.
      </TypographyP>
    </Container>
  )
}
