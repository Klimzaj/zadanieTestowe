import React from 'react'
import Menu from './menu'
import HeroContent from './heroContent'
import styled from 'styled-components'


const Wrapper = styled.section` 
    background: #122636;
    height: 1189px;
    // height: 789px;
`

const WrapperContent = styled.section`
    display: flex;
    // grid: auto / auto auto auto;
    justify-content: space-around;
    justify-content: center;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 45px;
  
`
const P = styled.h1`
  color: white;
  font-size: 70px;
  text-align: justify;
  line-height: 37px;
`

const TitleDiv = styled.div`
    padding-top: 210px;
    margin-left: 20%;
    
`

const Hero = ({ manuInfo,infos,offers }) => (
  <Wrapper>
    {/* <Menu manuInfo = {manuInfo}/> */}
    <TitleDiv>
      <img src={infos.img.file.url} width={infos.img.file.details.image.width} height={infos.img.file.details.image.height} />
      <P>{infos.mainTitle1}</P>
      <P>{infos.mainTitle2}</P>
      <P>{infos.mainTitle3}</P>
    </TitleDiv>
    <WrapperContent>
      {offers.map((node)=><HeroContent data={node.node}/>)}
    </WrapperContent>
    <center>
      <img src={infos.buttonImg.file.url} width={infos.buttonImg.file.details.image.width} height={infos.buttonImg.file.details.image.height}/>
    </center>
  </Wrapper>
)

export default Hero
