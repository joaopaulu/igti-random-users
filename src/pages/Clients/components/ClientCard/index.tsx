import { Client } from 'core/types/Client';
import Moment from 'moment';
import './styles.scss';

type Props = {
  client: Client;
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
    price,
  );
};

Moment.locale('pt-BR');

const ClientCard = ({ client }: Props) => (
  <div className="row card-base border-radius-10 client-card">
    <div className="col-2 image-info">
      <img
        src="teste.png"
        alt={client.name.title}
        className="client-card-image"
      />
    </div>
    <div className="col-8 client-info">
      <h6 className="client-name">{client.name.title}</h6>
      <h6 className="client-infos">CPF: </h6>
      <h6 className="client-infos">Salário: </h6>
      <h6 className="client-infos">Data de Nascimento:</h6>
      <h6 className="client-infos">Filhos: </h6>
    </div>
  </div>
);

export default ClientCard;
