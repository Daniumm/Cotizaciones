import { Button } from "components/Button";
import { BigInfo } from "components/BigInfo";
import { Info } from "components/Info";
import Testimonial from "components/Testimonial/Testimonial";
import { FAQ } from "components/FAQ";
import theme from "theme/theme";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from "react";

import { 
  MainInfoText,
  MainInfoTitle,
  MainInfoSubtitle,
  Reasons,
  ReasonsTitle,
  ReasonsGrid,
  Testimonials,
  TestimonialSlide,
  FAQSection,
  FAQGrid,
  FAQItem
} from "./style";
import { Link } from "react-router-dom";


interface TestimonialData {
  id: number;
  name: string;
  src: string;
  testimonialText: string;
  testimonialTitle: string;
}

const testimonialData: TestimonialData[] = [
  {
    id: 0,
    name: "Clara Valverde",
    src: "",
    testimonialText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    testimonialTitle: "Increíble experiencia",
  },
  {
    id: 1,
    name: "Alfredo Díaz",
    src: "",
    testimonialText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    testimonialTitle: "Súper rápido y fácil",
  },
  {
    id: 2,
    name: "María Fernanda",
    src: "",
    testimonialText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    testimonialTitle: "Testimonial Title",
  },
  {
    id: 3,
    name: "Luisa Martínez",
    src: "",
    testimonialText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    testimonialTitle: "Sencillo e innovador",
  },
  {
    id: 4,
    name: "Gustavo Pérez",
    src: "",
    testimonialText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    testimonialTitle: "Servicio de calidad",
  },
  {
    id: 5,
    name: "Ricardo López",
    src: "",
    testimonialText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    testimonialTitle: "Fácil de usar",
  },
  
];

