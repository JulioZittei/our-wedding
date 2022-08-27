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

const Root = styled('section', AttendaceConfirmationCss.Root);
const Container = styled('div', AttendaceConfirmationCss.Container);
const Header = styled('header', AttendaceConfirmationCss.Header);
const Content = styled('div', AttendaceConfirmationCss.Content);
const Title = styled(motion.h2, AttendaceConfirmationCss.Title);
const SubTitle = styled(motion.p, AttendaceConfirmationCss.SubTitle);

const Form = styled(motion.form, AttendaceConfirmationCss.Form);
const FormControl = styled('div', AttendaceConfirmationCss.FormControl);
const FormGroup = styled(motion.div, AttendaceConfirmationCss.FormGroup);
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
  },
};

const MySwal = withReactContent(Swal);

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Nome é obrigatório!')
    .matches(/^\S.*[a-zA-ZA-Za-zÀ-ü].*\S$/g, 'Nome não é válido!'),
  phone: yup
    .string()
    .required('Telefone é obrigatório!')
    .matches(/^\([1-9]{2}\) (9[1-9])[0-9]{3}\-[0-9]{4}$/, 'Telefone não é válido!'),
  email: yup.string().required('Email é o obrigatório!').email('Email não é válido'),
  adults_number: yup.string().required('Quantidade de adultos é obrigatório!'),
  children_number: yup.string().required('Quantidade de crianças é obrigatório!'),
  status: yup.string().required('Resposta da presença é obrigatória!'),
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
    <main>
      <Head>
        <title>❤️ Confirmação de Presença ❤️</title>
      </Head>
      <Root>
        <Container>
          <Header>
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
          </Header>

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
              Confirme abaixo a sua presença no casamento
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
              <FormControl>
                <FormGroup
                  layout
                  initial={`hidden`}
                  animate={`visible`}
                  variants={defaultAnimationVariant}
                  transition={{
                    duration: 0.6,
                  }}
                >
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

                <FormGroup
                  layout
                  initial={`hidden`}
                  animate={`visible`}
                  variants={defaultAnimationVariant}
                  transition={{
                    duration: 0.6,
                  }}
                >
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

              <FormGroup
                layout
                initial={`hidden`}
                animate={`visible`}
                variants={defaultAnimationVariant}
                transition={{
                  duration: 0.6,
                }}
              >
                <Label htmlFor="name" css={errors?.name ? { color: '$red11' } : {}}>
                  *Nome
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
                  <FormHelperText>Primeiro nome ou igual ao escrito no convite</FormHelperText>
                )}
              </FormGroup>

              <FormGroup
                layout
                initial={`hidden`}
                animate={`visible`}
                variants={defaultAnimationVariant}
                transition={{
                  duration: 0.6,
                }}
              >
                <Label htmlFor="phone" css={errors?.phone ? { color: '$red11' } : {}}>
                  *Telefone
                </Label>

                <Controller
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="phone"
                      type="text"
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

              <FormGroup
                layout
                initial={`hidden`}
                animate={`visible`}
                variants={defaultAnimationVariant}
                transition={{
                  duration: 0.6,
                }}
              >
                <Label htmlFor="email" css={errors?.email ? { color: '$red11' } : {}}>
                  *Email
                </Label>

                <Controller
                  render={({ field }) => (
                    <Input {...field} id="email" type="text" css={errors?.email ? { borderColor: '$red7' } : {}} />
                  )}
                  name="email"
                  control={control}
                />
                {errors?.email ? (
                  <FormHelperError>{errors?.email.message}</FormHelperError>
                ) : (
                  <FormHelperText>Informe o seu melhor e-mail para contato</FormHelperText>
                )}
              </FormGroup>

              <FormControl>
                <FormGroup
                  layout
                  initial={`hidden`}
                  animate={`visible`}
                  variants={defaultAnimationVariant}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  <Label htmlFor="adults_number" css={errors?.adults_number ? { color: '$red11' } : {}}>
                    *Adultos
                  </Label>

                  <Controller
                    render={({ field }) => (
                      <Select
                        {...field}
                        id="adults_number"
                        data={[1, 2, 3, 4, 5]}
                        css={errors?.adults_number ? { borderColor: '$red7' } : {}}
                        description={{ singular: 'Adulto', plural: 'Adultos' }}
                        aria_label="Quantidade de adultos"
                        onValueChange={(value) => field.onChange(value)}
                      />
                    )}
                    name="adults_number"
                    control={control}
                  />

                  {errors?.adults_number ? (
                    <FormHelperError>{errors?.adults_number.message}</FormHelperError>
                  ) : (
                    <FormHelperText>Essa quantidade deve ser informada contando com você.</FormHelperText>
                  )}
                </FormGroup>

                <FormGroup
                  layout
                  initial={`hidden`}
                  animate={`visible`}
                  variants={defaultAnimationVariant}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  <Label htmlFor="children_number" css={errors?.children_number ? { color: '$red11' } : {}}>
                    *Crianças (acima de 6 anos)
                  </Label>
                  <Controller
                    render={({ field }) => (
                      <Select
                        {...field}
                        id="children_number"
                        data={[0, 1, 2, 3, 4, 5]}
                        description={{ singular: 'Criança', plural: 'Crianças' }}
                        css={errors?.children_number ? { borderColor: '$red7' } : {}}
                        aria_label="Quantidade de crianças"
                        onValueChange={(value) => field.onChange(value)}
                      />
                    )}
                    name="children_number"
                    control={control}
                  />

                  {errors?.children_number ? (
                    <FormHelperError>{errors?.children_number.message}</FormHelperError>
                  ) : (
                    <FormHelperText>Crianças até 6 anos não contam como convidados.</FormHelperText>
                  )}
                </FormGroup>
              </FormControl>

              <Button type="submit" disabled={isSubmitting}>
                <BiCalendarCheck />
                {isSubmitting ? 'Confirmando, aguarde...' : ' Confirmar Presença'}
              </Button>
            </Form>
          </Content>
        </Container>
      </Root>
    </main>
  );
}
