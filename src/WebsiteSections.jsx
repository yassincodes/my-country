import { Button, Grid } from '@chakra-ui/react';
import "./WebsiteSections.css"

function WebsiteSections() {
    return (
        <div style={{marginTop: "8vh"}}>
            <div className="WebsiteSections_header">عناصر الموقع</div>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} style={{padding: "35px 50px 50px 50px"}}>
            <Button style={{marginLeft: "20px"}}>فديوهات تعليمية</Button>
            <Button style={{marginRight: "20px"}}>الدروس والتمارين</Button>
            <Button style={{marginLeft: "20px"}}>أطلسي</Button>
            <Button style={{marginRight: "20px"}}>بلادي</Button>
            </Grid>
        </div>
    )
}

export default WebsiteSections