import { Box, Button, Checkbox} from "@mui/material"



export default function StyledList() {
    const styledItems = [
        'style prop', // div, checkbox, button
        'system props', // Box, Checkbox, Button
        'sx prop', // Box, Checkbox, Button
        'styled component', // div, checkbox, button
        'tailwind css' // div, checkbox, button
      ]
        return (
        <>
            <div style={{
                display: 'grid',
                gridTemplateColumns:'1fr 2fr 1fr',
                padding: '8px',
                margin: '32px',
                border: "solid black",
                justifyItems:'center'
            }}>
                <input type="checkbox" />
                {styledItems[0]}
                <button
                 type="submit"
                 style={{
                     height:'42px',
                     width:'83px',
                     backgroundColor:'#1976d2',
                     color:'white',
                     borderRadius:'4px'
                 }}
                 >
                     CHECK
                </button>
            </div>

            <Box
                display='grid'
                gridTemplateColumns='1fr 2fr 1fr'
                p={1}
                m={4}
                border="solid black"
                justifyItems='center'
            >
                    <Checkbox/>
                    {styledItems[1]}
                    <Button
                    variant="contained">
                        Check</Button>
            </Box>
        </>

    )
    
}






  