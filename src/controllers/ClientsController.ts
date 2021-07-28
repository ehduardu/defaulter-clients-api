import { Request, Response } from 'express';

import { ClientDefaulter } from '../models/client';

export class Clients {
  async index(req: Request, res: Response) {
    // const { date } = req.query;

    // if (!date) {
    //   return res.status(400).json({
    //     message: 'Informe a data para consulta no formato (AAAA-MM-DD)'
    //   });
    // }

    const clients = await ClientDefaulter.find();

    if (clients.length > 0) {
      return res.status(200).json({
        message: 'Registros encontrados',
        clients,
      });
    } else {
      return res.status(200).json({
        message: 'Não foram encontrados clientes inadimplentes',
        clients
      });
    }


  }
}
