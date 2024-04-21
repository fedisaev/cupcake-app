import {memo} from "react";

const MainRow = memo(function MainRow() {
    return (
        <>
            <div className='item'>Pair name/market</div>
            <div className='item'>First</div>
            <div className='item'>Second</div>
            <div className='item'>Third</div>
        </>
    );
})

export default MainRow;