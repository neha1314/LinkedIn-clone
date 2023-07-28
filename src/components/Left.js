import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

const Left = (props) => {
  return (
    <Main>
       <Card>
        <Info>
            <BackgroundImg/>
                <a>
                   <Img>
                   {props.user ? (
                <img src={props.user.photoURL} alt="img-user" />
              ) : (
                <img src="/images/photo.svg" alt="user-img" />
              )}
                   </Img>
                    <Link> Welcome, {props.user ? props.user.displayName : "there!"}</Link>
                </a>
                <a>
                    <TextPhoto>Add a photo</TextPhoto>
                </a>
        </Info>

        <Widget>
            <a>
                <div>
                <span>Connections</span>
                <span>Grow your network</span>
                </div>
                <img src='/images/widget-icon.svg' alt=''/>
            </a>
        </Widget>
         <Item>
            <span>
                <img src='/images/item-icon.svg' alt=''/>
                 My Item
            </span>
         </Item>
          </Card>

   <Card2>
         <a>
            <span> Groups</span>
         </a>
         <a>
            <span>
                Events
                <img src='/images/plus-icon.svg' alt=''/>
            </span>
         </a>
         <a>
            <span>Follow Hashtags</span>
         </a>
         <a>
            <span>Discover More</span>
         </a>
   </Card2>

    </Main>
  )
}

const Main=styled.div`
  grid-area: left;

`;
const Card=styled.div`
   text-align: center;
   overflow: hidden;
   margin-bottom: 8px;
   background-color: #fff;
   border-radius: 5px;
   transition: box-shadow 83ms;
   position: relative;
   border: none;
   box-shadow: 0 0 0 1px rgb(0 0 0 /15%) , (0 0 0 /20%);

`;

const Info=styled.div`
border-bottom :1px solid rgba(0,0,0,0.15);
padding: 12px 12px 16px;
`;

const BackgroundImg =styled.div`
 background-image: url("/images/card-bg.svg");
 background-position: center;
 background-size: 462px;
 height: 54px;
 margin: -12px -12px 0;
`;

const Img= styled.div`
    img {
    box-shadow: none;
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
  }

`;
const Link=styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0,0,0,0.9);
  font-weight: 600;
`;

const TextPhoto=styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;


const Widget=styled.div`
 border-bottom: 1px sloid rgba(0,0,0,0.15);
 padding-top: 12px;
 padding-bottom: 12px;

 &>a{
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

     &:hover{
        background-color: rgba(0,0,0,0.08);

     }
div{
    display: flex;
    flex-direction: column;
    text-align: left;
    span{
        font-size: 12px;
        line-height: 1.333;
        &:first-child{
            color: rgba(0,0,0,0.6);
        }
        &:nth-child(2){
            color: rgba(0,0,0,1);
        }
    }
}

 }



 svg{
    color: rgba(0,0,0,1);
 }
`;


const Item=styled.a`
 border-color: rgba(0,0,0,0.8);
 text-align: left;
 padding: 12px;
 display: block;
 font-size: 12px;
 span{
    display: flex;
    align-items: center;
    color: rgba(0,0,0,0.6);
    svg{
        color: rgba(0,0,0,0.6);
    }
 }

 &:hover{
    background-color: rgba(0,0,0,0.08);
 }

`;


const Card2=styled(Card)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a{
    color:black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    
    &:hover{
        color: #0a66c2;
    }
    
    span{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
  
    &:last-child{
       color: rgba(0,0,0,0.6);
       text-decoration: none;
       border-top: 1px solid #d6cec2;
       padding: 12px;
       &:hover{
        background-color: rgba(0,0,0,0.08);
       }
    }


  }

`;


const mapStateToProps=(state)=>{
  return{
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Left);

