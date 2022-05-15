import styled from 'styled-components'

const StyledTabHeaders = styled.button`
font-weight: 600;
cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 0.75rem;
    color: ${props => props.disabled ? "#FF7276" : "#222"};
    line-height: 1rem;
    text-decoration: ${props => props.disabled ? "line-through" : "none"};

    background-color: #fff;
    border: none;
    outline: none;
    border-bottom: ${props => props.active ? "3px solid violet" : "none"};
    

    &:hover {
        color: #737373;
    }
`
export default StyledTabHeaders