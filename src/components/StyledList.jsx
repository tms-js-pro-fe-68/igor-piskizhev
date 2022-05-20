import { Box, Button, Checkbox, styled} from "@mui/material"


const styledItems = [
    'style prop', // div, checkbox, button
    'system props', // Box, Checkbox, Button
    'sx prop', // Box, Checkbox, Button
    'styled component', // div, checkbox, button
    'tailwind css' // div, checkbox, button
]

function StylePropsItem() {
    return(
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
    )
}

function SystemProps() {
    return(
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
            Check
        </Button>
    </Box>
    )
}

function SxProps() {
    return(
        <Box
        sx={{
            display:'grid',
            gridTemplateColumns:'1fr 2fr 1fr',
            p:1,
            m:4,
            border:"solid black",
            justifyItems:'center'
        }}
    >
        <Checkbox/>
        {styledItems[2]}
        <Button
            variant="contained">
            Check
        </Button>
    </Box>
    )
}

function StyledComponent() {
    const MyDiv = styled(Box)({
        display: 'grid',
        gridTemplateColumns:'1fr 2fr 1fr',
        padding: '8px',
        margin: '32px',
        border: "solid black",
        justifyItems:'center'
    })
    const MyButton = styled(Button)({
        variant:"contained",
        height:'42px',
        width:'83px',
        backgroundColor:'#1976d2',
        color:'white',
        borderRadius:'4px'
    })

    return(
      <MyDiv>
          <Checkbox/>
          {styledItems[3]}
          <MyButton>CHECK</MyButton>
      </MyDiv>

  )
}

function TailWindCss() {
    return(
        <div className="grid grid-cols-3 p-4 m-8 items-center justify-items-center border border-black border-solid ">
        <input type="checkbox" />
        {styledItems[4]}
        <button 
            type="submit"
            className="text-white bg-blue-500 h-6 w-20 rounded"
            >
            CHECK
        </button>
    </div>
    )
}


export default function StyledList() {
    return(
        <>
            <StylePropsItem/>
            <SystemProps/>
            <SxProps/>
            <StyledComponent/>
            <TailWindCss/>
        </>
    )
    
}