import { Box,Paper, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { usePageContext } from "./Page";

export default function GetQueryRequest(){
    const {isInitialized} = usePageContext();
    console.log(`Initialized Status on Query ${isInitialized}`);
    const {isLoading, error, data } = useQuery('facts',() => 
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json()).then(result => result.value),
     {enabled:isInitialized} )
        if (isLoading) return 'Loading...'
        if (error) return (`An error has occurred: ${error.message}` )
        
    return(
        <Box sx={{display:'flex', justifyContent:'center'}} >
            <Paper >
                <Typography
                    m={4}
                    justifyContent='center'>
                       {data}<br/>
                    --- Refresh to get NEW QUERY FACT ---
                </Typography>
            </Paper>
        </Box>
    )
}


