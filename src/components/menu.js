import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  margin-left: 20%;
  height: 50px;
  width: 789px;
  padding-top:50px
`

const WrapperMenu = styled.div`
  background: #384653;
  height: 70px;
  width: 1145px;
  display:flex;
  align-items: center;
  border-radius: 2px;
  z-index:1;
  
`
const Img = styled.img`

  margin-top: 25px;
  margin-left: 25px;
  margin-right: 250px;
  justify-content: center;

`
const Nav = styled.nav`
  // margin-top:10px;
  display: flex;
  justify-content: center;
`
const A = styled.a`
  font-weight: bold; 
  font-size: 12px;
  margin: 25px;
`

const SearchImg = styled.img`

  margin-top: 19px;
  margin-left: 10px;

`
const UnderImg = styled.img`
  position: relative;
  left: 455px;
  top: -5px;
  z-index: 2;
`

const Menu = ({info}) => {
  // console.log(info)
  return(
  <Wrapper>
    <WrapperMenu>
      <Img src={info.logoImg.file.url} height={info.logoImg.file.details.image.height} width={info.logoImg.file.details.image.width}/>
        <Nav>
            <A>{info.link1}</A>
            <A>{info.link2}</A>
            <A>{info.link3}</A>
            <A>{info.link4}</A>
            <A>{info.link5}</A>
            <A>{info.link6}</A>
            <SearchImg src={info.serchImg.file.url} height={info.serchImg.file.details.image.height} width={info.serchImg.file.details.image.width}/>
        </Nav>
    </WrapperMenu>
    <UnderImg src={info.img.file.url} />
  </Wrapper>
)}

export default Menu
