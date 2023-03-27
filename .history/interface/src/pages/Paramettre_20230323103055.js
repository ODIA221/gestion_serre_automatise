// import React from "react";
import "./Style2.css";
 import Swal from 'sweetalert2'
 import {ThemeContext} from './theme-context';

 class ThemedButton extends React.Component {
   render() {
     let props = this.props;
     let theme = this.context;
     return (
       <button
         {...props}
         style={{backgroundColor: theme.background}}
       />
     );
   }
 }
 


 async function Paramettre(){
 
return(

  await Swal.fire({
    title:"Paremettre d'arrosage",
    input: 'select',
    inputOptions: {
        salade: 'salade',
        tomate: 'tomate',
        autre: 'autre',
      
    },
    
     
    showCancelButton: true,
  })
   

);


}
export default Paramettre;  