// Función para dividir el array de testimonios en subarreglos de tamaño 3
function chunkArray(arr: TestimonialData[], chunkSize: number): TestimonialData[][] {
  const result: TestimonialData[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const testimonialChunks = chunkArray(testimonialData, 3);

const HomeUser = () => {
  return (
    <div>
      <BigInfo side="left" imgSrc="car1_home.png">
        <section className="main-info">
          <MainInfoText>
            <MainInfoTitle>
              Facilitamos tu proceso de compra de autos nuevos y seminuevos
            </MainInfoTitle>
            <MainInfoSubtitle>
              Contacta a cientos de agencias de diferentes grupos automotrices a lo largo de toda la república mexicana
            </MainInfoSubtitle>
          
            <Link to="/user/buy">
              <Button
                bgColor={theme.color.navy}
                color={theme.color.white}
                hoverColor="#444"
                size="large"
                firstIcon="Delete"
                firstIconBool={false}
                secondIconBool={false}
                secondIcon="Abc"
              >
              Comprar un Auto
            </Button>
          </Link>
        </MainInfoText>
        </section>
      </BigInfo>

      <Reasons>
        <ReasonsTitle>
          ¿Por qué comprar con nosotros?
        </ReasonsTitle>
        <ReasonsGrid>
          <Info
            content="La compra de tu auto es 100% segura y tu pago se realiza mediante el servicio de Stripe."
            icon="GppGoodOutlined"
            title="Seguro"
          />
          <Info
            content="Dile adiós a tener que pararte en una agencia, con nosotros puedes hacer el trámite desde la comodidad de tu hogar."
            icon="Devices"
            title="Completamente remoto"
          />
          <Info
            content="Tenemos convenio con un amplio catálogo de grupos automotrices y agencias."
            icon="DirectionsCarOutlined"
            title="Gran variedad de grupos automotrices"
          />
          <Info
            content="El contacto con cada agencia es en tiempo real, interactúa con ellas como si estuvieras ahí mismo."
            icon="AccessTime"
            title="Rápido"
          />
          <Info
            content="Te asignamos un vendedor dentro de cada agencia, el cual estará contigo para asistirte durante tu proceso. "
            icon="AssignmentIndOutlined"
            title="Transparente"
          />
          <Info
            content="Nuestro proceso de compra es muy sencillo, no necesitas ser un experto en autos para comprar con nosotros."
            icon="ThumbUpOffAlt"
            title="Fácil de usar"
          />
        </ReasonsGrid>
      </Reasons>

      <BigInfo side="right" imgSrc="foto.jpg">
        <section className="evaluation">
          <MainInfoText>
            <MainInfoTitle>
              Deja tu auto a cuenta
            </MainInfoTitle>
            <MainInfoSubtitle>
              Contacta a tu vendedor asignado, quien te dará las indicaciones correspondientes para evaluar y entregar tu auto. 
            </MainInfoSubtitle>
          
            <Link to="#">
              <Button
                bgColor={theme.color.navy}
                color={theme.color.white}
                hoverColor="#444"
                size="large"
                firstIcon="Delete"
                firstIconBool={false}
                secondIconBool={false}
                secondIcon="Abc"
              >
              Solicitar evaluación
            </Button>
          </Link>
        </MainInfoText>
        </section>
      </BigInfo>

      <BigInfo side="left" imgSrc="phone.png">
        <section className="process">
          <MainInfoText>
            <MainInfoTitle>
              Consulta tu proceso desde cualquier dispositivo
            </MainInfoTitle>
            <MainInfoSubtitle>
              Da seguimiento a tu proceso de compra, trámites y verificación de documentos desde cualquier dispositivo con acceso a internet. 
            </MainInfoSubtitle>
          
            <Link to="/user/buy">
              <Button
                bgColor={theme.color.navy}
                color={theme.color.white}
                hoverColor="#444"
                size="large"
                firstIcon="Delete"
                firstIconBool={false}
                secondIconBool={false}
                secondIcon="Abc"
              >
              Comprar un Auto
            </Button>
          </Link>
        </MainInfoText>
        </section>
      </BigInfo>

      <Testimonials>
        <MainInfoText>
          <MainInfoTitle>
            La opinión de nuestros clientes
          </MainInfoTitle>
          <p>
            Testimoniales
          </p>
        </MainInfoText>

        <div className="testimonials-grid">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            showArrows
            autoPlay
            interval={5000}
            transitionTime={500}
          >
            {testimonialChunks.map((chunk, index) => (
            <TestimonialSlide key={`slide-${index}`} >
              {chunk.map((testimonial) => (
                <Testimonial
                  key={testimonial.id}
                  alt="user image"
                  name={testimonial.name}
                  src={testimonial.src}
                  testimonialText={testimonial.testimonialText}
                  testimonialTitle={testimonial.testimonialTitle}
                />
              ))}
            </TestimonialSlide>
          ))}
          </Carousel>
        </div>
      </Testimonials>


      <FAQSection>
        <MainInfoText>
          <MainInfoTitle>
            Preguntas frecuentes
          </MainInfoTitle>
        </MainInfoText>
        <FAQGrid>
          <FAQItem>
            <FAQ
              answer="Somos una plataforma en línea que facilita la compra y venta de vehículos nuevos y usados, ofreciendo una amplia variedad de opciones y herramientas para ayudar a nuestros clientes a encontrar el vehículo perfecto. Nuestro equipo está compuesto por expertos en la industria automotriz y profesionales de la tecnología que trabajan juntos para brindar una experiencia excepcional a nuestros usuarios."
              disabled
              question="¿Quiénes somos?"
              id={0}
            />
          </FAQItem>
          <FAQItem>
            <FAQ
              answer="Debes registrarte en nuestra plataforma, una vez hecho esto, podrás ver los autos disponibles y elegir el que más te guste."
              disabled
              question="¿Cómo comprar un auto?"
              id={1}
            />
          </FAQItem>
          <FAQItem>
            <FAQ
              answer="Sí, puedes solicitar una prueba de manejo para cualquier vehículo que te interese. Para hacerlo, simplemente ponte en contacto con el vendedor a través de nuestra plataforma y coordina una fecha y hora que sea conveniente para ambos."
              disabled
              question="¿Puedo solicitar una prueba de manejo?"
              id={2}
            />
          </FAQItem>
          <FAQItem>
            <FAQ
              answer="Una vez que hayas completado la compra de tu vehículo, el vendedor y tú acordarán el método de entrega. Esto puede incluir la entrega a domicilio, la recogida en la ubicación del vendedor o cualquier otro método que ambas partes acuerden."
              disabled
              question="¿Cómo funciona el proceso de entrega?"
              id={3}
            />
          </FAQItem>
          <FAQItem>
            <FAQ
              answer="Somos una plataforma en línea, lo que nos permite ofrecer vehículos de una amplia gama de vendedores ubicados en diferentes áreas geográficas. Nuestra plataforma facilita la conexión entre compradores y vendedores de todo el país."
              disabled
              question="¿Dónde están ubicados?"
              id={4}
            />
          </FAQItem>
          <FAQItem>
            <FAQ
              answer="Sí, ofrecemos opciones de financiamiento a través de terceros asociados con nuestra plataforma. Durante el proceso de compra, podrás explorar diversas opciones de financiamiento y elegir la que mejor se adapte a tus necesidades. Trabajamos con diferentes instituciones financieras para asegurarnos de que nuestros usuarios tengan acceso a una amplia variedad de opciones de financiamiento y puedan encontrar la mejor solución para su situación."
              disabled
              question="¿Ofrecen financiamiento para la compra de vehículos?"
              id={5}
            />
          </FAQItem>
          <Link to="/faq">
            <Button
              bgColor="#002569"
              color="white"
              hoverColor="black"
              size="large"
              firstIcon="Delete"
              firstIconBool={false}
              secondIconBool={false}
              secondIcon="Abc"
            >
              Ver más
            </Button>
          </Link>
        </FAQGrid>
      </FAQSection>

    </div>
  )
};

export default HomeUser;