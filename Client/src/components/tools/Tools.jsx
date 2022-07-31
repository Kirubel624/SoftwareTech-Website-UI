import React from 'react'
import './tools.css'
import Marquee from "react-easy-marquee";
import Hadoop from '../../assets/images/hadoop.png' 
import Amazon from '../../assets/images/amazon_mc_learning.png'
import Apache from '../../assets/images/apache_spark.png'
import Azure from '../../assets/images/azure_mc_learning.png'
import Java from '../../assets/images/java.png'
import Jupyter from '../../assets/images/jupyter.png'
import Kibana from '../../assets/images/kibana.png'
import Parquet from '../../assets/images/parquet.png'
import Python from '../../assets/images/python.png'
import Qlik from '../../assets/images/qlik.png'
import R from '../../assets/images/r_language.png'
const Tools = () => {
  return (
    <div className="" >
      <div className="flexer_dis">
      <div className="info_page1">
      <p className="">Tools and Technology</p>
<h2>Data Science Tools and Technologies</h2>
<h3></h3>
</div>

<Marquee duration={10000} pauseOnHover={true} reverse={true} background="#f5f5f5" height="150px" className="marque_container"axis="X" width="1100px">
<img src={Hadoop} className="img-fluid"/>
<img src={Amazon} className="img-fluid-1"/>
<img src={Apache} className="img-fluid"/>
<img src={Azure} className="img-fluid"/>
<img src={Java} className="img-fluid"/>
<img src={Jupyter} className="img-fluid"/>
{/* <img src={Kibana} className="img-fluid-2"/> */}
{/* <img src={Parquet} className="img-fluid"/> */}
<img src={Python} className="img-fluid"/>
{/* <img src={Qlik} className="img-fluid"/> */}
{/* <img src={R} className="img-fluid"/> */}
</Marquee>


      </div>
    </div>
  )
}

export default Tools
