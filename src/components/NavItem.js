export default function NavItem({ href, children }) {
  return (
    <li class="mx-5 my-1 md:my-0">
      <a
        href={href}
        className={`text-lg md:border-0 hover:text-cyan-500 duration-500`}
      >
        {children}
      </a>
    </li>
  )
}