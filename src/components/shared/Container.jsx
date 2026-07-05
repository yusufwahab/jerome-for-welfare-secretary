import clsx from "clsx";

export function Container({ children, className }) {
  return (
    <div className={clsx("mx-auto w-full max-w-[1200px] px-6 md:px-16", className)}>
      {children}
    </div>
  );
}
