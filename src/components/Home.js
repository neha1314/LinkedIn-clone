import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'
import Center from './Center'
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <Main>
       {!props.user && <Navigate to="/" />}
        <Section>
            <h5><a href='/'>Hiring in a hurry? - </a></h5><p>Find talented pros in record time with Upwork and keep business moving</p>
        </Section>
       
        <Layout>
           <Left/>
           <Center/>
           <Right/>
        </Layout>

    </Main>
  )
}

const Main =styled.div`
   padding-top:62px;
   max-width: 100%;
   
`;
// const Content= styled.div`
//   margin-left: auto;
//   margin-right: auto;
//   max-width: 1128px;
// `;

const Section= styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration:underline ;
  display: flex;
  justify-content: center;
  h5{
    color: #0a66c2;
    font-size: 14px;

     a{
        font-weight: 700;
     }
  }

  p{
    position: relative;
    top: -14px;
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width:768px){
    flex-direction: column;
    padding: 0 5px;
    
  }
`;


 const Layout=styled.div`
  display: grid;
  grid-template-areas: "left center right";
  grid-template-columns: minmax(0,5fr) minmax(0,12fr),minmax(300px,7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;

  @media (max-width:768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
  `;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);



