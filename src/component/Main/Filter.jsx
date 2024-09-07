import { useDispatch, useSelector } from "react-redux"
import { setCategoryFilter } from '../../redux/menuSlice';
import { useState } from "react";

function Filter() {
    const menu = useSelector((state) => state.menu.data.data);
    const dispatch = useDispatch()
    const [selectedCategory, setSelectedCategory] = useState('all');

    function getCategory(arg) {
        setSelectedCategory(arg)
        dispatch(setCategoryFilter(arg))
    }

    return (
        <div>
            <div className="boxes">
                <button className="box" onClick={() => getCategory('all')}>All</button>
                {menu?.categories?.map((item, i) => (
                    <button
                        key={i}
                        className="box"
                        onClick={() => getCategory(item.name[0].value)}
                        >
                            {item.name[0].value}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Filter