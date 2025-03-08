export default eventHandler(async (event) => {
  await setUserSession(event, {
    user: {
      id: -1,
      login: 'anonymous'
    },
  })

  return sendRedirect(event, '/todos')
})
