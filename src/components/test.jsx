import { useState } from "react";
import Pagination from ".";
import './pagination.css';

function PaginationTest() {
    const productData = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Product - ${index + 1}`
    }));

    console.log(productData);

    const itemsPerPage = 10;
    const [currentPages, setCurrentPages] = useState(1);

    function handlePageChange (currentPages) {
        setCurrentPages(currentPages )
    }
    const indexOfLastItems = currentPages * itemsPerPage;
    const indexOfFirstItem = indexOfLastItems - itemsPerPage;
    const currentListOfItems = productData.slice(indexOfFirstItem, indexOfLastItems);

    console.log(currentListOfItems, indexOfFirstItem, indexOfLastItems);

    return (
        <div>
            <h1 className="name">Pagination</h1>
            <ul className="list-items">
                {currentListOfItems.map((listItems) => (
                    <li key={listItems.id}> {listItems.name}</li>
                ))}
            </ul>
            <Pagination
            currentPages={currentPages} 
            totalPages={Math.ceil(productData.length/itemsPerPage)}
            onPageChange={handlePageChange}
            />
        </div>
    );
}

export default PaginationTest;