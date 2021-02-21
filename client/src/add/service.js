export function isFormValid(values) {
  const isNameInvalid = !values.name?.trim();
  const isAddressInvalid = !values.address?.trim();
  const hasNoPictures = values.picturesData.length === 0;
  const isPriceInvalid = !values.price || values.price <= 0;

  return !(isNameInvalid || isAddressInvalid || hasNoPictures || isPriceInvalid);
}
