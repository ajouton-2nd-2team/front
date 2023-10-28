import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ListNumBtn() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="contained">1</Button>
      <Button variant="outlined">2</Button>
      <Button variant="outlined">3</Button>
      <Button variant="outlined">4</Button>
      <Button variant="outlined">5</Button>
      <Button variant="outlined">6</Button>
      <Button variant="outlined">7</Button>
      <Button variant="outlined">8</Button>
    </ButtonGroup>
  );
}

export default ListNumBtn;