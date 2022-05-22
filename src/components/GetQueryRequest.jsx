import { Box,Paper, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { usePageContext } from "./Page";

export default function GetQueryRequest(){
    const {isInitialized} = usePageContext();
    console.log(isInitialized);
    const {isLoading, error, data } = useQuery('facts',() => 
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json()),
     {enabled:isInitialized} )
     console.log(data);
        if (isLoading) return 'Loading...'
        if (error) return (`An error has occurred: ${error.message}` )
        
    return(
        <Box sx={{display:'flex', justifyContent:'center'}} >
            <Paper >
                <Typography
                    m={4}
                    justifyContent='center'>
                     {/* {data}  */}
                    --- Refresh to get NEW QUERY FACT ---
                </Typography>
            </Paper>
        </Box>
    )
}
