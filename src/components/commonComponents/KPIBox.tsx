import { Card } from "@mui/material";

export default function KPIBox(props:{data:string|JSX.Element|number,description:string,subscript?:string,alert?:boolean}){
    return(
        <Card
        className="KPI-Box"
        sx={{
        // background:"rgb(40,36,44)",
        width:"100%",height:"100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexFlow: "column",
        paddingX: 0.5,}}>
            <div className='KPI-Box-Data' style={{fontSize:"24px",fontWeight:"bold",color:props.alert?"rgba(255, 126, 126, 1)":"#02152B"}}>{props.data}<sub className='KPI-Box-Data-Subscript' style={{fontSize:"10px",fontWeight:"normal"}}>{props.subscript}</sub></div>
            <div className='KPI-Box-Description' style={{fontSize:"12px",textAlign:"center"}}>{props.description}</div>
        </Card>
    )
}