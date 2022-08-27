import Head from 'next/head';
import { motion } from 'framer-motion';
import { styled } from '../styles/stiches.config';
import { Input } from '../components/Input';
import { Link } from '../components/Link';
import { Select } from '../components/Select';
import { BiCalendarCheck } from 'react-icons/bi';
import { useForm, Controller } from 'react-hook-form';
import { maskPhone, maskName } from '../utils/masks';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../services/api';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as yup from 'yup';
import * as GiftsCss from '../styles/components/GiftsCss';
import * as AttendaceConfirmationCss from '../styles/pages/AttendanceConfirmationCss';
import { Header } from '../components/Header';

const Root = styled('section', AttendaceConfirmationCss.Root);
const Container = styled('div', AttendaceConfirmationCss.Container);
const HeaderForm = styled('header', AttendaceConfirmationCss.Header);
const Content = styled('div', AttendaceConfirmationCss.Content);
const Title = styled(motion.h2, AttendaceConfirmationCss.Title);
const SubTitle = styled(motion.p, AttendaceConfirmationCss.SubTitle);

const Form = styled('form', AttendaceConfirmationCss.Form);
const FormControl = styled('div', AttendaceConfirmationCss.FormControl);
const FormGroup = styled('div', AttendaceConfirmationCss.FormGroup);
const Label = styled('label', AttendaceConfirmationCss.Label);
const FormHelperText = styled('div', AttendaceConfirmationCss.FormHelperText);
const FormHelperError = styled('div', AttendaceConfirmationCss.FormHelperError);
const Button = styled('button', AttendaceConfirmationCss.Button);
const StatusButton = styled('button', AttendaceConfirmationCss.StatusButton);
const LinkButton = styled(Link, GiftsCss.LinkButton);

interface Map {
  [key: string]: any;
}

interface ConfirmationData {
  name: string;
  phone: string;
  email: string;
  adults_number: string;
  children_number: string;
  status: string;
}

const messages: Map = {
  attend: {
    title: 'Eba! Sua presença foi confirmada!',
    html: 'Agora é hora de presentear o casal nesse momento tão especial!',
    imageUrl: 'images/champagne.png',
    imageWidth: 90,
    imageHeight: 90,
    imageAlt: 'Champagne estourando',
    footer: (
      <LinkButton href="http://finalfeliz.de/elenejulio" target="_blank" rel="noopener noreferrer">
        <strong>Escolher presente</strong>
      </LinkButton>
    ),
    showConfirmButton: false,
    showCloseButton: true,
  },
  not_attend: {
    title: 'Que pena, os noivos sentirão sua falta :(',
    html: 'Que tal presentear o casal nesse momento tão especial!',
    imageUrl: 'images/sad.png',
    imageWidth: 90,
    imageHeight: 90,
    imageAlt: 'Carinha triste',
    footer: (
      <LinkButton href="http://finalfeliz.de/elenejulio" target="_blank" rel="noopener noreferrer">
        <strong>Escolher presente</strong>
      </LinkButton>
    ),
    showConfirmButton: false,
    showCloseButton: true,
  },
  name: {
    title: 'Nome fora da lista',
    imageUrl: 'images/ohno.png',
    imageWidth: 90,
    imageHeight: 90,
    imageAlt: 'Carinha Oh Não',
    footer: (
      <LinkButton href="mailto:contato@elenejulio.com" target="_blank" rel="noopener noreferrer">
        <strong>Entrar em contato</strong>
      </LinkButton>
    ),
    showConfirmButton: false,
    showCloseButton: true,
  },
  reconfirmation: {
    title: 'Convidado já está confirmado',
    imageUrl: 'images/in-love.png',
    imageWidth: 90,
    imageHeight: 90,
    imageAlt: 'Carinha de apaixonado',
    footer: (
      <LinkButton href="http://finalfeliz.de/elenejulio" target="_blank" rel="noopener noreferrer">
        <strong>Escolher presente</strong>
      </LinkButton>
    ),
    showConfirmButton: false,
    showCloseButton: true,
  },
};

const MySwal = withReactContent(Swal);

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Opa, esse campo é obrigatório!')
    .matches(/^\S.*[a-zA-ZA-Za-zÀ-ü].*\S$/g, 'Nome não é válido!'),
  phone: yup
    .string()
    .required('Opa, esse campo é obrigatório!')
    .matches(/^\([1-9]{2}\) (9[1-9])[0-9]{3}\-[0-9]{4}$/, 'Telefone não é válido!'),
  email: yup.string(),
  adults_number: yup.string().required('Opa esse campo é obrigatório!'),
  children_number: yup.string().required('Opa esse campo é obrigatório!'),
  status: yup.string().required('Opa esse campo é obrigatório!'),
});

