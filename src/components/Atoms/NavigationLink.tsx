import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavigationLink = styled(Link)`
  align-items: left;
  color: ${props => props.textColor};
  font-weight: bold;
  justify-content: center;
  padding: 0.5rem;
  text-decoration: none;
`;

export default NavigationLink;
