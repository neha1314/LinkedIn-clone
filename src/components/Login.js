import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import  {signInAPI}  from '../actions';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  return (
    <>
   
    <Main>
      {props.user && <Navigate to="/home" />}
            <NavBar>
            <a href='/'>
                <img src="/images/login-logo.svg" alt='nothing'/>
            </a>
            <div>
            <Join>Join Now</Join>
            <SignI>Sign In</SignI>
            </div>
        </NavBar> 

        <Section1>
          <Header1>
            <h1> Welcome to your Professional Community</h1>
            <img src="/images/login-hero.svg" alt="text"/> 
          </Header1>
          <Form>
            <Sign2 onClick={()=>props.signIn()}>
              <img src="/images/google.svg" alt=""/>
              Sign in with Google
            </Sign2>
          </Form>
        </Section1>
    </Main>
    
    </>
  );
};



const Main= styled.div`
padding :0px`;



const NavBar=styled.nav`
 display:flex;
 justify-content:space-between;
 align-items:center;
 position:relative;
 flex-wrap:nowrap;
 margin:auto;
 padding: 12px 0 16px;
 max-width:1148px;

 &>a{
    width:130px;
    height:30px;
    @media (max-width:768px){
        padding: 0 5px;
    }
 }
`;
 

const Join=styled.a`

 margin-right: 12px;
 /* box-sizing: border-box; */
 font-size:16px;
 font-weight: 400;
 border-radius: 4px;
 /* background-color: white; */
 padding: 10px 12px;
 text-decoration: none;
 color: rgba(0,0,0,0.6);

 &:hover{
  background-color: rgba(0,0,0,0.08);
  color: rgba(0,0,0,0.9);
  text-decoration: none;
 }
`;

const SignI=styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 20px;
transition-duration: 165ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding:10px 24px ;
text-align: center;
background-color: rgba(0,0,0,0);

&:hover{
  background-color: rgba(112,181,249,0.15);
  color: #0a66c2;
  text-decoration: none;
}
`;

const Section1=styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom:138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px){
    margin: auto;
    min-height: 0px;
  }
`;

const Header1=styled.div`
  width: 100%;
  h1{
    width: 50%;
    padding: 0;
    font-size: 50px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;

    @media (max-width: 768px){
     text-align: center;
     font-size: 25px;
     width: 100%;
     line-height: 2;

    }
  }

  img{
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }

  }
`;

const Form=styled.div`
margin-top: 100px;
width: 400px;
@media (max-width: 768px){
  margin-top: 20px;
}

`;

const Sign2=styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  /* box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),inset 0 0 0 2px rgb(0 0 0 /0%); */

  /* vertical-align: middle; */
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0,0,0,0.6);
  @media (max-width: 768px){
    margin-left: 100px;

}


  &:hover{
    background-color: rgba(207,207,207,0.25);
    color: rgba(0,0,0,0.75);
    
  }
`;



const mapStateToProps =(state)=>{
  return{
    user: state.userState.user,
  };
};


const mapDispatchToProps =(dispatch)=>({
  signIn:()=>dispatch(signInAPI())
});





export default connect(mapStateToProps,mapDispatchToProps)(Login);



/* 
export default Login; */

