import react from "react"
import styled from "styled-components"

const header =()=>{
    return(
        <Cont>
            <Wrap>
                <Nav><h1>Logo</h1></Nav>
                <Main>
                    <Nav>HOME</Nav>
                    <Nav>ABOUT</Nav>
                    <Nav>contact</Nav>
                    <Nav>FREE TRIAL</Nav>
                </Main>
            </Wrap>
        </Cont>
    )
}
export default header
const Cont= styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Wrap= styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`
const Nav= styled.div``
const Main= styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`
// const Main= styled.div``