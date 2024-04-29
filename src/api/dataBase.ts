import { EsperoDB } from "esperodb";

const dataStructure: any = [
  {
    
    design: [
      {
        indexes: [
          { _id: { unique: true } }
        ],
        primaryKey: '_id'
      },
    ],
  }
];

export const db = new EsperoDB('Documents', dataStructure, 5);
