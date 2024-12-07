import './Card.scss'

export const Card = ({ img, category, description, favourite }) => {
    // Ограничения символов
    const maxCategoryLength = 20;
    const maxDescriptionLength = 100;

    // Функция обрезки текста
    const truncateText = (text, maxLength) =>
        text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

    return (
        <div className='container'>
            <div className='Card'>
                <div className='Card__heart'>
                    {favourite ? (
                        <svg width="35" height="30" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2208 9.49222L9.13642 6.58888C8.78739 6.26033 8.35493 5.91719 7.90485 5.67275C7.45237 5.42701 7.15083 5.37146 6.98822 5.37146C5.98207 5.37146 5.45727 5.67867 5.24103 5.87277C5.06037 6.03493 4.89429 6.28223 4.89429 6.78957C4.89429 7.24541 5.04929 7.80401 5.84319 8.69413C6.72185 9.6793 7.9704 10.6219 9.68779 11.8874L9.68963 11.8887C9.74088 11.9265 9.79274 11.9648 9.84518 12.0034C10.5633 12.5328 11.3887 13.1413 12.2218 13.8167C13.0666 13.1319 13.904 12.5154 14.6324 11.9791C14.6744 11.9482 14.7159 11.9176 14.7571 11.8873L12.2208 9.49222ZM12.2208 9.49222L15.3052 6.58888M12.2208 9.49222L15.3052 6.58888M15.3052 6.58888C15.6522 6.26224 16.0852 5.91889 16.5368 5.67397M15.3052 6.58888L16.5368 5.67397M16.5368 5.67397C16.991 5.42759 17.2946 5.37146 17.4587 5.37146M16.5368 5.67397L17.4587 5.37146M17.4587 5.37146C18.464 5.37146 18.9886 5.67849 19.2048 5.8726C19.3855 6.0348 19.5516 6.2822 19.5516 6.78957C19.5516 7.24534 19.3965 7.80402 18.6022 8.69432M17.4587 5.37146L18.6022 8.69432M18.6022 8.69432C17.7232 9.67953 16.4747 10.6217 14.7579 11.8867L18.6022 8.69432Z" stroke="#FF0000" stroke-width="9" />
                        </svg>
                    ) : (
                        <svg width="35" height="30" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2208 8.11888L9.82184 5.86073C9.43279 5.49452 8.9309 5.09204 8.38211 4.79399C7.83145 4.49493 7.36501 4.37146 6.98822 4.37146C5.77421 4.37146 4.9997 4.74562 4.57305 5.12859C4.17407 5.48671 3.89429 6.00784 3.89429 6.78957C3.89429 7.57067 4.20189 8.35627 5.09689 9.35975C6.05783 10.4372 7.39692 11.4415 9.09458 12.6924L9.09601 12.6935C9.14025 12.7261 9.18486 12.759 9.2298 12.7921C10.1478 13.469 11.2054 14.2488 12.2218 15.117C13.25 14.2389 14.3203 13.4508 15.2492 12.7668C15.2831 12.7418 15.3168 12.717 15.3503 12.6923L12.2208 8.11888ZM12.2208 8.11888L14.6197 5.86073M12.2208 8.11888L14.6197 5.86073M14.6197 5.86073C15.0072 5.49601 15.5098 5.09336 16.06 4.79494M14.6197 5.86073L16.06 4.79494M16.06 4.79494C16.6123 4.49538 17.0807 4.37146 17.4587 4.37146M16.06 4.79494L17.4587 4.37146M17.4587 4.37146C18.672 4.37146 19.4462 4.74548 19.8728 5.12846C20.2718 5.48661 20.5516 6.00782 20.5516 6.78957C20.5516 7.57072 20.2438 8.35643 19.3484 9.36006M17.4587 4.37146L19.3484 9.36006M19.3484 9.36006C18.3872 10.4375 17.0481 11.4414 15.3509 12.6919L19.3484 9.36006Z" stroke="black" stroke-width="7" />
                        </svg>
                    )}

                </div>

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
