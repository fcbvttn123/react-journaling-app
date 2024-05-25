import { Typography } from "@material-ui/core";
import { useGetAllFromCollection } from "../../hooks/getCollection"
import { journalsCollection } from "../../config/firebase";
import { useState, useEffect } from "react";
import { JournalsRenderer } from "./JournalsRenderer";
import { useSortArrayByDate } from "./useSortArrayByDate"
import { useSortArrayIntoGroups } from "./useSortArrayIntoGroups";

export function AllJournals() {

    const [journals, setJournals] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                let data = await useGetAllFromCollection(journalsCollection)
                // Is testing: Start
                useSortArrayIntoGroups(data)
                // Is testing: End
                setJournals(useSortArrayByDate(data))
            } catch(error) {
                console.error(error)
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, []);

    return (
        <div className="mt-24 px-7">

            {
                loading 
                ?
                <Typography variant="h1" color="primary">Loading...</Typography>
                :
                <JournalsRenderer journals={journals}/>
            }

        </div>
    )
    
}