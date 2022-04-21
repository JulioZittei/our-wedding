import { useEffect, useState } from 'react';
import * as CountDownCss from '../styles/components/CountDown';
import { styled } from '../styles/stiches.config';
import moment from 'moment';

const CountDownRoot = styled('section', CountDownCss.Root);
const CountDownHeader = styled('h2', CountDownCss.Header);
const CountDownContainer = styled('div', CountDownCss.Container);
const CountDownWrapper = styled('div', CountDownCss.Wrapper);
const CountDownTimeBox = styled('div', CountDownCss.TimeBox);
const CountDownLabel = styled('span', CountDownCss.Label);
const CountDownData = styled('span', CountDownCss.Data);

export function CountDown() {
  const weddingDate = '26/11/2022 18:00:00';
  const now = moment().format('DD/MM/YYYY HH:mm:ss');
  const diff = moment(weddingDate, 'DD/MM/YYYY HH:mm:ss').diff(moment(now, 'DD/MM/YYYY HH:mm:ss'));

  const [months, setMonths] = useState(moment.duration(diff).months());
  const [days, setDays] = useState(moment.duration(diff).days());
  const [hours, setHours] = useState(moment.duration(diff).hours());
  const [minutes, setMinutes] = useState(moment.duration(diff).minutes());
  const [seconds, setSeconds] = useState(moment.duration(diff).seconds());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment().format('DD/MM/YYYY HH:mm:ss');
      const diff = moment(weddingDate, 'DD/MM/YYYY HH:mm:ss').diff(moment(now, 'DD/MM/YYYY HH:mm:ss'));
      setMonths(moment.duration(diff).months());
      setDays(moment.duration(diff).days());
      setHours(moment.duration(diff).hours());
      setMinutes(moment.duration(diff).minutes());
      setSeconds(moment.duration(diff).seconds());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CountDownRoot>
      <CountDownContainer>
        <CountDownHeader>Faltam</CountDownHeader>
        <CountDownWrapper>
          <CountDownTimeBox>
            <CountDownLabel>{months.toString().length > 1 ? months : `0${months}`}</CountDownLabel>
            <CountDownData>{months == 1 ? 'Mês' : 'Meses'}</CountDownData>
          </CountDownTimeBox>
          <CountDownTimeBox>
            <CountDownLabel>{days.toString().length > 1 ? days : `0${days}`}</CountDownLabel>
            <CountDownData>{days == 1 ? 'Dia' : 'Dias'}</CountDownData>
          </CountDownTimeBox>
          <CountDownTimeBox>
            <CountDownLabel>{hours.toString().length > 1 ? hours : `0${hours}`}</CountDownLabel>
            <CountDownData>{hours == 1 ? 'Hora' : 'Horas'}</CountDownData>
          </CountDownTimeBox>
          <CountDownTimeBox>
            <CountDownLabel>{minutes.toString().length > 1 ? minutes : `0${minutes}`}</CountDownLabel>
            <CountDownData>{minutes == 1 ? 'Minuto' : 'Minutos'}</CountDownData>
          </CountDownTimeBox>
        </CountDownWrapper>
      </CountDownContainer>
    </CountDownRoot>
  );
}
