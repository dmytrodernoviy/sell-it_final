import styled from 'styled-components'

const PaginationStyle = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    margin-top: 40px;
    font-size: 25px;
   ul {
      display: inline-block;
      margin-left: 20px;
      padding-left: 0;
   }
   li {
      display: inline-block;
      background: #00b3be;
      border: 1px solid white;
      color: #000;
      cursor: pointer;
      margin-right: 3px;
      border-radius: 5px;
      margin-bottom: 5px;
   }
   li a {
      padding: 2px 5px;
      display: inline-block;
      color: #000;
      outline: none;
   }
   li.active {
      background: rgb(224, 224, 224);
      outline: none;
   }
`

export default PaginationStyle