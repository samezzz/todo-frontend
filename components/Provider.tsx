'use client';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';


export default function Provider({ children, client }: {
  children: React.ReactNode
  client: ApolloClient<NormalizedCacheObject>
}) {
  return(
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}