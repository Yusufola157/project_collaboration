import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight} from "react-icons/ai"

const hero = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <h5>
                        SUMMER COLLECTION
                    </h5>
                    <h3>
                        Fall - Winter 
                        <br />
                        Collections 2030
                    </h3>
                    <p>
                        A Specialist  label creating luxury essentials .Ethnically crafted  <br />
                        with an unwavering commmitment to exceptional quantity
                    </p>
                    <Buutton>
                            Shop Now
                            <Icon>
                                <AiOutlineArrowRight/>
                            </Icon>
                    </Buutton>
                </First>
                <Second>

                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default hero
const Buutton = styled.button``

const Icon = styled.div``

const Second = styled.div``

const First = styled.div``

const Wrapper = styled.div``

const Container = styled.div``