import { useState, useEffect } from "react";

export type RecordItem={
    tagIds:number[]
    note:string
    category:'-'|'+'
    amount:number
    createdAt:string
}
type newRecordItem=Omit<RecordItem,'createdAt'>

const useRecords=()=>{
    const[records,setRecords]=useState<RecordItem[]>([]);

    useEffect(()=>{
        let localTags=JSON.parse(window.localStorage.getItem('records')||'[]')
        if(localTags==0){
            localTags=[
                {tagIds: [2], note: "吃午饭", category: "-", amount: 20, createdAt: "2020-08-25T16:35:53.641Z"},
                {tagIds: [4], note: "打的", category: "-", amount: 20, createdAt: "2020-08-25T16:36:05.553Z"},
                {tagIds: [3], note: "宾馆", category: "-", amount: 203, createdAt: "2020-08-26T16:36:20.082Z"},
                {tagIds: [5], note: "发工资", category: "+", amount: 20000, createdAt: "2020-08-14T16:39:42.756Z"},
                {tagIds: [5], note: "发工资", category: "+", amount: 20000, createdAt: "2020-07-14T16:39:42.756Z"}
            ];
        }
        setRecords(localTags);
    },[])

    useEffect(() => {
            window.localStorage.setItem('records', JSON.stringify(records));        
    }, [records]);

    const addRecord=(newrecord:newRecordItem)=>{
        if(newrecord.amount<=0){
            alert('请先输入金额^ ^')
            return false
        }
        if(newrecord.tagIds.length===0){
            alert('请选择一个标签^ ^')
            return false
        }
        const record={...newrecord,createdAt:(new Date()).toISOString()};
        setRecords( [...records,record]);
        return true
    }
    return{records,addRecord};
}

export{useRecords};