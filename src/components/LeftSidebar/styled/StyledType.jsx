import styled from 'styled-components'

const StyledType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #171717;
    padding: 1rem;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    
    

    &:hover {        
        background-color: #e3dfdf;        
        transition: background-color 0.15s linear;
    }

    
`

export default StyledType