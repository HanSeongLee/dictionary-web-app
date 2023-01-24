import React, { InputHTMLAttributes } from 'react';
import Input from 'components/Input';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const SearchField = React.forwardRef<HTMLInputElement, IProps>(({ error, ...props }, ref) => {
    return (
        <Input icon={'/icons/icon-search.svg'}
               error={error}
               ref={ref}
               {...props}
        />
    );
});

export default SearchField;
