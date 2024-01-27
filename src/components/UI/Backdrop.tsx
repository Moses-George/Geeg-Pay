import React from "react";
import ReactDOM from "react-dom";

interface IclickProp {
    onClick?: any;
 }
 
 const BackdropOverlay = ({ onClick }: IclickProp) => {
    return (
       <div onClick={onClick} className="fixed backdrop top-0 left-0 w-full h-screen z-[1000] bg-[rgba(0,0,0,0.45)] lg:hidden"></div>
    )
 }
 

 const Backdrop = ({ onClick }: IclickProp) => {

    const root = document.getElementById('backdrop-root') as HTMLElement;

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <>
                    <BackdropOverlay onClick={onClick} />
                </>, root)}
        </React.Fragment>
    )
}

export default Backdrop;