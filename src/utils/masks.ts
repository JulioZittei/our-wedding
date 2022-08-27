import { FormEvent } from 'react';

export function maskName(e: FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/[=+-/\|.<>_)(*&ˆ%$#@!`"':;,\[\]{}\\?0-9]/g, '');
  e.currentTarget.value = value;
  return e;
}

export function maskPhone(e: FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  e.currentTarget.value = value;
  return e;
}

export function maskDate(e: FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 8;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
  e.currentTarget.value = value;
  return e;
}

export function validateIsNotEmpty(value: string) {
  return value.trim() != '';
}

export function validateName(value: string) {
  let emailRegex = /^\S.*[a-zA-ZA-Za-zÀ-ü].*\S$/g;
  return emailRegex.test(value);
}

export function validatePhone(value: string) {
  let phoneRegex = /^\([1-9]{2}\) (9[1-9])[0-9]{3}\-[0-9]{4}$/;
  return phoneRegex.test(value);
}

export function validateEmail(value: string) {
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(value);
}

export function validateDate(value: string) {
  let emailRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
  return emailRegex.test(value);
}
