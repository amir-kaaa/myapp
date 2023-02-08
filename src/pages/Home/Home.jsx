import React from 'react'
import styled from 'styled-components'
import image from '../../assets/hp2.jpg'

const Home = (props) => {

  let text = React.createRef();
  
  let addingText = () => {
    let newText = text.current.value;
    props.addText(newText);
    text.current.value = '';
  }

  let addNewText = () => {
    let newText = text.current.value
    props.addNewText(newText)
  }

  return (
    <>
      <Container>

        <Content>
          УИ ГА
        </Content>

        <Container2>
          Scroll Down
        </Container2>

        <Img src={image} alt='airplane' />

      </Container>

      <Container3>

        <Header>
          Последние события...
        </Header>

        <UnderHeader>
          ... за последний год
        </UnderHeader>


        <Text>
          <Input ref={text} value={props.state.addNewText} onChange={addNewText}/>
          <Button onClick={addingText}>Add Post</Button>
        </Text>

        <Pictures>
          {props.state.arr3.map(i => (<Picture key={[i]}>{i}</Picture>))}
        </Pictures>

      </Container3>
    </>
  )
}

export default Home

const Container = styled.div`
  display: block;
  color: rgb(238, 238, 238);
  padding-bottom: 30px;
  height: 100vh;
  position: relative;
  text-align: center;
`
const Content = styled.p`
  height: auto;
  width: auto;
  /* font-family: 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif; */
  font-family: Stanford,Source Serif Pro,Georgia,Times,Times New Roman,serif!important;
  font-weight: 400;
  font-size: 8rem;
  position: fixed;
  top: 50%;
  padding-bottom: 20px;
  padding-right: 15px;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  z-index: -1;

  @media screen and (max-width: 1200px) {
    font-size: 6rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 4rem;
  }
`
const Container2 = styled.section`
  bottom: 0;
  font-size: 1.5rem;
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: #1d2b60;
  z-index: -1;
`
const Img = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  transform: translate3d(-50%,-50%,0) scale(1);
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: -2;
`
const Container3 = styled.section`
  background-color: #fff;
  display: block;
  text-align: center;
  line-height: 1.5;
  font-family: Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
`
const Header = styled.header`
  font-size: 3em;
  padding-top: 50px;
  font-weight: 700;
`
const UnderHeader = styled.div`
  font-size: 1.5em;
  font-weight: 400;
  padding-bottom: 10px;
`
const Text = styled.div`
  font-size: 20px;
  color: #111;
  padding-bottom: 30px;
  font-family: Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
`
const Input = styled.input`
  border-radius: 6px;
  color: #111;
  height: 25px;
  padding: 15px;
  text-shadow: none;
  text-decoration: none;
  text-decoration-color: red;
`
const Button = styled.button`
  text-align: center;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  color: #111;
  font-weight: 400;
`
const Picture = styled.div`
  width: 50%;
  padding: 30px;
  @media screen and (max-width: 1000px){
  width: 100%;
  }
  @media screen and (min-width: 1700px){
    width: 33%;
  }
`
const Pictures = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 150px;
  flex-wrap: wrap;

  @media screen and (min-width: 1700px){
    display: flex;
    max-width: 80%;
    align-items: center;
  }
`