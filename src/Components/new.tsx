import React from "react";
import { useState } from "react";
import styled from "styled-components";
import pic from "./images/profileHold.png"
// import ViewButtons from "./buttons";
import { BsCamera } from "react-icons/bs";
import reac from "./images/React.png"
import html from "./images/html.png"
import css from "./images/css.png"
import js from "./images/js.png"
import ts from "./images/ts.png"
import node from "./images/Node.png"
import next from "./images/Next.png"
import mongo from "./images/mongo.png"
// import bg from "./images/TechBG.jpg"
// import View from "./page2";
// import { NavLink } from "react-router-dom";
// import Check from "./page"
import html2canvas from "html2canvas";





const Data = () => {

    const  [name, setName] = useState<string>("");

    const displayPix  = (e:any) => {
        const file = e.target.files[0];
        const save = URL.createObjectURL(file);
        setImage (save);
    }

    const [myAvatar, setMyAvatar] = useState(pic);
    const [image, setImage] = useState("");
  
    const imageUpload = (e:any) => {
      const file = e.target.files[0];
      const save = URL.createObjectURL(file);
      setImage(file);
      setMyAvatar(save);
    };

    const [show, setShow] = useState<boolean>(false)

    const page2 = () => {
        setShow(true)
    }

    
    const printRef: any = React.useRef();

   const handleDownloadImage = async () => {
     const element = printRef.current;
     const canvas = await html2canvas(element);

     const data = canvas.toDataURL("image/jpg");
     const link = document.createElement("a");

     if (typeof link.download === "string") {
       link.href = data;
       link.download = "image.jpg";

       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
     } else {
       window.open(data);
     }
   };


    return  (
        <div>

            <Container>

                <div></div>

                {/* <ViewButtons /> */}


                <Wrapper>

                <Power>
                    
                    <Powers>CODELAB.</Powers>
                </Power>


                <Tech><span style={{fontSize:"30px", backgroundColor:"#690E94", color:"white",width:"120px", height:"45px", borderRadius:"5px", paddingRight:"10px", paddingLeft:"10px"}}>TECH</span> <br/>as a Leveller <br/>in 21st century </Tech>


                <img src="/circleLine2.png" alt="" style={{position:"absolute", width:"150px", height:"150px", top:"70px", left:"40px", opacity:"0.6", zIndex:"1"}}/>

                <div style={{position:"absolute", width:"100%", height:"100%", zIndex:"0.2", backgroundColor:"black", opacity:"0.0",borderRadius:"10px"}}></div>

        <ImgHolder>
            <Img src={myAvatar} alt="" id="img" />
        </ImgHolder>
          <input onChange={imageUpload} type="file" id="input" accept="image/jpg, image/png, image/jpeg, image/svg" style={{display:"none"}}/>
        <Label>
            <label htmlFor="input" style={{zIndex:"1"}}>
            <ImageUpload>
                <BsCamera style={{ fontSize: "18px" }} />
                Upload Image
            </ImageUpload>
            </label>
        </Label>

                <Input placeholder="Enter your first name" 
                value={name}
                onChange={(e: any) => {
                    setName(e.target.value)
                }}
                />
                {/* <div>Your name is: <strong> {namee} </strong></div> */}

                
                {
                    
                    name !== "" && image !== pic ? <Button onClick={page2} style={{}}>View</Button>  : null  
                }

                <Dev>Developed by: ALADESUYI EBENEZER</Dev>

                <Stacks>
                    <Stack src={reac} />
                    <Stack src={js} />
                    <Stack src={ts} />
                    <Stack src={mongo} />
                    <Stack src={node} />
                    <Stack src={css} />
                </Stacks>



                {show ? (
                    <div style={{width:"320px", height:"100vh", backgroundColor:"white"}}>

                    <Container2>
        
                        <div></div>
        
                        {/* <ViewButtons /> */}
        
        
                        <Wrapper>
        
                        <Power>
                    
                            <Powers>CODELAB.</Powers>
                        </Power>
        
                        <Tech><span style={{fontSize:"30px", backgroundColor:"#ac5cd1", color:"white",width:"120px", height:"45px", borderRadius:"5px", paddingRight:"10px", paddingLeft:"10px"}}>TECH</span> <br/>as a Leveller <br/>in 21st century </Tech>
        
        
                        <img src="/circleLine2.png" alt="" style={{position:"absolute", width:"120px", height:"120px", top:"160px", left:"40px", opacity:"0.6", zIndex:"0.1"}}/>
        
                        <div style={{position:"absolute", width:"100%", height:"100%", zIndex:"0.2", backgroundColor:"black", opacity:"0.0",borderRadius:"10px"}}></div>
        
                        
        
                        {/* <Eben><strong> {name} </strong></Eben> */}
        
                        <UserUpload>
                            <UserUpload2 src={myAvatar} />
                        </UserUpload>
        
                        <Attend>I'm <span style={{fontSize:"15px", color:"#f5d56b"}}> {name.toUpperCase()}</span>, I'll be attending CODELAB Tech Conference</Attend>
        
                        
        
                        <Time>
                            <Date>DEC. 17, 2022</Date>
                            <Date>Ajeromi LG, Apapa</Date>
                            <Date>10AM</Date>
                        </Time>
        
                        
        
                        {/* {
                            name !== "" && image !== pic ? <button style={{width:"80px", height:"32px", backgroundColor:"#690E94", border:"none", color:"white", borderRadius:"6px", marginTop:"10px", marginBottom:"10px", zIndex:"1" }}>View</button>  : null
        
                        } */}
        
                        {/* <hr style={{border:"0.5px solid #ac5cd1", width:"40%", marginTop:"15px"}}/> */}
        
                        <Dev>Developed by: ALADESUYI EBENEZER</Dev>
        
                        {/* <hr style={{border:"1px solid #ac5cd1", width:"40%"}}/> */}
        
                        <Stacks>
                            <Stack src={reac} />
                            <Stack src={js} />
                            <Stack src={ts} />
                            <Stack src={mongo} />
                            <Stack src={node} />
                            <Stack src={css} />
                        </Stacks>
        
                        <button onClick={handleDownloadImage} style={{width:"75px",height:"30px", color:"white",backgroundColor:"#ac5cd1", border:"none", borderRadius:"5px",alignSelf:"flex-start",marginLeft:"10px", marginTop:"25px",cursor:"pointer"}}>Download</button>
        
                        </Wrapper>
        
                    </Container2>
                </div>
                    ) : null}

                </Wrapper>

                

            </Container>
        </div>
    )
}

