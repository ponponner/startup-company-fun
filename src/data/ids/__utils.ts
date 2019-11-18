export function toStringsByIds<TEnum>(ids: TEnum[]) {
  return ids.map(id => '' + id);
}
