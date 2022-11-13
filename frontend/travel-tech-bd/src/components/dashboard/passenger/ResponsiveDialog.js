import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function ResponsiveDialog({ users }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <button className={users.length > 0 ? "m-5 bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" : "hidden"} type="submit" onClick={handleClickOpen}>
        Submit
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        maxWidth={"xl"}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Records Summary"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {
              users.map((each, index) => (
                <div className='m-3 w-full' key={index}>
                  <div className='flex gap-4'>
                    <div className='gap-1 flex'>
                      <span>Record Date:</span>
                      <span className='font-semibold'>{each.record_date}</span>
                    </div>
                    <div className='flex gap-1'>
                      <span>Payment Status:</span>
                      <span className={each.status === "paid" ? "text-green-700 font-semibold uppercase" : "text-red-700 font-semibold uppercase"}>{each.status}</span>
                    </div>
                    <div className='flex gap-1'>
                      <span>Travel Date:</span>
                      <span className='font-semibold'>{each.travel_date}</span>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex gap-1'>
                      <span>Client Name:</span>
                      <span className='font-semibold'>{each.client}</span>
                    </div>
                    <div className='flex gap-1'>
                      <span>Service:</span>
                      <span className='font-semibold'>{each.service}</span>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex gap-1'>
                      <span>Reference No.</span>
                      <span className='font-semibold'>{each.ref_no}</span>
                    </div>
                    <div className='flex gap-1'>
                      <span>Passenger Name:</span>
                      <span className='font-semibold'>{each.passenger}</span>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex gap-1'>
                      <span>Description:</span>
                      <span className='font-semibold'>{each.desc}</span>
                    </div>
                    <div className='flex gap-1'>
                      <span>Provider Name:</span>
                      <span className='font-semibold'>{each.provider}</span>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex gap-1'>
                      <span>Net Fare:</span>
                      <span className='font-semibold'>{each.net_fare}</span>
                    </div>
                    <div className='flex gap-1'>
                      <span>Service Fee:</span>
                      <span className='font-semibold'>{each.service_charge}</span>
                    </div>
                    <div className='flex gap-1'>
                      <span>Discount:</span>
                      <span className='font-semibold'>{each.discount}</span>
                    </div>
                    <div className='flex gap-1'>
                      <span>Total Fare:</span>
                      <span className='font-semibold'>{each.total_fare}</span>
                    </div>
                    <div className='flex gap-1'>
                      <span>Due Amount:</span>
                      <span className='font-semibold'>{each.record_date}</span>
                    </div>
                  </div>
                  {/* <div>
                    <span>Outstanding Amount</span>
                    <span>0.00</span>
                    <span>Outstanding Due</span>
                    <span>0.00</span>
                  </div> */}
                  <br />
                </div>
              ))
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "red" }} autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button style={{ color: "green" }} onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}