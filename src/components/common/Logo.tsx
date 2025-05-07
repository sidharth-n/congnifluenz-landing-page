// No import needed for standard img tag

interface LogoProps {
  dark?: boolean
}

const Logo = ({ dark = true }: LogoProps) => {
  return (
    <div className="flex items-center">
      <img src="/logo.png" alt="Cognifluenz Logo" className="mr-2 w-12 h-8" />
      <div>
        <div
          className={`font-montserrat font-bold text-xl ${
            dark ? "text-gray-800" : "text-white"
          }`}
        >
          Cognifluenz
        </div>
        <div
          className={`text-xs font-medium -mt-1 ${
            dark ? "text-primary" : "text-accent"
          }`}
        >
          deeptech
        </div>
      </div>
    </div>
  )
}

export default Logo
