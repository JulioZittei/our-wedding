import type { GetStaticPropsContext, NextApiRequest, NextApiResponse } from 'next';
import { styled } from '../styles/stiches.config';
import Head from 'next/head';
import * as TermosCss from '../styles/pages/TermosCss';
import { motion } from 'framer-motion';

const Root = styled('section', TermosCss.Root);
const Container = styled('div', TermosCss.Container);
const Header = styled('header', TermosCss.Header);
const Article = styled(motion.article, TermosCss.Article);
const SubTitle = styled('h4', TermosCss.SubTitle);
const Paragraph = styled('p', TermosCss.Paragraph);

export default function Termos(): JSX.Element {
  const defaultAnimationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <main>
      <Head>
        <title>Termos de uso - ❤️ Élen & Julio ❤️ </title>
      </Head>
      <Root>
        <Container>
          <Header>
            <motion.h2
              layout
              initial={`hidden`}
              animate={`visible`}
              variants={defaultAnimationVariant}
              transition={{
                duration: 0.6,
              }}
            >
              Termos de uso
            </motion.h2>
          </Header>

          <Article
            layout
            initial={`hidden`}
            animate={`visible`}
            variants={defaultAnimationVariant}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
          >
            <Paragraph>
              Estes termos de serviço regulam o uso deste site. Ao acessá-lo você concorda com estes termos.
            </Paragraph>

            <SubTitle>Acesso ao site</SubTitle>

            <Paragraph>
              Para acessar o conteúdo do Site da <strong>elenejulio.com</strong>, pode ser solicitado ao usuário algumas
              informações pessoais como nome, email e outros. Se acharmos que as informações não são corretas ou
              verdadeiras, temos o direito de recusar e/ou cancelar o acesso a qualquer tempo, sem notificação prévia.
            </Paragraph>

            <SubTitle>Restrições ao uso</SubTitle>

            <Paragraph>
              Você só poderá usar este Site da <strong>elenejulio.com</strong> para propósitos permitidos por nós. Você
              não poderá usá-lo em qualquer outro objetivo, especialmente comercial, sem o nosso consentimento prévio.
              Não associe nossas marcas a nenhuma outra. Não exponha nosso nome, logotipo, logomarca entre outros,
              indevidamente e de forma a causar confusão.
            </Paragraph>

            <SubTitle>Segurança</SubTitle>

            <Paragraph>
              Toda senha usada para este Site é somente para uso individual. Você é responsável pela segurança de sua
              senha (se for o caso). O Site tem o direito de monitorar a segurança de sua senha e ao seu critério pode
              pedir que você a mude. Se você usar qualquer senha que o site considere insegura, ou ainda compartilhar
              seu acesso. O Site tem o direito de requisitar que a senha seja modificada e/ou cancelar a sua conta.
            </Paragraph>

            <Paragraph>
              É proibido usar qualquer serviço ou ferramenta conectada a este site para comprometer a segurança ou mexer
              com os recursos do sistema e/ou contas. O uso ou distribuição de ferramentas destinadas para comprometer a
              segurança (ex: programas para descobrir senha, ferramentas de crack ou de sondagem da rede) são
              estritamente proibidos. Se você estiver envolvido em qualquer violação da segurança do sistema, o Site se
              reserva o direito de fornecer suas informações para os administradores de sistema de outros sites para
              ajudá-los a resolver incidentes de segurança. O Site se reserva o direito de investigar potenciais
              violações a esse Termo de Uso.
            </Paragraph>

            <Paragraph>
              O Site se reserva o direito de cooperar totalmente com as autoridades competentes ou pedidos da justiça
              para que a Empresa revele a identidade de qualquer pessoa que publique email, mensagem ou disponibilize
              qualquer material que possa violar esse Termo de Uso.
            </Paragraph>

            <SubTitle>Política de privacidade</SubTitle>

            <Paragraph>
              Todas as suas informações pessoais recolhidas serão usadas para a ajudar a tornar a sua visita no nosso
              site o mais produtiva e agradável possível.
            </Paragraph>

            <Paragraph>
              A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para{' '}
              <strong>elenejulio.com</strong>.
            </Paragraph>

            <Paragraph>
              Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem o nosso
              Site serão tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei
              n.º 67/98).
            </Paragraph>

            <Paragraph>
              As informações pessoais recolhidas podem incluir o seu nome, email, número de telefone e/ou celular, idade
              e/ou outros.
            </Paragraph>

            <Paragraph>
              O uso da <strong>elenejulio.com</strong> pressupõe a aceitação deste Acordo de Privacidade. A equipe da{' '}
              <strong>elenejulio.com</strong> reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo,
              recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre
              atualizado.
            </Paragraph>
          </Article>
        </Container>
      </Root>
    </main>
  );
}

export async function getStaticProps(context: GetStaticPropsContext, req: NextApiRequest, res: NextApiResponse) {
  return {
    props: {},
  };
}
