import { BounceLoader, ClockLoader } from "react-spinners";

export default function Spinner(){
    return (
        <BounceLoader color={'#1E3A8A'} speedMultiplier={2}/>

    );
}
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red"
}
export const ClipLoaderSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <ClockLoader
                loading={true}
                cssOverride={override}
                size={150}
            />
        </div>
    )
}