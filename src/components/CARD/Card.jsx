import './Card.scss'

export const Card = ({ img, category, description }) => {
    // Ограничения символов
    const maxCategoryLength = 20;
    const maxDescriptionLength = 100;

    // Функция обрезки текста
    const truncateText = (text, maxLength) => 
        text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return (
        <div className='container'>
            <div className='Card'>
                <div className='Card__img'>
                    <img src={img} alt={category} />
                </div>

                <div className='Card__category'>
                    {truncateText(category, maxCategoryLength)}
                </div>

                <span className='Card__underline'></span>

                <div className='Card__discription'>
                    {truncateText(description, maxDescriptionLength)}
                </div>
            </div>
        </div>
    )
}

export default Card;
