export const getAddress = (vacancy) => {
  const { address } = vacancy;

  if (address) {
    const city = address?.city ? `г. ${address?.city}` : null;
    const street = address?.street;
    const building = address?.building ? `д. ${address?.building}` : null;

    return [city, street, building].join(', ');
  }

  return vacancy?.area?.name ? `г. ${vacancy?.area?.name}` : null;
};
