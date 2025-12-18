import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`group flex flex-col justify-between rounded-2xl border-4 border-dashed border-purple-200 bg-purple-200/40 p-5 transition hover:border-purple-300 hover:bg-purple-200 ${className}`}
    >
      {children}
    </article>
  );
}
