import { Query, QueryClientProvider } from '@tanstack/react-query';
import { QueryClientSingleton } from './QueryClientSingleton/QueryClientSingleton'
import type { Decorator } from '@storybook/nextjs-vite';

const QueryClientProviderDecorator: Decorator = (Story) => {
    return (
        <QueryClientProvider client={QueryClientSingleton.getInstance()}>
             <Story />
        </QueryClientProvider >

    )
}

export { QueryClientProviderDecorator };