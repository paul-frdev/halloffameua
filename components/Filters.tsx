'use client';

import { cn } from '../lib/utils';
import React from 'react';
import { Select } from './ui/select';

export const Filters = () => {

  return (
    < >
      <div className="flex flex-col sm:flex-row gap-y-3 justify-start items-start sm:items-center gap-x-4 sm:gap-x-8">
        <Select />
        <Select />
        <Select />
      </div>
    </>
  );
};