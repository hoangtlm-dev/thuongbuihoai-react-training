interface LayoutProps {
  children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default Layout;
