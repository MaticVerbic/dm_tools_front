import React, { useEffect, useState } from 'react';
import {
    useQuery, 
    gql
} from '@apollo/client';
import {LOAD_CLASSES} from "../GraphQL/Queries";

function GetClasses() {
    const {error, loading, data} = useQuery(LOAD_CLASSES);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        console.log(data);
        if (data) {
            console.log(data.class.Classes);
            setClasses(data.class.Classes);
        };
    }, [data]);

    return <div>
        {classes.map((val) => {
            return <h3>{val.Name}</h3>
        })}
    </div>
}

export default GetClasses;