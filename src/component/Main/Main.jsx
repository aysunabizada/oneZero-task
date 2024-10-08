import Filter from "./Filter"
import Modal from "./Modal"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { dataMenu, setProductForModal } from "../../redux/menuSlice"

function Main() {
    const menu = useSelector((state) => state.menu?.data?.categories);
    const selectedCategory = useSelector((state) => state.menu.selectedCategory);
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const filteredMenu = selectedCategory === 'all' ? menu
        : menu?.filter(category => category.name[0].value === selectedCategory);

    function getProduct(arg) {
        dispatch(setProductForModal(arg))
    }

    useEffect(() => {
        dispatch(dataMenu());
    }, [dispatch]);

    return (
        <main className="container">
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            <Filter />
            {
                filteredMenu && filteredMenu?.map((category, i) => (
                    <section className="sec" key={i}>
                        <h2 className='caption'>{category.name[0].value}</h2>
                        <div className="cards">
                            {category.menuItems.map((item, j) => (
                                <div key={j} className="card" onClick={() => { getProduct(item), setIsOpen(!isOpen) }}>
                                    <span>₼ {item.rate.amount}</span>
                                    <img
                                        src={`http://localhost:5000/${item.coverImageSrc}`}
                                        onError={(e)=> {
                                            e.target.src = "https://esquirescoffee.co.uk/wp-content/uploads/2021/09/mike-kenneally-tNALoIZhqVM-unsplash.jpg"
                                        }}
                                        alt={item.name[0].value}
                                    />
                                    <p>{item.name[0].value}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))
            }
        </main>
    )
}

export default Main
