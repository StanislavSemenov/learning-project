import {
    ChangeEvent, FC, InputHTMLAttributes, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange'>;

interface InputProps extends HTMLInputProps{
    type?: string;
    value?: string;
    placeholderWidth?: number;
    className?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props:InputProps) => {
    const { t } = useTranslation();
    const {
        type = 'text',
        value,
        className,
        placeholderWidth = 150,
        placeholder = t('Введите значение'),
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <div className={cls.placeholder} style={{ width: placeholderWidth }}>
                {placeholder && (
                    <div>
                        {placeholder}
                    </div>
                )}
            </div>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
