import { NextApiRequest, NextApiResponse } from 'next';
import wedyApi from '../../../services/wedyApi';

export default async function confirmAttend(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const responseData = await wedyApi
      .post('', {
        operationName: 'guestConfirmation',
        query:
          'mutation guestConfirmation($confirmation_data: GuestInformationInputType) {\n  guestConfirmation(confirmation_data: $confirmation_data) {\n    status\n    errors {\n      type\n      message\n      __typename\n    }\n    __typename\n  }\n}\n',
        variables: {
          confirmation_data: {
            ...req.body,
            adults_number: parseInt(req.body.adults_number),
            children_number: parseInt(req.body.children_number),
            optin: false,
            wedding_slug: process.env.WEDY_WEDDING_SLUG,
            event_slug: process.env.WEDY_EVENT_SLUG,
          },
        },
      })
      .then((response) => response.data.data);
    res.status(201).json(responseData);
  } else {
    res.status(405).json({
      statusCode: 405,
      errorMessage: 'Method not allowed',
    });
  }
}
