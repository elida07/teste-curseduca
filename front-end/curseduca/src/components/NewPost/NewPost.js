import React, { useEffect } from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import user from "../../assets/person_black_24dp.svg";
import { DivNewPost, DivInput, DivButton } from "./styled";
import { BASE_URL } from "../../constants/url";

const NewPost = () => {
    const [form, onChange, clear] = useForm({post: ""});

    const createPost = () => {
        axios.post(`${BASE_URL}/create-post`, form)
            .then((res) => {
                alert(res.data)
                clear()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        createPost();
    };


    return (
        <DivNewPost>
            <form id={"newPost"} onSubmit={onSubmitForm}>
                <DivInput>
                    <img src={user}/>
                        <textarea
                        name={"post"}
                        value={form.post}
                        onChange={onChange}
                        required
                        />
                </DivInput>
            </form>
                <DivButton>
                    <button type={"submit"} form={"newPost"} >Publicar</button>
                </DivButton>
            
        </DivNewPost>
    )
};

export default NewPost;