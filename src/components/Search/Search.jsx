import { useDispatch, useSelector } from 'react-redux';
import { togglePopUp } from '../../app/slices/popUp.slice';

const Search = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.popup.items.search);
    console.log(show);

    return (
        <div>
            <span
                className="material-symbols-outlined pl-2 pt-2 pb-2"
                onClick={() => dispatch(togglePopUp({ popUp: 'search', show }))}
            >
                search
            </span>
        </div>
    );
};

export default Search;
