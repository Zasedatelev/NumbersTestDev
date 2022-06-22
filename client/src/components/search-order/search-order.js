import './search-order.css';

const SearchPanel = () => {
    return (
        <div className='search'>
            <input type='number' 
                className="form-control search-input"
                placeholder="Введите нормер заказа">

                </input>
            <div className="search-btn">
                <button type="button" class="btn btn-primary">Найти</button>
            </div>    
        </div>
    )
}

export default SearchPanel;