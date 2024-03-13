import React, { createContext, useState } from 'react';

export const UpdatedPageContext = createContext();

 export  const UpdatedPageProvider = ({ children }) => {
    const [objective, setObjective] = useState("");
    const [uniqueId, setUniqueId] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [post, setPost] = useState("");
    const [objectiveAnswer, setObjectiveAnswer] = useState("");
    const [answer, setAnswer] = useState("");
    const [typeAnswer, setTypeAnswer] = useState("");
    const [subject, setSubject] = useState("");
    const [editDetails, setEditDetails] = useState("");
    const [forPost, setForPost] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [image1Url, setImage1Url] = useState("");
    const [image2Url, setImage2Url] = useState("");
    const [image3Url, setImage3Url] = useState("");
    const [dbId, setDbId] = useState("");
    const [preset, setPreset] = useState("");
    const [viewer, setViewer] = useState("all");
    const [pri, setPri] = useState("");
    const [boosting, setBoosting] = useState("");
    const [title, setTitle] = useState("");
    const [assigned, setAssigned] = useState([]);
    const [color, setColor] = useState("orange");
    const [page, setPage] = useState('');
    const [ show, setShow] = useState('');
    const [rounded, setRounded] = useState([]);
    const [round, setRound] = useState([]);
  




    return (
        <UpdatedPageContext.Provider value={{
            objective, setObjective,
            uniqueId, setUniqueId,
            type, setType,
            date, setDate,
            post, setPost,
            objectiveAnswer, setObjectiveAnswer,
            answer, setAnswer,
            typeAnswer, setTypeAnswer,
            subject, setSubject,
            editDetails, setEditDetails,
            forPost, setForPost,
            imageUrl, setImageUrl,
            image1Url, setImage1Url,
            image2Url, setImage2Url,
            image3Url, setImage3Url,
            dbId, setDbId,
            preset, setPreset,
            viewer, setViewer,
            pri, setPri,
            boosting, setBoosting,
            title, setTitle,
            assigned, setAssigned,
            color, setColor,
            page, setPage,
            show, setShow,
            rounded, setRounded,
            round, setRound,
           
        }}>
            {children}
        </UpdatedPageContext.Provider>
    );
};

export default UpdatedPageProvider;