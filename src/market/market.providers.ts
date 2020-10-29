import { Connection } from 'mongoose';
import { MarketSchema } from './schemas/market.schema';

export const marketProviders = [
  {
    provide: 'MARKET_MODEL',
    useFactory: (connection: Connection) => connection.model('Market', MarketSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];