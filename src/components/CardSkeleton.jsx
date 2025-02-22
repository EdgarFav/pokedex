/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
    return (<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center" >
        {Array(cards).fill(0).map((_, i) => (
            <div className="flex flex-col items-center p-4 w-50" key={i}>
                <Skeleton circle height={100} width={100} />
                <Skeleton height={20} width={100} className="mt-9" />
            </div>
        ))}
    </div>)

}
export default CardSkeleton;
