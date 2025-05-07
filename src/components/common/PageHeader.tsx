import React from "react"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-primary pt-32 pb-16 md:pt-36 md:pb-20">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-100 text-center max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

export default PageHeader
