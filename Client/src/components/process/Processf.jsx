import React from 'react';
import './processf.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {ArrowRightOutlined} from '@ant-design/icons'
import UO from '../../assets/images/UO.PNG'
import ID from '../../assets/images/ID.PNG'
import ED from '../../assets/images/ED.PNG'
import MD from '../../assets/images/MD.PNG'
import CR from '../../assets/images/CR.PNG'



const Processf = () => {
  return (
    <div className="process_tf">
        <div className="process_tf_con">
        <div><p id="process_zero">Process We Follow</p></div>
     <div className="process_tf_step_aligner">
         <div className="process_tf_aligner"><div className="process_UO1"><img src={UO}/></div> 
         <div><p id="p_one">Understand The</p><p id="p_one"> Objective</p></div> </div>
         <ArrowForwardIcon sx={{ fontSize: 30 }} className="arrow_cor"/>

       
        
       <div className="process_tf_aligner"><div className="process_UO"><img src={ID}/></div> 
       <div><p id="p_two">Import The Data</p><p id="p_two"> </p></div> </div>
     <ArrowForwardIcon sx={{ fontSize: 30 }} className="arrow_cor"/>
     <div className="process_tf_aligner"><div className="process_UO"><img src={ED}/></div> 
     <div><p id="p_two">Explore And Clean The</p><p id="p_two"> Data</p></div> </div>
     <ArrowForwardIcon sx={{ fontSize: 30 }} className="arrow_cor"/>
     <div className="process_tf_aligner"><div className="process_UO"><img src={MD}/></div> 
     <div><p id="p_two">Model The Data</p><p id="p_two"> </p></div> </div>
     <ArrowForwardIcon sx={{ fontSize: 30 }} className="arrow_cor"/>
     <div className="process_tf_aligner"><div className="process_UO"><img src={CR}/></div> 
     <div><p id="p_two">Communicate The</p><p id="p_two"> Results</p></div> </div>
     
     </div> 
      </div>
    </div>
  );
}

export default Processf;
