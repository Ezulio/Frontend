import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import Coba from '../component/Coba1';
const data =
    [
        {
            "id": "001",
            "nama": "SDN 03",
            "kesiapan": "Siap",
            "hasil": "Perikanan, LSM, Pendidikan"
        }
        ,
        {
            "id": "001",
            "nama": "SDN 03",
            "kesiapan": "Siap",
            "hasil": "Perikanan, LSM, Pendidikan"
        }
    ];

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'NAMA',
        dataIndex: 'nama',
        key: 'nama',
    },
    {
        title: 'KESIAPAN',
        dataIndex: 'kesiapan',
        key: 'kesiapan',
    },
    {
        title: 'HASIL',
        dataIndex: 'hasil',
        key: 'hasil',
    },
];


export default function Hasil() {

    // let [dataBackend,setDataBackend]=useState(null);
    let [dummy,setDummy]=useState( [
        {
            "nama": "Adam",
            "key": "1"
        },
        {
            "nama": "Yanka",
            "key": "2"
        },
        {
            "nama": "Gaga",
            "key": "3"
        }
    ]
    )



    // if (dataBackend ){

    //     return (
    //         <div>
    //             <Table dataSource={data} columns={columns} />;
    //         </div>
    //     )
    // }

    // else{

    //     return (
    //         <div>
    //             Loading...
    //         </div>
    //     )
    // }

    return (
        <>
          {dummy.map(data=>(
              <Coba data={data} key={data.key} onClick={(data)=>console.log(data)} onDelete={(data)=>{setDummy(dummy.filter(obj => obj.key !== data))}}/>
          ))}
        </>
    )


}