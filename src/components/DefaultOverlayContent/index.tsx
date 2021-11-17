import { Container, Heading, Buttons } from './styles';

interface Props{
  label: string;
  description: string;

}

function DefaultOverlayContent(props: Props) {
  return (
    <Container>
      <Heading>
        <h1>{props.label}</h1>
        <h2>{props.description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
