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
        setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
    },[])
    useEffect(() => {
            window.localStorage.setItem('records', JSON.stringify(records));        
    }, [records]);

    const addRecord=(newrecord:newRecordItem)=>{
        if(newrecord.amount<=0){
            alert('请先输入金额^ ^')
            return false
        }
        if(newrecord.tagIds.length==0){
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