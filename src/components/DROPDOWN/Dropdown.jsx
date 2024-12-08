import React, { useState, useRef } from "react";
import "./Dropdown.scss"; // Подключаем SCSS файл

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false); // Управление видимостью списка
    const dropdownRef = useRef(null); // Ссылка на контейнер для обработки кликов вне списка
    const options = ["Все категории", "Документы", "Ключи", "Телефоны", "Часы", "Кошелёк"]; // Список опций
    const [selectedOption, setSelectedOption] = useState(options[0]); // Выбранное значение
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div
                className="dropdown__header"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption}
                <svg className="dropdown__header__svg" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2222 2.07258L13.0794 3.48091e-05L7.72218 5.18176L2.36493 3.48091e-05L0.222179 2.07258L5.57943 7.25431L7.72218 9.32685L9.86493 7.25431L15.2222 2.07258Z" />
                </svg>
            </div>
            {isOpen && (
                <ul className="dropdown__list">
                    {options.map((option) => (
                        <li
                            key={option}
                            className="dropdown__item"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
