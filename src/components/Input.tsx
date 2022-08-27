import { styled } from '../styles/stiches.config';
import * as InputCss from '../styles/components/InputCss';
import { CSS } from '@stitches/react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  css?: CSS;
}

const InputField = styled('input', InputCss.Input);

export function Input({ css, ...props }: InputProps) {
  return <InputField {...props} css={css} />;
}
