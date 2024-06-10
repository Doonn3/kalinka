export function humanReadablePrice(price: number, isRu: boolean) {
  if (isRu) {
    const rub = (price / 100) * 89;
    return `P ${rub}`;
  }

  const usd = price / 100;
  return `$ ${usd}`;
}
