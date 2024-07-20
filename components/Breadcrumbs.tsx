import { sfPro } from '@/fonts';
import { cn } from '@/lib/utils';
import { clsx } from 'clsx';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
  className,
}: {
  breadcrumbs: Breadcrumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn(`mb-6 block`, className)}>
      <ol className={clsx(sfPro.className, 'flex text-xl md:text-2xl')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? 'text-gray-900' : 'text-gray-500',
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">
                |
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}