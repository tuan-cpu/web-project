import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import './index.scss';

const CardSkeleton = () =>{
    return(
        <div className="card-skeleton-item">
            <div className="card-skeleton-inner">
                <div className="card-skeleton-top">
                    <Skeleton baseColor="#0f171e" highlightColor="#1a242f" height={300}/>
                </div>
                <div className="card-skeleton-bottom">
                    <div className="card-skeleton-info">
                        <Skeleton baseColor="#0f171e" highlightColor="#1a242f" height={100}/>
                        <Skeleton baseColor="#0f171e" highlightColor="#1a242f" height={50}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton;