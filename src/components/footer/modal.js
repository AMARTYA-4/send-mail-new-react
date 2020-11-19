import React from "react"; 
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Table,
    TableHead,
    TableCell, 
    TableRow
} from "@material-ui/core";
export default function AlertDialog(now) {
    const storeData = useSelector(store => store);
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    const history = useHistory()

    // const now = props.value;
    var txt1, txt2, txt3, txt4, txt5, txt6;
   
      txt1 = storeData.selectedDeviceType;
    
   
      txt2 = storeData.selectedClassificationType;
   
      txt3 = storeData.selectedModelType;
   
      txt4 = storeData.selectedColorType;
   
      txt5 = storeData.selectedIssueType;
        txt6 = storeData.selectedDetailsType.fullname;
    

    const goBackNavigation = (item) => {

        if (item === "first") {  
            history.push("/quotedetailfirst")
          }
          else if (item === "second") {
            if (storeData.selectedClassificationType !== "") {
              history.push("/quotedetailsecond")
      
            }
      
          }
          else if (item === "third") {
            if (storeData.selectedModelType !== "") {
              history.push("/quotedetailthird") 
            }
           
          }
          else if (item === "fourth") {
            if (storeData.selectedColorType !== "") {
              history.push("/quotedetailfourth")
            } 
          }
          else if (item === "five") {
            if (storeData.selectedIssueType !== "") {
              history.push("/quotedetailfive")
            }  
          }
          else if (item === "six") {
            // history.push("/quotedetailsix")
          }
      } 
    
    return (
        <div>
            <p variant="outlined" color="primary" onClick={handleClickOpen}>
                Currently Selecting Group
           </p>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth='lg'
            >
                <DialogTitle id="alert-dialog-title">
                    To change any of the below info just tap on it
                </DialogTitle>
                <DialogContent >
                    <div className="w-100 overflow-auto">
                        <Table style={{ whiteSpace: "pre" }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="px-0" > <p onClick={() => goBackNavigation("first")}>  DeviceType:    </p> </TableCell>
                                    <TableCell className="px-0" >   <p style={{color:"green"}}>    {txt1} </p> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  <p onClick={() => goBackNavigation("second")}>  Classification:   </p></TableCell>
                              
                                    <TableCell className="px-0" >   <p style={{color:"green"}}>    {txt2} </p> </TableCell>  </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  <p onClick={() => goBackNavigation("third")}> Model:</p></TableCell>
                                    <TableCell className="px-0" >   <p style={{color:"green"}}>    {txt3} </p> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  <p onClick={() => goBackNavigation("fourth")}> Color:</p></TableCell>  
                                     <TableCell className="px-0" >   <p style={{color:"green"}}>    {txt4} </p> </TableCell>
                                </TableRow>
                             
                                <TableRow>
                                    <TableCell className="px-0">  <p onClick={() => goBackNavigation("five")}> Issue:</p></TableCell>
                                    <TableCell className="px-0" >    <p style={{color:"green"}}>     {txt5} </p> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  <p onClick={() => goBackNavigation("six")}> Details:</p></TableCell>
                                    <TableCell className="px-0" >   <p style={{color:"green"}}>   {txt6} </p> </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">  Summary:</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="px-0">   Schedule:</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </div>

                </DialogContent>

            </Dialog>
        </div>
    );
}
