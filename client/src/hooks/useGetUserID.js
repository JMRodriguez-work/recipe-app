export function useGetUserID () {
  const id = JSON.parse(window.localStorage.getItem('userID'))
  return id || ''
}
