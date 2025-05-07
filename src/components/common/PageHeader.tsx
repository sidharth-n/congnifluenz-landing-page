import React from "react"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-primary py-12 md:py-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-100 text-center max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

export default PageHeader
