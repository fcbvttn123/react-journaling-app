import { Grid, Typography } from "@material-ui/core";
import { JournalCard } from "../../components/Card";
import { useGetAllFromCollection } from "../../hooks/getCollection"
import { journalsCollection } from "../../config/firebase";
import { useState, useEffect } from "react";

export function AllJournals() {

    const [journals, setJournals] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                let data = await useGetAllFromCollection(journalsCollection)
                setJournals(data)
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
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    {
                        journals && 
                        journals.map((e, i) => 
                            <Grid key={i} item xs={12} sm={6} lg={4}>
                                <JournalCard avatar={"F"} title={e.daySummary} date={e.date} content={e.description} />
                            </Grid>
                        )
                    }
                </Grid>
            }

        </div>
    )
    
}