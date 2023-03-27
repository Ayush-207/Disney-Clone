import React from 'react';
import styled from 'styled-components';
const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg'></CTALogoOne>
          <SignUp>GET IT UP ALL THERE</SignUp>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam deleniti ratione eos delectus necessitatibus consectetur alias, dolorem, suscipit, enim quis? Temporibus porro eligendi enim optio aspernatur eos dolorem nam.</Description>
          <CTALogoOne src='/images/cta-logo-two.png'></CTALogoOne>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
}

const Container = styled.section`
  overflow : hidden;
  display : flex;
  flex-direction : column;
  text-align : center;
  height : 100vh;
`;

const Content = styled.div`
  margin-bottom : 10vw;
  width : 100%;
  position : relative;
  min-height : 100vh;
  box-sizing : border-box;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  padding : 80px 40px;
  height : 100%;
`;

const BgImage = styled.div`
  height : 100%;
  background-position : top;
  background-size : cover;
  background-image : url("/images/login-background.jpg");
  background-repeat : no-repeat;
  position : absolute;
  top : 0;
  left : 0;
  right : 0;
  z-index : -1;
`;

const CTA = styled.div`
  margin-bottom : 2vw;
  max-width : 650px;
  flex-wrap : wrap;
  display : flex;
  flex-direction : column;
  justify-content : center;
  margin-top : 0;
  align-items : center;
  text-align : center;
  margin-right : auto;
  margin-left : auto;
`;

const CTALogoOne = styled.img`
  margin-bottom : 12px;
  max-width : 600px;
  min-height : 1px;
  display : block;
  width : 100%
`;

const SignUp = styled.a`
  font-weight : bold;
  color : #f9f9f9;
  background-color : #0063e5;
  margin-bottom : 12px;
  width : 100%;
  font-size : 18px;
  padding : 16.5px 0;
  letter-spacing : 1.5px;
  border : 1px solid transparent;
  border-radius : 4px;

  &:hover {
    background-color : #0483ee;
  }

  `;

const Description = styled.p`
  color : hsla(0,0%,95.3%,1);
  font-size : 15px;
  margin : 0 0 24px;
  line-height : 1.5;
  letter-spacing : 1.5px;
`;


export default Login;