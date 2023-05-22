import { type ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export const Typography = {
  H1: ({ children }: Props) => (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  ),
  H2: ({ children }: Props) => (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  ),
  H3: ({ children }: Props) => (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  ),
  H4: ({ children }: Props) => (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  ),
  P: ({ children }: Props) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  ),
  Blockquote: ({ children }: Props) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  ),
  InlineCode: ({ children }: Props) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  ),
  Large: ({ children }: Props) => (
    <div className="text-lg font-semibold">{children}</div>
  ),
  Small: ({ children }: Props) => (
    <small className="text-sm font-medium leading-none">{children}</small>
  ),
  Muted: ({ children }: Props) => (
    <p className="text-sm text-muted-foreground">{children}</p>
  ),
};
