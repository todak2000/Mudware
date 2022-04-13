
const MudSVG = (props) => {
    const {imgColor} = props

    return (
        <svg width="36" height="54" viewBox="0 0 36 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.1214 48.1118C14.2463 43.9876 7.38894 35.381 5.19358 24.2682L31.0793 24.2682C28.8574 35.2568 21.991 43.9396 18.1214 48.1118V48.1118ZM18.1457 54C18.1457 54 36 38.6496 36 17.2543C36 7.72522 27.6751 -4.17233e-07 18.1457 -4.17233e-07C8.61707 -4.17233e-07 0.292496 7.72479 0.292496 17.2543C0.292496 38.9968 18.1457 54 18.1457 54" 
        // fill="#4473B7"/>
        fill={imgColor === "blue"?"#4473B7":"#E5AA33"}/>
        </svg>

    )
}

export default MudSVG;