export default function AttendaceConfirmation(): JSX.Element {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConfirmationData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      adults_number: '1',
      children_number: '0',
      status: 'attend',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const { guestConfirmation } = await api.post('/guest/confirm', data).then((response) => response.data);

    if (guestConfirmation.errors.length === 0) {
      MySwal.fire(messages[guestConfirmation.status] as SweetAlertOptions);
      reset();
    } else {
      MySwal.fire({
        ...messages[guestConfirmation.errors[0].type],
        html: guestConfirmation.errors[0].message,
      } as SweetAlertOptions);
    }
  });

  const defaultAnimationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />
      <main>
        <Head>
          <title>❤️ Confirmação de Presença ❤️</title>
        </Head>
        <Root>
          <Container>
            <HeaderForm>
              <motion.h1
                layout
                initial={`hidden`}
                animate={`visible`}
                variants={defaultAnimationVariant}
                transition={{
                  duration: 0.6,
                }}
              >
                Confirmação de Presença
              </motion.h1>
            </HeaderForm>

            <Content>
              <Title
                layout
                initial={`hidden`}
                animate={`visible`}
                variants={defaultAnimationVariant}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                }}
              >
                {/* Confirme abaixo a sua presença no casamento */}
                Leia atentamente as informações dos campos abaixo
              </Title>
              <SubTitle
                layout
                initial={`hidden`}
                animate={`visible`}
                variants={defaultAnimationVariant}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
              >
                Todos os campos marcados com (*) são de preenchimento obrigatório.
              </SubTitle>

              <Form onSubmit={onSubmit}>
                <FormControl css={{ marginBottom: 10 }}>
                  <FormGroup>
                    <Controller
                      render={({ field }) => (
                        <StatusButton
                          {...field}
                          selected={field.value === 'attend'}
                          css={errors?.status ? { borderColor: '$red7', color: '$red11' } : {}}
                          onClick={(e) => {
                            e.preventDefault();
                            field.onChange('attend');
                          }}
                        >
                          Eu vou
                        </StatusButton>
                      )}
                      name="status"
                      control={control}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Controller
                      render={({ field }) => (
                        <StatusButton
                          {...field}
                          selected={field.value === 'not_attend'}
                          css={errors?.status ? { borderColor: '$red7', color: '$red11' } : {}}
                          onClick={(e) => {
                            e.preventDefault();
                            field.onChange('not_attend');
                          }}
                        >
                          Eu não vou
                        </StatusButton>
                      )}
                      name="status"
                      control={control}
                    />
                  </FormGroup>
                </FormControl>

                <FormGroup>{errors?.status && <FormHelperError>{errors?.status.message}</FormHelperError>}</FormGroup>

                <FormGroup>
                  <Label htmlFor="name" css={errors?.name ? { color: '$red11' } : {}}>
                    *Nome completo
                  </Label>

                  <Controller
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="name"
                        type="text"
                        autoFocus
                        css={errors?.name ? { borderColor: '$red7' } : {}}
                        onChange={(e) => {
                          maskName(e);
                          field.onChange(e.target.value);
                        }}
                      />
                    )}
                    name="name"
                    control={control}
                  />

                  {errors?.name ? (
                    <FormHelperError>{errors?.name.message}</FormHelperError>
                  ) : (
                    <FormHelperText>
                      A confirmação é feita pela nome completo, porque se alguém tiver o nome igual ao seu, pode
                      sobrescrever sua confirmação
                    </FormHelperText>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone" css={errors?.phone ? { color: '$red11' } : {}}>
                    *Telefone
                  </Label>

                  <Controller
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="phone"
                        type="text"
                        maxLength={15}
                        css={errors?.phone ? { borderColor: '$red7' } : {}}
                        onChange={(e) => {
                          maskPhone(e);
                          field.onChange(e.target.value);
                        }}
                      />
                    )}
                    name="phone"
                    control={control}
                  />
                  {errors?.phone ? (
                    <FormHelperError>{errors?.phone.message}</FormHelperError>
                  ) : (
                    <FormHelperText>Informe o número que você utiliza no WhatsApp</FormHelperText>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="adults_number" css={errors?.adults_number ? { color: '$red11' } : {}}>
                    *Convidados (acima de 6 anos)
                  </Label>

                  <Controller
                    render={({ field }) => (
                      <Select
                        {...field}
                        id="adults_number"
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        css={errors?.adults_number ? { borderColor: '$red7' } : {}}
                        description={{ singular: 'Convidado', plural: 'Convidados' }}
                        aria_label="Quantidade de convidados"
                        onValueChange={(value) => field.onChange(value)}
                      />
                    )}
                    name="adults_number"
                    control={control}
                  />

                  {errors?.adults_number ? (
                    <FormHelperError>{errors?.adults_number.message}</FormHelperError>
                  ) : (
                    <FormHelperText>Quantas pessoas irão comparecer (incluindo você)</FormHelperText>
                  )}
                </FormGroup>

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? '' : <BiCalendarCheck />}
                  {isSubmitting ? 'Confirmando, aguarde...' : 'Confirmar Presença'}
                </Button>
              </Form>
            </Content>
          </Container>
        </Root>
      </main>
    </>
  );
}
