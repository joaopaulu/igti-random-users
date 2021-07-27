import Pagination from 'core/components/Pagination';
import { clientsResponse } from 'core/types/Client';
import makeRequest from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import ClientCard from './components/ClientCard';
import ClientCardLoader from './components/Loaders/ClientCardLoader';
import './styles.scss';

const Clients = () => {
  const [clientsResponse, setclientsResponse] = useState<clientsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const params = {
      page: activePage,
      results: 3,
    };
    setIsLoading(true);
    makeRequest({ url: '/api', params })
      .then(response => setclientsResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [activePage]);

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
      {clientsResponse && (
        <Pagination
          totalPages={clientsResponse.totalPages}
          onChange={page => setActivePage(page)}
        />
      )}
    </div>
  );
};

export default Clients;
