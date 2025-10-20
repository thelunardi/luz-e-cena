import React from 'react';

interface SelectorOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: 'string';
  label: 'string';
}

const SelectorOption = ({ label, value, ...rest }: SelectorOption) => {
  return (
    <option value={value} {...rest}>
      {label}
    </option>
  );
};

export default SelectorOption;
