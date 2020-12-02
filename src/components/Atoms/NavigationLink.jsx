import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavigationLink = styled(Link)`
  align-items: left;
  color: ${props => props.textColor};
  justify-content: center;
  padding: 0.5rem 1rem 0.5rem;
  text-decoration: none;
  font-size: var(--font-size-h2)
`;

export default NavigationLink;