export default Data;

const Eben = styled.div`
font-size: 20px;
font-weight: 600;
color: white;
width: 60%;
z-index: 12;
margin-top: 10px;
margin-bottom: -10px;
text-align: center;
background-color: #ac5cd1;
border-radius: 5px;
/* transform: rotate(-5deg); */
`;

const Date = styled.div`
font-size: 12px;
font-weight: 600;
color: #ac5cd1;
`;

const Time = styled.div`
display:flex;
justify-content: space-between;
align-items: center; 
font-size: 12px;
width: 90%;
z-index: 1;
margin-top: 6px;
`;

const Attend = styled.div`
// display:flex;
// justify-content: space-around;
// align-items: center;
font-size: 12px;
font-weight: 600;
color: white;
width: 70%;
z-index: 12;
margin-top: -15px;
margin-bottom: 10px;
text-align: center;
background-color: #ac5cd1;
border-radius: 5px;
transform: rotate(-5deg);
`;

const UserUpload2 = styled.img`
width: 95%;
height:95%;
border-radius: 50%;
object-fit: cover;
background-color: transparent;
z-index: 100;
`;

const UserUpload = styled.div`
width: 120px;
height: 120px;
border: 3px solid #690E94;
border-radius: 50%;
overflow: hidden;
/* margin-left: 2rem; */
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
`;

const Dev = styled.div`
font-size: 12px;
font-weight: 600;
color: white;
background-color: #ac5cd1;
margin-top: 20px;
height: 20px;
padding-left: 7px;
padding-right: 7px;
border-radius: 4px;
`;

const Button = styled.button`
width:80px;
height:32px; 
background-color:#690E94; 
border:none;
color:white; 
border-radius:6px; 
margin-top:10px; 
margin-bottom:10px; 
z-index:1; 
cursor:pointer; 
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
`;

const Tech = styled.div`
font-size: 17px;
color: #690E94;
text-align: center;
font-weight: 600;
z-index: 11;
margin-top: 25px;
/* line-height: 20px; */
`;

const Stack = styled.img`
/* width: 25%; */
margin-top: 8px;
margin-left: 8px;
/* height: 20px; */
`;

const Stacks = styled.div`
width: 250px;
/* height:20%; */
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top: 15px;
z-index: 1;
/* background-color: white; */
border-radius: 5px;
`;

const Powers = styled.div`
font-size: 16px;
font-weight: 600;
color: #690E94;
`;

const Powered = styled.div`
font-size: 13px;
font-weight: 600;
`;

const Power = styled.div`
display:flex;
/* justify-content: space-around; */
align-items: center;
width: 90%;
z-index: 1;
margin-top: 6px;
`;

const ImgHolder = styled.div`
width: 110px;
height: 110px;
border: 3px solid #690E94;
border-radius: 50%;
overflow: hidden;
/* margin-left: 2rem; */
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
`;

const Img = styled.img`
width: 95%;
height:95%;
border-radius: 50%;
object-fit: cover;
`;

const Label = styled.div`
width: 100%;
margin-top: 1rem;
display: flex;
justify-content: center;
`;

const ImageUpload = styled.div`
margin-top: -38px;
margin-bottom: 15px;
margin-left: 95px;
padding: 10px 10px;
/* border: 1px solid#690E94; */
background: white;
color: #690E94;
font-size: 13px;
font-weight: 600;
border-radius: 10px;
text-align: center;
cursor: pointer;
z-index: 20;
/* position: absolute;
left: 140px;
top: 240px; */
`;


const Container2 = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
background-color: white;
z-index: 100;
margin-left: 10px;

/* background-image: url(/bgNew.jpg); */
/* background-size: cover; */
`;

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
/* background-image: url(/bgNew.jpg); */
/* background-size: cover; */
`;

const Wrapper = styled.div`
width: 300px;
height: 550px;
/* border: 1px solid black; */
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url(/bgNew.jpg);
backdrop-filter: calc(${5});
background-size: cover;
font-family: Arial, Helvetica, sans-serif;
position: relative;
/* -webkit-filter: blur(1px); */
`;

const Image = styled.div``;

const ImageInfo = styled.div``;

const ImageLabel = styled.label``;

const ImageInput = styled.input``;

const Input = styled.input`
width: 65%;
height: 34px;
border-radius: 7px;
outline: none;
padding-left: 6px;
padding-right: 3px;
z-index: 1;
background-color: transparent;
border: 2px solid #ac5cd1;
`;