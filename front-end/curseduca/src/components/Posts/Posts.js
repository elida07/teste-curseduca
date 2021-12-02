import React from "react";
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import { DivPosts, 
        ContainerPost, 
        ImgLogo, 
        DivUser,
        DivButtons,
        User,
        Description
    } from "./styled";
import logo from "../../assets/flame-161.png"
import thumbsUp from "../../assets/thumb_up_black_24dp.svg"
import thumbsDown from "../../assets/thumb_down_black_24dp.svg"

const Posts = () => {
    const posts = useRequestData([], `${BASE_URL}/posts`);

    const postComponents = posts && posts.map((post) => {
        return (
            <ContainerPost key={post.id}>
                <DivUser>
                    <ImgLogo src={logo} alt={"logo livro aberto"}/>
                    <div>
                        <User>Curseduca</User>
                        <Description>Seu Negócio Digital começa aqui</Description>
                    </div>
                </DivUser>
                <p>{post.post}</p>
                <DivButtons>
                    <button>Responder</button>
                    <p>{post.likes}</p>
                    <img src={thumbsUp}/>
                    <p>0</p>
                    <img src={thumbsDown}/>
                </DivButtons>
            </ContainerPost>
        )
    });

    return (
        <DivPosts>
            {postComponents}
        </DivPosts>
    )
};

export default Posts;