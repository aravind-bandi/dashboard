import "./WidgetLg.css"

export default function WidgetLg() {
  const Button = ({type}) =>{
    return <button className={"WidgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="WidgetLg">
      <h3 className="WidgetLgTitle">Latest Transction</h3>
      <table className="WidgetLgTable">
        <tr className="WidgetLgTr">
          <th className="WidgetLgTh">Customer</th>
          <th className="WidgetLgTh">Date</th>
          <th className="WidgetLgTh">Amount</th>
          <th className="WidgetLgTh">Status</th>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgetLgUser">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg" 
            className="WidgetLgImg" alt=""/>
            <span className="WidgetLgName">Rio</span>
          </td>
          <td className="WidgetLgdate">04-12-2024</td>
          <td className="WidgetLgAmount">$400.00</td>
          <td className="WidgetLgStatus"> <Button type="Approved"/></td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgetLgUser">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg" className="WidgetLgImg"/>
            <span className="WidgetLgName">Aru</span>
          </td>
          <td className="WidgetLgdate">04-12-2024</td>
          <td className="WidgetLgAmount">$400.00</td>
          <td className="WidgetLgStatus"> <Button type="Pending"/></td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgetLgUser">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/046/171/843/small_2x/confident-indian-businessman-in-professional-attire-and-pose-photo.jpg" className="WidgetLgImg"/>
            <span className="WidgetLgName">Arav</span>
          </td>
          <td className="WidgetLgdate">04-12-2024</td>
          <td className="WidgetLgAmount">$400.00</td>
          <td className="WidgetLgStatus"> <Button type="declined"/></td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="WidgetLgUser">
            <img src="https://www.shutterstock.com/image-photo/indian-uncle-happily-pointing-on-260nw-2516370411.jpg" className="WidgetLgImg"/>
            <span className="WidgetLgName">Aravind</span>
          </td>
          <td className="WidgetLgdate">04-12-2024</td>
          <td className="WidgetLgAmount">$400.00</td>
          <td className="WidgetLgStatus"> <Button type="Cancled"/></td>
        </tr>

      </table>
    </div>
  )
}
