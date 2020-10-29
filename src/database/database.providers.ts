import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://hongmin:xksgus123%40@toyprojects-shard-00-00.wmozt.mongodb.net:27017,toyprojects-shard-00-01.wmozt.mongodb.net:27017,toyprojects-shard-00-02.wmozt.mongodb.net:27017/nodebird?authSource=admin&replicaSet=atlas-bslxfv-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true')
  },
];