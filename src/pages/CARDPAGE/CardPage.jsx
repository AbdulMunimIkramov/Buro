import { useParams, useNavigate } from 'react-router-dom';
import './CardPage.scss';

const CardPage = ({ cardsData }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Находим карточку по id
    const card = cardsData.find(card => card.id.toString() === id);

    if (!card) {
        return <h2>Карточка не найдена</h2>;
    }

    return (
        <div className="CardPage">
            <button className="CardPage__back" onClick={() => navigate(-1)}>Назад</button>

            <div className="CardPage__content">
                <div className="CardPage__image">
                    <img src={card.img} alt={card.category} />
                </div>

                <h1 className="CardPage__title">{card.category}</h1>

                <p className="CardPage__description">{card.description}</p>

                {card.favourite && (
                    <div className="CardPage__favourite">
                        <svg width="50" height="45" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2208 9.49222L9.13642 6.58888C8.78739 ..." stroke="#FF0000" strokeWidth="9" />
                        </svg>
                        <span>Избранное</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardPage;
