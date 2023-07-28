import React from 'react'
import { useState, useEffect } from "react";
import styled from 'styled-components'
import Model from './Model'
import {connect} from 'react-redux';
import { getArticlesAPI } from "../actions";
import ReactPlayer from 'react-player';

const Center = (props) => {

  const [showModal, setShowModal] = useState("close");


  
  useEffect(() => {
    props.getArticles();
  }, []);


  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  }; 

  return (
    <>
    {props.articles.length===0? (
      <p>No Feed</p>
    )  :(
    <Main>
       <PostBox>Share
       <div>
        {/* <img src='/images/user.svg' alt=''/> */}
        <button  onClick={handleClick}   disable={props.loading ? true : false}>Start a post</button>
       </div>
       <div>
        <button>
            <img src='/images/camera.svg' alt=''/>
            <span>Photo</span>
        </button>

        <button>
            <img src='/images/video.svg' alt=''/>
            <span>Video</span>
        </button>

        <button>
            <img src='/images/calendar.svg' alt=''/>
            <span>Event</span>
        </button>

        <button>
            <img src='/images/copywriting.svg'alt=''/>
            <span>Write article</span>
        </button>
       </div>
       </PostBox>
         <Context>
              {props.loading && <img src={"/images/spin-loader.svg"}/>}
              {props.articles.length > 0 &&
              props.articles.map((article, key) => (
      
        <Article key={key}>
            <Content>
                <a>
                <img
                        src={article.actor.image}
                        style={{ borderRadius: "50%" }}
                        alt="user"
                      />
                    <div>
                    <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                    </div>
                </a>
                <button>
                <img src="/images/ellipsis.svg" alt="ellipsis" />
                </button>
            </Content>

            <Description>
            {article.description}
            </Description>  

          <SharedImg>
          <a>
                      {!article.sharedImg && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} />
                      ) : (
                        article.sharedImg && (
                          <img src={article.sharedImg} alt="img-db" />
                        )
                      )}
                    </a>
          </SharedImg>


         <Counts>
            <li>
                <button>
                <img src="/images/thumb-up.svg" alt="thumbs-up" />
                        <img src="/images/clap.svg" alt="clap" />
                    <span>100</span>
                </button>
            </li>

            <li>
                 <a>{article.comments}</a>
            </li>
          </Counts>


       <SocialIcon>
           <button>
           <img src="/images/like.svg" alt="like" />
            <span>Like</span>
           </button>

           <button>
            <img/>
            <img src="/images/message.svg" alt="comment" />
            <span>Comment</span>
           </button>

           <button>
           <img src="/images/share.svg" alt="share" />
            <span>Share</span>
           </button>

           <button>
           <img src="/images/send.svg" alt="share" />
            <span>Send</span>
           </button>
       </SocialIcon>



            </Article>
             ) )}
            
            </Context>   
            

       <Model showModal={showModal} handleClick={handleClick}/>


    </Main>
    )}
    </>
  );
};

const Main=styled.div`
  grid-area: center;

`;


const Card4=styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  
  `;

  const PostBox=styled(Card4)`
     display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          width: 24px;
          height: 24px;
          margin: 0 4px 0 -2px;
        }

        span {
          color: grey;
        }
      }
    }
  }
`;

const Context=styled.div`
  text-align:center;
  &>img{
    width: 30px;
  }

`;

const Article=styled(Card4)`
  padding:0;
  margin: 0 0 8px;
  overflow: visible;
`;

const Content=styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;

    img {
      width: 18px;
      height: auto;
    }
  }
`;


const Description=styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg=styled.div`
  margin-top: 8px;

img {
  object-fit: contain;
  width: 100%;
}
`;



const Counts= styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    & > a {
      font-weight: 700;
      margin-left: 12px;
    }
  }

  button {
    display: flex;
    border:none;
    background-color: white;
    img {
      width: 18px;
      height: auto;
    }
  }
`;



const SocialIcon=styled.div`
 display: flex;
  padding: 8px 16px;

  button {
    margin-right: 16px;
    display: inline-flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 2px;
    color: grey;
    border: none;
    background-color:white;
    img {
      width: 20px;
      height: auto;
      margin-right: 4px;
      color: grey;
    }

    span {
      font-size: 13px;
    }
  }
`;

const mapStateToProps =(state)=>{
  return{
    // loading: state.articeState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps=(dispatch)=>({
  getArticles:()=> dispatch(getArticlesAPI()),

})

export default connect(mapStateToProps,mapDispatchToProps) (Center);
