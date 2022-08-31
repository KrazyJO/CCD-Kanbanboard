export default function ControlArea (props) {


    function inputChange(evt) {
        console.log("chan")
    }

    return (
        <div className="controlContainer">
            <div className="textField">
                <input value={props.ticketText} onChange={inputChange}/>
            </div>
            <div className="crudControls">
                <button>Create</button>
                <button>Update</button>
                <button>Delete</button>
            </div>
            <div className="moveControls">
                <button>Right</button>
            </div>
        </div>
    )
}