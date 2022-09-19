import ApiCallHandler from "./ApiCallHandler"

export default function ControlArea (props) {

    return (
        <div className="controlContainer">
            <div className="textField">
                <label 
                    htmlFor="ticketInput"
                    className="inputLabel">
                        Ticket Text
                </label>
                <input 
                    id="ticketInput"
                    name="ticketInput"
                    className="inputField" 
                    value={props.ticketText} 
                    onChange={props.inputChange}/>
            </div>
            <div className="crudControls">
                <button
                    disabled={!props.ticketTextNew} 
                    onClick={() => ApiCallHandler.createTicket({ticketText: props.ticketText})}>
                        Create
                </button>
                <button>Update</button>
                <button>Delete</button>
            </div>
            <div className="moveControls">
                <button className="leftButton">Left</button>
                <button className="upButton">Up</button>
                <button className="downButton">Down</button>
                <button className="rightButton">Right</button>
            </div>
        </div>
    )
}