import { clientsResponse } from 'core/types/Client';
import makeRequest from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import ClientCard from './components/ClientCard';
import ClientCardLoader from './components/Loaders/ClientCardLoader';
import './styles.scss';

const Clients = () => {
  const [clientsResponse, setclientsResponse] = useState<clientsResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params = {
      page: 0,
      linesPerPage: 12,
    };
    setIsLoading(true);
    makeRequest({ url: '/?seed=javascript&results=5&nat=BR&noinfo', params })
      .then(response => setclientsResponse(response.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="client-container">
      <h1 className="client-title">Usuários Aleatórios</h1>
      <div className="client-products">
        {isLoading ? (
          <ClientCardLoader />
        ) : (
          clientsResponse?.results.map(client => (
            <ClientCard client={client} key={client.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Clients;
