import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="WidgetSm">
        <span className="WidgetSmTitle">New Join Members</span>
        <ul className="WidgetSmList">
            <li className="WidgetSmListItem">
                <img src="https://www.shutterstock.com/image-photo/portrait-asian-man-woman-dairy-260nw-2169311067.jpg" className="WidgetSmImg" alt=""/>
                <div className="WidgetSmUser">
                    <span className="WidgetSmUserName">Raboin</span>
                    <span className="WidgetSmUserTitle">Rob salerss</span>
                </div>
                <button className="WidgetSmButton">
                    <VisibilityIcon className="WidgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="WidgetSmListItem">
                <img src="https://www.shutterstock.com/image-photo/portrait-asian-man-woman-dairy-260nw-2169311067.jpg" className="WidgetSmImg"/>
                <div className="WidgetSmUser">
                    <span className="WidgetSmUserName">Joy</span>
                    <span className="WidgetSmUserTitle">Rob salerss</span>
                </div>
                <button className="WidgetSmButton">
                    <VisibilityIcon className="WidgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="WidgetSmListItem">
                <img src="https://www.shutterstock.com/image-photo/portrait-asian-man-woman-dairy-260nw-2169311067.jpg" className="WidgetSmImg"/>
                <div className="WidgetSmUser">
                    <span className="WidgetSmUserName">Danny</span>
                    <span className="WidgetSmUserTitle">Rob salerss</span>
                </div>
                <button className="WidgetSmButton">
                    <VisibilityIcon className="WidgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="WidgetSmListItem">
                <img src="https://www.shutterstock.com/image-photo/portrait-asian-man-woman-dairy-260nw-2169311067.jpg" className="WidgetSmImg"/>
                <div className="WidgetSmUser">
                    <span className="WidgetSmUserName">Jhon</span>
                    <span className="WidgetSmUserTitle">Rob salerss</span>
                </div>
                <button className="WidgetSmButton">
                    <VisibilityIcon className="WidgetSmIcon"/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
