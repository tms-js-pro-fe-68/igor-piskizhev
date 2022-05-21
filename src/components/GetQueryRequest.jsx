import { Box,Paper, Typography } from "@mui/material";
import { useQuery } from "react-query";

export default function GetQueryRequest(){
    const {isLoading, error, data} = useQuery('facts',() => 
    fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()
     )
    )
    if (isLoading) return 'Loading...'
 
    if (error) return (`An error has occurred: ${  error.message}`)
    return(
        <Box sx={{display:'flex', justifyContent:'center'}} >
            <Paper >
                <Typography
                    m={4}
                    justifyContent='center'>
                     {data.value} <br/>
                    --- Refresh to get NEW QUERY FACT ---
                </Typography>
            </Paper>
        </Box>
    )

}




