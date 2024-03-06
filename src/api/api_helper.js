const getHeaders = () => ({
  headers: {
    Authorization: localStorage.getItem('userdata'),
  },
});

export default getHeaders;
