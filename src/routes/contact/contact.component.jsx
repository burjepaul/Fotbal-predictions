import { useReducer, useState } from 'react'
// import emailjs from "emailjs-com"
import './contact.styles.scss'

const Contact = () => {
    const [validData, setValidData] = useState(true)
    const [messageSent, setMessageSent] = useState(false)

    const initalValues ={
        name: "",
        email:"",
        phone:"",
        message:"",
        emailcolor: "black",
        phonecolor: "black",
        messagecolor: "black"
    }

    const ACTION_TYPES = {
        CHANGE_NAME: "change_name",
        CHANGE_EMAIL: "change_email",
        CHANGE_PHONE: "change_phone",
        CHANGE_MESSAGE: "change_message",
        CHANGE_EMAIL_COLOR: "change_email_color",
        CHANGE_PHONE_COLOR: "change_phone_color",
        CHANGE_MESSAGE_COLOR: "change_message_color"
    }

    const reducer = (state, action) => {
        switch(action.type){
            case ACTION_TYPES.CHANGE_NAME:
                return{
                    ...state,
                    name: action.newNameValue
                }
            case ACTION_TYPES.CHANGE_EMAIL:
                return{
                    ...state,
                    email: action.newEmailValue
                }
            case ACTION_TYPES.CHANGE_PHONE:
                return{
                    ...state,
                    phone: action.newPhoneValue
                }
            case ACTION_TYPES.CHANGE_MESSAGE:
                return{
                    ...state,
                    message: action.newMessageValue
                }
            case ACTION_TYPES.CHANGE_EMAIL_COLOR:
                return{
                    ...state,
                    emailcolor: action.newEmailColor
                }
            case ACTION_TYPES.CHANGE_PHONE_COLOR:
                return{
                    ...state,
                    phonecolor: action.newPhoneColor
                }
            case ACTION_TYPES.CHANGE_MESSAGE_COLOR:
                return{
                     ...state,
                    messagecolor: action.newMessageColor
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initalValues)

    const handleNameChange = (event) =>{
        dispatch({
            type: ACTION_TYPES.CHANGE_NAME,
            newNameValue: event.target.value
        })
    }
    const handleEmailChange = (event) =>{
        dispatch({
            type: ACTION_TYPES.CHANGE_EMAIL,
            newEmailValue: event.target.value
        })
    }
    const handlePhoneChange = (event) =>{
        dispatch({
            type: ACTION_TYPES.CHANGE_PHONE,
            newPhoneValue: event.target.value
        })
    }
    const handleMessageChange = (event) =>{
        dispatch({
            type: ACTION_TYPES.CHANGE_MESSAGE,
            newMessageValue: event.target.value
        })
    }

    const validateData = () => {
        const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        const phoneFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        if (!state.email.match(mailFormat)){
                if (state.email.length > 1){
                    dispatch({
                        type: ACTION_TYPES.CHANGE_EMAIL_COLOR,
                        newEmailColor: 'red'
                    })
                }
                setValidData(false)
                return
            }
        else {
            dispatch({
                type: ACTION_TYPES.CHANGE_EMAIL_COLOR,
                newEmailColor: 'black'
            })
        }
        if (!state.phone.match(phoneFormat)){
            if (state.phone.length > 1){
                dispatch({
                    type: ACTION_TYPES.CHANGE_PHONE_COLOR,
                    newPhoneColor: 'red'
                })
            }
            setValidData(false)
            return
        }
        else {
            dispatch({
                type: ACTION_TYPES.CHANGE_PHONE_COLOR,
                newPhoneColor: 'black'
            })
        }
        if (state.message.length < 50) {
            if (state.message.length > 1){
                dispatch({
                    type: ACTION_TYPES.CHANGE_MESSAGE_COLOR,
                    newMessageColor: 'red'
                })
            }
            setValidData(false)
            return
        }
        else {
            dispatch({
                type: ACTION_TYPES.CHANGE_MESSAGE_COLOR,
                newMessageColor: 'black'
            })
        }
        setValidData(true) 
    }

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_emvnbab', 'template_nljbpov', e.target, 'dWdldUeQp-bwHTTqj')
    //     .then((result) => {
    //         window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    //     }, (error) => {
    //         console.log(error.text);
            
    //     });
    // }


    const clearFields = () => {
        dispatch({
            type: ACTION_TYPES.CHANGE_MESSAGE,
            newMessageValue: ''
        })
        dispatch({
            type: ACTION_TYPES.CHANGE_PHONE,
            newPhoneValue: ''
        })
        dispatch({
            type: ACTION_TYPES.CHANGE_EMAIL,
            newEmailValue: ''
        })
        dispatch({
            type: ACTION_TYPES.CHANGE_NAME,
            newNameValue: ''
        })
        setMessageSent(true)
    }

    return(
        <>
            <h1>Contact</h1>
            <form className='form-component' onSubmit={(e) => {
                e.preventDefault()
                validateData()
                if(validData){
                    // sendEmail(e)
                    clearFields()
                    console.log(1)
                }   
            }}>
                <div className="form-group-name">
                    <label>NAME:</label>
                    <input type="text" placeholder='Your name *' name="from_name" value={state.name}  onChange={handleNameChange}/>
                    <label>EMAIL:</label>
                    <input type="text" placeholder='Your email *' name="from_email" value={state.email} style={{color:state.emailcolor}} onChange={handleEmailChange}/>
                    <label>PHONE:</label>
                    <input type="text" placeholder='Your phone *' name="phone" value={state.phone} style={{color:state.phonecolor}} onChange={handlePhoneChange}/>
                    <label>MESSAGE:</label>
                    <textarea placeholder='Your message (min 50 characters) *' name="message" value={state.message} style={{color:state.messagecolor}} onChange={handleMessageChange}/>
                </div>
                {
                (validData) ?
                    '' 
                    :
                    <p style={{color:"red"}}>Something is wrong, check again!</p>
                }

                {
                (messageSent) ? 
                    <p style={{color:"red"}}>Message sent!</p> 
                    :
                    ''
                }
                <button className='submit-contact'>Send</button>
            </form>
        </>
    )
}

export default Contact