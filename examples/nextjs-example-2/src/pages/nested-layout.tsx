interface NestedLayoutProps {
  children: JSX.Element
}

const NestedLayout: React.FC<NestedLayoutProps> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default NestedLayout;
