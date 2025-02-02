import { Payment } from '@/types/types';

export const fetchData = async (
  page?: number,
  perPage?: number,
): Promise<{
  count: number;
  data: Payment[];
}> => {
  try {
    const response = await fetch(
      `http://localhost:3000/payments?_page=${page}&_per_page=${perPage}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const resData: any = await response.json();

    console.log('Data fetched:', resData);

    return {
      count: resData.items,
      data: resData.data,
    };
  } catch (err) {
    console.error((err as Error).message);
    return {
      count: 0,
      data: [],
    };
  }
};
