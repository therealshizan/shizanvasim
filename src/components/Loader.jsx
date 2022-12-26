import React, { useState, useEffect } from 'react'
import { CircularProgress, LinearProgress } from "@mui/material";

const Loader = () => {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, []);

    return (
        <>
            {loader ?
                <div className="loader">
                    <div className="linear-progress">
                        <LinearProgress />
                    </div>
                    <CircularProgress style={{ 'color': 'var(--custGreen)' }} />
                </div>
                : ""}
        </>
    )
}

export default Loader