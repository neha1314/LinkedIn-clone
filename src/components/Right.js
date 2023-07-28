import React from 'react'
import styled from 'styled-components'
const Right = (props) => {
  return (
    <Main>
       <Card3>
          <Title>
            <h2> Add to Your feed </h2>
            <img src='/images/feed-icon.svg' alt=''/>
          </Title>
          <List>
                <li>
                    <a>
                        <HashImg/>
                    </a>
                    <div>
                        <span>#Linkedin</span>
                        <button>Follow</button>
                    </div>
                </li>
                <li>
                    <a>
                        <HashImg/>
                    </a>
                    <div>
                        <span>#Video</span>
                        <button>Follow</button>
                    </div>
                </li>

          </List>

        <Recommendation>
            View All Recommendations
            <img src='/images/right-icon.svg' alt=''/>
        </Recommendation>
       

       </Card3>

       <BannerCard>
        <img src="/images/jobs-image.jpg" alt="banner-card" />
      </BannerCard>

    </Main>
  )
}


const Main=styled.div`
  grid-area: right;
 
`;

const Card3=styled.div`
 
text-align: center;
   overflow: hidden;
   margin-bottom: 8px;
   background-color: #fff;
   border-radius: 5px;
   transition: box-shadow 83ms;
   position: relative;
   border: none;
   box-shadow: 0 0 0 1px rgb(0 0 0 /15%) , (0 0 0 /20%);
  padding: 12px ;
`;

const Title=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 16px;
width: 100%;
color: rgba(0,0,0,0.6);

`;
const List=styled.ul`
li{
  display: flex;
  align-items: center;
  margin: 12px 0;
  position: relative;
  font-size: 14px;
  &>div{
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  button{
    background-color: transparent;
    color: rgba(0,0,0,0.6);
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
    padding: 16px;
    align-items: center;
    border-radius: 15px;
    box-sizing: border-box;
    font-weight: 600;
    display: inline-flex;
    justify-content: center;
    max-height: 32px;
    max-width: 480px;
    text-align: center;
    outline: none;
  }
}
`;

const HashImg=styled.div`
background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 28px;
  height: 28px;


`;


const Recommendation=styled.a`
 color: #0a66c2;
 display: flex;
 align-items: center;
 font-size: 14px;

`;

const BannerCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  margin: 0;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0/ 20%);
`;



export default Right
