import React from 'react'
import styled from 'styled-components';
import { useState } from "react";
import ReactPlayer from "react-player";
import {connect } from 'react-redux'
import firebase from "firebase/compat/app";
import { postArticleAPI } from '../actions';


const Model = (props) => {
    const [editorText, setEditorText] = useState("");
    const [shareImage,setShareImage]=useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");




    const handleChange=(e)=>{
        const image=e.target.files[0];

        if (image === "" || image === undefined) {
            alert(`not an image, the file is a ${typeof image}`);
            return;
          }
          setShareImage(image);
    };

    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
      };

      const postArticle = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
          return;
        }
    
        const payload = {
          image: shareImage,
          video: videoLink,
          user: props.user,
          description: editorText,
          timestamp: firebase.firestore.Timestamp.now(),
        };
    
        props.postArticle(payload);
        reset(e);
      };




    const reset = (e) => {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e);
      };
 

  return (
    <>
    { props.showModal === "open" && (
   <Main>
       <Context>
        <Header>
            <h2>Create a post</h2>
            <button onClick={(event) => reset(event)}>
            <img src="/images/cancel.svg" alt="close-icon" />
            </button>
        </Header>
      <PublicContent>
        <UserInfo>

        {props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="photoURL" />
                ) : (
                  <img src="/images/user.svg" alt="user-default" />
                )}


           
            <span>{props.user.displayName}</span>
        </UserInfo>

        <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>

                {assetArea==="image" ? (
           <UploadImage>
                    <input
                      type="file"
                      accept="image/gif, image/jpeg, image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    ></input>
                    <p>
                      <label htmlFor="file">Select an image</label>
                    </p>
                    {shareImage && (
                      <img
                        src={URL.createObjectURL(shareImage)}
                        alt="uploaded-img"
                      />
                    )}
              </UploadImage>
                  ) :(
                    assetArea==="media" &&(
                        
                     <>
                     <input
                       type="text"
                       placeholder="Select a video"
                       value={videoLink}
                       name="media"
                       onChange={(e) => setVideoLink(e.target.value)}
                     />
                     {videoLink && (
                       <ReactPlayer width={"100%"} url={videoLink} />
                     )}
                   </>
                    )
                  )}
 
         </Editor>        

       

      </PublicContent>

      <Creation>
        <AttachItems>
            <ItemsButton  onClick={() => switchAssetArea("image")}>
            <img src="/images/camera.svg" alt="img-svg" />
            </ItemsButton>
            <ItemsButton  onClick={() => switchAssetArea("media")}>
            <img src="/images/video.svg" alt="video" />
            </ItemsButton>
        
        </AttachItems>
      
        <ShareComment>
        <ItemsButton>
        <img src="/images/message.svg" alt="comment" />
        </ItemsButton>
    </ShareComment>

<PostButton  disabled={!editorText ? true : false}
   onClick={(event) => postArticle(event)}
>Post</PostButton>


        </Creation>
    
       </Context>
   </Main>)}
   </>
  )
}

const Main=styled.div`
 position: fixed;
  /* The styling below makes the modal come forward, taking over the entire screen */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.5s;
`;

const Context=styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;`;



const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 25px;
    height: 25px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    img {
      width: 12px;
    }
    svg,
    img {
      pointer-events: none;
    }
  }
`;

const PublicContent=styled.div`
 display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;`;

const UserInfo=styled.div`
display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;


const Creation=styled.div`
 display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
  `;


const ItemsButton=styled.div`
 display: flex;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
    margin: 2px;
  }
`;

const AttachItems=styled.div`
 display: flex;
  align-items: center;
  padding-right: 8px;
${ItemsButton}{
    width:40px ;
}
`;





const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  display: inline-flex;
  align-items: center;

  span {
    font-size: 13px;
    color: grey;
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 7px;
    margin: 2px;
  }

  img {
    padding-top: 8px;
  }
`;


  const PostButton = styled.div`
  min-width: 60px;
  height: auto;
  border-radius: 20px;
  background: ${(props) =>
    props.disabled ? "rgba(0, 0, 0, 0.15)" : "#1e81ce"};
  color: ${(props) => (props.disabled ? "rgba(1, 1, 1, 0.2)" : "white")};
  text-align: center;
  padding-top: 5px;
  padding-left: 16px;
  padding-right: 16px;

  &:hover {
    background-color: blue;
    color: white;
    cursor: pointer;
  }
`;
 
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    font-family: "Noto Sans JP", sans-serif;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

const mapStateToProps =(state)=>{
    return{
        user: state.userState.user,
    };
};

const mapDispatchToProps =(dispatch) =>({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),

});

export default connect(mapStateToProps,mapDispatchToProps) (Model);


