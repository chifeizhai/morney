import React from 'react'
import { useTags } from 'components/useTags';
import { useParams } from 'react-router-dom';
import Layout from 'components/Layout'
const Tag:React.FunctionComponent=()=>{
    const {findTag}=useTags()
    let{id}=useParams();
    const tag=findTag(id)
    return (
        <Layout>
            <div>{tag.name}</div>
        </Layout>
    );
};

export{Tag};