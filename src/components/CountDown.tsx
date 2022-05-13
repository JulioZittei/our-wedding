import { useEffect, useState } from 'react';
import * as CountDownCss from '../styles/components/CountDownCss';
import { styled } from '../styles/stiches.config';
import moment from 'moment';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Root = styled('section', CountDownCss.Root);
const Container = styled('div', CountDownCss.Container);
const Wrapper = styled('ul', CountDownCss.Wrapper);
const TimeBox = styled(motion.li, CountDownCss.TimeBox);
const Date = styled('span', CountDownCss.Date);
const Label = styled('span', CountDownCss.Label);

export function CountDown() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const weddingDate = '26/11/2022 18:00:00';
  const now = moment().format('DD/MM/YYYY HH:mm:ss');
  const diff = moment(weddingDate, 'DD/MM/YYYY HH:mm:ss').diff(moment(now, 'DD/MM/YYYY HH:mm:ss'));

  const [months, setMonths] = useState(moment.duration(diff).months());
  const [days, setDays] = useState(moment.duration(diff).days());
  const [hours, setHours] = useState(moment.duration(diff).hours());
  const [minutes, setMinutes] = useState(moment.duration(diff).minutes());

  const timeboxAnimationVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (inView && !shouldAnimate) {
      setShouldAnimate(!shouldAnimate);
    } else if (!inView && shouldAnimate) {
      setShouldAnimate(!shouldAnimate);
    }
  }, [inView, shouldAnimate]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment().format('DD/MM/YYYY HH:mm:ss');
      const diff = moment(weddingDate, 'DD/MM/YYYY HH:mm:ss').diff(moment(now, 'DD/MM/YYYY HH:mm:ss'));
      setMonths(moment.duration(diff).months());
      setDays(moment.duration(diff).days());
      setHours(moment.duration(diff).hours());
      setMinutes(moment.duration(diff).minutes());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Root ref={ref}>
      <Container>
        <Wrapper>
          <TimeBox
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={timeboxAnimationVariant}
            transition={{
              duration: 0.15,
            }}
          >
            <Date>{months.toString().length > 1 ? months : `0${months}`}</Date>
            <Label>{months == 1 ? 'Mês' : 'Meses'}</Label>
          </TimeBox>
          <TimeBox
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={timeboxAnimationVariant}
            transition={{
              delay: 0.2,
              duration: 0.15,
            }}
          >
            <Date>{days.toString().length > 1 ? days : `0${days}`}</Date>
            <Label>{days == 1 ? 'Dia' : 'Dias'}</Label>
          </TimeBox>
          <TimeBox
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={timeboxAnimationVariant}
            transition={{
              delay: 0.6,
              duration: 0.15,
            }}
          >
            <Date>{hours.toString().length > 1 ? hours : `0${hours}`}</Date>
            <Label>{hours == 1 ? 'Hora' : 'Horas'}</Label>
          </TimeBox>
          <TimeBox
            initial={`${!shouldAnimate ? 'hidden' : 'visible'}`}
            animate={`${shouldAnimate ? 'visible' : 'hidden'}`}
            variants={timeboxAnimationVariant}
            transition={{
              delay: 0.8,
              duration: 0.15,
            }}
          >
            <Date>{minutes.toString().length > 1 ? minutes : `0${minutes}`}</Date>
            <Label>{minutes == 1 ? 'Minuto' : 'Minutos'}</Label>
          </TimeBox>
        </Wrapper>
      </Container>
    </Root>
  );
}
