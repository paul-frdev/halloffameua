import { cn } from '@/lib/utils';

export function TypographyH2({ children, className }: { children: string, className?: string }) {
  return (
    <h2 className={cn(`text-[3.125rem] font-sfPro font-bold`, className)}>
      {children}
    </h2>
  )
}