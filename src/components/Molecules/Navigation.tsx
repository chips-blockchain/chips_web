import React from "react"
import NavigationLink from "../Atoms/NavigationLink"


const Navigation = ({ menuLinks, textColor }) => (
    <div>
        {menuLinks.map(link => (
            <NavigationLink
                to={link.link}
                key={link.name}
                textColor={textColor}
                activeClassName="active"
                partiallyActive={link.partiallyActive}
            >
            {link.name}
        </NavigationLink>
        ))}
    </div>
)

export default Navigation