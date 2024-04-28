import { EsperoDB } from "esperodb";

const dataStructure: any = [
  {
    withTVA: [
      {
        indexes: [],
        primaryKey: 'withTVAKey',
        type: 'boolean'
      },
    ],
    Details: [
      {
        indexes: [
          { _id: { unique: true } }
        ],
        primaryKey: '_id'
      },
    ],
  }
];

export const db = new EsperoDB('Documents', dataStructure, 3);
