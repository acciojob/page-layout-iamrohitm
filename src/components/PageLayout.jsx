import React from 'react'

const PageLayout = ({children, header, footer}) => {


    return (
        <div>
            {header}
            {children}
            {footer}
        
        </div>
    )
}

export default PageLayout
