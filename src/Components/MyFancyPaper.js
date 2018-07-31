import React from 'react'
import Paper from '@material-ui/core/Paper'

const styles = {
    margin : '20px',
    padding: '20px'
}

const MyFancyPaper =(props)=>(
    <Paper
        style={styles}    
    >
        {props.children}
    </Paper>
)






export default MyFancyPaper