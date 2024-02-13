import { createTheme} from '@mui/material';
import { darken } from '@mui/material';

const theme = createTheme ({
    palette:{
        primary:{
            main:'#00796b'
        },
        secondary:{
            main:' #ffab00'
        },
        error:{
            main: '#d32f2f'
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    background:'#00796b',
                    color: '#fffff',
                    '&:hover':{background: darken('#00796b',0.15)},
                }
            }
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    background:'#004d40',
                    color:'#fffff', 
                }
            }
        },
        MuiChip:{
            styleOverrides:{
                root:{
                  background:'#00796b', 
                  color:'#fffff',
                  border: '2px solid #ffab00',
                  '&.MuiChip-outlined':{
                    borderColor:'#FFAB00',
                    color: '#FFAB00',
                  } ,
                }
            }
        }
    },
    typography:{
        fontFamily:'Roboto, Helvetica, Arial, sans-serif',
        fontSize:16,
        fontWeightBold:500
    },

})

export default theme;