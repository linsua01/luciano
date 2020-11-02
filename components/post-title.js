export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-5 text-center md:text-left">
      {children}
    </h1>
  )
}
