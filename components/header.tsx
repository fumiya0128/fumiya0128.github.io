interface HeaderProps {
  title: string
}

const Header = (props:HeaderProps) => {
  return (
    <p className="fixed left-0 top-0 flex w-full justify-center py-8 bg-gradient-to-b from-transparent via-green-500 to-transparent">
          <div className="text-xl">{props.title}</div>
    </p>
  )
}

export default Header