import React, { useEffect, useState } from 'react';
import {
    useQuery, 
    gql
} from '@apollo/client';
import {LOAD_CLASSES} from "../GraphQL/Queries";

function GetClassesData() {
    const {error, loading, data} = useQuery(LOAD_CLASSES);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        console.log(data);
        if (data) {
            console.log(data.class.Classes);
            setClasses(data.class.Classes);
        };
    }, [data]);

    return (
        <div className='class-data'>
            <ul>
            {classes.map((val) => {
                return <li><h3>{val.Name}</h3><br />{val.Desc}</li>
            })}
            </ul>
        </div>
    )
}

export default GetClassesData;