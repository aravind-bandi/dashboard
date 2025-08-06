import PieBarChart from '../../components/arav/PieBarChart';
import Chart from '../../components/charts/Chart';
import Acode from '../../components/code/Acode';
import Featuredinfo from '../../components/featuruinfo/Featuredinfo';

import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/Widgetsm/WidgetSm';
import "./home.css"

export default function Home () {
  return (
    <div className="home">
              <Featuredinfo/>
              {/* <Acode/> */}
             
              {/* <Chart/> */}
              <div className="homeWidgets">
                {/* <WidgetSm/> */}
                {/* <WidgetLg/> */}
               
              </div>
              <div className="homeWidgets">
              {/* <PieBarChart/> */}
             
              </div>
              
              
    </div>
  )
}

