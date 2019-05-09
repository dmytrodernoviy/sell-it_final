import styled from 'styled-components'

const ListContainerStyle = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 7% 0 2% 0;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    & > * {
        margin-bottom: 20px;
    }
    @media(max-width: 480px) {
        margin-top: 40px;
    }
`
export default ListContainerStyle